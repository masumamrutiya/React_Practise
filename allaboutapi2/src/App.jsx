import { useState } from 'react'

import './App.css'
import Displaydata from './Components/Displaydata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Displaydata/>
    </>
  )
}

export default App
