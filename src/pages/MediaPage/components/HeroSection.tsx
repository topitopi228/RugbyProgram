// @ts-nocheck
import { motion } from 'framer-motion';
import { FaCamera, FaVideo } from 'react-icons/fa';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <div className="relative text-center mb-16 pt-24 pb-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/30 blur-3xl"
                />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.15 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute left-[10%] top-1/2 -translate-y-1/2"
                >
                    <FaCamera className="w-16 h-16 text-amber-400" />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.15 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute right-[10%] top-1/2 -translate-y-1/2"
                >
                    <FaVideo className="w-16 h-16 text-yellow-400" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative inline-block">
                        {/* Text Shadow Layer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent blur-sm opacity-70">
                            {title}
                        </span>
                        {/* Main Text */}
                        <span className="relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
                            {title}
                        </span>
                        {/* Animated Underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-center"
                        />
                    </h1>
                </motion.div>

                {/* Subtitle */}
                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative Lines */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="h-px w-16 bg-gradient-to-r from-transparent to-slate-500"
                            />
                            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="h-px w-16 bg-gradient-to-l from-transparent to-slate-500"
                            />
                        </div>

                        {/* Subtitle Text */}
                        <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
