import React from 'react';
import { X } from 'lucide-react';
import './ProjectModal.css';

interface ProjectModalProps {
    project: {
        title: string;
        tags: string[];
        description: string;
        imageUrl: string;
        fullDetails?: string;
    } | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="modal-image-wrapper">
                    <img src={project.imageUrl} alt={project.title} className="modal-image" />
                </div>
                <div className="modal-body">
                    <h2 className="modal-title">{project.title}</h2>
                    <div className="modal-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="modal-tag">{tag}</span>
                        ))}
                    </div>
                    <div className="modal-description">
                        <p>{project.description}</p>
                        {project.fullDetails && (
                            <div className="modal-full-details">
                                <h3>Key Insights & Methodology</h3>
                                <p>{project.fullDetails}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
