import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ExperienceItem from './components/ExperienceItem';
import ProjectModal from './components/ProjectModal';
import type { ProjectData } from './types';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "AirBnB listings price prediction",
      tags: ['Python', 'SQL', 'Matlab'],
      description: "Prediction of AirBnB prices growth Milan (Italy) to provide insights on the areas that might soon get more opportunities to monetise with short stays.",
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      fullDetails: "The algorithm takes into account seasonality, home characteristics, economic factors and stats on existing properties. Developed using a Random Forest Regressor and optimized with GridSearchCV to achieve a MAPE of 12%."
    },
    {
      title: "Spotify visual data art",
      tags: ['Python', 'Javascript', 'SQL'],
      description: "Inspired by Windows Music Player animations, this algorithm creates cool animations for every music track on earth.",
      imageUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800",
      fullDetails: "The animations are tailored to the melody as well as the text, with the aim to create engaging experiences for users. Built with Three.js for 3D rendering and Spotify API for real-time track analysis."
    },
    {
      title: "Credit Card Fraud Detection",
      tags: ['Python', 'PySpark', 'Scikit-learn'],
      description: "A machine learning pipeline to detect fraudulent transactions in real-time, handling highly imbalanced datasets.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      fullDetails: "Implemented using XGBoost and SMOTE for oversampling. The model achieved a Recall of 95% on fraudulent cases while maintaining high precision. Integrated with a Kafka pipeline for stream processing."
    },
    {
      title: "Customer Segmentation Analysis",
      tags: ['R', 'Tableau', 'K-Means'],
      description: "Unsupervised learning approach to group customers based on purchasing behavior for targeted marketing campaigns.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=800",
      fullDetails: "Analyzed over 500k transactions. Used Elbow method and Silhouette score to determine optimal clusters. Identified 4 key segments: VIP, At-Risk, New, and Occasional, leading to a 20% increase in campaign ROI."
    }
  ];

  return (
    <div className="layout-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      <main className="main-content">
        <section id="projects" className="projects-section">
          <h2 className="section-header">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onReadMore={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <h2 className="section-header">Experience</h2>
          <ExperienceItem
            date="Mar 2022 - now"
            title="Data Analyst at Amazon"
            company=""
            description="Leading the development and implementation of data analytics strategies that support business goals. Managing a team of data analysts to ensure data accuracy, completeness, and integrity. Providing insights and recommendations to senior management based on analysis of customer behaviour, product performance, and other key metrics."
            tags={['SQL', 'Python', 'R', 'Excel', 'Tableau']}
          />
        </section>

        <section id="education" className="education-section">
          <h2 className="section-header">Education</h2>
          <div className="education-item">
            <p className="education-year">2022</p>
            <h3 className="education-degree">Quantitative Economics, Master of Science, University of London</h3>
            <p className="education-summary">
              High quality quantitative training in economics, a focus on advanced research methods and a supervised research thesis. Rigorous grounding in using mathematical and statistical methods to derive, test and apply formal economic models
            </p>
          </div>
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
