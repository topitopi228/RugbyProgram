// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    fadeIn: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, fadeIn }) => {
    return (
        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0">
                <img
                    src="/backmaj.webp"
                    alt="Rugby team"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto w-full text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                            About Us
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 drop-shadow-lg">
                            {title}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8 rounded-full"
                    ></motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
    );
};

export default HeroSection;
