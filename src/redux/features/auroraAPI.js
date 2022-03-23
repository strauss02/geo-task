import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auroraAPI = createApi({
  reducerPath: 'auroraAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.auroras.live/v1/' }),
  endpoints: (builder) => ({
    getProbability: builder.query({
      query: (coordinates) =>
        `?type=ace&data=probability&lat=${coordinates.lat}&long=${coordinates.long}`,
    }),
    getLocations: builder.query({
      query: () => '?type=locations',
    }),
  }),
})

export const { useGetProbabilityQuery, useGetLocationsQuery } = auroraAPI
