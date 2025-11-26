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

    const handleNewsClick = (id: number) => {
        navigate(`/news/${id}`);
    };

    return (
        <div id="news" className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
                {news
                    .sort((a, b) => b.id - a.id)
                    .map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
                            onClick={() => handleNewsClick(item.id)}
                        >
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 md:w-1/3">
                                    <div className="h-64 md:h-full overflow-hidden">
                                        <img
                                            src={`/news${item.id}.webp`}
                                            alt={item.title}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/backmaj.webp';
                                            }}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-yellow-400 text-sm font-medium mb-2">
                                                {item.date}
                                            </div>
                                            <h2 className="text-2xl font-bold text-white mb-3">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Modern Expense Badge */}
                                        <div className="ml-4 flex-shrink-0">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="relative group"
                                            >
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-xl px-3 py-2 hover:border-emerald-400/40 transition-all duration-300">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="text-center">
                                                            <div className="text-xs text-emerald-300 font-medium leading-tight">
                                                                {language === 'UA' ? 'БУЛО ВИТРАЧЕНО' : language === 'EN' ? 'WAS SPENT' : 'ELKÖLTÖTTEK'}
                                                            </div>
                                                            <div className="text-lg font-bold text-emerald-400 leading-tight">
                                                                {item.expense}€
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default NewsSection;
