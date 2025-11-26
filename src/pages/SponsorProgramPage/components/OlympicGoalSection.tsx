// @ts-nocheck
import { motion } from 'framer-motion';

interface OlympicGoalSectionProps {
    olympicTitle: string;
    olympicGoal: string;
}

const OlympicGoalSection: React.FC<OlympicGoalSectionProps> = ({ olympicTitle, olympicGoal }) => {
    return (
        <div className="relative w-full flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6">
            <div className="relative w-full max-w-6xl mx-auto">
                {/* Background with parallax effect */}
                <motion.div
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative h-full w-full">
                        <img
                            src="/olymp.png"
                            alt="Olympic goal"
                            className="w-full h-full object-cover transform-gpu will-change-transform"
                        />
                        {/* Updated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-teal-900/70" />
                        {/* Subtle noise texture */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBvcGFjaXR5PSIwLjA1Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+')] opacity-10" />
                    </div>
                </motion.div>

                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="backdrop-blur-sm bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-lg" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-teal-400 rounded-br-lg" />

                        <div className="relative">
                            {/* Olympic rings icon */}
                            <motion.div
                                className="flex justify-center mb-6"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="flex space-x-2 sm:space-x-3">
                                    {['#0085C7', '#000000', '#DF0024', '#F4C300', '#009F3D'].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-[3px]"
                                            style={{
                                                borderColor: color,
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                {olympicTitle}
                            </motion.h2>

                            <motion.div
                                className="w-20 h-1 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto mb-6 sm:mb-8 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />

                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed sm:leading-relaxed font-light tracking-wide"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                {olympicGoal}
                            </motion.p>

                            {/* Animated scroll indicator */}
                            <motion.div
                                className="mt-8 flex flex-col items-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.6 }}
                            >
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OlympicGoalSection;
