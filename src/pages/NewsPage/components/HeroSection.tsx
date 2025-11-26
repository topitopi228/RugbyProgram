// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    language: string;
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, title }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Mesh Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/80 to-blue-900/30"></div>

                {/* Animated Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        initial={{
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0,
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: `${Math.random() * 400 + 100}px`,
                            height: `${Math.random() * 400 + 100}px`,
                        }}
                    />
                ))}

                {/* Animated Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
                    }}
                ></div>
            </div>

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
                        {/* Badge */}
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
                            className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold tracking-wide text-yellow-400 uppercase bg-yellow-400/10 rounded-full border border-yellow-400/20 backdrop-blur-sm"
                        >
                            <span className="relative flex h-3 w-3 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                            </span>
                            {language === 'UA' ? 'Останні новини' : language === 'EN' ? 'Latest Updates' : 'Legfrissebb hírek'}
                        </motion.div>

                        {/* Main Title with Animated Gradient */}
                        <motion.h1
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 12
                                    }
                                }
                            }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-none"
                        >
                            <span className="relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-300% animate-gradient">
                                    {title}
                                </span>
                                <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/80 to-yellow-400/0 rounded-full"></span>
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
                            className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            {language === 'UA'
                                ? 'Дізнайтеся про останні події, досягнення та новини нашої команди'
                                : language === 'EN'
                                    ? 'Stay updated with the latest events, achievements, and team news'
                                    : 'Maradjon naprakész a legfrissebb eseményekről, eredményekről és csapathírekről'}
                        </motion.p>

                        {/* CTA Button with Hover Effect */}
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
                            className="mt-2"
                        >
                            <a
                                href="#news"
                                className="relative inline-flex items-center px-6 py-2.5 text-base font-medium text-blue-100 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300 hover:border-yellow-400/30 hover:text-yellow-300"
                            >
                                {language === 'UA' ? 'Читати новини' : language === 'EN' ? 'Read News' : 'Hírek olvasása'}
                                <svg
                                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Animated Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [20, 0, -10]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    >
                        <span className="text-sm font-medium text-blue-200/80 mb-3">
                            {language === 'UA' ? 'Прокрутіть вниз' : language === 'EN' ? 'Scroll down' : 'Görgessen le'}
                        </span>
                        <div className="w-10 h-16 border-2 border-blue-300/50 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-1 h-4 bg-gradient-to-b from-yellow-300 to-amber-400 rounded-full"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
