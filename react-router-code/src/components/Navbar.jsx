import React from 'react'
import './Navbar.css'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='nav' style={{backgroundColor: props.color}}>
      <div className="logo" >{props.logoText}</div>
        <ul className={styles.black}>
          {props.items.map((item, index)=>{
            return <Link to={`/${item.toLowerCase().replace(" ", "").replace("home", "")}`} key={index}><li >{item}</li></Link>
          })}
             
        </ul>
    </div>
  )
}

export default Navbar