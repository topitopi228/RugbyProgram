// @ts-nocheck
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageUtils';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { FaCrown, FaTrophy, FaStar, FaGift, FaUsers, FaMedal, FaGlobe, FaChartLine, FaFire, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { translations } from './translations';
import ContactSection from '../TeamPage/components/ContactSection';

const ClubBenefitsPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const contactRef = useRef<HTMLDivElement>(null);

    const t = translations[language as keyof typeof translations] || translations.UA;

    const handleContactClick = () => {
        // Scroll to contact section on the same page
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: JSX.Element } = {
            media: <FaGlobe className="w-5 h-5" />,
            merch: <FaGift className="w-5 h-5" />,
            vip: <FaCrown className="w-5 h-5" />,
            broadcast: <FaFire className="w-5 h-5" />,
            networking: <FaUsers className="w-5 h-5" />,
            exclusive: <FaStar className="w-5 h-5" />,
            olympic: <FaMedal className="w-5 h-5" />,
            activity: <FaChartLine className="w-5 h-5" />
        };
        return iconMap[iconName] || <FaStar className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950 text-white relative overflow-hidden">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
            
            {/* Animated Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            ></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative pt-24 pb-20 px-4"
            >
                {/* Subtle Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-4 py-2 mb-6"
                    >
                        <FaCrown className="text-yellow-400 text-sm" />
                        <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wide">Ексклюзивний Клуб 100</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight"
                    >
                        {t.heroTitle}
                    </motion.h1>

                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.heroSubtitle}
                    </motion.p>

                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-sm text-gray-400 mb-8 max-w-xl mx-auto"
                    >
                        {t.heroDescription}
                    </motion.p>

                    <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        onClick={handleContactClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-base rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
                    >
                        <span className="relative z-10">{t.joinButton}</span>
                        <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-0.5 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </div>
            </motion.div>

            {/* About Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-slate-900/90 backdrop-blur-xl rounded-2xl p-10 md:p-12 border-2 border-gradient-to-r from-amber-500/20 to-indigo-500/20 shadow-2xl overflow-hidden"
                >
                    {/* Subtle Decorative Elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
                    
                    <div className="relative text-center mb-8">
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 backdrop-blur-sm rounded-2xl mb-6 border-2 border-yellow-400/30 shadow-lg shadow-yellow-500/20"
                        >
                            <span className="text-3xl font-bold bg-gradient-to-br from-yellow-300 to-amber-400 bg-clip-text text-transparent">1/100</span>
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.aboutTitle}</h2>
                        <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            {t.aboutDescription}
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative flex flex-col items-center mt-8 p-8 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl border-2 border-amber-400/30 shadow-xl"
                    >
                        <p className="text-gray-300 text-sm mb-2 font-medium uppercase tracking-wide">{t.membershipTitle}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent mb-2">
                            {t.membershipAmount}
                        </p>
                        <p className="text-gray-400 text-sm">{t.membershipNote}</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                        {t.benefitsTitle}
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 backdrop-blur-xl rounded-2xl p-7 border-2 border-slate-700/30 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-2xl flex items-center justify-center mb-4 border-2 border-yellow-400/30 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-yellow-400">
                                        {getIcon(benefit.icon)}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-3">{benefit.title}</h3>
                                <p className="text-gray-400/90 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Membership Levels */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                        {t.levelsTitle}
                    </h2>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.levels.map((level, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative ${level.popular ? 'lg:scale-105' : ''}`}
                        >
                            {level.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                                        <FaStar className="text-gray-900 text-xs" />
                                        Популярний
                                    </span>
                                </div>
                            )}
                            <div className={`relative ${level.popular ? 'shadow-2xl shadow-amber-500/30' : ''}`}>
                                {/* Glow effect for popular plan */}
                                {level.popular && (
                                    <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-2xl blur-lg opacity-70"></div>
                                )}
                                
                                <div className={`relative bg-gradient-to-br ${level.color ? level.color : 'from-slate-900/90 via-slate-800/90 to-slate-900/90'} backdrop-blur-xl rounded-2xl p-7 border-2 ${
                                    level.popular ? 'border-amber-400/50' : 'border-slate-700/30'
                                } hover:border-amber-500/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20`}>
                                    {/* Premium corner accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>
                                    
                                    <div className="text-center mb-8 relative z-10">
                                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">{level.name}</h3>
                                        <p className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-pulse">{level.amount}</p>
                                    </div>
                                    <ul className="space-y-4 flex-grow mb-8">
                                        {level.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3 group">
                                                <div className="relative mt-0.5">
                                                    <FaCheckCircle className="text-amber-400 text-sm relative z-10" />
                                                    <div className="absolute inset-0 bg-amber-400/30 blur-md"></div>
                                                </div>
                                                <span className="text-gray-300/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={handleContactClick}
                                        className={`w-full py-3 ${
                                            level.popular 
                                                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 hover:from-amber-500 hover:to-yellow-400 font-bold' 
                                                : 'bg-gradient-to-r from-slate-700/50 to-slate-800/50 hover:from-amber-400 hover:to-yellow-500 text-white hover:text-gray-900 font-semibold'
                                        } rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform hover:scale-105`}
                                    >
                                        Обрати план
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* First Members Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.firstMembersTitle}</h2>
                    <p className="text-base text-gray-400 mb-8">{t.firstMembersSubtitle}</p>
                    
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800/70 backdrop-blur-xl border border-yellow-400/20 rounded-xl px-6 py-5 shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg">
                                <FaUsers className="text-gray-900 text-xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{t.slotsAvailable}</p>
                                <p className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">99/100</p>
                            </div>
                        </div>
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent hidden md:block" />
                        <div className="text-center md:text-left">
                            <p className="text-lg font-bold text-yellow-300 mb-0.5">Поспішайте!</p>
                            <p className="text-sm text-gray-400">Залишилось лише <span className="text-yellow-400 font-semibold">99 місць</span></p>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-2 md:gap-3">
                    {Array.from({ length: 100 }).map((_, index) => {
                        const isTaken = index === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 20) * 0.01, duration: 0.3 }}
                                className={`relative aspect-square rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                    isTaken
                                        ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-gray-900 shadow-2xl shadow-amber-500/40 scale-110 border-2 border-amber-300/50'
                                        : 'bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-slate-700/30 text-gray-500 hover:border-amber-500/40 hover:bg-gradient-to-br hover:from-slate-800/90 hover:to-slate-700/90 backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:shadow-amber-500/10'
                                }`}
                            >
                                {isTaken ? (
                                    <FaCrown className="text-lg" />
                                ) : (
                                    <span className="opacity-50 text-xs">{index + 1}</span>
                                )}
                                {isTaken && (
                                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mt-8"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                            <FaCrown className="text-gray-900 text-sm" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Зайняте місце</p>
                            <p className="text-gray-500 text-xs">1 учасник</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <span className="text-gray-500 font-semibold text-xs">99</span>
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Вільні місця</p>
                            <p className="text-gray-500 text-xs">99 можливостей</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-indigo-900/30 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 text-center"
                >
                    {/* Subtle Background */}
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl mb-6 shadow-lg"
                        >
                            <FaTrophy className="text-3xl text-gray-900" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent leading-tight">{t.ctaTitle}</h2>
                        <p className="text-base text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                            {t.ctaDescription}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleContactClick}
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-base rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                        >
                            <span className="relative z-10">{t.ctaButton}</span>
                            <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-0.5 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Contact Section */}
            <div ref={contactRef}>
                <ContactSection language={language} />
            </div>

            {/* Back Button */}
            <div className="max-w-5xl mx-auto px-4 pb-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button
                        onClick={() => navigate('/stadium')}
                        className="group inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/30 rounded-lg text-gray-400 hover:text-yellow-400 transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium text-sm">{t.backButton}</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ClubBenefitsPage;
