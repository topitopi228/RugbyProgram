// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    fadeIn: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, fadeIn }) => {
    return (
        <div className="relative h-[60vh] w-full overflow-hidden">
            <img
                src="/backmaj.webp"
                alt="Rugby team"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto w-full text-center"
                >
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                            {title}
                        </span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
