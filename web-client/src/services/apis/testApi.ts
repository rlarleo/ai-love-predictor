import { stringify } from 'qs';
import { api } from './api';

const testApi = api.injectEndpoints({
  endpoints: builder => ({
    getTest: builder.query<any, void>({
      query: () => ({
        url: '/test',
        method: 'GET',
      }),
      transformResponse: (res: any) => res,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestQuery } = testApi;
