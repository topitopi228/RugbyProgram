import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageUtils';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCompanySponsors, getPersonalSponsors, getOlympicInvitation } from './sponsorsData';
import OlympicRings from './components/OlympicRings';

const SponsorsPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        navigate('/#ggwp');
    };

    const olympicInvitation = getOlympicInvitation(language);
    const companySponsors = getCompanySponsors(language);
    const personalSponsors = getPersonalSponsors(language);

    const personalSponsorsTitle = (
        <>
            <span className="block text-2xl md:text-3xl font-bold text-white mb-2">
                {language === 'UA' ? 'Наші меценати' : language === 'EN' ? 'Our patrons' : 'Mecénásaink'}
            </span>
            <span className="text-base text-gray-300 font-medium">
                {language === 'UA' ? 'хто вже нас підтримав' : language === 'EN' ? 'who have previously supported the development of Ukrainian rugby' : 'akik korábban támogatták az ukrán rögbi fejlődését'}
            </span>
        </>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Olympic Invitation Section */}
                <motion.div
                    className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 mb-20 shadow-2xl border border-blue-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            {/* Text Content */}
                            <div className="lg:w-2/3">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {olympicInvitation.title}
                                </motion.h2>
                                <motion.p
                                    className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {olympicInvitation.highlight}
                                </motion.p>
                                <motion.p
                                    className="text-blue-100 mb-8 text-lg max-w-3xl"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {olympicInvitation.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <button
                                        onClick={scrollToContact}
                                        className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {olympicInvitation.cta}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Olympic Rings */}
                            <OlympicRings language={language} />
                        </div>
                    </div>
                </motion.div>

                {/* Club Benefits Promo Section */}
                <motion.div
                    className="relative py-20 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-amber-900/20"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="mt-20 mb-20 relative overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl" />
                            <div className="absolute inset-0 overflow-hidden opacity-20">
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
                            </div>

                            <div className="relative z-10 text-center px-6 py-16 md:py-20">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full px-6 py-2 mb-6"
                                >
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-300 font-bold text-sm uppercase">
                                        {language === 'UA' ? 'Спеціальна пропозиція' :
                                            language === 'EN' ? 'Special Offer' :
                                                'Különleges Ajánlat'}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                                >
                                    {language === 'UA' ? '🏆 Клуб "Олімпійська Надія"' :
                                        language === 'EN' ? '🏆 Club "Olympic Hope"' :
                                            '🏆  Klub "Olimpiai Remény"'}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-xl md:text-2xl text-white font-semibold mb-4 max-w-4xl mx-auto"
                                >
                                    {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями!' :
                                        language === 'EN' ? 'Become part of an elite club with exclusive privileges!' :
                                            'Legyen része egy elit klubnak exkluzív előnyökkel!'}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                                >
                                    {language === 'UA' ?
                                        'VIP-доступ на матчі • Персональна форма • Ваше ім\'я в історії • Білети на Олімпіаду • і ще багато іншого!' :
                                        language === 'EN' ?
                                            'VIP match access • Personal uniform • Your name in history • Olympic tickets • and much more!' :
                                            'VIP meccs hozzáférés • Személyes egyenruha • Neved a történelemben • Olimpiai jegyek • és még sok más!'}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto"
                                >
                                    {[
                                        { icon: '🎖️', text: language === 'UA' ? 'Ексклюзивний статус' : language === 'EN' ? 'Exclusive status' : 'Exkluzív státusz' },
                                        { icon: '🏅', text: language === 'UA' ? 'Персональний мерч' : language === 'EN' ? 'Personal merch' : 'Személyes merchandising' },
                                        { icon: '🎯', text: language === 'UA' ? 'VIP-привілеї' : language === 'EN' ? 'VIP privileges' : 'VIP előnyök' },
                                        { icon: '✨', text: language === 'UA' ? 'Унікальні можливості' : language === 'EN' ? 'Unique opportunities' : 'Egyedi lehetőségek' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500/30">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                                    onClick={() => navigate('/benefits')}
                                    className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {language === 'UA' ? 'Дізнатися більше про переваги' :
                                            language === 'EN' ? 'Discover the Benefits' :
                                                'Fedezze fel az előnyöket'}
                                        <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="mt-6 text-sm text-gray-400"
                                >
                                    {language === 'UA' ? '⚡ Обмежена кількість місць - тільки 100 членів!' :
                                        language === 'EN' ? '⚡ Limited slots - only 100 members!' :
                                            '⚡ Korlátozott helyek - csak 100 tag!'}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Company Sponsors Section */}
                <div className="max-w-7xl mx-auto mt-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300"
                    >
                        {language === 'UA' ? 'Компанії-партнери' : language === 'EN' ? 'Company Sponsors' : 'Céges Szponzorok'}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {companySponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
                            >
                                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                    <div className="h-40 flex items-center justify-center mb-4">
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-center text-yellow-300">
                                        {sponsor.name}
                                    </h3>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Personal Sponsors Section */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300 mt-24"
                    >
                        {personalSponsorsTitle}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {personalSponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30 flex flex-col items-center text-center"
                            >
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-yellow-400/50">
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                                    {sponsor.name}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {sponsor.position}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Become a Sponsor Button */}
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold rounded-full text-lg md:text-xl hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center"
                        >
                            {language === 'UA' ? 'Підтримати' : language === 'EN' ? 'Support' : 'Támogatás'}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                <div ref={contactRef} id="contact" className="h-1"></div>
            </div>
        </div>
    );
};

export default SponsorsPage;
