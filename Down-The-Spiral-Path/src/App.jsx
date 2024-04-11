import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Astrology />
      <AstrologyReading />
      <Contact />
      <Login />
      <Merchandise />
      <MerchItem />
      <Purchase />
      <Shop />
      <ShoppingCart />
      <Signin />
      <Tarot />
      <TarotCards />
      <TarotItemPage />
      <TarotReadingItem />
      <TarotReadings />
      <User />
    </>
  )
}

export default App
