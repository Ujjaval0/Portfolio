import chatgptLogo from '../assets/openai.png';
import claudeLogo from '../assets/claude-color.png';
import geminiLogo from '../assets/gemini-color.png';
import excelLogo from '../assets/Microsoft_Office_Excel_Logo_512px.png';
import pythonLogo from '../assets/Python-PNG-File.png';
import mysqlLogo from '../assets/logo-mysql-170x115.png';
import powerbiLogo from '../assets/icons8-power-bi-logo-144.png';

const AIEnhancedWorkflow = () => {
    const techStack = [
        { logo: excelLogo, name: 'Microsoft Excel' },
        { logo: pythonLogo, name: 'Python' },
        { logo: mysqlLogo, name: 'MySQL' },
        { logo: powerbiLogo, name: 'Power BI' },
    ];

    const aiTools = [
        { logo: chatgptLogo, name: 'ChatGPT' },
        { logo: claudeLogo, name: 'Claude' },
        { logo: geminiLogo, name: 'Gemini' },
    ];

    return (
        <section className="py-16 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        AI-Enhanced Workflow
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Core Skills Amplified with AI
                    </p>
                </div>

                {/* Tech Stack Row - 4 Items with Custom PNG Logos */}
                <div className="flex justify-center gap-12 mb-8">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="p-4 transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Enhanced Using Badge */}
                <div className="flex justify-center my-8">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-6 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                        Enhanced using
                    </span>
                </div>

                {/* AI Tools Row - 3 Items with Custom PNG Logos */}
                <div className="flex justify-center gap-12 mb-10">
                    {aiTools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="p-4 transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        For debugging, optimization, automation, and rapid problem-solving across my technical stack.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AIEnhancedWorkflow;
