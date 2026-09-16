import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
    language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full overflow-hidden bg-black mt-20">
            <div className="flex flex-col md:flex-row md:min-h-[70vh]">
                {/* Text Column */}
                <div className="relative w-full md:w-[55%] flex items-center order-2 md:order-1 bg-gradient-to-br from-black via-black to-brand-blue/10 px-4 sm:px-6 lg:px-12 py-14 md:py-0">
                    <div className="max-w-xl mx-auto md:mx-0 md:ml-auto md:mr-0 w-full">
                        <span className="animate-fade-up inline-block mb-5 px-4 py-2 border border-brand-yellow/40 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                            {language === 'UA'
                                ? 'Регбі-7s U17'
                                : language === 'EN'
                                    ? 'Rugby 7s U17'
                                    : 'Rögbi 7s U17'}
                        </span>

                        <h1 className="animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase tracking-tight">
                            <span className="text-brand-yellow">
                                {language === 'UA'
                                    ? 'Юнацька Збірна України'
                                    : language === 'EN'
                                        ? 'Ukrainian Youth National Team'
                                        : 'Ukrán Ifjúsági Válogatott'}
                            </span>
                        </h1>

                        <p className="animate-fade-up-1 text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
                            {language === 'UA'
                                ? 'Об\'єднуємо таланти, виховуємо чемпіонів, пишемо історію українського регбі разом'
                                : language === 'EN'
                                    ? 'Uniting talents, raising champions, writing the history of Ukrainian rugby together'
                                    : 'Tehetségeket egyesítünk, bajnokokat nevelünk, közösen írjuk az ukrán rögbi történetét'}
                        </p>

                        <div className="animate-fade-up-2">
                            <button
                                onClick={() => navigate('/team')}
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-yellow hover:bg-yellow-300 text-black font-bold uppercase tracking-wide text-sm sm:text-base transition-colors"
                            >
                                {language === 'UA'
                                    ? 'Познайомитися з командою'
                                    : language === 'EN'
                                        ? 'Meet the Team'
                                        : 'Ismerje meg a csapatot'}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative w-full md:w-[45%] order-1 md:order-2 h-[320px] md:h-auto">
                    <div className="relative h-full w-full border border-white/10 border-l-4 md:border-l-4 border-l-brand-yellow overflow-hidden">
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
                        <div className="absolute inset-0 bg-black/30"></div>
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-brand-blue/70"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
