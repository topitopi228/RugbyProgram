// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 pt-20"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                {title}
            </h1>
            {subtitle && (
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default HeroSection;
