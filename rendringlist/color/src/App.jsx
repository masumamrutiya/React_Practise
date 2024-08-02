import { useState } from 'react'
import Array from './Component/Array'
import Try from './Component/Try'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Try/>
    <Array/>
    </>
  )
}

export default App
