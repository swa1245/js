import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate()
  function redirect(){
    navigate('/h')
  }
  return (
    <div>
      blog page
      <button onClick={redirect}>back</button>
    </div>
  )
}

export default Blogs
