// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    language: string;
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, title }) => {

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
            {/* Animated Gradient Mesh */}
            <motion.div 
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Premium Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgb(255 255 255) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(255 255 255) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            ></div>

            {/* Hero Content */}
            <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        className="text-center"
                    >
                        {/* Premium Badge with Rugby Ball Icon */}
                        <motion.div
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 10
                                    }
                                }
                            }}
                            className="relative inline-flex items-center px-6 py-3 mb-10 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full border-2 border-indigo-400/40 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
                            <span className="relative bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                {language === 'UA' ? 'Останні новини' : language === 'EN' ? 'Latest Updates' : 'Legfrissebb hírek'}
                            </span>
                        </motion.div>

                        {/* Epic Gradient Title */}
                        <motion.h1
                            variants={{
                                hidden: { y: 30, opacity: 0, scale: 0.9 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 80,
                                        damping: 15
                                    }
                                }
                            }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.1]"
                        >
                            <span className="relative inline-block">
                                {/* Multi-layer glow */}
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl opacity-40"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-30 animate-pulse"></span>
                                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow-2xl">
                                    {title}
                                </span>
                                {/* Decorative underline */}
                                <motion.span 
                                    className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"
                                    animate={{
                                        boxShadow: ['0 0 20px rgba(99, 102, 241, 0.5)', '0 0 40px rgba(168, 85, 247, 0.7)', '0 0 20px rgba(99, 102, 241, 0.5)']
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.2,
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 12
                                    }
                                }
                            }}
                            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed font-medium"
                        >
                            {language === 'UA'
                                ? 'Дізнайтеся про останні події, досягнення та новини нашої команди'
                                : language === 'EN'
                                    ? 'Stay updated with the latest events, achievements, and team news'
                                    : 'Maradjon naprakész a legfrissebb eseményekről, eredményekről és csapathírekről'}
                        </motion.p>

                        {/* Premium CTA Buttons */}
                        <motion.div
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.3,
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 12
                                    }
                                }
                            }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.a
                                href="#news"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center px-10 py-4 text-lg font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/50"
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative flex items-center gap-2">
                                    {language === 'UA' ? 'Читати новини' : language === 'EN' ? 'Read News' : 'Hírek olvasása'}
                                    <motion.svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </motion.svg>
                                </span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Modern Scroll Indicator */}
                    <motion.a
                        href="#news"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            y: [20, 0, -10]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                    >
                        <span className="text-xs font-bold text-slate-400/80 mb-3 uppercase tracking-widest group-hover:text-indigo-300 transition-colors">
                            {language === 'UA' ? 'Прокрутіть вниз' : language === 'EN' ? 'Scroll down' : 'Görgessen le'}
                        </span>
                        <div className="relative">
                            {/* Multi-color glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                            <div className="relative w-10 h-16 border-2 border-indigo-400/40 group-hover:border-purple-400/70 rounded-full flex justify-center p-1 backdrop-blur-md bg-slate-900/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2 h-5 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-lg"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
