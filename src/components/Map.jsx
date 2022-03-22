import { Container } from '@mui/material'
import React from 'react'
import image from '../assets/map.jpg'

function Map() {
  return (
    <Container style={{ width: '100%' }}>
      <img src={image} alt="world map" style={{ width: '100%' }} />
    </Container>
  )
}

export default Map
