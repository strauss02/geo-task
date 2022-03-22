import React from 'react'
import {
  useGetLocationsQuery,
  useGetProbabilityQuery,
} from './redux/features/auroraAPI'
import Map from './components/Map.jsx'
import { Box, Grid, Paper } from '@mui/material'
import GeoSection from './layout/GeoSection'
import AuroraSection from './layout/AuroraSection'

function App() {
  const {
    data: probability,
    error: getProbabilityError,
    isLoading: getProbabilityLoading,
  } = useGetProbabilityQuery(80, 80)

  const {
    data: locations,
    error: getLocationsError,
    isLoading: getLocationsLoading,
  } = useGetLocationsQuery()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid container xs={8} spacing={0}>
          <Grid
            item
            sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}
            xs={12}
          >
            <Map />
          </Grid>
          <Grid sx={{ height: '30vh' }} item xs={12}>
            <GeoSection />
          </Grid>
        </Grid>
        <Grid container xs={4} spacing={0}>
          <Grid item sx={{ height: '100vh' }} xs={12}>
            <AuroraSection />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
