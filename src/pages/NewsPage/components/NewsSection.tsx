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
            {/* Modern Background with Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"></div>
            
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Subtle Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
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
                                    className="group relative transition-all duration-300"
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                    
                                    {/* Card Container */}
                                    <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl ${isHovered ? 'min-h-full' : 'h-full'}`}>
                                    {/* Image Container with Overlay */}
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
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
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        
                                        {/* Date Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="bg-yellow-400/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-3">
                                        <h2 className={`text-xl font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors duration-300 ${isHovered ? '' : 'line-clamp-2'}`}>
                                            {item.title}
                                        </h2>
                                        
                                        {/* Ціна під заголовком */}
                                        {item.expense !== '0' && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/10">
                                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                                                </svg>
                                                <span className="text-emerald-400 text-sm font-semibold">{expenseText[language]}</span>
                                                <span className="text-white text-sm font-bold">{item.expense}€</span>
                                            </div>
                                        )}
                                        
                                        <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-500 ${isHovered ? '' : 'line-clamp-3'}`}>
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.article>
                            );
                        })}
                </div>

                {/* Пагінація */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-3">
                        {/* Кнопка Попередня */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 disabled:bg-slate-900/50 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 disabled:hover:border-slate-700/50"
                        >
                            ←
                        </button>

                        {/* Номери сторінок */}
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`
                                        px-4 py-2 font-semibold rounded-xl border transition-all duration-300
                                        ${currentPage === pageNumber
                                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 border-amber-400 shadow-lg shadow-amber-500/30'
                                            : 'bg-slate-800/80 hover:bg-slate-700/80 text-white border-slate-700/50 hover:border-amber-500/30'
                                        }
                                    `}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        </div>

                        {/* Кнопка Наступна */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 disabled:bg-slate-900/50 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 disabled:hover:border-slate-700/50"
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
