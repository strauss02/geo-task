import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetProbabilityQuery } from '../redux/features/auroraAPI'
import { selectDashboard } from '../redux/features/dashboard/dashboardSlice'

import Typography from '@mui/material/Typography'

function AuroraSection() {
  const DashboardState = useSelector(selectDashboard)

  console.log(DashboardState.geographicalInfo.long)

  const {
    data: probability,
    error: probabilityError,
    isLoading: isProbabilityLoading,
  } = useGetProbabilityQuery({
    lat: DashboardState.geographicalInfo.lat,
    long: DashboardState.geographicalInfo.long,
  })

  console.log(probability.colour)

  return (
    <Box
      height={'100%'}
      bgcolor={'#555'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      <Box>
        <Typography variant="subtitle2">
          Chance of seeing the northern lights is about..
        </Typography>
        <Typography color={probability.colour} variant="h1">
          {probability.value}%
        </Typography>
      </Box>
      <Box>
        <Typography variant="caption">Information via Auroras.live</Typography>
      </Box>
    </Box>
  )
}

export default AuroraSection
