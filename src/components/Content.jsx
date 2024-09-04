import'../styles/Navbar.css'
import image1 from '../assets/olahraga-fisik.webp'
import image2 from '../assets/medical-health.jpeg'
import image4 from '../assets/1fb.png'
 import image5 from '../assets/2ig.png'
 import image6 from '../assets/3tw.png'
 import image7 from '../assets/4yt.png'

 
export default function Content() {
    return(
        <>
            <div className="imgPlace">
                <img src={image1} alt="" className="page1" />
            </div>
            <h2 style={{color: 'gray'}}>INFORMASI KESEHATAN</h2>
      <div className='imgPlace1'>
         <img src={image2} alt="" className="page2" /> 
        <h4>INFORMASI SELANJUTNYA... </h4>
      </div>
      <div className='header1'>
        <h4 style={{color: 'white'}}>Ikuti Kami:</h4>
       <img src={image4} alt="" className="page4" />
       <img src={image5} alt="" className="page5"/>
       <img src={image6} alt="" className="page6"/>
       <img src={image7} alt="" className="page7" />
       <h2 style={{color: 'white'}}>TERIMAKASIH</h2>
       <h4 style={{color: 'white'}}>Di Dukung Oleh: Kementrian Kesehatan Republik Indonesia Tahun 2024</h4>
      </div>
        </>
    )
}
