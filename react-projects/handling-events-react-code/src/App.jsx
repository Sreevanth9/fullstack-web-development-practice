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

  return (
    <>
      <Navbar logoText="John's Coffee" color="blue" />
      <div>{text}</div>
      <div>
        <button onClick={handleClick1}>Button 1</button>
        <button onClick={handleClick2}>Button 2</button>
        <button onClick={()=>{alert("I am an inline handler")}}>Button 3</button>
      </div>

    </>
  )
}

export default App
