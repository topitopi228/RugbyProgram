// @ts-nocheck
import React, { useState } from 'react';

interface NewsItem {
    id: number;
    date: string;
    title: string;
    description: string;
    expense: string;
    image?: string;
}

interface NewsSectionProps {
    news: NewsItem[];
    language: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({ news, language }) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;

    // Переклади для відображення витрат
    const expenseText = {
        UA: 'Витрачено:',
        EN: 'Spent:',
        HUN: 'Költött:'
    };

    // Розраховуємо індекси для поточної сторінки
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const sortedNews = news.sort((a, b) => b.id - a.id);
    const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(news.length / newsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Скролимо до секції новин
        document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="news" className="relative bg-black py-24 px-4">
            <div className="relative container mx-auto max-w-6xl">
                <div className="animate-fade-up mb-14 flex items-end justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-1 w-10 bg-brand-yellow" />
                            <span className="h-1 w-4 bg-brand-blue" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white leading-tight">
                            {language === 'UA' ? 'Стрічка новин' : language === 'EN' ? 'News Feed' : 'Hírfolyam'}
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {currentNews.map((item, index) => {
                        const isHovered = hoveredId === item.id;
                        const isBlue = index % 2 === 1;
                        const accentText = isBlue ? 'text-brand-blue' : 'text-brand-yellow';
                        const accentBorder = isBlue ? 'border-brand-blue/60' : 'border-brand-yellow/60';
                        const hoverBorder = isBlue ? 'hover:border-brand-blue' : 'hover:border-brand-yellow';
                        const hoverTitle = isBlue ? 'group-hover:text-brand-blue' : 'group-hover:text-brand-yellow';

                        return (
                            <article
                                key={item.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div
                                    className={`relative bg-neutral-950 border border-white/10 rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 ${hoverBorder} ${
                                        item.image ? 'md:flex md:flex-row' : ''
                                    }`}
                                >
                                    {item.image && (
                                        <div className="relative w-full md:w-[38%] h-56 md:h-auto overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading={index < 6 ? 'eager' : 'lazy'}
                                                decoding="async"
                                                fetchPriority={index < 3 ? 'high' : 'low'}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = '/backmaj.webp';
                                                }}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Date Badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <div className={`bg-black border ${accentBorder} ${accentText} px-4 py-2 text-xs font-bold uppercase tracking-wide`}>
                                                    {item.date}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-center">
                                        {!item.image && (
                                            <div className={`inline-flex self-start bg-black border ${accentBorder} ${accentText} px-4 py-2 text-xs font-bold uppercase tracking-wide`}>
                                                {item.date}
                                            </div>
                                        )}

                                        <h2 className={`text-xl md:text-2xl font-bold text-white leading-tight uppercase transition-colors duration-200 ${hoverTitle} ${isHovered ? '' : 'line-clamp-2'}`}>
                                            {item.title}
                                        </h2>

                                        {/* Price Badge */}
                                        {item.expense !== '0' && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 self-start">
                                                <span className="text-neutral-400 text-xs font-medium uppercase">{expenseText[language]}</span>
                                                <span className={`${accentText} text-sm font-bold`}>{item.expense}€</span>
                                            </div>
                                        )}

                                        <p className={`text-neutral-400 text-sm leading-relaxed ${isHovered ? '' : 'line-clamp-3'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-3">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-5 py-3 bg-neutral-950 hover:border-brand-yellow disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold border border-white/10 transition-colors duration-300"
                        >
                            ←
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`
                                        px-5 py-3 font-bold border transition-colors duration-300
                                        ${currentPage === pageNumber
                                            ? 'bg-brand-yellow text-black border-brand-yellow'
                                            : 'bg-neutral-950 text-white border-white/10 hover:border-brand-yellow'
                                        }
                                    `}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-5 py-3 bg-neutral-950 hover:border-brand-yellow disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold border border-white/10 transition-colors duration-300"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsSection;
