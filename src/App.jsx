import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import MyAppBar from './componant/MyAppBar'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import { Box } from '@mui/material'
import RegistrationForm from './RegistrationForm'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <MyAppBar />
      <Box sx={{
        mt: 10
      }}>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetails' element={<ProductDetails />} />
        </Routes>
      </Box>

        {/* <RegistrationForm /> */}
        {/* <Products/> */}


    </>
  )
}

export default App