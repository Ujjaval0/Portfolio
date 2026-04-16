import React, { useState, useEffect } from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';
import type { ProjectData } from '../types';
import './ProjectModal.css';
import SqlMarkdownViewer from './SqlMarkdownViewer';

interface ProjectModalProps {
    project: ProjectData | null;
    onClose: () => void;
}

/** Detect mobile / tablet — iframes for PDF don't work on iOS/Android */
function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () =>
            setIsMobile(
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ) || window.innerWidth < 768
            );
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    return isMobile;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const isMobile = useIsMobile();
    if (!project) return null;

    const isPdf =
        project.dashboardUrl?.toLowerCase().endsWith('.pdf') ?? false;

    /** On mobile, Google Docs viewer renders PDFs inline reliably */
    const pdfSrc = isPdf && isMobile
        ? `https://docs.google.com/viewer?url=${encodeURIComponent(
            window.location.origin + project.dashboardUrl
        )}&embedded=true`
        : project.dashboardUrl
            ? `${project.dashboardUrl}#zoom=page-width&view=FitH`
            : '';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modal-scroll-area">
                    <div className="modal-header-grid">
                        <div className="modal-header-left">
                            {project.category && <div className="category-badge">{project.category}</div>}
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

                        {project.objective && project.objective.length > 0 && (
                            <div className="detail-item">
                                <h4 className="detail-subtitle">🎯 Objective:</h4>
                                <ul className="detail-list">
                                    {project.objective.map((obj, i) => (
                                        <li key={i}>{obj}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.takeaways && project.takeaways.length > 0 && (
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
                        )}

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

                        {project.customSections && project.customSections.length > 0 && (
                            <>
                                {project.customSections.map((section, i) => (
                                    <div key={i} className="detail-item">
                                        <h4 className="detail-subtitle">{section.title}</h4>
                                        <div className="detail-text" style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                                            {section.content.map((para, j) => (
                                                <div key={j} style={{ marginBottom: '8px' }}>{para}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* ── PDF / Dashboard Section ── */}
                    {project.dashboardUrl && (
                        <div className="dashboard-section">
                            <div className="dashboard-section-header">
                                <div>
                                    <h2 className="details-header" style={{ marginBottom: '4px' }}>
                                        {isPdf ? '📊 Power BI Report — Full PDF' : '🌐 Live Interactive Report'}
                                    </h2>
                                    <p className="dashboard-subtitle">
                                        {isPdf
                                            ? isMobile
                                                ? 'Tap "Open PDF" to view the full report'
                                                : 'Scroll through all dashboard pages below'
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

                            {/* Mobile PDF → prominent open button instead of broken iframe */}
                            {isPdf && isMobile ? (
                                <div className="pdf-mobile-fallback">
                                    <div className="pdf-mobile-icon">
                                        <FileText size={48} strokeWidth={1.2} />
                                    </div>
                                    <p className="pdf-mobile-text">
                                        PDF previews aren't supported in mobile browsers.
                                    </p>
                                    <a
                                        href={project.dashboardUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-mobile-open-btn"
                                    >
                                        <ExternalLink size={16} />
                                        Open PDF Report
                                    </a>
                                </div>
                            ) : (
                                <div className="pdf-embed-wrapper">
                                    <iframe
                                        title={`${project.title} — Report`}
                                        src={pdfSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 'none', display: 'block' }}
                                        allowFullScreen={true}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── SQL Markdown Viewer ── */}
                    {project.markdownUrl && (
                        <SqlMarkdownViewer
                            markdownUrl={project.markdownUrl}
                            title="SQL Scripts — Full Code"
                        />
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
