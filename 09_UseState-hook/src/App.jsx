//React hooks = Special function that allows the functional components to have access to React features without using class components (eg. React v16.8, state, lifecycle methods, etc.)(useState, useEffect, useContext, useReducer, useCallback etc.)

//useState = A react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM. Allows functional components to have state variables. It returns an array with two elements: the current state value and a function to update that state. eg- (name, setName) = useState('')

import MyComponent from './MyComponent.jsx'
function App() {

  return (
    <>
      <MyComponent />      
    </>
  )
}

export default App
