import { useState } from 'react'
import Mycounter from './Components/Mycounter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Mycounter/>
    </>
  )
}

export default App
