// @ts-nocheck
import React from 'react';

interface HeroSectionProps {
    language: string;
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, title }) => {

    return (
        <div className="relative w-full bg-black border-b border-white/10 overflow-hidden">
            {/* Accent bar: yellow + blue for richer color use */}
            <div className="flex h-1.5 w-full">
                <div className="h-full w-2/3 bg-brand-yellow" />
                <div className="h-full w-1/3 bg-brand-blue" />
            </div>

            <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-6xl mx-auto w-full text-center">
                    <div className="animate-fade-up inline-flex items-center px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase text-brand-yellow border border-brand-yellow/40">
                        {language === 'UA' ? 'Останні новини' : language === 'EN' ? 'Latest Updates' : 'Legfrissebb hírek'}
                    </div>

                    <h1 className="animate-fade-up-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] uppercase text-white">
                        {title}
                    </h1>

                    <p className="animate-fade-up-2 text-base md:text-lg text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {language === 'UA'
                            ? 'Дізнайтеся про останні події, досягнення та новини нашої команди'
                            : language === 'EN'
                                ? 'Stay updated with the latest events, achievements, and team news'
                                : 'Maradjon naprakész a legfrissebb eseményekről, eredményekről és csapathírekről'}
                    </p>

                    <div className="animate-fade-up-3 flex flex-wrap justify-center gap-4">
                        <a
                            href="#news"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold uppercase tracking-wide text-black bg-brand-yellow hover:bg-white transition-all duration-200 hover:-translate-y-1"
                        >
                            {language === 'UA' ? 'Читати новини' : language === 'EN' ? 'Read News' : 'Hírek olvasása'}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
