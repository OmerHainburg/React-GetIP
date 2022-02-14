import React, { useState, useEffect } from 'react'
import { Map, Marker } from 'pigeon-maps'

export default function MyMap(props) {
  const [center, setCenter] = useState([50.2069, 9.23418])
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    setCenter([props.props.lat, props.props.lng])
  }, [])
  console.log(center)
  return (
    <Map 
      height={300}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
      <Marker width={50} anchor={center} />
    </Map>
  )
}
