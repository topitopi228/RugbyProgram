// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    return (
        <div className="relative h-[500px] md:h-[80vh] w-full overflow-hidden">
            <img
                src="/spon_back.webp"
                alt="Rugby team"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 md:mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto w-full text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:mt-5 mb-4 leading-tight  text-white drop-shadow-lg"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 ">
                            {language === 'UA'
                                ? 'Юнацька Збірна України'
                                : language === 'EN'
                                    ? 'Ukrainian Youth National Team'
                                    : 'Ukrán Ifjúsági Válogatott'}
                        </span>
                        <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-blue-100 mt-2 md:mt-3">
                            {language === 'UA'
                                ? 'з регбі-7s U16'
                                : language === 'EN'
                                    ? 'Rugby 7s U16'
                                    : 'Rögbi 7s U16'}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mt-6 leading-relaxed"
                    >
                        {language === 'UA'
                            ? 'Об\'єднуємо таланти, виховуємо чемпіонів, пишемо історію українського регбі разом'
                            : language === 'EN'
                                ? 'Uniting talents, raising champions, writing the history of Ukrainian rugby together'
                                : 'Tehetségeket egyesítünk, bajnokokat nevelünk, közösen írjuk az ukrán rögbi történetét'}
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
