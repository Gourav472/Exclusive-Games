import React from 'react'
import Header from './components/Header'
import Poker from './components/Poker'
import Slots from './components/Slots'
import Jackpot from './components/Jackpot'
import White from './components/Eegirnos'
import Black from './components/Nuestras'
import Acordian from './components/Acordian'
import Lanza from './components/Lanza'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Poker />
      <Slots />
      <Jackpot />
      <White />
      <Black />
      <Acordian />
      <Lanza/>
      <Footer />
    </>
  )
}

export default App
