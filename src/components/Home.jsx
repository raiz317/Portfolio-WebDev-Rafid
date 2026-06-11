import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Home() {
    return <section id="home" className="body-home">
        <div className="identity">
            <span className="location"><LocationOnIcon />Bekasi, Indonesia</span>
            {/* </div> */}
            <div className="identity-me">
                <h2>I am Rafid Faiz Putra as a Web Developer</h2>
            </div>
            <div className="description-identity">
                <p>Sistem Informasi Student & Backend Developer specializing in Node.js. I build scalable, secure, and performant server-side applications.</p>
            </div>
            <div className="view-projects">
                <p>View Projects</p>
            </div>
        </div>
        <div className="image">
            <img src="../src/assets/MyFoto.png" alt="image-random" />
        </div>
    </section>
}

export default Home;