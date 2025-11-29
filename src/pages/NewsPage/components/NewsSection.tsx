// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const handleNewsClick = () => {
        navigate('/contact');
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
                    {news
                        .sort((a, b) => b.id - a.id)
                        .map((item, index) => (
                            <motion.article
                                key={item.id}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="group relative cursor-pointer"
                                onClick={handleNewsClick}
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                                
                                {/* Card Container */}
                                <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl">
                                    {/* Image Container with Overlay */}
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                                        <img
                                            src={`/news${item.id}.webp`}
                                            alt={item.title}
                                            loading={index < 3 ? "eager" : "lazy"}
                                            decoding="async"
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

                                        {/* Expense Badge */}
                                        {item.expense !== '0' && (
                                            <div className="absolute top-4 right-4 z-20">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                                                >
                                                    {item.expense}€
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-3">
                                        <h2 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                                            {item.title}
                                        </h2>
                                        
                                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.article>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
