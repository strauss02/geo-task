import React from 'react'
import image from '../assets/map.jpg'

function Map() {
  return (
    <div style={{ maxWidth: '100px' }}>
      <img src={image} alt="world map" style={{ maxWidth: '100px' }} />
    </div>
  )
}

export default Map
