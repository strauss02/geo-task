import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './features/dashboard/dashboardSlice'
import { auroraAPI } from './features/auroraAPI'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    [auroraAPI.reducerPath]: auroraAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auroraAPI.middleware),
})
