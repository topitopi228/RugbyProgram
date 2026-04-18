// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
    language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
    return (
        <div className="w-full relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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

            <div className="relative text-white py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto relative z-10"
                >
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-3 py-1.5 mb-4 text-xs font-semibold tracking-wide text-yellow-400 uppercase bg-yellow-400/10 rounded-full border border-yellow-400/20 backdrop-blur-sm"
                        >
                            {language === 'UA' ? 'Зв\'яжіться з нами' : language === 'EN' ? 'Get in touch' : 'Lépjen kapcsolatba'}
                        </motion.div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                            {language === 'UA' ? 'Залишились питання?' : language === 'EN' ? 'Have questions?' : 'Kérdése van?'}
                        </h2>
                        <p className="text-sm text-slate-300 max-w-xl mx-auto">
                            {language === 'UA'
                                ? 'Зв\'яжіться з нами зручним для вас способом!'
                                : language === 'EN'
                                    ? 'Contact us in any convenient way!'
                                    : 'Lépjen velünk kapcsolatba bármilyen kényelmes módon!'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {/* Phone */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            href="tel:+380509498209"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 rounded-xl border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl flex flex-col items-center text-center h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                    {language === 'UA' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Telefon'}
                                </span>
                                <span className="text-slate-300 text-sm font-medium">+380 50 949 82 09</span>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -8 }}
                            href="mailto:shashero10@gmail.com"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 rounded-xl border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl flex flex-col items-center text-center h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Email</span>
                                <span className="text-slate-300 text-sm font-medium break-all">shashero10@gmail.com</span>
                            </div>
                        </motion.a>

                        {/* Telegram */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -8 }}
                            href="https://t.me/Shashero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 rounded-xl border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl flex flex-col items-center text-center h-full">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </div>
                                <span className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">Telegram</span>
                                <span className="text-slate-300 text-sm font-medium">@Shashero</span>
                            </div>
                        </motion.a>
                    </div>

                    <div className="mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center px-6 py-3 mb-6 text-base font-bold tracking-wider text-yellow-400 uppercase bg-yellow-400/10 rounded-full border-2 border-yellow-400/30 backdrop-blur-sm shadow-lg shadow-yellow-400/20"
                            >
                                {language === 'UA' ? 'Партнери' : language === 'EN' ? 'Partners' : 'Partnerek'}
                            </motion.div>
                        </motion.div>

                        <div className="relative py-8 overflow-hidden">
                            {/* Gradient overlays for smooth fade effect */}
                            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>

                            {/* Infinite scrolling marquee */}
                            <div className="flex">
                                <div className="flex animate-marquee">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <div
                                            key={`set1-${num}`}
                                            className="mx-6 md:mx-8 flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="relative">
                                                {/* Glow effect on hover */}
                                                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

                                                {/* Logo container */}
                                                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl p-4 md:p-5 border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-300 shadow-2xl">
                                                    <img
                                                        src={`/spin-${num}.webp`}
                                                        alt={`Sponsor ${num}`}
                                                        className="h-12 md:h-14 w-auto max-w-[120px] md:max-w-[150px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Duplicate for seamless loop */}
                                <div className="flex animate-marquee" aria-hidden="true">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <div
                                            key={`set2-${num}`}
                                            className="mx-6 md:mx-8 flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="relative">
                                                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
                                                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl p-4 md:p-5 border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-300 shadow-2xl">
                                                    <img
                                                        src={`/spin-${num}.webp`}
                                                        alt={`Sponsor ${num}`}
                                                        className="h-12 md:h-14 w-auto max-w-[120px] md:max-w-[150px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactSection;
