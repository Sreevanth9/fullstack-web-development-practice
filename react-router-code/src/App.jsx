import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Contact from './components/Contact'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'


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
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Contact/> */}

    </>
  )
}

export default App
