import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auroraAPI = createApi({
  reducerPath: 'auroraAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.auroras.live/v1/' }),
  endpoints: (builder) => ({
    getProbability: builder.query({
      query: (lat = 0, long = 0) =>
        `?type=ace&data=probability&lat=${lat}&long=${long}`,
    }),
    getLocations: builder.query({
      query: () => '?type=locations',
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
  useGetLocationsQuery,
  useGetLastEntriesQuery,
  useGetEntriesBySearchQuery,
} = auroraAPI
