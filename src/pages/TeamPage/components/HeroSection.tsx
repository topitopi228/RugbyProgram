// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="relative h-[500px] md:h-[80vh] w-full overflow-hidden">
            <img
                src="/backteam.webp"
                alt="Rugby team"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-end pb-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4 px-4 text-yellow-400"
                >
                    {title}
                </motion.h1>
            </div>
        </div>
    );
};

export default HeroSection;
