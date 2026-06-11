import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </div>

            <ul id="nav-menu" className={isOpen ? "active" : ""}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <h5>
                <a
                    href="https://drive.google.com/file/d/1Alg_FR-3PMccfrem_N6lCeLNAkMi5hon/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
            </h5>
        </header>
    );
}

export default Header;