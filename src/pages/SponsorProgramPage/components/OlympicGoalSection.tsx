// @ts-nocheck
import { motion } from 'framer-motion';

interface OlympicGoalSectionProps {
    olympicTitle: string;
    olympicGoal: string;
}

const OlympicGoalSection: React.FC<OlympicGoalSectionProps> = ({ olympicTitle, olympicGoal }) => {
    return (
        <div className="relative py-20 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900"></div>
                {/* Animated Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Creative Card with Image Background */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/olymp.png"
                                alt="Olympic goal"
                                loading="eager"
                                className="w-full h-full object-cover"
                            />
                            {/* Modern Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-950/95"></div>
                            
                            {/* Decorative Grid Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px'
                            }}></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
                            {/* Olympic Rings with Glow */}
                            <div className="flex justify-center mb-10">
                                <div className="relative">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 flex space-x-2 sm:space-x-3 blur-xl opacity-50">
                                        {['#0085C7', '#000000', '#DF0024', '#F4C300', '#009F3D'].map((color, i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                    {/* Actual Rings */}
                                    <div className="relative flex space-x-2 sm:space-x-3">
                                        {['#0085C7', '#000000', '#DF0024', '#F4C300', '#009F3D'].map((color, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px]"
                                                style={{
                                                    borderColor: color,
                                                    boxShadow: `0 0 20px ${color}40`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Title with Creative Typography */}
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                        <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                            {olympicTitle}
                                        </span>
                                    </h2>
                                    
                                    {/* Decorative Element */}
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                                    </div>
                                </motion.div>

                                {/* Description with Better Typography */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-lg md:text-2xl text-slate-100 leading-relaxed max-w-4xl mx-auto font-light"
                                >
                                    {olympicGoal}
                                </motion.p>
                            </div>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OlympicGoalSection;
