import React from 'react'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  // console.log("Contact");
  
  return (
    <div>
      <p>Contact</p>
      <Outlet/>
    </div>
  )
}

export default Contact
