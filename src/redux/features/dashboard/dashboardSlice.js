import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  geographicalInfo: {
    lat: '55.5469',
    long: '77.3438',
  },
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changeGeographicalInfo: (state, action) => {
      state.geographicalInfo = action.payload
    },
    // changeCurrentRoom: (state, action) => {
    //   state.currentRoom = action.payload;
    // },
    // changeCurrentUsername: (state, action) => {
    //   state.currentUsername = action.payload;
    // },
    // addMessageToChatLog: (state, action) => {
    //   state.chatLogs[action.payload.room].push(action.payload);
    // },
    // changeRoomPopulation: (state, action) => {
    //   state.roomPopulation = action.payload;
    // },
  },
})

export const {
  changeGeographicalInfo,
  // changeCurrentUsername,
  // addMessageToChatLog,
  // changeCurrentRoom,
  // changeMessageInput,
} = dashboardSlice.actions

export const selectDashboard = (state) => state.dashboard

export default dashboardSlice.reducer
