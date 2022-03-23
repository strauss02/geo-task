import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetProbabilityQuery } from '../redux/features/auroraAPI'
import { selectDashboard } from '../redux/features/dashboard/dashboardSlice'

import Typography from '@mui/material/Typography'

function AuroraSection() {
  const DashboardState = useSelector(selectDashboard)

  const {
    data: probability,
    error: probabilityError,
    isLoading: isProbabilityLoading,
  } = useGetProbabilityQuery({
    lat: DashboardState.geographicalInfo.lat,
    long: DashboardState.geographicalInfo.long,
  })

  return (
    <Box
      height={'100%'}
      bgcolor={'#1B1C1D'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        paddingTop: '2rem',
      }}
    >
      <Box>
        <Typography color="textSecondary" variant="subtitle2">
          Chances of seeing the Northern Lights are about..
        </Typography>
        {!isProbabilityLoading && (
          <Typography color={probability.colour} variant="h1">
            {probability.value} %
          </Typography>
        )}
      </Box>
      <Box>
        <Typography variant="caption">Information via Auroras.live</Typography>
      </Box>
    </Box>
  )
}

export default AuroraSection
