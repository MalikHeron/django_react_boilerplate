import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '@components/Footer'
import Landing from '@pages/Landing'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/*<Route path="/xxx/*" element={
          <PrivateRoute>
            
          </PrivateRoute>
        } />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;