import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Client() {
  return (
    <div>
        <Navbar />
        Client
        <Outlet />
        </div>
  )
}

export default Client