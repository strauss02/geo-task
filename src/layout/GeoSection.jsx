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
    <Box
      height={'100%'}
      padding={'1rem'}
      display={'flex'}
      justifyContent={'space-between'}
      backgroundColor="#171819"
    >
      <Box>
        <Typography>
          {DashboardState.geographicalInfo.name &&
            DashboardState.geographicalInfo.name}
        </Typography>
        <Typography>
          {DashboardState.geographicalInfo.description &&
            DashboardState.geographicalInfo.description}
        </Typography>
        <Typography>
          {DashboardState.geographicalInfo.country &&
            DashboardState.geographicalInfo.country}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" fontSize={'1.5rem'} display="block">
          Latitude: {Number(DashboardState.geographicalInfo.lat).toFixed(2)}
          {'  '}
        </Typography>
        <Typography variant="button" fontSize={'1.5rem'} display="block">
          Longitude: {Number(DashboardState.geographicalInfo.long).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}

export default GeoSection
