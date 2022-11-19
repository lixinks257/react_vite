import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入antd样式
import 'antd/dist/antd.less'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode渲染2次的问题
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
