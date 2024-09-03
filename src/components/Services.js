import React from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
  // console.log("services");
  
  return (
    <div>
      <p>services</p>
      <Outlet/>
    </div>
  )
}

export default Services
