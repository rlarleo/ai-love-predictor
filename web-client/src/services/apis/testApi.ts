import { stringify } from 'qs';
import { api } from './api';

const testApi = api.injectEndpoints({
  endpoints: builder => ({
    getTest: builder.query<any, { param: number[] }>({
      query: param => {
        const queryString = stringify(
          {
            ...param,
          },
          { arrayFormat: 'repeat' },
        );
        return {
          url: `predict?${queryString}`,
        };
      },
      transformResponse: (res: any) => res,
    }),
  }),
  overrideExisting: false,
});

export const { useLazyGetTestQuery } = testApi;
