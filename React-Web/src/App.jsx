import { useState } from 'react'
import Web from './Components/Web'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Web/>
    </>
  )
}

export default App
