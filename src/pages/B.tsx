import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function B() {
  const searchParams = useSearchParams()
  console.log('searchParams--', searchParams)
  // 获取页面跳转携带的参数
  console.log('searchParams--', searchParams[0].getAll('a'))
  return (
    <div>B页面</div>
  )
}
