import { motion } from 'framer-motion';
import chatgptLogo from '../assets/openai.png';
import claudeLogo from '../assets/claude-color.png';
import geminiLogo from '../assets/gemini-color.png';
import excelLogo from '../assets/Microsoft_Office_Excel_Logo_512px.png';
import pythonLogo from '../assets/Python-PNG-File.png';
import mysqlLogo from '../assets/logo-mysql-170x115.png';
import powerbiLogo from '../assets/icons8-power-bi-logo-144.png';
import { Reveal } from './Reveal';

const coreTools = [
    {
        name: "Power BI",
        icon: powerbiLogo,
    },
    {
        name: "SQL",
        icon: mysqlLogo,
    },
    {
        name: "Python",
        icon: pythonLogo,
    },
    {
        name: "Excel",
        icon: excelLogo,
    }
];

const aiTools = [
    {
        name: "ChatGPT",
        icon: chatgptLogo,
        useCases: "Code generation & debugging",
        color: "from-green-500/10 to-emerald-500/10",
        borderColor: "hover:border-green-500/50"
    },
    {
        name: "Claude",
        icon: claudeLogo,
        useCases: "EDA planning & DAX logic",
        color: "from-amber-500/10 to-orange-500/10",
        borderColor: "hover:border-amber-500/50"
    },
    {
        name: "Gemini",
        icon: geminiLogo,
        useCases: "Query testing & optimization",
        color: "from-blue-500/10 to-indigo-500/10",
        borderColor: "hover:border-blue-500/50"
    }
];

const AIEnhancedWorkflow = () => {
    return (
        <section id="workflow" className="py-12 sm:py-16 bg-white dark:bg-zinc-900 overflow-hidden">
            <Reveal>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Block */}
                    <div className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">
                            Tools & Stack
                        </h2>
                        <p className="text-sm sm:text-base md:text-[15px] text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto px-4">
                            I use AI as a working tool — debugging DAX, generating Python logic, exploring data structure — with the decisions and interpretations staying entirely mine.
                        </p>
                    </div>

                    <div className="space-y-10 sm:space-y-12">
                        {/* Row 1: Core Tools */}
                        <div>
                            <h3 className="text-[11px] sm:text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4 sm:mb-5 text-center">
                                Core Tools
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                {coreTools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: index * 0.1, duration: 0.4 }
                                        }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-zinc-50/50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-600 transition-all duration-300 group"
                                    >
                                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-700/50 group-hover:scale-110 transition-transform duration-300">
                                            <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain" />
                                        </div>
                                        <span className="font-semibold text-sm sm:text-[15px] text-gray-800 dark:text-zinc-200">
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2: AI as part of the workflow */}
                        <div>
                            <h3 className="text-[11px] sm:text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4 sm:mb-5 text-center">
                                AI in the Workflow
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                                {aiTools.map((ai, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: index * 0.1, duration: 0.4 }
                                        }}
                                        viewport={{ once: true }}
                                        className={`relative p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 transition-all duration-300 ${ai.borderColor} overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:bg-white cursor-default flex flex-col items-center justify-between h-full min-h-[160px]`}
                                    >
                                        {/* Gradient Background Mask */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${ai.color} opacity-[0.03] group-hover:opacity-100 transition-opacity duration-500`} />
                                        
                                        <div className="relative z-10 flex flex-col items-center text-center w-full">
                                            <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <img src={ai.icon} alt={ai.name} className="w-8 h-8 object-contain" />
                                            </div>
                                            <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">
                                                {ai.name}
                                            </h4>
                                            <p className="text-[13px] text-gray-500 dark:text-gray-400 font-medium">
                                                {ai.useCases}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default AIEnhancedWorkflow;
