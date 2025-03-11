import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      This is home
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Home
