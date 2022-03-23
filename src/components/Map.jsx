import { Box, Container } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import image from '../assets/map.jpg'
import Pin from './Pin'
import {
  changeGeographicalInfo,
  selectDashboard,
} from '../redux/features/dashboard/dashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetLocationsQuery } from '../redux/features/auroraAPI'
import PredefinedLocation from './PredefinedLocation'

function Map() {
  const dispatch = useDispatch()

  function handleClick(e) {
    let rect = e.currentTarget.getBoundingClientRect()
    let long = e.clientX - rect.left //long position within the element.
    let latPercent = long / rect.width
    let lat = rect.bottom - e.clientY //lat position within the element.
    let longPercent = lat / rect.height

    console.log(calculateCoordinates(latPercent, longPercent))

    changePinPosition({ long, lat })

    const data = calculateCoordinates(latPercent, longPercent)
    dispatch(changeGeographicalInfo(data))
  }

  function calculateCoordinates(longPercent, latPercent) {
    const long = longPercent * 360 - 180
    const lat = latPercent * 180 - 90
    return { lat, long }
  }

  const {
    data: locations,
    error: getLocationsError,
    isLoading: isLocationsLoading,
  } = useGetLocationsQuery()

  console.log(locations)

  const [pinPosition, changePinPosition] = useState({ long: 0, lat: 0 })

  useEffect(() => {
    changePinPosition({ long: 200, lat: 300 })
  }, [])

  const imgElement = useRef()
  // const imgRect = imgElement.current.getBoundingClientRect()

  return (
    <Box
      position={'relative'}
      display={'flex'}
      sx={{ aspectRatio: '1.18032786885', maxWidth: '100%', maxHeight: '100%' }}
      height={'100%'}
    >
      <img
        onClick={handleClick}
        src={image}
        alt="world map"
        style={{
          objectFit: 'contain',
          maxHeight: '100%',
          filter: 'saturate(83%) brightness(82%) contrast(122%)',
        }}
        ref={imgElement}
      />
      <Pin long={pinPosition.long} lat={pinPosition.lat} />
      {!isLocationsLoading &&
        Object.values(locations).map((location) => {
          return (
            <PredefinedLocation
              el={imgElement}
              location={location}
              key={location.id + 'key'}
              changePinPosition={changePinPosition}
            />
          )
        })}
    </Box>
  )
}

export default Map
