import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
import styled from 'styled-components'
import { Button } from 'antd'

const Box = styled.div`
  color: red;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">antd按钮</Button>
        {/*  自定义样式 */}
        <Box>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </Box>
      </header>
    </div>
  )
}

export default App
