import Student from "./Student"

function App() {

  return (
    <>
      <Student name="John Doe" age={25} isStudent={true} />
      <Student name="Jane Smith" age={30} isStudent={false} />
      <Student name="Bob Johnson" age={22} isStudent={true} />
      <Student name="Alice Williams" age={28} isStudent={true} />
      <Student name="Charlie Brown" age={35} isStudent={false} />
      <Student />
    </>
  )
}

export default App
