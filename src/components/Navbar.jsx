// import React from "react";
import'../styles/Navbar.css'
 
import image from '../assets/logo.png'

function Navbar() {
    return(
        <>
        <div className='header'>
            <img src={image} alt="" />
            <h2 style={{color: 'white'}}>Kesehatan Nomor 1 Indonesia</h2>
        <nav>
        <ul>
        <h3>HALAMAN</h3>
         <h3>PROFIL</h3>
         <h3>INFORMASI PUBLIK</h3>
         <h3>LAYANAN</h3>
         <h3>MEDIA</h3>
         <h3>TAUTAN</h3>
         <h3>KONTAK KAMI</h3>
        </ul>
      </nav>
        </div>
        </>
    )
}
export default Navbar;