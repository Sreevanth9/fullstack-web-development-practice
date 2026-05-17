import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("Hey I am a nice person")

  const btn1 = () => {
    setText("Hey I am a bad person")
  }

  const btn2 = () => {
    setText("Hey I am a ok ok person")
  }

  return (
    <>
      <Navbar logoText="John's Coffee" color="blue" />
      <div>{text}</div>
      <div>
        <button onClick={btn1}>Button 1</button>
        <button onClick={btn2}>Button 2</button>
      </div>

    </>
  )
}

export default App
