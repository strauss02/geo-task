import React from 'react'
import LandscapeIcon from '@mui/icons-material/Landscape'
import { Box } from '@mui/material'

function PredefinedLocation(props) {
  // Math.cos accepts radians so we need to convert degrees to radians first.
  function calculateCos(deg) {
    var rad = (Math.PI / 180) * deg

    return Math.cos(rad)
  }

  function calculatePosition(lat, long, el) {
    let rect = el.current.getBoundingClientRect()

    let deg = lat - 90

    const cosineProduct = calculateCos(deg)
    let distFromBottom
    console.log(cosineProduct)
    // if (cosineProduct < 0) {
    //   let distFromEquator = cosineProduct * (rect.height / 2)
    //   distFromBottom = rect.height / 2 - distFromEquator
    // } else {
    //   let distFromEquator = cosineProduct * (rect.height / 2)
    //   distFromBottom = rect.height / 2 + distFromEquator
    // }
    let diff = cosineProduct * (rect.height / 2)
    distFromBottom = diff + rect.height / 2

    let longPercent = long / 360 + 0.5

    let x = rect.width * longPercent // Location position in pixels, from left to right
    return { lat: distFromBottom, long: x }
  }

  function calculatePosition2(lat, long, el) {
    let rect = el.current.getBoundingClientRect()

    const PI = Math.PI
    let mapWidth = rect.width
    let mapHeight = rect.height

    let mapX = (long + 180) * (mapWidth / 360) + mapWidth / 2

    const latRad = (lat * PI) / 180

    const mercN = Math.log(Math.tan(PI / 4 + latRad / 2))
    const mapY = mapHeight / 2 - (mapWidth * mercN) / (2 * PI)

    return { mapX, mapY }
  }

  const position = calculatePosition2(props.lat, props.long, props.el)
  console.log(position)

  return (
    <Box
      position={'absolute'}
      sx={{ transform: ' translate(-50%, 50%)' }}
      top={position.mapY}
      left={position.mapX}
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

export default PredefinedLocation
