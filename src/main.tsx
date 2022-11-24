import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

// 引入路由
import BaseRouter from './router/index'
// 按需引入后，引入antd的样式可以去掉
// import 'antd/dist/antd.less'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode渲染2次的问题
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>,
)
