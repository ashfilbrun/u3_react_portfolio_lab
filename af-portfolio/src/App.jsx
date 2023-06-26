import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Portfolio from './components/portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Portfolio />
    <Resume />
    <About />
    <Contact />
    </>
  )
}

export default App
