import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("Hey I am a nice person")

  const handleClick1 = () => {
    setText("Hey I am a bad person")
  }

  const handleClick2 = () => {
    setText("Hey I am a ok ok person")
  }

  const items = ["Home", "Services", "About", "Join Us", "Contact"]

  return (
    <>
      <Navbar logoText="John's Coffee" color="#08085b" items={items} />
      <div className='text'>{text}</div>
      <div>
        <button onClick={handleClick1}>Button 1</button>
        <button onClick={handleClick2}>Button 2</button>
        <button onClick={()=>{alert("I am an inline handler")}}>Button 3</button>
      </div>

    </>
  )
}

export default App
