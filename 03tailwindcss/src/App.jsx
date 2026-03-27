import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componants/card'

function App() {
  const [ count, setCount] = useState(0);
let myObj = {
  username: "Lavish Pundir",
  age: 23,
}

  return (
    <>
     <h1 className='bg-green-400 text-black p-4'>
      Tailwind Working 🚀
    </h1>
    <Card channel="chaiaurcode" someObje={myObj}/>
    <Card username="Lavish" btnText="visit me"/>
    </>
  )
}

export default App
