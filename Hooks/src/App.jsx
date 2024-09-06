import { useState } from 'react'


import UsestateForm from './Components/AllHooks/UsestateForm'
import Usereducerform from './Components/AllHooks/Usereducer/Usereducerform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsestateForm/>
      <Usereducerform/>
    </>
  )
}

export default App
