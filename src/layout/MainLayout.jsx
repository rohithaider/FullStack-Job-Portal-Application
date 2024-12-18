import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'

function MainLayout() {
  return (
    <div className='max-w-7xl mx-auto '>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout