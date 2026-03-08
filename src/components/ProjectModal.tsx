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
                            {project.reportUrl && (
                                <a
                                    href={project.reportUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="report-link-btn"
                                >
                                    <ExternalLink size={14} />
                                    View Full Report
                                </a>
                            )}
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

                    {project.dashboardUrl && (
                        <div className="dashboard-section">
                            {(() => {
                                const isPdf = project.dashboardUrl!.toLowerCase().endsWith('.pdf');
                                return (
                                    <div className="dashboard-section-header">
                                        <div>
                                            <h2 className="details-header" style={{ marginBottom: '4px' }}>
                                                {isPdf ? '📊 Power BI Report — Full PDF' : '🌐 Live Interactive Report'}
                                            </h2>
                                            <p className="dashboard-subtitle">
                                                {isPdf
                                                    ? 'Scroll through all 3 dashboard pages below'
                                                    : 'Explore the full report directly below'}
                                            </p>
                                        </div>
                                        <a
                                            href={project.dashboardUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="report-link-btn"
                                            style={{ flexShrink: 0 }}
                                        >
                                            <ExternalLink size={14} />
                                            {isPdf ? 'Open PDF' : 'Open Report'}
                                        </a>
                                    </div>
                                );
                            })()}
                            <div className="pdf-embed-wrapper">
                                <iframe
                                    title={`${project.title} — Report`}
                                    src={`${project.dashboardUrl}#zoom=page-width&view=FitH`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', display: 'block' }}
                                    allowFullScreen={true}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
