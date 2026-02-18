import { Component, useState } from 'react'
import './App.css'
import ComponentA from './ComponentA'
import ComponentB from './ComponentA'
import ComponentC from './ComponentA'
import ComponentD from './ComponentA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < ComponentA />
    </>
  )
}

export default App
