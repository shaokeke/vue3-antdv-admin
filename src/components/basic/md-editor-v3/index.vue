<template>
  <MdEditor v-model="content" :previewTheme="state.theme" @onUploadImg="onUploadImg" />
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { MdEditor } from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';
  import Api from '@/api';
  const content = defineModel<string>('value');
  // const content = ref('# Hello Editor');
  const state = reactive({
    // text: '',
    theme: 'cyanosis',
  });

  const onUploadImg = async (files: File[], callback: (urls: string[]) => void) => {
    const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          Api.toolsUpload
            .uploadUpload({ file })
            .then((res) => rev(res))
            .catch((error) => rej(error));
        });
      }),
    );

    callback(res.map((item: any) => item.filename));
  };
</script>
