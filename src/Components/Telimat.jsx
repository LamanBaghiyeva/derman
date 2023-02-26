import React from 'react'
import './Telimat.css'
import pic from "../assets/images/Neyrozit.jpeg"
const Telimat = () => {
    return (
        <div id="istifade" className='p-5 telimat '>
            <h2 className='mb-5'>Neyrozitin istifadəsinə dair təlimat</h2>
            <h5>Tərkibi:</h5>
            <p>Fosfatidilserin (Phosphatidylserine) - 100 mq/mg,<br />
                Fosfatidixolin (Phosphatidylcholine) - 100 mq/mg<br />
                Ginko yarpağı ekstr. (Ginkgo Biloba leaf extract (40:1)) - 80 mq/mg, <br />
                Dimetilqlisin (Dimethylglycine hydrochloride) - 100 mq/mg,<br />
                İnozitol (Inositol) - 100 mq/mg, <br />
                Vitamin B1 (as Thiamine hydrochloride) - 1,1 mq/mg,  <br />
                Vitamin B2 (as Riboflavin) - 1,4 mq/mg,<br />
                Vitamin B6 (as Pyridoxine hydrochloride) - 1,4mq/mg, <br />
                Vitamin B12 (Cyanocoblamin) - 2,5 mcg<br />
                Fol turşusu (Folic acid) - 200 mkq/mcg, <br />
            </p>
            <h5>Köməkçi maddələr:</h5>
            <p>Natural Gelatin (Təbii jelatin), Cornstarch (Qarğıdalı nişastası)</p>
            <h5>İstifadə üçün göstərişlər: </h5>
            <ul>
                <li>Baş beyinin travması zamanı yaranan funksional asteniyalar (emosional labillik, fikrin dağınıqlığı və yaddaş pozğunluğu, depressiya və əsəb pozğunluqları, adaptasiya mexanizmlərinin pozulması)</li>
                <li>Dissirkulyator enscfalopatiyalar (insultun fəsadları, kəllə-beyin travmalan, yaşlanma
                    dövrü), yaddaş və diqqətin pozulması, intellektual qabiliyyətin zəifləməsi, həyəcanlanma, qorxu
                </li>
                <li>Abuturiven və tələbələrdə diqqət və yaddaş zəifliyi. Stress vəziyyətlər və psixo-emosional stress (imtahan zamanı)</li>
                <li>Parkinson və Alsheymer xəstəliyi, demensiya, yuxu pozğunluğu (yuxusuzluq, narkolepsiya) epilepsiya
                    Ürəyin işemik xəstəlikləri, Aritimiya, Ateroskleroz
                </li>
                <li>Ureyin işemik xəstəlikləri. Aretmiya. Ateroskleroz. Periferik qan dövranı və mikrosirkulyasiya pozğunluğu. Aşağı ətrafların arterio və venopatiyaları.Reyno sindromu.</li>
                <li>Yaşlanma ilə əlaqədar görmə pozğunluğu. Torlu qişa damarlarında spazm. Angiopatiya. Diabetik retinopatiya.</li>
                <li>Qulaq küyləri.</li>
            </ul>
            <h5>İstifadə qaydası və dozası: </h5>
            <p>Böyüklər: 1 kapsul gündə 1-2 dəfə.  </p>
            <h5>Əks göstərişlər:</h5>
            <p>Məhsulun tərkibində olan hər hansı bir komponentə qarşı həssaslıq.</p>
            <h5>Buraxlış forması:</h5>
            <p>İçlik vərəqə ilə karton qutuya yerləşdirilmiş blisterlərdə 30 kapsul</p>
            <p> <span className='h5'>Yararlılıq müddəti: </span>3 il.</p>
            <p> <span className='h5'>Saxlanma şəraiti:</span>25 C-dən yuxarı olmayan temperaturda, quru, günəş şüası düşməyən vəuşaqların əli çatmayan yerdə saxlanılmalıdır.</p><br /> 
            <p>
                Hamiləlik və laktasiya dövründə, xəstəlik və ya dərman istifadəsi zamanı həkimlə məsləhətləşin
                Tövsiyə edilən sutkalıq dozanı keçməyin.
            </p>
            <p><span className='h5 '><strong>İstehsalçı:</strong></span>İstanbul/Türkiyə</p>
            <h3 className='h3'>NEYROZIT</h3>
            <div className="img">
                <img src={pic} alt="" />
            </div>
        </div>
    )
}

export default Telimat