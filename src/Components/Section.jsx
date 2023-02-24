import React, {useRef} from 'react'
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./Section.css"

import pic from "../assets/images/Neyrozit.jpeg"
import AOS from 'aos';

const Section = () => {
    const formelementref = useRef()
    
    const elektronpoctagonder=(e)=>{
        e.preventDefault()

        emailjs.sendForm('service_sdrg3lk', 'template_e6ycthl', formelementref.current, 'eNdNWijWG1anqH1yS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        formelementref.current.reset()
     }

     useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div className="section">
            <h2 className='head'>Prostat xəstəliklərinin həm müalicəsində, həm də profilaktikasında geniş spektr <br></br>pasiyentlər üçün uyğundur.</h2>
            <p className='text-center'>Prostat vəzinin etibarlı qarantı SİNOPROST nəhayət, Azərbaycanda!</p>
            <div className="section_body">
                <div className="row">
                    <form  ref={formelementref} onSubmit={elektronpoctagonder} className="left-side col-12 col-md-6 col-lg-4 me-5" data-aos="fade-right">
                        <p className='text-center text-danger p'>Qiymet-30AZN</p>
                        <div className="mb-3">
                            <label className="form-label">Adiniz:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="User"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Elaqe nomresi:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" name="Phone" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Qeyd:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Qeyd"></textarea>
                        </div>
                        <button className='btn btn-primary w-100'>Sifaris et</button>
                    </form>
                    <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
                        <img className='w-100' src={pic} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section