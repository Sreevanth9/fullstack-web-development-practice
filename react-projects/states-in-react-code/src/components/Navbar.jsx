import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className='nav' style={{backgroundColor: props.color}}>
      <div className="logo" >{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar