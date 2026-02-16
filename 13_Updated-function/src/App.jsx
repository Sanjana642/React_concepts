import MyComponent from './MyComponent'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyComponent />
    </>
  )
}

export default App
