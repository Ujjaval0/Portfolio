import { useState, lazy, Suspense } from 'react';
import type { ProjectData } from './types';
import './App.css';
import aiEconomyImg from './assets/The ai economy.png';
import aiJobsPdf from './assets/Ai Jobs.pdf';

// Lazy load components for better performance
const Sidebar = lazy(() => import('./components/Sidebar'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));
const ExperienceItem = lazy(() => import('./components/ExperienceItem'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
const AIEnhancedWorkflow = lazy(() => import('./components/AIEnhancedWorkflow'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const VerticalNav = lazy(() => import('./components/VerticalNav'));
import { Reveal } from './components/Reveal';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const projects: ProjectData[] = [
    {
      title: "The AI Economy — Data Report 2024-2030",
      category: "PowerBI Project",
      domain: "AI & Labour Economics",
      tags: ['Excel', 'Power BI', 'DAX'],
      description: "Everyone has an opinion about AI. This project has data instead. Analyzed 500 startups, $10.7B in real funding deals, and 30,000 jobs across 8 industries worldwide — to find out what is actually happening versus what the headlines say.",
      imageUrl: aiEconomyImg,
      objective: [
        "Analyze global startup performance across 8 industries and 5 regions.",
        "Track $10.7B in real 2024-25 funding deals across 7 countries.",
        "Identify which industries are growing and shrinking in the job market by 2030.",
        "Challenge common assumptions about AI, money, and career safety with real data."
      ],
      takeaways: [
        {
          title: "Startups & ROI",
          items: [
            "AI has the lowest capital efficiency of all 8 industries — $7.90 per $1 invested vs E-Commerce's $10.00.",
            "76% of AI startups never exit — no IPO, no acquisition, despite all the hype.",
            "All 5 global regions are within 2% of each other — startup funding is genuinely global now."
          ]
        },
        {
          title: "Funding (2024-25)",
          items: [
            "India averages $745M per deal — nearly double USA's $403M.",
            "60% of $10.7B went to non-AI companies — SpaceX, Byju's, Revolut led the list.",
            "FinTech matched pure AI in funding within $10M — with zero media coverage."
          ]
        },
        {
          title: "Job Market by 2030",
          items: [
            "Transportation loses 444,302 jobs — biggest decline of any industry.",
            "IT gains 511,824 jobs — highest growth AND highest salary.",
            "4,437 job titles already in the danger zone today — not in 2030, right now."
          ]
        }
      ],
      impact: [
        "Analyzed 45,525 records across 3 datasets to surface insights that challenge mainstream AI narratives",
        "Identified 23% efficiency gap between AI and E-Commerce in startup capital returns",
        "Projected 444,302 job losses in Transportation vs 511,824 gains in IT by 2030",
        "Built a 3-page interactive Power BI dashboard with 13 custom DAX measures"
      ],
      dashboardUrl: aiJobsPdf,
      reportUrl: "https://ai-jobs-impact-2024-2030.vercel.app/",
      engagementLink: "https://github.com/Ujjaval0/AI-Jobs-Impact-2024-2030"
    },
    {
      title: "Vrinda Store Analysis",
      category: "Excel Project",
      domain: "Retail & E-commerce",
      tags: ['Excel', 'ETL', 'Power Query editor', 'Business Insights'],
      description: "A data-driven analysis of ₹21.18 Cr in annual sales for Vrinda Store. This project involved deep-diving into 30,000+ transaction records to identify high-value customer segments and optimize sales channels.",
      imageUrl: "https://raw.githubusercontent.com/ChhavikKapoor20/Vrinda-Store-Data-Analysis/main/VrindaStoreReport2023.png",
      objective: [
        "Consolidated and cleaned multi-channel sales data using Excel Power Query.",
        "Segmented customers by demographics to identify the core revenue drivers.",
        "Analyzed regional sales performance to pinpoint growth opportunities.",
        "Created an interactive dashboard to visualize order status and return trends."
      ],
      takeaways: [
        {
          title: "The Women Factor",
          items: ["Female customers drive 64% of total revenue (~₹13.56 Cr), with adult women (30-50) being the highest-spending segment."]
        },
        {
          title: "Channel Efficiency",
          items: ["Amazon, Myntra, and Flipkart generate 80% of total revenue, indicating strong marketplace dominance but identifying a need for channel diversification."]
        },
        {
          title: "Geographic Insights",
          items: ["Maharashtra and Karnataka lead in sales, while North India represents a major untapped market for future expansion."]
        }
      ],
      impact: [
        "Processed 32,047 orders with an overall 89.3% delivery success rate",
        "Identified a potential ₹40-50 Lakhs in savings by optimizing return treatments",
        "Streamlined inventory planning by identifying peak sales cycles (Jan-Apr)"
      ],
      dashboardUrl: "https://vrindastore.netlify.app/",
      engagementLink: "https://github.com/Ujjaval0/vrinda-store-analysis"
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
      impact: [
        "Achieved 88% prediction accuracy",
        "Identified top 5 revenue-driving amenities",
        "Optimized pricing for 1,200+ listings"
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
      impact: [
        "Prevented $2M+ potential fraudulent losses",
        "Reduced false positives by 18%",
        "Scaled architecture to handle 10k trans/sec"
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

        <Suspense fallback={null}>
          <VerticalNav />
        </Suspense>

        <main className="main-content">
          <Suspense fallback={<div className="w-full h-64 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <section id="projects" className="projects-section">
              <Reveal>
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
              </Reveal>
            </section>
          </Suspense>

          <Suspense fallback={<div className="w-full h-48 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <AIEnhancedWorkflow />
          </Suspense>

          <Suspense fallback={<div className="w-full h-32 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <section id="experience" className="experience-section">
              <Reveal>
                <h2 className="section-header">Experience</h2>
                <ExperienceItem
                  date="2024 - 2025"
                  title="Freelancer at Soul AI"
                  company=""
                  description="Conducted rigorous evaluation of Large Language Models (LLMs) to enhance output quality and alignment. Performed detailed side-by-side comparisons, analyzing response effectiveness based on complex criteria and prompt variations. Applied advanced prompt engineering techniques to identify model strengths and weaknesses, contributing high-quality data essential for model fine-tuning and optimization."
                  tags={['LLM Evaluation', 'Prompt Engineering', 'Model Comparison', 'AI Training', 'Data Analysis']}
                />
              </Reveal>
            </section>
          </Suspense>

          <section id="education" className="education-section">
            <Reveal>
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
            </Reveal>
          </section>

          <Suspense fallback={<div className="w-full h-32 bg-gray-100 dark:bg-zinc-800 animate-pulse rounded-lg" />}>
            <ContactSection />
          </Suspense>
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
