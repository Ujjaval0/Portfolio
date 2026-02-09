import React from 'react';
import { FileText } from 'lucide-react';
import './Sidebar.css';
import profileImage from '../assets/chatgpt_profile_image.png';
import githubLogo from '../assets/GitHub_Invertocat_Black.png';
import linkedinLogo from '../assets/icons8-linkedin-144.png';

interface SidebarProps {
    onOpenResume: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenResume }) => {
    return (
        <aside className="sidebar">
            <div className="profile-image-container">
                <img src={profileImage} alt="Ujjaval Bhardwaj" className="profile-image" />
            </div>

            <div className="profile-info">
                <h1 className="profile-name">Ujjaval Bhardwaj</h1>
                <p className="profile-title">Turning Complex Data into Business Growth </p>
                <p className="profile-location">Based in India</p>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/ujjaval-bhardwaj" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <img src={linkedinLogo} alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="https://github.com/Ujjaval0" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <img src={githubLogo} alt="GitHub" width={24} height={24} />
                </a>
                <div className="action-buttons">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjavalbhardwaj6@gmail.com" target="_blank" rel="noopener noreferrer" className="email-me-pill">Gmail me</a>
                    <button onClick={onOpenResume} className="resume-button">
                        <FileText size={16} />
                        Resume
                    </button>
                </div>
            </div>

            <div className="sidebar-section">
                <h2 className="sidebar-header">About</h2>
                <p className="about-text">
                    Data-driven analyst with a BCA and a diploma in Data Analytics, focused on turning raw data into clear, practical insights.
                    I use Python, Excel, SQL, Power BI, and prompt engineering to analyze data, build dashboards, and turn findings into decisions that drive business impact.
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
                    <span className="skill-badge blue">Statistical Analysis</span>
                    <span className="skill-badge blue">Data Visualization</span>
                    <span className="skill-badge blue">Data Cleaning</span>
                </div>
            </div>
        </aside >
    );
};

export default Sidebar;
