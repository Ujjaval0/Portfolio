import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { ProjectData } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modal-scroll-area">
                    <div className="modal-header-grid">
                        <div className="modal-header-left">
                            <div className="category-badge">{project.category}</div>
                            <h2 className="modal-title">{project.title}</h2>
                            <div className="domain-info">
                                <span className="domain-label">Domain/Function:</span>
                                <span className="domain-value">{project.domain}</span>
                            </div>
                            <p className="modal-top-description">{project.description}</p>
                        </div>

                        <div className="modal-header-right">
                            <div className="gallery-container">
                                <img src={project.imageUrl} alt={project.title} className="gallery-image" />
                            </div>
                        </div>
                    </div>

                    <div className="tools-section">
                        <div className="tools-grid">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tool-badge">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="details-section">
                        <h2 className="details-header">Project Details</h2>

                        <div className="detail-item">
                            <h4 className="detail-subtitle">🏎️ Objective:</h4>
                            <ul className="detail-list">
                                {project.objective.map((obj, i) => (
                                    <li key={i}>{obj}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-item">
                            <h4 className="detail-subtitle">🔍 Key Takeaways:</h4>
                            {project.takeaways.map((takeaway, i) => (
                                <div key={i} className="takeaway-group">
                                    <h5 className="takeaway-title">🏆 {takeaway.title}:</h5>
                                    <ul className="detail-list">
                                        {takeaway.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {project.dashboardUrl && (
                        <div className="dashboard-section">
                            <h2 className="details-header">Live Interactive Dashboard</h2>
                            <div className="dashboard-placeholder">
                                <ExternalLink size={32} />
                                <p>Interactive Dashboard Preview (Simulation)</p>
                                <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer" className="view-link">Open full dashboard</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
