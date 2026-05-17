import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Contact from './components/Contact'

function App() {
  const [text, setText] = useState("Hey I am a nice person")

  const handleClick1 = () => {
    setText("Hey I am a bad person")
  }

  const handleClick2 = () => {
    setText("Hey I am a ok ok person")
  }

  const items = ["Home", "Services", "About", "Join Us", "Contact"]
  const isDiabetic = true

  return (
    <>
      <Navbar logoText="John's Coffee" color="#08085b" items={items} />
      <div className='text'>{text}</div>
      <div>
        <button onClick={handleClick1}>Buy Coffee 1</button>
        {/* {!isDiabetic && <button onClick={handleClick2}>Buy Sugary Coffee</button>}
        <button onClick={()=>{alert("I am an inline handler")}}>Buy Coffee without sugar</button> */}

       {!isDiabetic ? <button onClick={handleClick2}>Buy Sugary Coffee</button> :
        <button onClick={()=>{alert("I am an inline handler")}}>Buy Coffee without sugar</button>}
      </div>
      <Contact/>

    </>
  )
}

export default App
