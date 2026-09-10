import React from 'react';
import { Fade } from "react-awesome-reveal";
import fotoProjectStock from "../assets/Instockflow.png";
import fotoProjectProp from "../assets/homepage.png";
import fotoProjectBook from "../assets/books.png";
import fotoProjectBudg from "../assets/budget.png";

function Project() {
    const projectsData = [
        {
            id: 1,
            title: "Integrated Inventory Management and Supplier Relationship System",
            description: "A web-based application designed to simplify inventory management and centralize supplier relationship data. Built with a Node.js/Express backend featuring a modular router structure for scalability, it ensures enterprise-grade security and encryption via Passport.js and Bcrypt session handling. Furthermore, it implements robust PostgreSQL relational schema modeling to maintain data integrity across complex supplier and item relationships.",
            githubUrl: "https://github.com/raiz317/integrated-inventory-system.git",
            image: fotoProjectStock,
            techStack: ["RESTful API", "EJS Templates", "Bootstrap 5"]
        },
        {
            id: 2,
            title: "Property Sales Website",
            description: "An independent project developed during an internship at Diskominfosantik Bekasi Regency with AI assistance to digitalize property marketing. It is built using the Laravel Framework following a structured Model-View-Controller (MVC) architecture, utilizing secure session guards and Eloquent User providers with native Bcrypt password hashing, and backed by a robust MySQL relational schema via Eloquent ORM to manage users, properties, contacts, and transactions seamlessly.",
            githubUrl: "https://github.com/raiz317/Web_Property.git",
            image: fotoProjectProp,
            techStack: ["RESTful API", "Laravel Blade", "Bootstrap 5"]
        },
        {
            id: 3,
            title: "Multi-Role Library Catalog & Inventory System",
            description: "Developed as the Final Project for the Sanbercode Laravel Web Development Bootcamp, this application digitalizes library collections and manages multi-role user access levels using Laravel's MVC architecture. It features strict Role-Based Access Control (RBAC) enforced via customized middleware—granting Admin accounts full CRUD privileges over genres and books while restricting standard Users to read-only capabilities—all backed by an optimized MySQL relational schema utilizing Eloquent ORM.",
            githubUrl: "https://github.com/raiz317/IM-Sanbercode-Laravel-Web-Dev/tree/main/MyProject-RFP",
            image: fotoProjectBook,
            techStack: ["RESTful API", "Laravel Blade", "Bootstrap 5"]
        },
        {
            id: 4,
            title: "Expense & Budget Visualizer",
            description: "Developed as the Final Project for the RevoU Coding Camp through a high-velocity 'Vibe Coding' workflow with Kiro AI, this mobile-friendly application is built entirely on a lightweight Client-Side Only Architecture using pure HTML5, CSS3, and Vanilla JavaScript (ES6+). It utilizes the native Browser Local Storage API for secure cross-session state persistence and integrates Chart.js via CDN to render interactive, responsive visualization charts with real-time percentage distribution breakdowns.",
            githubUrl: "https://raiz317.github.io/Rafid-Faiz-Putra--Mini-Project-RevoU/",
            image: fotoProjectBudg,
            techStack: ["Vanilla JavaScript (ES6+)", "Kiro", "Chart.js"]
        }
    ];

    return (
        <section id="projects" className="projects">
            <Fade duration={2000}>
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <div className="header-line"></div>

                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <div className="projects-detail" key={project.id}>
                                <div className="project-card">
                                    <div className="project-image">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <img src={project.image} alt="Project Thumbnail" />
                                        </a>
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>

                                        <div className="project-tech-stack">
                                            {project.techStack.map((tech, index) => (
                                                <p key={index}>{tech}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Project;