import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/AuthorizationSlice'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access

      console.log('accessToken', token)

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status !== 401) {
    return result
  }
  const LogOut = () => {
    api.dispatch(setAuth(null))
  }

  const { auth } = api.getState()

  if (!auth.refresh) {
    return LogOut()
  }

  const refreshToken = await baseQuery(
    {
      url: 'user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  )

  if (!refreshToken.data.access) {
    return LogOut()
  }

  api.dispatch(setAuth({ ...auth, access: refreshToken.data.access }))

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return LogOut()
  }
  return retryResult
}

export const tracksQuery = createApi({
  reducerPath: `tracksQuery`,
  tagTypes: ['Tracks', 'Favorites'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getTracksAll: build.query({
      query: () => 'catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),

    getFavouriteTracksAll: build.query({
      query: () => 'catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),

    setLike: build.mutation({}),

    setDislike: build.mutation({}),
  }),
})

export const {
  useGetTracksAllQuery,
  useGetFavouriteTracksAllQuery,
  useSetLikeMutation,
  useSetDislikeMutation,
} = tracksQuery;
