
import Cardscondition from './component/Cardscondition'
import Womancard from './component/Womancard'
// import Drive from './component/Drive'
import Grade from './Grade'



function App() {
  //  const ans =27;
  // if (ans > 18 ) {
  //   return <Drive age ={ans } allow="can"/>
  // } else {
  //   return <Drive age={ans} allow="can't" />
  // }


  return (
    <>
     {/* Ternaray Operator  */}

     {/* <Drive age={ans} allow={ans > 18 ? "can" : "can't"}/> */}

      {/* In Ternaray Operator if we want to write JSX  */}

      {/* <Drive age={ans} allow={ans > 18 ? (<b>"can"</b>) : (<b><i>"can't"</i></b>)}/> */}
      <Grade/>
      <Cardscondition/>
    
    </>
  )
}

export default App
