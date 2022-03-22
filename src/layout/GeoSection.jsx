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
    <Box height={'100%'} bgcolor={'#444'}>
      <Box>
        <Typography variant="caption">
          Latitude: {DashboardState.geographicalInfo.lat.toFixed(2)}
          {'  '}
        </Typography>

        <Typography variant="caption">
          Longitude: {DashboardState.geographicalInfo.long.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}

export default GeoSection
