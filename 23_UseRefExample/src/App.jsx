import { useState } from 'react'
import './App.css'
import Stopwatch from './Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Stopwatch />
    </>
  )
}

export default App
