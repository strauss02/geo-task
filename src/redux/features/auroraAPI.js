import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auroraAPI = createApi({
  reducerPath: 'auroraAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.auroras.live/v1/' }),
  endpoints: (builder) => ({
    getProbability: builder.query({
      query: (lat, long) =>
        `?type=ace&data=probability&lat=${lat}&long=${long}`,
    }),
    getEntryCountToday: builder.query({
      query: () => '/stats/today_count',
    }),
    getTopicDetails: builder.query({
      query: () => '/stats/topic_count',
    }),
    getEntriesByHour: builder.query({
      query: () => '/stats/hourly',
    }),
    getLastEntries: builder.query({
      query: (quantity = 10) => `entry/${quantity}`,
    }),
    getEntriesBySearch: builder.query({
      query: (input = '') => `entry/search/${input}`,
    }),
  }),
})

export const {
  useGetEntriesByHourQuery,
  useGetTopicDetailsQuery,
  useGetProbabilityQuery,
  useGetEntryCountTodayQuery,
  useGetLastEntriesQuery,
  useGetEntriesBySearchQuery,
} = auroraAPI
