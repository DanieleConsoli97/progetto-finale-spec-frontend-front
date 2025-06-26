import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
const DefaultLayout = () => {
  return (
    <main >
      <NavBar />
      <div id="top_container" ></div>
      <div className='container-xxl'>
        <Outlet></Outlet>
      </div>
    </main>
  )
}

export default DefaultLayout