import React from 'react'
import { useLocation } from 'react-router-dom'
export default function C() {
  const loca = useLocation()
  console.log('loca', loca)
  return <div>404页面</div>
}
