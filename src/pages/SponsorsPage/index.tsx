import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageUtils';
import { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCompanySponsors, getPersonalSponsors, getOlympicInvitation } from './sponsorsData';
import OlympicRings from './components/OlympicRings';

const SponsorsPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const contactRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        navigate('/sponsors#contact');
    };

    useEffect(() => {
        // Scroll to top first when page loads
        window.scrollTo(0, 0);
        
        if (location.hash === '#contact' || location.hash === '#ggwp') {
            // Scroll after mount when arriving with hash
            setTimeout(() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (contactRef.current) {
                    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        }
    }, [location]);

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
        <div className="min-h-screen relative overflow-hidden text-white bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950">
            {/* Premium Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-600/5 to-yellow-600/5 rounded-full blur-3xl"></div>
            </div>

            {/* Premium Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            ></div>

            <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                {/* Olympic Invitation Section */}
                <motion.div
                    className="relative overflow-hidden bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-20 shadow-2xl border-2 border-amber-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Premium Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -left-20 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-indigo-400/10 rounded-full blur-3xl"></div>
                    </div>
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            {/* Text Content */}
                            <div className="lg:w-2/3">
                                <motion.h2
                                    className="text-2xl md:text-3xl font-bold mb-3 text-yellow-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    {olympicInvitation.title}
                                </motion.h2>
                                <motion.p
                                    className="text-lg md:text-xl font-semibold mb-3 leading-relaxed text-white"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                >
                                    {olympicInvitation.highlight}
                                </motion.p>
                                <motion.p
                                    className="text-blue-100 mb-6 text-base max-w-2xl"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                >
                                    {olympicInvitation.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                >
                                    <button
                                        onClick={() => navigate('/benefits')}
                                        className="group relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {olympicInvitation.cta}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Olympic Rings */}
                            <OlympicRings language={language} />
                        </div>
                    </div>
                </motion.div>

                {/* Club Benefits Promo Section - Elegant Design */}
                <div className="relative py-12 overflow-hidden">
                    {/* Subtle Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/30"></div>
                    
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Elegant Card Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/70 via-slate-900/70 to-slate-900/70 backdrop-blur-xl rounded-xl border border-yellow-400/20 shadow-xl overflow-hidden">
                                {/* Subtle Glow Effect */}
                                <div className="absolute -inset-px bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 rounded-xl opacity-50"></div>
                                
                                {/* Decorative Corner Elements */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-400/3 to-transparent rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/3 to-transparent rounded-full blur-3xl"></div>

                                <div className="relative z-10 px-6 py-10 md:px-10 md:py-12">
                                    {/* Badge */}
                                    <div className="flex justify-center mb-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full backdrop-blur-sm">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wide">
                                                {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                                    language === 'EN' ? 'Exclusive Offer' :
                                                        'Exkluzív ajánlat'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Main Title */}
                                    <div className="text-center mb-6">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                                {language === 'UA' ? 'Клуб "Олімпійська Надія"' :
                                                    language === 'EN' ? 'Club "Olympic Hope"' :
                                                        'Klub "Olimpiai Remény"'}
                                            </span>
                                        </h2>
                                        <div className="flex items-center justify-center gap-2 text-yellow-400/40">
                                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/40"></div>
                                            <span className="text-xl">🏆</span>
                                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/40"></div>
                                        </div>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-base md:text-lg text-center text-slate-300 font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
                                        {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями' :
                                            language === 'EN' ? 'Become part of an elite club with exclusive privileges' :
                                                'Legyen része egy elit klubnak exkluzív előnyökkel'}
                                    </p>

                                    {/* Benefits Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
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
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.08 * idx, duration: 0.4 }}
                                                className="group relative"
                                            >
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative bg-slate-800/40 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 group-hover:border-yellow-400/20 transition-all duration-300">
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center text-xl border border-yellow-400/20">
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                                                            <p className="text-xs text-slate-400">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex flex-col items-center gap-4">
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4, duration: 0.4 }}
                                            onClick={() => navigate('/benefits')}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-900 font-bold text-base rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {language === 'UA' ? 'Дізнатися більше про переваги' :
                                                    language === 'EN' ? 'Discover the Benefits' :
                                                        'Fedezze fel az előnyöket'}
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </motion.button>

                                        {/* Limited Slots Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-yellow-400/20 rounded-full">
                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                            <span className="text-xs font-medium text-slate-400">
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
                <div className="max-w-6xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                                {language === 'UA' ? 'Компанії-партнери' : language === 'EN' ? 'Company Partners' : 'Céges Partnerek'}
                            </h2>
                            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {companySponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                                
                                {/* Card Content */}
                                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="relative block">
                                    <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border-2 border-slate-700/30 group-hover:border-amber-500/30 transition-all duration-500 p-6 h-full">
                                        <div className="h-32 flex items-center justify-center mb-4 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-xl">
                                            <img
                                                src={sponsor.image}
                                                alt={sponsor.name}
                                                className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-yellow-400 transition-all duration-300">
                                            {sponsor.name}
                                        </h3>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Personal Sponsors Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 mt-20"
                    >
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                                {personalSponsorsTitle}
                            </h2>
                            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {personalSponsors.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                                
                                {/* Card Content */}
                                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border-2 border-slate-700/30 group-hover:border-amber-500/30 transition-all duration-500 p-6 flex flex-col items-center text-center h-full">
                                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-3 border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-500">
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-yellow-400 transition-all duration-300 mb-1">
                                        {sponsor.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs font-medium">
                                        {sponsor.position}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorsPage;
