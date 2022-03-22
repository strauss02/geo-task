import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOnTwoTone'
import { Box } from '@mui/material'

function Pin(props) {
  return (
    <Box
      position={'absolute'}
      sx={{ transform: ' translate(-50%, 30%)' }}
      bottom={props.lat}
      left={props.long}
    >
      <LocationOnIcon
        sx={{
          color: '#1D2E28',
          filter: 'drop-shadow(2px 4px 6px #80D6AC)',
        }}
      />
    </Box>
  )
}

export default Pin
