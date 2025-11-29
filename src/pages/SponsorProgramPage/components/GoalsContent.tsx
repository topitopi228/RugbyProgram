// @ts-nocheck
import { motion } from 'framer-motion';

interface GoalsContentProps {
    europeanGoal: string;
}

const GoalsContent: React.FC<GoalsContentProps> = ({ europeanGoal }) => {
    return (
        <div className="relative py-20 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Text Content with Modern Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-purple-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                                Європейські амбіції
                            </span>
                        </div>
                        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                            {europeanGoal}
                        </p>
                    </div>
                </motion.div>

                {/* Creative Image Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* First Image - Tilted Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700/50">
                                <img
                                    src="/iq1.webp"
                                    alt="Rugby team training"
                                    loading="eager"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Image - Tilted Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700/50">
                                <img
                                    src="/iq2.webp"
                                    alt="Rugby team in action"
                                    loading="eager"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Element */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 mx-auto mt-16 rounded-full"
                ></motion.div>
            </div>
        </div>
    );
};

export default GoalsContent;
