// @ts-nocheck
import { motion } from 'framer-motion';

interface ContactSectionProps {
    language: string;
    contactTitle: string;
    contactText: string;
    contactPhone: string;
    contactEmail: string;
    contactTelegram: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    language,
    contactTitle,
    contactText,
    contactPhone,
    contactEmail,
    contactTelegram
}) => {
    return (
        <div id="ggwp" className="w-full">
            <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 text-white py-12 px-4 sm:px-6 lg:px-8 relative w-full rounded-2xl overflow-hidden">
                {/* Animated background elements */}
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
                            {contactTitle}
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {contactText}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
                        {/* Phone */}
                        <motion.a
                            whileHover={{ y: -3 }}
                            href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                            className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-yellow-300 mb-0.5 sm:mb-1 text-center">
                                {language === 'UA' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Telefon'}
                            </span>
                            <span className="text-[10px] sm:text-xs text-blue-100 text-center">{contactPhone}</span>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            whileHover={{ y: -3 }}
                            href={`mailto:${contactEmail}`}
                            className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-yellow-300 mb-0.5 sm:mb-1">Email</span>
                            <span className="text-[10px] sm:text-xs text-blue-100 text-center break-all line-clamp-2">{contactEmail}</span>
                        </motion.a>

                        {/* Telegram */}
                        <motion.a
                            whileHover={{ y: -3 }}
                            href={`https://${contactTelegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-yellow-300 mb-0.5 sm:mb-1">Telegram</span>
                            <span className="text-[10px] sm:text-xs text-blue-100 text-center">@{contactTelegram.split('/').pop()}</span>
                        </motion.a>

                        {/* Instagram */}
                        <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.instagram.com/ukraine_u16_rugby7s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 group-hover:bg-yellow-500/20 transition-colors">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-yellow-300 mb-0.5 sm:mb-1">Instagram</span>
                            <span className="text-[10px] sm:text-xs text-blue-100 text-center">@ukraine_u16_rugby7s</span>
                        </motion.a>
                    </div>

                    {/* Sponsors Section */}
                    <div className="mt-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-4xl font-bold text-center mb-8 text-yellow-300"
                        >
                            {language === 'UA' ? 'Наші спонсори' : language === 'EN' ? 'Our Sponsors' : 'Szponzoraink'}
                        </motion.h3>

                        <div className="relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
                            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

                            <div className="flex space-x-8 py-4 animate-marquee whitespace-nowrap">
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={num} className="inline-flex items-center justify-center px-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                            <img
                                                src={`/spin-${num}.webp`}
                                                alt={`Sponsor ${num}`}
                                                className="h-12 w-auto max-w-[150px] object-contain  hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={`dup-${num}`} className="inline-flex items-center justify-center px-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                            <img
                                                src={`/spin-${num}.webp`}
                                                alt={`Sponsor ${num}`}
                                                className="h-12 w-auto max-w-[150px] object-contain  hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactSection;
