import React from 'react';
import './ContactSection.css';
import gmailLogo from '../assets/Gmail_contact_section.png';
import linkedinLogo from '../assets/icons8-linkedin-144.png';
import githubLogo from '../assets/GitHub_Invertocat_Black.png';
import discordLogo from '../assets/Discord-Symbol-Blurple.png';
import { Reveal } from './Reveal';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <Reveal>
                <h2 className="section-header">Get In Touch</h2>
                <div className="contact-content">
                    <h3 className="contact-title">Let's turn your data into decisions.</h3>

                    <div className="contact-icons-grid">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ujjavalbhardwaj6@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <img src={gmailLogo} alt="Email" className="contact-icon" />
                            <span className="contact-label">Email</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ujjaval-bhardwaj" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <img src={linkedinLogo} alt="LinkedIn" className="contact-icon" />
                            <span className="contact-label">LinkedIn</span>
                        </a>
                        <a href="https://github.com/Ujjaval0" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <img src={githubLogo} alt="GitHub" className="contact-icon" />
                            <span className="contact-label">GitHub</span>
                        </a>
                        <a href="#" className="contact-item">
                            <img src={discordLogo} alt="Discord" className="contact-icon" />
                            <span className="contact-label">Discord</span>
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default ContactSection;
