import { useState } from 'react'
import Counter from './Components/Hooks/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Counter/>
    </>
  )
}

export default App
