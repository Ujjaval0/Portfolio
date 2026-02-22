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
                            <h4 className="detail-subtitle">🎯 Objective:</h4>
                            <ul className="detail-list">
                                {project.objective.map((obj, i) => (
                                    <li key={i}>{obj}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-item">
                            <h4 className="detail-subtitle">📊 Key Insights:</h4>
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

                        {project.impact && project.impact.length > 0 && (
                            <div className="detail-item">
                                <h4 className="detail-subtitle">💡 Impact & Results:</h4>
                                <ul className="detail-list">
                                    {project.impact.map((imp, i) => (
                                        <li key={i}>{imp}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {project.dashboardUrl && project.dashboardUrl !== '#' && (
                        <div className="dashboard-section">
                            <h2 className="details-header">📈 Live Interactive Dashboard</h2>
                            <div className="dashboard-container">
                                <div className="iframe-wrapper">
                                    <iframe
                                        title={project.title}
                                        width="100%"
                                        height="600"
                                        src={project.dashboardUrl}
                                        frameBorder="0"
                                        allowFullScreen={true}
                                        style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
                                    ></iframe>
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                                    <a
                                        href={project.dashboardUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-link"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                    >
                                        <ExternalLink size={14} /> Open in new tab
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
