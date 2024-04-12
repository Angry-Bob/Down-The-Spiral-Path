import { useState } from 'react'
import './App.css'
import Contact from "./components/Contact"
import Astrology from './components/Astrology'
import AstrologyReading from './components/AstrologyReading'
import User from './components/User'
import Login from './components/Login'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <Signin />
      <br/>
      <Footer />
    </>
  )
}

export default App
