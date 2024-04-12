<template>
  <div>
    <DynamicTable
      row-key="id"
      header-title="文章管理"
      :data-request="Api.article.articleList"
      :columns="columns"
      bordered
      size="small"
    >
      <template #toolbar>
        <a-button
          type="primary"
          :disabled="!$auth('article:manage:create')"
          @click="openMenuModal({ title, content: getDefaultContent() })"
        >
          <Icon icon="ant-design:plus-outlined" /> 新增
        </a-button>

        <a-button type="success" :disabled="!$auth('article:manage:generate')" @click="generate">
          <Icon icon="ant-design:interaction-twotone" /> 生成
        </a-button>
      </template>
    </DynamicTable>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import {
    baseColumns,
    searchFormSchema,
    type TableListItem,
    type TableColumnItem,
  } from './columns';
  import { baseSchemas } from './formSchemas';
  import { useTable } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/';
  import Api from '@/api/';
  import { formatToDateTime } from '@/utils/dateUtil';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
  const userInfo = computed(() => userStore.userInfo);

  defineOptions({
    name: 'ArticleManage',
  });
  const title = '默认标题';
  const getDefaultContent = () => {
    return `---
title: ${title}
author: ${userInfo.value.username}
tags: [标签1,标签2]
categories: [分类1,分类2]
date: ${formatToDateTime(new Date())}
---`;
  };
  console.log('getContent', getDefaultContent());
  const [DynamicTable, dynamicTableInstance] = useTable({
    formProps: {
      schemas: searchFormSchema,
    },
  });

  const [showModal] = useFormModal();

  /**
   * @description 打开新增/编辑弹窗
   */
  const openMenuModal = async (record: Partial<TableListItem>) => {
    console.log('openMenuModal', record);
    const [formRef] = await showModal({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}文章`,
        width: '70%',
        onFinish: async (values) => {
          console.log('新增/编辑字典', values);
          if (record.id) {
            await Api.article.articleUpdate({ id: record.id }, values);
          } else {
            await Api.article.articleCreate(values);
          }

          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: baseSchemas,
      },
    });
    formRef?.setFieldsValue({
      ...record,
    });
  };
  const delRowConfirm = async (record: TableListItem) => {
    await Api.article.articleDelete({ id: record.id });
    dynamicTableInstance?.reload();
  };
  const generate = () => {
    console.log('generate');
  };
  const columns: TableColumnItem[] = [
    ...baseColumns,
    {
      title: '操作',
      width: 130,
      dataIndex: 'ACTION',
      hideInSearch: true,
      fixed: 'right',
      actions: ({ record }) => [
        {
          label: '编辑',
          auth: {
            perm: 'article:manage:update',
            effect: 'disable',
          },
          onClick: () => openMenuModal(record),
        },
        {
          label: '删除',
          auth: 'article:manage:delete',
          popConfirm: {
            title: '你确定要删除吗？',
            placement: 'left',
            onConfirm: () => delRowConfirm(record),
          },
        },
      ],
    },
  ];
</script>
