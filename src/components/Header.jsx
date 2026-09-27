import React, { useState } from "react";
import data from "../data/data.json";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { resumeUrl, menuItems } = data.headerData;

  return (
    <header>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </div>

      <ul id="nav-menu" className={isOpen ? "active" : ""}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.target} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <h5>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </h5>
    </header>
  );
}

export default Header;
