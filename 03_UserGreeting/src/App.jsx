import UserGreeting from "./UserGreeting.jsx"

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Bob" />
      <UserGreeting isLoggedIn={false} />
      <UserGreeting isLoggedIn={true} />
    </>
  )
}

export default App
