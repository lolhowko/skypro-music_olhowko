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

  const result = await baseQuery(args, api, extraOptions);

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
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access

    console.log('accessToken', token)

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },

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

    setLike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    setDislike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    getSelections: build.query({
      query: (id) => `catalog/selection/${id}/`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: "Selections", id })),
              { type: "Selections", id: "LIST" },
            ]
          : [{ type: "Selections", id: "LIST" }],
    }),
  }),
})

export const {
  useGetTracksAllQuery,
  useGetFavouriteTracksAllQuery,
  useSetLikeMutation,
  useSetDislikeMutation,
} = tracksQuery;
