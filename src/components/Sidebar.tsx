import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faMedium } from '@fortawesome/free-brands-svg-icons';
import './Sidebar.css';
import profileImage from '../assets/chatgpt_profile_image.png';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="profile-image-container">
                <img src={profileImage} alt="Ujjaval Bhardwaj" className="profile-image" />
            </div>

            <div className="profile-info">
                <h1 className="profile-name">Ujjaval Bhardwaj</h1>
                <p className="profile-title">Data Analyst </p>
                <p className="profile-location">Based in India</p>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/ujjaval-bhardwaj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/Ujjaval0" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Kaggle">
                    <FontAwesomeIcon icon={faKaggle} size="lg" />
                </a>
                <a href="#" className="social-link" aria-label="Medium">
                    <FontAwesomeIcon icon={faMedium} size="lg" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjavalbhardwaj6@gmail.com" target="_blank" rel="noopener noreferrer" className="email-me-pill">Gmail me</a>
            </div>

            <div className="sidebar-section">
                <h2 className="sidebar-header">About</h2>
                <p className="about-text">
                    Data-driven analyst with a BCA and a diploma in Data Analytics, focused on turning raw data into clear, practical insights.
                    I use Python, Excel, SQL, Power BI, and Prompt engineering to analyze data, build dashboards, and turn findings into decisions that drive business impact.
                </p>
            </div>

            <div className="sidebar-section">
                <h2 className="sidebar-header">Skills</h2>
                <div className="skills-grid">
                    <span className="skill-badge blue">SQL</span>
                    <span className="skill-badge blue">Python</span>
                    <span className="skill-badge blue">PowerBI</span>
                    <span className="skill-badge blue">LLM's</span>
                    <span className="skill-badge blue">Excel</span>
                    <span className="skill-badge blue">Prompt Engineering</span>
                    <span className="skill-badge blue">Statistical modelling</span>
                    <span className="skill-badge blue">Sampling techniques</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
