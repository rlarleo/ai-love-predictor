import { RootState } from '@core/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_SERVER,
    prepareHeaders: (headers, { getState }) => {
      // const { accessToken } = (getState() as RootState).oidcAuthReducer;
      // if (accessToken) {
      //   headers.set('authorization', `Bearer ${accessToken}`);
      // }
      return headers;
    },
  }),
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['TEST'],
});
