// @ts-nocheck
import { useLanguage } from '../../components/LanguageUtils';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { FaCrown, FaTrophy, FaStar, FaGift, FaUsers, FaMedal, FaGlobe, FaChartLine, FaFire, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { translations } from './translations';
import ContactSection from '../TeamPage/components/ContactSection';
import MembersGrid from './components/MembersGrid';

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
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative pt-24 pb-20 px-4">
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="animate-fade-up-1 inline-flex items-center gap-2 bg-black border border-brand-yellow/40 rounded-md px-4 py-2 mb-6">
                        <FaCrown className="text-brand-yellow text-sm" />
                        <span className="text-brand-yellow font-bold text-xs uppercase tracking-wide">Ексклюзивний Клуб 100</span>
                    </div>

                    <h1 className="animate-fade-up-2 text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white leading-tight">
                        {t.heroTitle}
                    </h1>

                    <p className="animate-fade-up-3 text-lg md:text-xl text-neutral-300 mb-4 max-w-2xl mx-auto leading-relaxed">
                        {t.heroSubtitle}
                    </p>

                    <p className="animate-fade-up-3 text-sm text-neutral-400 mb-8 max-w-xl mx-auto">
                        {t.heroDescription}
                    </p>

                    <button
                        onClick={handleContactClick}
                        className="animate-fade-up-3 inline-flex items-center gap-2 px-8 py-3 bg-brand-yellow text-black font-bold uppercase tracking-wide text-base rounded-lg hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-200"
                    >
                        <span>{t.joinButton}</span>
                        <FaArrowRight className="text-sm" />
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="relative bg-neutral-950 rounded-lg p-10 md:p-12 border border-white/10">
                    <div className="relative text-center mb-8">
                        <div className="animate-fade-up inline-flex items-center justify-center w-24 h-24 bg-black rounded-lg mb-6 border border-brand-yellow">
                            <span className="text-3xl font-extrabold text-brand-yellow">11/100</span>
                        </div>
                        <h2 className="animate-fade-up-1 text-3xl md:text-4xl font-extrabold uppercase mb-6 text-white">{t.aboutTitle}</h2>
                        <p className="animate-fade-up-2 text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                            {t.aboutDescription}
                        </p>
                    </div>

                    <div className="relative flex flex-col items-center mt-8 p-8 bg-black rounded-lg border border-brand-blue/40 hover:border-brand-blue transition-colors">
                        <p className="text-neutral-400 text-sm mb-2 font-bold uppercase tracking-wide">{t.membershipTitle}</p>
                        <p className="text-4xl md:text-5xl font-extrabold text-brand-yellow mb-2">
                            {t.membershipAmount}
                        </p>
                        <p className="text-neutral-400 text-sm">{t.membershipNote}</p>
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="animate-fade-up text-3xl md:text-4xl font-extrabold uppercase mb-4 text-white">
                        {t.benefitsTitle}
                    </h2>
                    <div className="animate-fade-up-1 h-1 w-16 bg-brand-yellow mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.benefits.map((benefit, index) => {
                        const isBlue = index % 2 === 1;
                        const accentBorder = isBlue ? 'border-brand-blue/40' : 'border-brand-yellow/40';
                        const accentHover = isBlue ? 'hover:border-brand-blue' : 'hover:border-brand-yellow';
                        const accentText = isBlue ? 'text-brand-blue' : 'text-brand-yellow';
                        return (
                            <div
                                key={index}
                                className={`relative bg-neutral-950 rounded-lg p-7 border border-white/10 ${accentHover} hover:-translate-y-1 transition-all duration-200`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4 border ${accentBorder}`}>
                                        <div className={accentText}>
                                            {getIcon(benefit.icon)}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold uppercase text-white mb-3">{benefit.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Membership Levels */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="animate-fade-up text-3xl md:text-4xl font-extrabold uppercase mb-4 text-white">
                        {t.levelsTitle}
                    </h2>
                    <div className="animate-fade-up-1 h-1 w-16 bg-brand-yellow mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {t.levels.map((level, index) => {
                        // Second tier gets a brand-blue accent for variety, popular tier stays yellow.
                        const isBlueAccent = !level.popular && index === 1;
                        const borderClass = level.popular
                            ? 'border-brand-yellow'
                            : isBlueAccent
                                ? 'border-brand-blue'
                                : 'border-white/10';
                        const hoverBorderClass = isBlueAccent ? 'hover:border-brand-blue' : 'hover:border-brand-yellow';
                        const checkColor = isBlueAccent ? 'text-brand-blue' : 'text-brand-yellow';
                        const amountColor = isBlueAccent ? 'text-brand-blue' : 'text-brand-yellow';
                        return (
                            <div
                                key={index}
                                className="relative"
                            >
                                {level.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-black px-3 py-1 rounded-md text-xs font-bold uppercase">
                                            <FaStar className="text-black text-xs" />
                                            Популярний
                                        </span>
                                    </div>
                                )}
                                <div className={`relative bg-neutral-950 rounded-lg p-7 border ${borderClass} ${hoverBorderClass} hover:-translate-y-1 transition-all duration-200 h-full flex flex-col`}>
                                    <div className="text-center mb-8 relative z-10">
                                        <h3 className="text-xl font-extrabold uppercase text-white mb-4">{level.name}</h3>
                                        <p className={`text-3xl font-extrabold ${amountColor}`}>{level.amount}</p>
                                    </div>
                                    <ul className="space-y-4 flex-grow mb-8">
                                        {level.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <FaCheckCircle className={`${checkColor} text-sm mt-0.5 flex-shrink-0`} />
                                                <span className="text-neutral-300 text-sm leading-relaxed">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={handleContactClick}
                                        className={`w-full py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                                            level.popular
                                                ? 'bg-brand-yellow text-black hover:bg-yellow-300'
                                                : isBlueAccent
                                                    ? 'bg-black border border-brand-blue/40 text-white hover:border-brand-blue hover:text-brand-blue'
                                                    : 'bg-black border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow'
                                        }`}
                                    >
                                        Обрати план
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* First Members Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-10">
                    <h2 className="animate-fade-up text-3xl md:text-4xl font-extrabold uppercase mb-4 text-white">{t.firstMembersTitle}</h2>
                    <p className="animate-fade-up-1 text-base text-neutral-400 mb-8">{t.firstMembersSubtitle}</p>
                </div>

                {/* Members Grid Component */}
                <MembersGrid />
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="relative bg-neutral-950 rounded-lg p-12 md:p-16 border border-brand-yellow/40 text-center">
                    <div className="relative z-10">
                        <div className="animate-fade-up inline-flex items-center justify-center w-16 h-16 bg-brand-yellow rounded-lg mb-6">
                            <FaTrophy className="text-3xl text-black" />
                        </div>
                        <h2 className="animate-fade-up-1 text-3xl md:text-4xl font-extrabold uppercase mb-6 text-white leading-tight">{t.ctaTitle}</h2>
                        <p className="animate-fade-up-2 text-base text-neutral-300 mb-8 max-w-xl mx-auto leading-relaxed">
                            {t.ctaDescription}
                        </p>
                        <button
                            onClick={handleContactClick}
                            className="animate-fade-up-3 inline-flex items-center gap-2 px-8 py-3 bg-brand-yellow text-black font-bold uppercase tracking-wide text-base rounded-lg hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-200"
                        >
                            <span>{t.ctaButton}</span>
                            <FaArrowRight className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div ref={contactRef}>
                <ContactSection language={language} />
            </div>

            {/* Back Button */}
            <div className="max-w-5xl mx-auto px-4 pb-16">
                <div className="text-center">
                    <button
                        onClick={() => navigate('/stadium')}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-black border border-white/20 hover:border-yellow-400 rounded-lg text-neutral-400 hover:text-yellow-400 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium text-sm">{t.backButton}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClubBenefitsPage;
