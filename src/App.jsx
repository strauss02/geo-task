import React from 'react'
import './App.css'
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
        <Grid container xs={8} spacing={2}>
          <Grid item xs={12}>
            <Paper>Map</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>Geo Info</Paper>
          </Grid>
        </Grid>
        <Grid container xs={4} spacing={2}>
          <Grid item xs={12}>
            <Paper>Aurora Info</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
