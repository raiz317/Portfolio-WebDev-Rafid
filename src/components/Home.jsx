import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import fotoProfile from '../assets/MyFoto.png'

function Home() {
    return <section id="home" className="body-home">
        <div className="identity">
            <span className="location"><LocationOnIcon />Bekasi, Indonesia</span>
            <div className="identity-me">
                <h2>I am Rafid Faiz Putra as a Web Developer</h2>
            </div>
            <div className="description-identity">
                <p>Mahasiswa Sistem Informasi dengan spesialisasi pengembangan Full-Stack dan Backend menggunakan Node.js (Express.js) dan Laravel.</p>
            </div>
            <div className="view-projects">
                <p>View Projects</p>
            </div>
        </div>
        <div className="image">
            <img src={fotoProfile} alt="Foto-Profile" />
        </div>
    </section>
}

export default Home;