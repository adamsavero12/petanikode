import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Api from './Api.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
