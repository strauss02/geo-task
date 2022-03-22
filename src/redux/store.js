import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './features/dashboard/dashboardSlice'
import { auroraAPI } from './features/auroraAPI'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    [auroraAPI.reducerPath]: auroraAPI.reducer,
    // we can add more reducers here in the future
    // pasteView: pasteViewReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auroraAPI.middleware),
})
