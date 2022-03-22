import { Box } from '@mui/material'
import React from 'react'
import {
  changeGeographicalInfo,
  selectDashboard,
} from '../redux/features/dashboard/dashboardSlice'

import Typography from '@mui/material/Typography'

import { useSelector } from 'react-redux'

function GeoSection() {
  const DashboardState = useSelector(selectDashboard)

  return (
    <Box height={'100%'} padding={'1rem'} backgroundColor="#171819">
      <Box>
        <Typography variant="button" fontSize={'1.7rem'} display="block">
          Latitude: {Number(DashboardState.geographicalInfo.lat).toFixed(2)}
          {'  '}
        </Typography>

        <Typography variant="button" fontSize={'1.7rem'} display="block">
          Longitude: {Number(DashboardState.geographicalInfo.long).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}

export default GeoSection
