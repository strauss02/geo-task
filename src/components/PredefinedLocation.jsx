import React from 'react'
import LandscapeIcon from '@mui/icons-material/Landscape'
import { Box } from '@mui/material'
import { changeGeographicalInfo } from '../redux/features/dashboard/dashboardSlice'
import { useDispatch } from 'react-redux'

function PredefinedLocation({ location, el, changePinPosition }) {
  // Math.cos accepts radians so we need to convert degrees to radians first.

  function calculatePosition(lat, long, el) {
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

  const dispatch = useDispatch()

  function calculateCoordinates2(mapX, mapY, mapWidth, mapHeight) {
    let y = (mapY - mapWidth / 2) / 2000

    let RAD2DEG = 180 / Math.PI
    let PI_4 = Math.PI / 4

    const lat = (Math.atan(Math.exp(y / RAD2DEG)) / PI_4 - 1) * 90

    //long position within the element.
    let longPercent = mapX / mapWidth
    let long = longPercent * 360 - 180

    return { lat, long }
  }

  function handleClick() {
    const data = {
      long: location.long,
      lat: location.lat,
    }
    dispatch(changeGeographicalInfo(data))
  }

  const position = calculatePosition(location.lat, location.long, el)

  return (
    <Box
      position={'absolute'}
      sx={{ transform: ' translate(-50%, 50%)' }}
      top={position.mapY}
      left={position.mapX}
    >
      <LandscapeIcon
        onClick={handleClick}
        sx={{
          color: '#1D2E28',
          filter: 'drop-shadow(2px 4px 6px #80D6AC)',
        }}
      />
    </Box>
  )
}

export default PredefinedLocation
