import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Error404 from './Component/Error404'
import SignIn from './Component/SignIn'
import Favorites from './Component/Favorites'
import Footer from './Component/Footer'
import ComingSoon from './Component/ComingSoon'
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favorites/>}/>
        <Route path="/movies" element={<ComingSoon/>}/>
        <Route path="/genres" element={<ComingSoon/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
