// @ts-ignore
/* eslint-disable */
import { request, type RequestOptions } from '@/utils/request';

/** 获取参数配置列表 GET /api/article */
export async function articleList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ArticleListParams,
  options?: RequestOptions,
) {
  return request<{
    items?: API.ArticleEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/article', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 10
      pageSize: '10',

      ...params,
    },
    ...(options || {}),
  });
}

/** 新增参数配置 POST /api/article */
export async function articleCreate(body: API.ArticleDto, options?: RequestOptions) {
  return request<any>('/api/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 查询参数配置信息 GET /api/article/${param0} */
export async function articleInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ArticleInfoParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ArticleEntity>(`/api/article/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新参数配置 POST /api/article/${param0} */
export async function articleUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ArticleUpdateParams,
  body: API.ArticleDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/article/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除指定的参数配置 DELETE /api/article/${param0} */
export async function articleDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ArticleDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/article/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

export async function articleGenerate(options?: RequestOptions) {
  return request(`api/article/generate`, {
    method: 'GET',
    ...(options || { successMsg: '生成成功' }),
  });
}
