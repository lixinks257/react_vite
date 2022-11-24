import React from 'react'
import { useLocation } from 'react-router-dom'
export default function C() {
  const loca = useLocation()
  console.log('loca', loca)
  return <div>C页面的参数: {loca.state ? loca.state.name : ''}</div>
}
