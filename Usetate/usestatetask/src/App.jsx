import { useState } from 'react'
import Counterp from './Components/Counterp'
import Colorchange from './Components/Colorchange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counterp/>
     <Colorchange/>
    </>
  )
}

export default App
