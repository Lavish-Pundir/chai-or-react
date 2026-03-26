
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 const addValue = () => {
  console.log("clicked", counter);  //  Math.random()
 if (counter < 20 ){
   setCounter(counter + 1)
 }
}

const removeValue = () => {
  if (counter > 0){
    setCounter(counter - 1)
  }
}

// for (let i = 0; i <= 20; i++){
//   console.log(i);  
// }

  return (
    <>
    <h1>Chai or react</h1>
     <h2>Counter value: {counter}</h2>

    <button onClick={addValue}> Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <br />
   <footer> Footer value: {counter}</footer>
    </>
  )
}

export default App
