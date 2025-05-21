import React from 'react'
import Hero from './components/Hero.jsx'
import CardContain from './components/CardContain.jsx'
import CardApi from './components/CardApi.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <CardContain />
      <CardApi/>
    </div>
  )
}
