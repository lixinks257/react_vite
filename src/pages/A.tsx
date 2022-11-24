import { useLocation, useParams } from 'react-router-dom'

export default function A() {
  // useLocation获取当前的页面信息
  const location = useLocation()
  // 获取页面信息
  const params = useParams()
  console.log('params', params)
  console.log(location)
  return <div>A页面的ID:{params.id}</div>
}
