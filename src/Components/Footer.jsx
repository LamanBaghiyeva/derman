import React from 'react'
import "./Footer.css"
import {AiOutlinePhone} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="side">
        <div className="left">
            <h3>Neyrozit</h3>
            <p>Sinir sisteminin funksiyasinin təmizlənməsi <br /> İmmum siteminin möhkəmlənməsi
            <br/>Qanyaranma<br/>Reparasiya<br/>Regenerasiya<br/>Yuxunun Bərpasi<br/>Koqnitiv funksiyanin bərpasi<br/>Orqanizmin enerji bərpasi üçün uyğundur</p>
        </div>
        <div className="right">
            <h3>Əlaqə</h3>
            <a id="contact" href="tel:+994554838199"><AiOutlinePhone className='phone'/>+994705775774</a><br></br>
        
        </div>
        </div>
        
        <p className='text-center pt-5'>2023 NeyroZit.az</p>
        <div className="wp">
          <a href="https://wa.me/+994705775774" target="_blank" ><BsWhatsapp className='wpicon' /></a>
        </div>
    </div>
  )
}

export default Footer