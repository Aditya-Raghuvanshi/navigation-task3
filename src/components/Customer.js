import React from 'react'
import { Outlet } from 'react-router-dom'

const Customer = () => {
  return (
    <div>
      <p>Customer</p>
      <Outlet/>
    </div>
  )
}

export default Customer
