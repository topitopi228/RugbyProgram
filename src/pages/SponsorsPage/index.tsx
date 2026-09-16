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

    const personalSponsorsTitle = language === 'UA' ? 'Хто вже нас підтримав' : 
                                    language === 'EN' ? 'Who has already supported us' : 
                                    'Akik már támogattak minket';

    return (
        <div className="min-h-screen text-white bg-black">
            <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                {/* Olympic Invitation Section */}
                <div className="relative rounded-lg mb-20 border-2 border-white/15 overflow-hidden">
                    {/* Background photo + overlay for texture instead of flat black */}
                    <div className="absolute inset-0">
                        <img
                            src="/olymp.png"
                            alt=""
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/15 via-transparent to-transparent" />
                    </div>

                    {/* Top accent bar */}
                    <div className="relative flex h-1.5 w-full z-10">
                        <div className="h-full w-2/3 bg-brand-yellow" />
                        <div className="h-full w-1/3 bg-brand-blue-light" />
                    </div>

                    <div className="relative z-10 p-8 md:p-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                            {/* Text Content */}
                            <div className="lg:w-3/5">
                                <div className="animate-fade-up inline-flex items-center px-3 py-1 mb-4 text-xs font-bold tracking-widest text-brand-yellow uppercase border border-brand-yellow/40 bg-black/60">
                                    {language === 'UA' ? 'Олімпійська амбіція' : language === 'EN' ? 'Olympic Ambition' : 'Olimpiai ambíció'}
                                </div>
                                <h2 className="animate-fade-up text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-4 text-white leading-tight">
                                    {olympicInvitation.title}
                                </h2>
                                <p className="text-lg md:text-xl font-semibold mb-3 leading-relaxed text-brand-yellow">
                                    {olympicInvitation.highlight}
                                </p>
                                <p className="text-neutral-300 mb-7 text-base max-w-2xl">
                                    {olympicInvitation.description}
                                </p>
                                <button
                                    onClick={() => navigate('/benefits')}
                                    className="group inline-flex items-center px-7 py-3.5 bg-brand-yellow text-black font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors duration-200"
                                >
                                    {olympicInvitation.cta}
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Olympic Rings — framed in its own panel so it doesn't float in empty space */}
                            <div className="relative w-full lg:w-2/5 flex justify-center">
                                <div className="relative bg-black/50 border border-white/15 px-6 py-8 md:px-10 md:py-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,154,255,0.15),transparent_65%)]" />
                                    <div className="relative">
                                        <OlympicRings language={language} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Club Benefits Promo Section */}
                <div className="relative py-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="relative">
                            {/* Card Container */}
                            <div className="relative bg-neutral-950 rounded-lg border-2 border-white/15 overflow-hidden">
                                {/* Top accent bar */}
                                <div className="flex h-1.5 w-full">
                                    <div className="h-full w-1/3 bg-brand-blue-light" />
                                    <div className="h-full w-2/3 bg-brand-yellow" />
                                </div>
                                <div className="relative z-10 px-6 py-10 md:px-10 md:py-12">
                                    {/* Badge */}
                                    <div className="flex justify-center mb-6">
                                        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wide">
                                                {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                                    language === 'EN' ? 'Exclusive Offer' :
                                                        'Exkluzív ajánlat'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Main Title */}
                                    <div className="text-center mb-6">
                                        <h2 className="animate-fade-up text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-white">
                                            {language === 'UA' ? 'Клуб "100"' :
                                                language === 'EN' ? 'Club "100"' :
                                                    'Klub "100"'}
                                        </h2>
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="h-px w-8 bg-brand-blue/40"></div>
                                            <span className="text-xl">🏆</span>
                                            <div className="h-px w-8 bg-yellow-400/40"></div>
                                        </div>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-base md:text-lg text-center text-neutral-400 font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
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
                                        ].map((item, idx) => {
                                            const isBlue = idx % 2 === 1;
                                            return (
                                            <div
                                                key={idx}
                                                className="relative"
                                            >
                                                <div className={`relative bg-black p-4 rounded-lg border border-white/10 transition-all duration-200 hover:-translate-y-1 ${isBlue ? 'hover:border-brand-blue-light/50' : 'hover:border-yellow-400/40'}`}>
                                                    <div className="flex items-start gap-3">
                                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl border transition-transform duration-200 hover:scale-110 ${isBlue ? 'bg-brand-blue/10 border-brand-blue-light/40' : 'bg-yellow-400/10 border-yellow-400/30'}`}>
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                                                            <p className="text-xs text-neutral-400">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            );
                                        })}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex flex-col items-center gap-4">
                                        <button
                                            onClick={() => navigate('/benefits')}
                                            className="group inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold uppercase tracking-wide text-base rounded-lg transition-colors duration-200 hover:bg-yellow-300"
                                        >
                                            {language === 'UA' ? 'Дізнатися більше про переваги' :
                                                language === 'EN' ? 'Discover the Benefits' :
                                                    'Fedezze fel az előnyöket'}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>

                                        {/* Limited Slots Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black border border-yellow-400/30 rounded-lg">
                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                            <span className="text-xs font-medium text-neutral-400">
                                                {language === 'UA' ? 'Обмежена кількість місць - тільки 100 членів' :
                                                    language === 'EN' ? 'Limited slots - only 100 members' :
                                                        'Korlátozott helyek - csak 100 tag'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Sponsors Section */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="text-center mb-12">
                        <div className="inline-block">
                            <h2 className="animate-fade-up text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
                                {language === 'UA' ? 'Компанії-партнери' : language === 'EN' ? 'Company Partners' : 'Céges Partnerek'}
                            </h2>
                            <div className="h-px w-24 mx-auto bg-gradient-to-r from-yellow-400 to-brand-blue-light"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                        {companySponsors.map((sponsor, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Card Content */}
                                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="relative block h-full">
                                    <div className="relative bg-neutral-950 rounded-lg border border-white/10 group-hover:border-yellow-400/40 transition-all duration-200 group-hover:-translate-y-1 p-6 h-full">
                                        <div className="h-40 flex items-center justify-center mb-4 bg-black rounded-lg p-4">
                                            <img
                                                src={sponsor.image}
                                                alt={sponsor.name}
                                                loading={index < 10 ? "eager" : "lazy"}
                                                decoding="async"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="text-base font-bold text-center text-white leading-snug min-h-[3rem] flex items-center justify-center">
                                            {sponsor.name}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Personal Sponsors Section */}
                    <div className="text-center mb-12 mt-20">
                        <div className="inline-block">
                            <h2 className="animate-fade-up text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
                                {personalSponsorsTitle}
                            </h2>
                            <div className="h-px w-24 mx-auto bg-gradient-to-r from-brand-blue-light to-yellow-400"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {personalSponsors.map((sponsor, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Card Content */}
                                <div className="relative bg-neutral-950 rounded-lg border border-white/10 group-hover:border-yellow-400/40 transition-all duration-200 group-hover:-translate-y-1 p-6 flex flex-col items-center text-center h-full">
                                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-yellow-400/40 transition-colors duration-200">
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            loading={index < 8 ? "eager" : "lazy"}
                                            decoding="async"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {sponsor.name}
                                    </h3>
                                    {sponsor.position && (
                                        <p className="text-neutral-500 text-xs font-medium">
                                            {sponsor.position}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorsPage;
