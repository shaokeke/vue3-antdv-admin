<template>
  <MdEditor v-model="content" :previewTheme="state.theme" @onUploadImg="onUploadImg" />
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import axios from 'axios';
  import { MdEditor } from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';

  const content = defineModel<string>('value');
  // const content = ref('# Hello Editor');
  const state = reactive({
    // text: '',
    theme: 'cyanosis',
  });
  const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData();
          form.append('file', file);

          axios
            .post('/api/img/upload', form, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => rev(res))
            .catch((error) => rej(error));
        });
      }),
    );

    callback(res.map((item) => item.data.url));
  };
</script>
