// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
    language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
    return (
        <div className="w-full">
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 text-white py-12 px-4 sm:px-6 lg:px-8 relative w-full overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mix-blend-soft-light transform rotate-45"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto relative z-10"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                            {language === 'UA' ? 'Залишились питання?' : language === 'EN' ? 'Have questions?' : 'Kérdése van?'}
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {language === 'UA'
                                ? 'Зв\'яжіться з нами зручним для вас способом!'
                                : language === 'EN'
                                    ? 'Contact us in any convenient way!'
                                    : 'Lépjen velünk kapcsolatba bármilyen kényelmes módon!'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Phone */}
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="tel:+48501820396"
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-yellow-300 mb-2">
                                {language === 'UA' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Telefon'}
                            </span>
                            <span className="text-blue-100">+48 501 820 396</span>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="shashero10@gmail.com"
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-yellow-300 mb-2">Email</span>
                            <span className="text-blue-100 break-all text-sm">shashero10@gmail.com</span>
                        </motion.a>

                        {/* Telegram */}
                        <motion.a
                            whileHover={{ y: -5 }}
                            href="https://t.me/Shashero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-yellow-300 mb-2">Telegram</span>
                            <span className="text-blue-100">@Shashero</span>
                        </motion.a>
                    </div>

                    <div className="mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h3 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                                {language === 'UA' ? 'Наші спонсори' : language === 'EN' ? 'Our Sponsors' : 'Szponzoraink'}
                            </h3>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="relative py-8 overflow-hidden">
                            {/* Gradient overlays for smooth fade effect */}
                            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-blue-900 via-blue-900/80 to-transparent z-10 pointer-events-none"></div>

                            {/* Infinite scrolling marquee */}
                            <div className="flex">
                                <div className="flex animate-marquee">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div
                                            key={`set1-${num}`}
                                            className="mx-6 md:mx-8 flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="relative">
                                                {/* Glow effect on hover */}
                                                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                                                
                                                {/* Logo container */}
                                                <div className="relative bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/20">
                                                    <img
                                                        src={`/spin-${num}.webp`}
                                                        alt={`Sponsor ${num}`}
                                                        className="h-16 md:h-20 w-auto max-w-[150px] md:max-w-[200px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Duplicate for seamless loop */}
                                <div className="flex animate-marquee" aria-hidden="true">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div
                                            key={`set2-${num}`}
                                            className="mx-6 md:mx-8 flex-shrink-0 group cursor-pointer"
                                        >
                                            <div className="relative">
                                                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                                                <div className="relative bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/20">
                                                    <img
                                                        src={`/spin-${num}.webp`}
                                                        alt={`Sponsor ${num}`}
                                                        className="h-16 md:h-20 w-auto max-w-[150px] md:max-w-[200px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex justify-center gap-2 mt-8">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactSection;
