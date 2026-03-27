import { useState, lazy, Suspense } from 'react';
import type { ProjectData } from './types';
import './App.css';
import aiEconomyImg from './assets/The ai economy.png';
import aiJobsPdf from './assets/Ai Jobs.pdf';
import customerImg from './assets/Customer.png';
import customerPdf from './assets/Customer Behavior.pdf';

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
      title: "The AI Economy — What the Data Actually Says (2024–2030)",
      category: "",
      domain: "AI & Labour Economics",
      tags: ['Excel', 'Power BI', 'DAX'],
      description: "Everyone is making decisions about AI — where to invest, what skills to build, which industries to bet on. But most of those decisions are driven by headlines, not data. This project started with one question: if you ignored the noise and looked only at real funding deals, actual startup outcomes, and verified job projections — what story would the numbers tell?",
      imageUrl: aiEconomyImg,
      customSections: [
        {
          title: "CORE BUSINESS PROBLEM",
          content: [
            <>Is AI actually the best place to put capital? Which industries are creating jobs by 2030 and which are quietly bleeding them? And are the companies getting the most press the same ones getting the most money? Leadership teams needed answers <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>grounded in data, not opinion.</u></>
          ]
        },
        {
          title: "APPROACH",
          content: [
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Cleaned and integrated <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>3 independent datasets</u> — 500 global startups, 25 real 2024–25 funding deals totalling $10.7B across 7 countries, and 30,000 job records across 8 industries.</li>
              <li>Built a 3-page interactive Power BI report with 13 custom DAX measures, designed so any stakeholder — not just analysts — could <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>filter by region, industry, funding stage, or job trend</u> and reach their own conclusion.</li>
            </ul>
          ]
        },
        {
          title: "WHAT THE DATA REVEALED",
          content: [
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Startup Landscape:</strong> AI has the lowest capital efficiency of all 8 industries at <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>$7.90 returned per $1 invested</u>, behind E-Commerce ($10.00), HealthTech, Cybersecurity, and Gaming. 76% of AI startups never reach an IPO or acquisition. The most talked-about industry is quietly one of the least efficient bets in the dataset.
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Global Funding:</strong> 60% of the $10.7B tracked went to <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>non-AI companies</u> — SpaceX ($1.5B), Byju's ($1.2B), and Revolut ($800M) led the list. India averaged $745M per deal, nearly double the US average of $403M. FinTech matched pure AI in total funding within $10M — with almost no media attention.
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Job Market:</strong> Transportation is projected to lose 444,302 jobs by 2030. IT gains 511,824. The real story isn't "AI kills jobs" — it's that specific industries absorb the cost while others capture the growth. With 4,437 jobs in the danger zone versus 4,520 in the safe zone, the margin is <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>razor-thin and entirely industry-dependent.</u>
              </div>
            </div>
          ]
        },
        {
          title: "RECOMMENDATION",
          content: [
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>For investors:</strong> Capital efficiency and exit rates matter more than category hype — FinTech and E-Commerce are the <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>quieter, better-returning bets</u> in this dataset.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>For professionals:</strong> IT and Healthcare absorb job growth through 2030; Transportation and Manufacturing do not. <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>Build skills accordingly.</u></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>For analysts:</strong> The funding narrative is global now — all 5 regions are within 2% of each other in startup count, meaning <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>no single geography dominates</u>.</span>
              </div>
            </div>
          ]
        }
      ],
      dashboardUrl: aiJobsPdf,
      reportUrl: "https://ai-jobs-impact-2024-2030.vercel.app/",
      engagementLink: "https://github.com/Ujjaval0/AI-Jobs-Impact-2024-2030"
    },
    {
      title: "Customer Shopping Behavior - Retail Analytics 2026",
      category: "",
      domain: "Retail & Consumer Analytics",
      tags: ['SQL', 'Python', 'Power BI'],
      description: "Retail teams spend heavily on two assumptions: that subscriptions build loyalty and that discounts drive volume. This business had 3,900 customers, $233K in real transactions, and 19 behavioral variables enough to test both assumptions properly. The question wasn't what customers were buying. It was why, and whether the tools the business was using to influence that behavior were actually working.",
      imageUrl: customerImg,
      customSections: [
        {
          title: "CORE BUSINESS PROBLEM",
          content: [
            <>Are subscriptions and discount programs genuinely lifting revenue — or are they expensive habits the data doesn't support? Which customer segments and product categories deserve more investment, and which are being over-resourced based on <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>assumptions rather than evidence?</u></>
          ]
        },
        {
          title: "APPROACH",
          content: [
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Cleaned 3,900 transaction records across 4 product categories, 6 shipping types, and 3 loyalty tiers.</li>
              <li>Built a single-page Power BI dashboard filterable by subscription status and gender. Kept it one page deliberately — the key patterns held across every cut of the data, so splitting by segment would have <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>added clicks without adding clarity.</u></li>
            </ul>
          ]
        },
        {
          title: "WHAT THE DATA REVEALED",
          content: [
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Subscriptions aren't working.</strong> 80% of customers are already Loyal — this is a retention business, not an acquisition one. Yet 72.4% of those loyal buyers are unsubscribed. Worse, the subscription program isn't even lifting spend: subscribers averaged $59.49 per order vs. $59.87 without. The program is <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>capturing people who would have spent anyway.</u>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Discounts are a margin leak.</strong> Promo users averaged $59.28 vs. $60.13 without promos. Hat, Sneakers, and Coat carry 50%, 49.7%, and 49.1% discount rates respectively — and spend doesn't move. The business is giving away margin on its highest-volume SKUs with <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>zero revenue return.</u>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>The gender gap is a volume problem, not a spend problem.</strong> Male revenue ($157,890) vs. female ($75,191) looks like a targeting failure until you check per-order spend: $59.54 vs. $60.25 — nearly identical. The gap closes by <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>acquiring more female customers,</u> not by changing pricing or product mix.
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Young Adults pull in both directions.</strong> Highest revenue ($62K) and highest customer count (1,028). Every other segment trails on at least one axis. Fall outperforms Summer by $4,241 in average revenue — the weakest point in the calendar with the most room to close.
              </div>
            </div>
          ]
        },
        {
          title: "RECOMMENDATION",
          content: [
            <p style={{ marginBottom: '12px', fontWeight: 600 }}>Three calls:</p>,
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Stop discounting Hat, Sneakers, and Coat.</strong> Spend doesn't respond to it. The margin loss is confirmed, the revenue gain is not.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Convert loyal unsubscribed customers first.</strong> 72.4% of the most valuable customers aren't subscribed. That's the <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>highest-leverage monetization move</u> in the dataset — no new acquisition needed.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Close the Summer gap</strong> with targeted campaigns toward female and Young Adult segments. The spend behaviour is already there. The volume isn't.</span>
              </div>
            </div>
          ]
        }
      ],
      dashboardUrl: customerPdf,
      engagementLink: "https://github.com/Ujjaval0/Customer-Shopping-Behavior-Analysis"
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
    },


    {
      title: "Vrinda Store Analysis",
      category: "",
      domain: "Retail & E-commerce",
      tags: ['Excel', 'Power Query', 'ETL'],
      description: "Vrinda Store was running across 7 sales channels - Amazon, Myntra, Flipkart, Meesho, Ajio, Nalli, and others with no single view of where revenue was actually coming from, who was buying, and where orders were failing. 32,047 orders. One year. No consolidated picture.",
      imageUrl: "https://raw.githubusercontent.com/ChhavikKapoor20/Vrinda-Store-Data-Analysis/main/VrindaStoreReport2023.png",
      customSections: [
        {
          title: "CORE BUSINESS PROBLEM",
          content: [
            <>Which channels, customer segments, and geographies are driving revenue and where is money being left on the table through returns, cancellations, and <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>untargeted marketing?</u></>
          ]
        },
        {
          title: "APPROACH",
          content: [
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Pulled and consolidated multi-channel order data using Excel Power Query. Cleaned return, cancellation, and delivery status fields across 32,047 records across 7 channels, 8 product categories, 3 age groups, and 12 months.</li>
              <li>Built an interactive Excel dashboard filterable by month, channel, and category. Kept the layout to one view so leadership could <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>cross-filter segments without switching tabs.</u></li>
            </ul>
          ]
        },
        {
          title: "WHAT THE DATA REVEALED",
          content: [
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Revenue is concentrated in one segment.</strong> Female customers drive 64% of total revenue — ₹13.56 Cr. Adult women (30–50) are the single highest-spending demographic across every channel. The business is already a women's retail business <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>whether it's positioned that way or not.</u>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Three channels carry the business.</strong> Amazon (35.5%), Myntra (23.4%), and Flipkart (21.6%) generate 80.5% of total revenue. The remaining four channels — Meesho, Ajio, Nalli, Others — split the remaining 19.5%. Channel diversification is a risk story, not a growth opportunity: losing any one of the top three is a <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>serious revenue event.</u>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Sales peak in January–April and drop sharply after.</strong> Orders and revenue track together through March, then order volume falls faster than revenue — meaning the post-April customer is <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>higher value but harder to reach.</u> Summer is the inventory and campaign gap.
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Geography is uneven.</strong> Maharashtra (₹2.99M) and Karnataka (₹2.65M) lead. Uttar Pradesh sits third at ₹2.10M despite being one of India's largest consumer markets — <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>under-indexed relative to population size.</u>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Returns and cancellations are a fixable margin problem.</strong> 92% delivery success rate sounds strong until you calculate the other 8%: 3% returned, 3% cancelled, 2% refunded across 32,047 orders. That's roughly 2,500+ failed orders — the <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>₹40–50 Lakh savings estimate is real</u> if return triggers are addressed by category.
              </div>
            </div>
          ]
        },
        {
          title: "RECOMMENDATION",
          content: [
            <p style={{ marginBottom: '12px', fontWeight: 600 }}>Three calls:</p>,
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Double down on Adult women aged 30–50 on Amazon and Myntra.</strong> That's where revenue concentrates. Every campaign that isn't targeting this segment is <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>working against the grain of the data.</u></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Investigate return triggers on high-return categories before the next peak season.</strong> Jan–Apr is peak. Reducing the 3% return rate before that window directly recovers margin — <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>no new customers needed.</u></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#3b82f6', marginRight: '8px' }}>▸</span>
                <span><strong style={{ color: 'var(--text-primary)' }}>Run a targeted push into Uttar Pradesh before Q1.</strong> It's the third-largest state by sales but significantly under-indexed for its population. The channel infrastructure already exists — this is a <u style={{ textDecorationColor: '#3b82f6', textUnderlineOffset: '2px', fontWeight: 600 }}>reach problem, not a product problem.</u></span>
              </div>
            </div>
          ]
        }
      ],
      dashboardUrl: "https://vrinda-store-analysis.vercel.app/",
      engagementLink: "https://github.com/Ujjaval0/vrinda-store-analysis"
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
