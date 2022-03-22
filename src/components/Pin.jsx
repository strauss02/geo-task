import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box } from '@mui/material'

function calculatePosition(lat, long) {}

function Pin(props) {
  return (
    <Box
      position={'absolute'}
      sx={{ transform: ' translate(-50%, 15%)' }}
      bottom={props.lat}
      left={props.long}
    >
      <LocationOnIcon />
    </Box>
  )
}

export default Pin
