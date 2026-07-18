// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Image Section */}
            <div className="relative h-[450px] md:h-[65vh] w-full overflow-hidden mt-20">
                <picture>
                    <source 
                        media="(max-width: 768px)" 
                        srcSet="/background_main_page.webp" 
                        type="image/webp"
                    />
                    <img
                        src="/background_main_page.webp"
                        alt="Rugby team"
                        fetchPriority="high"
                        loading="eager"
                        className="w-full h-full object-cover object-[center_45%]"
                    />
                </picture>
                {/* Gradient overlays - smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-slate-900/95"></div>
                {/* Additional bottom gradient for smoother blend */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-900"></div>
            </div>

            {/* Text Section Below Image */}
            <div className="relative bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
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
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                            {language === 'UA'
                                ? 'Юнацька Збірна України'
                                : language === 'EN'
                                    ? 'Ukrainian Youth National Team'
                                    : 'Ukrán Ifjúsági Válogatott'}
                        </span>
                        <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 mt-3">
                            {language === 'UA'
                                ? 'з регбі-7s U17'
                                : language === 'EN'
                                    ? 'Rugby 7s U17'
                                    : 'Rögbi 7s U17'}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
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
