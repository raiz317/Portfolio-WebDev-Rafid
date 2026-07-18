import React from 'react';

function Skill() {
    return (
        <section id="skills" className="proficiency-section">
            <div className="section-header">
                <h2>Tools and Technology</h2>
                <div className="header-line"></div>
            </div>

            <div className="proficiency-grid">

                <div className="prof-card card-backend">
                    <div className="card-icon icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h3>Backend & Security</h3>

                    <div className="skills-progress-grid">
                        <div className="progress-item">
                            <div className="progress-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className="dot"></span>
                                <span>Node.js (Express.js)</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className="dot"></span>
                                <span>PHP (Laravel)</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className="dot"></span>
                                <span>RESTful API</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className="dot"></span>
                                <span>Passport.js</span>
                            </div>
                        </div>

                        <div className="progress-item">
                            <div className="progress-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span className="dot"></span>
                                <span>Bcrypt Auth</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prof-card card-databases">
                    <div className="card-icon icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
                    </div>
                    <h3>Databases</h3>
                    <ul className="database-list">
                        <li><span className="dot"></span> PostgreSQL</li>
                        <li><span className="dot"></span> MySQL</li>
                    </ul>
                </div>

                <div className="prof-card card-frontend">
                    <div className="card-icon icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    </div>
                    <h3>Frontend</h3>
                    <div className="tags-container">
                        <span className="tech-tag">JavaScript (ES6+)</span>
                        <span className="tech-tag">HTML5/CSS3</span>
                        <span className="tech-tag">Bootstrap</span>
                        <span className="tech-tag">EJS</span>
                        <span className="tech-tag">Laravel Blade</span>
                    </div>
                </div>

                <div className="prof-card card-tools">
                    <div className="card-icon icon-blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                    </div>
                    <h3>Tools</h3>
                    <div className="tools-grid">
                        <div className="tool-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}><polyline points="20 6 9 17 4 12" /></svg>
                            VS Code
                        </div>
                        <div className="tool-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}><polyline points="20 6 9 17 4 12" /></svg>
                            Git/GitHub
                        </div>
                        <div className="tool-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}><polyline points="20 6 9 17 4 12" /></svg>
                            CLI
                        </div>
                        <div className="tool-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}><polyline points="20 6 9 17 4 12" /></svg>
                            Postman
                        </div>
                        <div className="tool-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}><polyline points="20 6 9 17 4 12" /></svg>
                            Figma
                        </div>
                    </div>
                </div>

                <div className="prof-card card-interpersonal">
                    <div className="card-icon icon-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" /></svg>
                    </div>
                    <h3>Interpersonal</h3>
                    <ul className="interpersonal-list">
                        <li>Problem Solving</li>
                        <li>AI Prompt Engineering</li>
                        <li>Analytical Thinking</li>
                        <li>Self-Management</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
export default Skill;