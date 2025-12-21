import React from 'react';
import type { ProjectData } from '../types';
import './ProjectCard.css';

interface ProjectCardProps extends ProjectData {
    onReadMore: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, description, imageUrl, fullDetails, onReadMore }) => {
    const projectData = { title, tags, description, imageUrl, fullDetails };

    return (
        <div className="project-card">
            <div className="project-image-wrapper">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
                <p className="project-description">{description}</p>
                <button
                    className="read-more"
                    onClick={() => onReadMore(projectData)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    Read more →
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
