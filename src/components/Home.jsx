import React from "react";
import { Fade } from "react-awesome-reveal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import fotoProfile from "../assets/MyFoto.png";
import { Typewriter } from "react-simple-typewriter";
import data from "../data/data.json";

function Home() {
  const { name, location, imageName, githubUrl, typewriterWords, description } =
    data.homeData;

  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  return (
    <section id="home" className="body-home">
      <Fade duration={2000}>
        <div className="identity">
          <span className="location">
            <LocationOnIcon />
            {location}
          </span>
          <div className="identity-me">
            <h2>
              I am {name} as a{" "}
              <span style={{ color: "#4f46e5", fontWeight: "bolder" }}>
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
          <div className="description-identity">
            <p>{description}</p>
          </div>
          <div className="view-projects">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              View Projects
            </a>
          </div>
        </div>
        <div className="image">
          <img src={getImageUrl(imageName)} alt="Foto-Profile" />
        </div>
      </Fade>
    </section>
  );
}

export default Home;
