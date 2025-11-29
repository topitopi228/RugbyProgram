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
        <div className="min-h-screen relative overflow-hidden text-white">
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

            <div className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                {/* Olympic Invitation Section */}
                <motion.div
                    className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 mb-20 shadow-2xl border border-blue-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {olympicInvitation.title}
                                </motion.h2>
                                <motion.p
                                    className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {olympicInvitation.highlight}
                                </motion.p>
                                <motion.p
                                    className="text-blue-100 mb-8 text-lg max-w-3xl"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {olympicInvitation.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
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

                {/* Club Benefits Promo Section - Modern Premium Design */}
                <div className="relative py-24 overflow-hidden">
                    {/* Elegant Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900/50"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Premium Card Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-yellow-400/20 shadow-2xl overflow-hidden">
                                {/* Subtle Glow Effect */}
                                <div className="absolute -inset-px bg-gradient-to-r from-yellow-400/10 via-amber-400/5 to-yellow-400/10 rounded-3xl opacity-50"></div>
                                
                                {/* Decorative Corner Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-full blur-3xl"></div>

                                <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
                                    {/* Badge */}
                                    <div className="flex justify-center mb-8">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 border border-yellow-400/30 rounded-2xl backdrop-blur-sm">
                                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
                                                {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                                    language === 'EN' ? 'Exclusive Offer' :
                                                        'Exkluzív ajánlat'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Main Title */}
                                    <div className="text-center mb-8">
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                                {language === 'UA' ? 'Клуб "Олімпійська Надія"' :
                                                    language === 'EN' ? 'Club "Olympic Hope"' :
                                                        'Klub "Olimpiai Remény"'}
                                            </span>
                                        </h2>
                                        <div className="flex items-center justify-center gap-2 text-yellow-400/60">
                                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
                                            <span className="text-2xl">🏆</span>
                                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/60"></div>
                                        </div>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-xl md:text-2xl text-center text-slate-200 font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
                                        {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями' :
                                            language === 'EN' ? 'Become part of an elite club with exclusive privileges' :
                                                'Legyen része egy elit klubnak exkluzív előnyökkel'}
                                    </p>

                                    {/* Benefits Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                                        {[
                                            { 
                                                icon: '🎖️', 
                                                title: language === 'UA' ? 'Ексклюзивний статус' : language === 'EN' ? 'Exclusive Status' : 'Exkluzív státusz',
                                                desc: language === 'UA' ? 'Членство в елітному клубі' : language === 'EN' ? 'Elite club membership' : 'Elit klub tagság'
                                            },
                                            { 
                                                icon: '🏅', 
                                                title: language === 'UA' ? 'Персональний мерч' : language === 'EN' ? 'Personal Merch' : 'Személyes merchandising',
                                                desc: language === 'UA' ? 'Унікальна форма з вашим іменем' : language === 'EN' ? 'Unique uniform with your name' : 'Egyedi egyenruha a neveddel'
                                            },
                                            { 
                                                icon: '🎯', 
                                                title: language === 'UA' ? 'VIP-привілеї' : language === 'EN' ? 'VIP Privileges' : 'VIP előnyök',
                                                desc: language === 'UA' ? 'Доступ до закритих подій' : language === 'EN' ? 'Access to private events' : 'Hozzáférés privát eseményekhez'
                                            },
                                            { 
                                                icon: '🎫', 
                                                title: language === 'UA' ? 'Білети на Олімпіаду' : language === 'EN' ? 'Olympic Tickets' : 'Olimpiai jegyek',
                                                desc: language === 'UA' ? 'Гарантовані місця на іграх' : language === 'EN' ? 'Guaranteed seats at games' : 'Garantált helyek a játékokon'
                                            }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                                className="group relative"
                                            >
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 group-hover:border-yellow-400/30 transition-all duration-300">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center text-2xl border border-yellow-400/20">
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex flex-col items-center gap-6">
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                            onClick={() => navigate('/benefits')}
                                            className="group relative px-12 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-1"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                {language === 'UA' ? 'Дізнатися більше про переваги' :
                                                    language === 'EN' ? 'Discover the Benefits' :
                                                        'Fedezze fel az előnyöket'}
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </motion.button>

                                        {/* Limited Slots Badge */}
                                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 border border-yellow-400/20 rounded-full">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <span className="text-sm font-medium text-slate-300">
                                                {language === 'UA' ? 'Обмежена кількість місць - тільки 100 членів' :
                                                    language === 'EN' ? 'Limited slots - only 100 members' :
                                                        'Korlátozott helyek - csak 100 tag'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

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
        </div>
    );
};

export default SponsorsPage;
