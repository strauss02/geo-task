import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  geographicalInfo: {
    lat: '0',
    long: '0',
  },
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changeGeographicalInfo: (state, action) => {
      state.geographicalInfo = action.payload
    },
  },
})

export const { changeGeographicalInfo } = dashboardSlice.actions

export const selectDashboard = (state) => state.dashboard

export default dashboardSlice.reducer
