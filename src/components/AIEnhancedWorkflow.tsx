import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import chatgptLogo from '../assets/openai.png';
import claudeLogo from '../assets/claude-color.png';
import geminiLogo from '../assets/gemini-color.png';
import copilotLogo from '../assets/copilot-color.png';
import excelLogo from '../assets/Microsoft_Office_Excel_Logo_512px.png';
import pythonLogo from '../assets/Python-PNG-File.png';
import mysqlLogo from '../assets/logo-mysql-170x115.png';
import powerbiLogo from '../assets/icons8-power-bi-logo-144.png';
import { Reveal } from './Reveal';

const cards = [
    {
        title: "Excel + ChatGPT",
        description: "Complex formulas & pivot structures",
        stat: "50% faster prototyping",
        techLogo: excelLogo,
        aiLogo: chatgptLogo,
        color: "from-green-500/10 to-emerald-500/10",
        borderColor: "hover:border-green-500/50"
    },
    {
        title: "Python + Claude",
        description: "Code generation & debugging",
        stat: "60% reduction in EDA time",
        techLogo: pythonLogo,
        aiLogo: claudeLogo,
        color: "from-blue-500/10 to-indigo-500/10",
        borderColor: "hover:border-blue-500/50"
    },
    {
        title: "MySQL + Gemini",
        description: "Query optimization & test data",
        stat: "40% faster development",
        techLogo: mysqlLogo,
        aiLogo: geminiLogo,
        color: "from-purple-500/10 to-pink-500/10",
        borderColor: "hover:border-purple-500/50"
    },
    {
        title: "Power BI + Copilot",
        description: "DAX measures & viz debugging",
        stat: "3x faster dashboards",
        techLogo: powerbiLogo,
        aiLogo: copilotLogo,
        color: "from-yellow-500/10 to-amber-500/10",
        borderColor: "hover:border-yellow-500/50"
    }
];

const AIEnhancedWorkflow = () => {

    return (
        <section id="workflow" className="py-12 sm:py-16 md:py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 overflow-hidden">
            <Reveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Block */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                            AI-Enhanced Workflow
                        </h2>
                        <div className="inline-block px-4 py-1 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 shadow-sm">
                            <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-bold">
                                How I 3x My Analytical Productivity
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 20px -5px rgba(59, 130, 246, 0.2)",
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                className={`group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-500 ${card.borderColor} overflow-hidden min-h-[220px] sm:min-h-[250px] md:min-h-[280px] flex flex-col justify-between cursor-pointer`}
                            >
                                {/* Gradient Background Mask */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex-grow">
                                        {/* Logos */}
                                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                            <div className="p-2.5 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                                <img
                                                    src={card.techLogo}
                                                    alt="tech"
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <span className="text-xl font-black text-zinc-300 dark:text-zinc-600 transition-opacity duration-500 group-hover:opacity-40">+</span>
                                            <div className="p-2.5 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                                                <img
                                                    src={card.aiLogo}
                                                    alt="ai"
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 md:mb-8 font-medium leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Stats Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold text-[10px] uppercase tracking-wider shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:bg-white dark:group-hover:bg-zinc-800 w-fit">
                                        <div className="flex items-center justify-center p-1 rounded-lg bg-zinc-50 dark:bg-zinc-900 shadow-inner group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-500">
                                            <Zap className="w-3 h-3 text-yellow-500 group-hover:animate-pulse" fill="currentColor" />
                                        </div>
                                        {card.stat}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default AIEnhancedWorkflow;

