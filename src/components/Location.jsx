import React from 'react'
import LandscapeIcon from '@mui/icons-material/Landscape'
import { Box } from '@mui/material'

function Location(props) {
  return (
    <Box
      position={'absolute'}
      sx={{ transform: ' translate(-50%, 30%)' }}
      bottom={props.lat}
      left={props.long}
    >
      <LandscapeIcon
        sx={{
          color: '#1D2E28',
          filter: 'drop-shadow(2px 4px 6px #80D6AC)',
        }}
      />
    </Box>
  )
}

export default Location
