import { useState, lazy, Suspense } from 'react';
import type { ProjectData } from './types';
import './App.css';

// Lazy load components for better performance
const Sidebar = lazy(() => import('./components/Sidebar'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));
const ExperienceItem = lazy(() => import('./components/ExperienceItem'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
const AIEnhancedWorkflow = lazy(() => import('./components/AIEnhancedWorkflow'));

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const projects: ProjectData[] = [
    {
      title: "EV Market & Sales Performance Dashboard",
      category: "PowerBI Project",
      domain: "Automotive",
      tags: ['Excel', 'Power Query', 'MS PowerPoint'],
      description: "This challenge focused on uncovering insights for AtliQ Motors, which holds a 25% market share in North America but under 2% in India. Led by Bruce Haryali, we set out to decode the Indian EV market.",
      imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
      objective: [
        "Grasp the current landscape of the EV market in India.",
        "Spot key trends and identify growth opportunities.",
        "Break down sales data by state, manufacturer, and vehicle category.",
        "Deliver actionable insights and strategies to boost AtliQ Motors' market share."
      ],
      takeaways: [
        {
          title: "Top EV Makers (FY 2023 & 2024)",
          items: ["OLA Electric: Leading the pack for two consecutive years, while smaller players like Jitendra and Battre Electric are struggling to keep up."]
        },
        {
          title: "Top States by EV Penetration (FY 2024)",
          items: ["Goa: Dominates in 2-wheeler adoption!", "Kerala: Excelling in both 2-wheelers and 4-wheelers. 🚀"]
        },
        {
          title: "Quarterly Trends for Leading 4-Wheeler EV Makers",
          items: ["Tata Motors: Outpacing competitors with the highest quarterly growth. 🔥"]
        }
      ],
      dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiMmExMzQyNTgtNmYyNi00NzY1LTljNzYtZDYxMjM1NzI1MzJiIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQzYzQ3ZGUzMzZhZiJ9",
      engagementLink: "https://www.linkedin.com/posts/alexandermarks_ev-market-analysis-activity-1234567890"
    },
    {
      title: "Spotify visual data art",
      category: "Python Project",
      domain: "Entertainment",
      tags: ['Python', 'Javascript', 'SQL', 'Three.js'],
      description: "Inspired by Windows Music Player animations, this algorithm creates cool animations for every music track on earth.",
      imageUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800",
      objective: [
        "Create real-time visual representations of musical data.",
        "Enhance user engagement through immersive 3D environments.",
        "Analyze track metrics like tempo, energy, and danceability."
      ],
      takeaways: [
        {
          title: "Real-time Analysis",
          items: ["Achieved sub-100ms latency in audio feature extraction and visual synchronization."]
        },
        {
          title: "User Interaction",
          items: ["Increased average listening time by 15% during beta testing with interactive visuals."]
        }
      ],
      dashboardUrl: "#",
      engagementLink: "#"
    },
    {
      title: "AirBnB listings price prediction",
      category: "Machine Learning",
      domain: "Real Estate",
      tags: ['Python', 'SQL', 'Matlab', 'Scikit-learn'],
      description: "Prediction of AirBnB prices growth Milan (Italy) to provide insights on the areas that might soon get more opportunities to monetise with short stays.",
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      objective: [
        "Identify high-potential investment areas in Milan.",
        "Predict price fluctuations based on seasonality and events.",
        "Optimize pricing strategies for hosts to maximize revenue."
      ],
      takeaways: [
        {
          title: "Model Accuracy",
          items: ["Achieved a MAPE of 12% using a Random Forest Regressor optimized with GridSearchCV."]
        },
        {
          title: "Impact Factors",
          items: ["Identified that proximity to metro stations and specific amenities (like high-speed Wi-Fi) are the strongest price drivers."]
        }
      ],
      dashboardUrl: "#",
      engagementLink: "https://github.com/Ujjaval0/airbnb-price-prediction"
    },
    {
      title: "Credit Card Fraud Detection",
      category: "Data Science",
      domain: "Finance",
      tags: ['Python', 'PySpark', 'Scikit-learn', 'XGBoost'],
      description: "A machine learning pipeline to detect fraudulent transactions in real-time, handling highly imbalanced datasets.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      objective: [
        "Minimize false positives to improve customer experience.",
        "Detect fraudulent patterns in high-velocity transaction streams.",
        "Implement a scalable solution using big data technologies."
      ],
      takeaways: [
        {
          title: "Model Performance",
          items: ["Achieved a Recall of 95% on fraudulent cases using XGBoost and SMOTE."]
        },
        {
          title: "Real-time Speed",
          items: ["Integration with Kafka allowed for transaction scoring in under 50ms."]
        }
      ],
      engagementLink: "https://github.com/Ujjaval0/fraud-detection"
    }
  ];

  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-zinc-900" />}>
      <div className="layout-container">
        <div className="sidebar-wrapper">
          <Sidebar onOpenResume={() => setIsResumeOpen(true)} />
        </div>

        <main className="main-content">
          <Suspense fallback={<div className="w-full h-64 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
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
          </Suspense>

          <Suspense fallback={<div className="w-full h-48 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <AIEnhancedWorkflow />
          </Suspense>

          <Suspense fallback={<div className="w-full h-32 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <section id="experience" className="experience-section">
              <h2 className="section-header">Experience</h2>
              <ExperienceItem
                date="2024 - 2025"
                title="Freelancer at Soul AI"
                company=""
                description="Conducted rigorous evaluation of Large Language Models (LLMs) to enhance output quality and alignment. Performed detailed side-by-side comparisons, analyzing response effectiveness based on complex criteria and prompt variations. Applied advanced prompt engineering techniques to identify model strengths and weaknesses, contributing high-quality data essential for model fine-tuning and optimization."
                tags={['LLM Evaluation', 'Prompt Engineering', 'Model Comparison', 'AI Training', 'Data Analysis']}
              />
            </section>
          </Suspense>

          <section id="education" className="education-section">
            <h2 className="section-header">Education</h2>
            <div className="education-item">
              <h3 className="education-degree">Data Analyst (Ducat)</h3>
              <p className="education-summary">
                Completed an intensive Data Analytics program covering the full data pipeline. Mastered statistical analysis, data wrangling, and visualization techniques using Python (Pandas, NumPy), SQL, and Power BI to derive actionable business insights from complex datasets.
              </p>
            </div>

            <div className="education-item">
              <h3 className="education-degree">Bachelor of Computer Applications (BCA)</h3>
              <p className="education-summary">
                Focused on core technologies including Python, SQL, and database management. Developed strong analytical capabilities alongside key soft skills such as problem-solving, critical thinking, and effective communication.
              </p>
            </div>
          </section>
        </main>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </Suspense>
  );
}

export default App;
