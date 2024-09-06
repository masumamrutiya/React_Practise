import { useState } from 'react'
// import Al from './Components/Al'
// import Mycounter from './Components/Mycounter'
import Fetchcard from './Components/Fetchcard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Al/> */}
    <Fetchcard/>
     {/* <Mycounter/> */}
    </>
  )
}

export default App
