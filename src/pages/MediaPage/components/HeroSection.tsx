// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h1 className="text-4xl md:text-5xl md:mt-13 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                {language === 'UA' ? 'Медіа' : language === 'EN' ? 'Media' : 'Média'}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                {language === 'UA' ? 'Останні відео та фото з тренувань та матчів нашої команди' : language === 'EN' ? "Latest videos and photos from our team's training sessions and matches" : 'Legfrissebb videók és képek csapatunk edzéseiről és mérkőzéseiről'}
            </p>
        </motion.div>
    );
};

export default HeroSection;
