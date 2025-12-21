import React from 'react';
import './Experience.css';

interface ExperienceItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, description, tags }) => {
    return (
        <div className="experience-item">
            <p className="experience-date">{date}</p>
            <h3 className="job-title">{title}</h3>
            <div className="experience-description">{description}</div>
            <div className="experience-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="experience-tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceItem;
