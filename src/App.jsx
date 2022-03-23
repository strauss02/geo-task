import Map from './components/Map.jsx'
import { Box, Grid } from '@mui/material'
import GeoSection from './layout/GeoSection'
import AuroraSection from './layout/AuroraSection'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xl={8} xs={12}>
          <Grid
            item
            sx={{
              height: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            xl={12}
            xs={12}
          >
            <Map />
          </Grid>
          <Grid sx={{ height: '30vh' }} item xl={12} xs={12}>
            <GeoSection />
          </Grid>
        </Grid>
        <Grid item xl={4} xs={12}>
          <Grid item sx={{ height: '100vh' }} xl={12}>
            <AuroraSection />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
