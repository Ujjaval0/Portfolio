import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faMedium } from '@fortawesome/free-brands-svg-icons';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="profile-image-container">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" alt="Alexander Marks" className="profile-image" />
            </div>

            <div className="profile-info">
                <h1 className="profile-name">Alexander Marks</h1>
                <p className="profile-title">Data Analyst at Amazon</p>
                <p className="profile-location">Based in London, UK</p>
            </div>

            <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Kaggle">
                    <FontAwesomeIcon icon={faKaggle} size="lg" />
                </a>
                <a href="#" className="social-link" aria-label="Medium">
                    <FontAwesomeIcon icon={faMedium} size="lg" />
                </a>
                <button className="email-me-pill">email me</button>
            </div>

            <div className="sidebar-section">
                <h2 className="sidebar-header">About</h2>
                <p className="about-text">
                    Quantitative economics graduate, enjoy working with business stakeholders to help support strategy based on quantitative insights and statistical models.
                </p>
            </div>

            <div className="sidebar-section">
                <h2 className="sidebar-header">Skills</h2>
                <div className="skills-grid">
                    <span className="skill-badge blue">SQL</span>
                    <span className="skill-badge blue">Python</span>
                    <span className="skill-badge blue">R</span>
                    <span className="skill-badge blue">Tableau</span>
                    <span className="skill-badge blue">Excel</span>
                    <span className="skill-badge blue">Statistical modelling</span>
                    <span className="skill-badge blue">Sampling techniques</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
