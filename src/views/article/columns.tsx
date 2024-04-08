import type { TableColumn } from '@/components/core/dynamic-table';
import type { FormSchema } from '@/components/core/schema-form';
import { formatToDateTime } from '@/utils/dateUtil';

export type TableListItem = API.ArticleEntity;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
    width: 60,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '路径',
    width: 300,
    dataIndex: 'path',
  },
  {
    title: '访问数量',
    dataIndex: 'visitCount',
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    sorter: true,
    width: 320,
    customRender: ({ record }) => formatToDateTime(record.createdAt),
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true,
    width: 320,
    customRender: ({ record }) => formatToDateTime(record.updatedAt),
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 8 },
  },
];
