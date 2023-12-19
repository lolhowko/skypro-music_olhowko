import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query'

export const tokenQuery = createApi({
  reducerPath: 'tokenQuery',
  tagTypes: ['Tracks'],

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),

  endpoints: (build) => ({
    acessTokenUser: build.query({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
      }),
    }),

    refreshTokenUser: build.mutation({
      query: (body) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
      }),
    }),
  }),
})

export const {
    useAccessTokenUserQuery,
    useRefreshTokenUserMutation,
} = tokenQuery;
