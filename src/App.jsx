import React from 'react'
import {
  useGetLocationsQuery,
  useGetProbabilityQuery,
} from './redux/features/auroraAPI'
import Map from './components/Map.jsx'
import { Box, Grid, Paper } from '@mui/material'
import GeoSection from './layout/GeoSection'

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
          <Grid item xs={12}>
            <Paper sx={{ height: '70vh' }}>Map</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ height: '30vh' }}>Geo Info</Paper>
          </Grid>
        </Grid>
        <Grid container xs={4} spacing={0}>
          <Grid item xs={12}>
            <Paper sx={{ height: '100vh' }}>Aurora Info</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
