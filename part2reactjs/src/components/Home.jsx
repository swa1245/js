import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      This is home
      <Outlet />
    </div>
  )
}

export default Home
