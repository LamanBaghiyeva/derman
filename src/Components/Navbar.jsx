import React,{useRef} from 'react'
import "./Navbar.css"
import {FaBars} from "react-icons/fa"
import {RxCross1} from "react-icons/rx"
const Navbar = () => {
  const overlay=useRef()
  const openCanvas = (e) =>{
    const kliklenen=e.target
    if(kliklenen.classList.contains("barsicon")){
      overlay.current.classList.add("aktiv")
    }
  }

    const closeCanvas = (e) =>{
     const kliklenen=e.target
    if(kliklenen.classList.contains("cross")){
      overlay.current.classList.remove("aktiv")

    }
  }



  return (
    <>
    <div className="nav-link" ref={overlay}>
        <RxCross1 className='cross' onClick={closeCanvas}/>
        <a  href="#haqqinda" className=' me-3'>Neyrozit Nedir?</a>
        <a  href="#contact" className='me-3'>Əlaqə</a>
        <a  href="#istifade" className='me-3'>Istifadəsi</a>
    </div>

    <div className='navbar'>
        <h2 className='text-white'>Neyrozit</h2>
        <div className="link">
        <a  href="#haqqinda" className='text-white me-3'>Neyrozit Nedir?</a>
        <a  href="#contact" className='text-white me-3'>Əlaqə</a>
        <a  href="#istifade" className='text-white me-3'>Istifadəsi</a>
        </div>
        <FaBars className='barsicon' onClick={openCanvas}/>
       
        
    </div>
    </>
  )
}

export default Navbar