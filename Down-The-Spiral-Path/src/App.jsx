import { useState } from 'react'
import Contact from "./components/Contact"
import Astrology from './components/Astrology'
import AstrologyReading from './components/AstrologyReading'
import User from './components/User'
import Login from './components/Login'
import  Home  from './components/Home'
import Merchandise from './components/Merchandise'
import MerchItem from './components/MerchItem'
import Purchase from './components/Purchase'
import Shop from './components/Shop'
import ShoppingCart from './components/ShoppingCart'
import Signin from './components/Signin'
import Tarot from './components/Tarot'
import TarotCards from './components/TarotCards'
import TarotItemPage from './components/TarotItemPage'
import TarotReadingItem from './components/TarotReadingItem'
import TarotReadings from './components/TarotReadings'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/tarot' element={ <Tarot /> } />
        <Route path='/astrology' element={ <Astrology /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signin /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
