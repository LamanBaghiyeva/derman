import React from 'react'
import "./Info.css"
const Info = () => {
  return (
    <div className='info'>
      <ul id="haqqinda">
       <li>Sağlam və qüsursuz həyat arzulayan şəxslərin nəzərinə!</li>
        <li>Tibbin təsdiq etdiyi və satışı sertifikatlaşdırılmış NEYROZİT nəhayət Azərbaycanda.</li>
        <li>100% təbii bitkilərdən hazırlanmış unikal tərkibli preparat.</li>
       </ul>
      <p>Neyroziti Azərbaycanda, bütün apteklərdə şifariş yolu ilə əldə edə bilərsiz. Həmçinin buradan online şəkildə sifariş etmək mümkündür. Bakıda ünvana çatdırılma <span className='text-danger'>pulsuzdur.</span></p>
    </div>
  )
}

export default Info