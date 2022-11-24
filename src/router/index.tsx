import App from '../Router'
import A from '../pages/A'
import B from '../pages/B'
import C from '../pages/C'
import Error from '../pages/Error'

import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

const baseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/A/:id" element={<A />}></Route>
          <Route path="/B" element={<B />}></Route>
          <Route path="/C" element={<C />}></Route>
        </Route>
        {/*   404页面 */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default baseRouter
