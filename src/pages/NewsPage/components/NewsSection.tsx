// @ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

    const fadeInUp = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { duration: 0 }
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Скролимо до секції новин
        document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="news" className="relative py-24 px-4 overflow-hidden">
            {/* Gradient Blue Background like in photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744] via-[#0f1829] to-[#1a2744]"></div>
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-blue-950/30"></div>
            
            {/* Very subtle grid */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="relative container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {currentNews.map((item, index) => {
                            const isHovered = hoveredId === item.id;
                            return (
                                <motion.article
                                    key={item.id}
                                    initial="hidden"
                                    animate="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={fadeInUp}
                                    className="group relative transition-all duration-500 hover:-translate-y-2"
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Premium Glow on Hover */}
                                    <div className="absolute -inset-1 bg-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                                    
                                    {/* Card Container with Modern Border */}
                                    <div className={`relative bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-xl ${isHovered ? 'border-amber-400/60 shadow-2xl shadow-amber-500/10 min-h-full' : 'border-slate-700/40 h-full'}`}>
                                    {/* Image Container with Overlay */}
                                    <div className="relative h-56 overflow-hidden">
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
                                        
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl z-10"></div>
                                        
                                        <img
                                            src={`/news${item.id}.webp`}
                                            alt={item.title}
                                            loading={index < 6 ? "eager" : "lazy"}
                                            decoding="async"
                                            fetchPriority={index < 3 ? "high" : "low"}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/backmaj.webp';
                                            }}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        
                                        {/* Modern Date Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur"></div>
                                                <div className="relative bg-slate-900/80 backdrop-blur-md border border-amber-400/30 text-amber-400 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h2 className={`text-xl font-bold text-white leading-tight group-hover:text-amber-400 transition-colors duration-300 ${isHovered ? '' : 'line-clamp-2'}`}>
                                            {item.title}
                                        </h2>
                                        
                                        {/* Modern Price Badge */}
                                        {item.expense !== '0' && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-lg backdrop-blur-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                                <span className="text-slate-400 text-xs font-medium">{expenseText[language]}</span>
                                                <span className="text-emerald-400 text-sm font-bold">{item.expense}€</span>
                                            </div>
                                        )}
                                        
                                        <p className={`text-slate-400 text-sm leading-relaxed transition-all duration-500 ${isHovered ? '' : 'line-clamp-3'}`}>
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Modern Bottom Accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400/0 group-hover:bg-amber-400/60 transition-all duration-500">
                                        <div className="absolute inset-0 bg-amber-400/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </motion.article>
                            );
                        })}
                </div>

                {/* Modern Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-3">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="group relative px-5 py-3 bg-slate-900/60 hover:bg-slate-800/80 disabled:bg-slate-900/30 disabled:cursor-not-allowed disabled:opacity-40 text-white font-semibold rounded-xl border-2 border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 disabled:hover:border-slate-700/50 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-xl transition-all duration-300"></div>
                            <span className="relative">←</span>
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`
                                        relative px-5 py-3 font-bold rounded-xl border-2 transition-all duration-300 backdrop-blur-sm
                                        ${currentPage === pageNumber
                                            ? 'bg-amber-500 text-slate-900 border-amber-400 shadow-lg shadow-amber-500/30 scale-105'
                                            : 'bg-slate-900/60 hover:bg-slate-800/80 text-white border-slate-700/50 hover:border-amber-400/40 hover:scale-105'
                                        }
                                    `}
                                >
                                    {currentPage === pageNumber && (
                                        <div className="absolute inset-0 bg-amber-400/20 rounded-xl blur"></div>
                                    )}
                                    <span className="relative">{pageNumber}</span>
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="group relative px-5 py-3 bg-slate-900/60 hover:bg-slate-800/80 disabled:bg-slate-900/30 disabled:cursor-not-allowed disabled:opacity-40 text-white font-semibold rounded-xl border-2 border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 disabled:hover:border-slate-700/50 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-xl transition-all duration-300"></div>
                            <span className="relative">→</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsSection;
