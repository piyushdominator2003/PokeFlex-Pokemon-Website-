import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../UI/Headers'
import Foot from '../UI/Foot'

const AppLayout = () => {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Foot/>
    </>
)}

export default AppLayout
