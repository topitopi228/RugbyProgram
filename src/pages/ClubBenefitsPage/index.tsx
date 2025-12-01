// @ts-nocheck
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageUtils';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaTrophy, FaStar, FaGift, FaUsers, FaMedal, FaGlobe, FaChartLine, FaFire, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { translations } from './translations';

const ClubBenefitsPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const t = translations[language as keyof typeof translations] || translations.UA;

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: JSX.Element } = {
            media: <FaGlobe className="w-6 h-6" />,
            merch: <FaGift className="w-6 h-6" />,
            vip: <FaCrown className="w-6 h-6" />,
            broadcast: <FaFire className="w-6 h-6" />,
            networking: <FaUsers className="w-6 h-6" />,
            exclusive: <FaStar className="w-6 h-6" />,
            olympic: <FaMedal className="w-6 h-6" />,
            activity: <FaChartLine className="w-6 h-6" />
        };
        return iconMap[iconName] || <FaStar className="w-6 h-6" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative pt-32 pb-40 px-4"
            >
                {/* Animated Background Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 backdrop-blur-xl border border-yellow-500/20 rounded-full px-6 py-3 mb-8 shadow-lg shadow-yellow-500/10"
                    >
                        <FaCrown className="text-yellow-400 text-lg" />
                        <span className="text-yellow-200 font-semibold tracking-wide">Ексклюзивний Клуб 100</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent leading-tight"
                    >
                        {t.heroTitle}
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        {t.heroSubtitle}
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t.heroDescription}
                    </motion.p>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        onClick={() => navigate('/#ggwp')}
                        className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-gray-900 font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                    >
                        <span className="relative z-10">{t.joinButton}</span>
                        <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </div>
            </motion.div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-2xl rounded-[2rem] p-12 md:p-16 border border-slate-700/50 shadow-2xl overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
                    
                    <div className="relative text-center mb-12">
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 backdrop-blur-xl rounded-3xl mb-8 border border-yellow-400/30 shadow-xl"
                        >
                            <span className="text-6xl font-black bg-gradient-to-br from-yellow-300 to-amber-500 bg-clip-text text-transparent">1/100</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.aboutTitle}</h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                            {t.aboutDescription}
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative flex flex-col items-center mt-16 p-10 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-yellow-500/10 backdrop-blur-xl rounded-3xl border border-yellow-400/30 shadow-2xl"
                    >
                        <p className="text-gray-200 text-xl mb-4 font-medium">{t.membershipTitle}</p>
                        <p className="text-7xl md:text-8xl font-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4">
                            {t.membershipAmount}
                        </p>
                        <p className="text-gray-400 text-lg">{t.membershipNote}</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                        {t.benefitsTitle}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30"
                                >
                                    <div className="text-white">
                                        {getIcon(benefit.icon)}
                                    </div>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-yellow-300 mb-4 group-hover:text-yellow-200 transition-colors">{benefit.title}</h3>
                                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">{benefit.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:to-amber-500/5 rounded-3xl transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Membership Levels */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                        {t.levelsTitle}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.levels.map((level, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`relative ${level.popular ? 'lg:scale-110 lg:-my-6' : ''}`}
                        >
                            {level.popular && (
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-gray-900 px-6 py-2 rounded-full text-sm font-black shadow-lg">
                                        <FaStar className="text-gray-900" />
                                        Популярний
                                    </span>
                                </div>
                            )}
                            <div className={`relative bg-gradient-to-br ${level.color} backdrop-blur-xl rounded-3xl p-8 border-2 ${
                                level.popular ? 'border-yellow-400 shadow-2xl shadow-yellow-500/30' : 'border-slate-700'
                            } hover:border-yellow-500 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl`}>
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-black text-white mb-4">{level.name}</h3>
                                    <p className="text-4xl font-black bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">{level.amount}</p>
                                </div>
                                <ul className="space-y-4 flex-grow mb-8">
                                    {level.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-200 text-sm leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate('/#ggwp')}
                                    className="w-full py-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-yellow-400 hover:to-amber-500 hover:text-gray-900 rounded-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                                >
                                    Обрати план
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* First Members Grid */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.firstMembersTitle}</h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">{t.firstMembersSubtitle}</p>
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border-2 border-yellow-400/30 rounded-3xl px-10 py-8 shadow-2xl shadow-yellow-500/20"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-lg">
                                <FaUsers className="text-gray-900 text-3xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{t.slotsAvailable}</p>
                                <p className="text-5xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">99/100</p>
                            </div>
                        </div>
                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent hidden md:block" />
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold text-yellow-300 mb-1">Поспішайте!</p>
                            <p className="text-gray-400">Залишилось лише <span className="text-yellow-400 font-bold">99 місць</span></p>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-3 md:gap-4">
                    {Array.from({ length: 100 }).map((_, index) => {
                        const isTaken = index === 0; // Перше місце зайняте
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 20) * 0.02, duration: 0.4, type: "spring" }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`relative aspect-square rounded-2xl flex items-center justify-center font-bold text-base md:text-lg transition-all duration-300 ${
                                    isTaken
                                        ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 text-gray-900 shadow-xl shadow-yellow-500/50 ring-2 ring-yellow-300'
                                        : 'bg-slate-800/80 border-2 border-slate-700/50 text-gray-600 hover:border-yellow-500/30 hover:text-gray-400 backdrop-blur-sm'
                                }`}
                            >
                                {isTaken ? (
                                    <div className="flex flex-col items-center justify-center">
                                        <FaCrown className="text-2xl md:text-3xl mb-1" />
                                        <span className="text-xs font-black">VIP</span>
                                    </div>
                                ) : (
                                    <span className="opacity-60">{index + 1}</span>
                                )}
                                {isTaken && (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8 mt-12"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
                            <FaCrown className="text-gray-900" />
                        </div>
                        <div>
                            <p className="text-white font-bold">Зайняте місце</p>
                            <p className="text-gray-400 text-sm">1 учасник</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                            <span className="text-gray-500 font-bold">99</span>
                        </div>
                        <div>
                            <p className="text-white font-bold">Вільні місця</p>
                            <p className="text-gray-400 text-sm">99 можливостей</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-gray-900/90 backdrop-blur-2xl rounded-[2rem] p-16 md:p-20 border border-slate-700/50 shadow-2xl text-center"
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl mb-8 shadow-xl"
                        >
                            <FaTrophy className="text-5xl text-gray-900" />
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent leading-tight">{t.ctaTitle}</h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                            {t.ctaDescription}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/#ggwp')}
                            className="group relative inline-flex items-center gap-4 px-16 py-7 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-gray-900 font-black text-2xl rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-yellow-500/50"
                        >
                            <span className="relative z-10">{t.ctaButton}</span>
                            <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={() => navigate('/stadium')}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-xl border border-slate-700 hover:border-yellow-500/50 rounded-2xl text-gray-400 hover:text-yellow-400 transition-all duration-300 shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-semibold">{t.backButton}</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default ClubBenefitsPage;
