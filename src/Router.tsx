import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
import styled from 'styled-components'
import { Button } from 'antd'
// 引入图标
import { StarOutlined } from '@ant-design/icons';

// Outlet类似vue中route-view嵌套路由占位
import { Outlet, Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Box = styled.div`
  color: red;
`

function App() {
  const [count, setCount] = useState(0)
 
  // 页面跳转
  const navigate = useNavigate()
  const navigateToC = () => {
    navigate('/C', {
      state: {
        name :'lixin'
      }
    })
  }

  return (
    <>
      {/* <Button>按钮</Button> */}
      <StarOutlined></StarOutlined>
      <ul>
        <li><Link to="/A/123">toA</Link></li>
        <li><Link to="/B">toB</Link></li>
        <li><Link to="/C">toC</Link></li>
        <hr />
        <Button onClick={() => navigate('/A/99')} type="primary">navigate 跳转A页面</Button>
        <Button onClick={() => navigate('/B?a=123')}>navigate 跳转B页面路径加参数</Button>
        <Button onClick={navigateToC}>navigate 跳转c页面添加参数</Button>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}

export default App
