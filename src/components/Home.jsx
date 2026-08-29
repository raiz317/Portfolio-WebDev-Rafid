import React from "react";
import { Fade } from "react-awesome-reveal";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import fotoProfile from '../assets/MyFoto.png'
import { Typewriter } from 'react-simple-typewriter';

function Home() {
    return (
        <section id="home" className="body-home">
            <Fade duration={2000}>
                <div className="identity">
                    <span className="location"><LocationOnIcon />Bekasi, Indonesia</span>
                    <div className="identity-me">
                        <h2>I am Rafid Faiz Putra as a{' '}
                            <span style={{ color: '#4f46e5', fontWeight: 'bolder' }}>
                                <Typewriter
                                    words={['Web Developer', 'Fullstack Developer', 'Backend Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle=""
                                    typeSpeed={100}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                />
                            </span></h2>
                    </div>
                    <div className="description-identity">
                        <p>An Information Systems student specializing in Fullstack and Backend Development using Node.js (Express.js), Laravel and React (Vite).</p>
                    </div>
                    <div className="view-projects">
                        <a href="https://github.com/raiz317" target="_blank">View Projects</a>
                    </div>
                </div>
                <div className="image">
                    <img src={fotoProfile} alt="Foto-Profile" />
                </div>
            </Fade>
        </section>
    )
}

export default Home;