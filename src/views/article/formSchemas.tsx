import type { FormSchema } from '@/components/core/schema-form/';
import MdEditor from '@/components/basic/md-editor-v3';

export const baseSchemas: FormSchema<API.ArticleDto>[] = [
  {
    field: 'title',
    component: 'Input',
    label: '标题',
    colProps: {
      span: 12,
    },
    rules: [{ required: true, type: 'string' }],
  },
  // {
  //   field: 'path',
  //   component: 'Input',
  //   label: '路径',
  //   colProps: {
  //     span: 24,
  //   },
  //   required: true,
  // },
  {
    field: 'content',
    component: () => {
      return <MdEditor></MdEditor>;
    },
    label: '正文',
    colProps: { md: 24 },
  },
];
