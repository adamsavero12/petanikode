import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CardContain from './components/CardContain.jsx'
import CardApi from './components/CardApi.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <CardContain />
      <CardApi />
      <Footer />
    </>
  )
}

export default App
