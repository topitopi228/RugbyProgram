import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useLanguage} from './LanguageUtils';
import type {Language} from './LanguageUtils';

// Navigation links with translations
const navLinks: Record<Language, { [key: string]: string }> = {
    UA: {
        home: 'Головна',
        team: 'Команда',
        club: 'Новини',
        about: 'Майбутнє',
        stadium: 'Партнери',
        contact: 'Медіа',
        benefits: 'Клуб 100',
    },
    EN: {
        home: 'Home',
        team: 'Team',
        club: 'News',
        about: 'Future',
        stadium: 'Partners',
        contact: 'Media',
        benefits: 'Club 100',
    },
    HUN: {
        home: 'Főoldal',
        team: 'Csapat',
        club: 'Hírek',
        about: 'Jövő',
        stadium: 'Partnerek',
        contact: 'Média',
        benefits: 'Club 100',
    },
};

// Language options
const languageOptions: { code: Language; label: string; flag: string }[] = [
    {code: 'UA', label: 'УКР', flag: '🇺🇦'},
    {code: 'EN', label: 'ENG', flag: '🇬🇧'},
    {code: 'HUN', label: 'HUN', flag: '🇭🇺'},
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {language, setLanguage} = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-200 ${
                isScrolled
                    ? 'bg-black border-white/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)]'
                    : 'bg-black/90 border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <span className="flex flex-col h-8 w-1.5">
                            <span className="flex-1 bg-brand-blue" />
                            <span className="flex-1 bg-brand-yellow" />
                        </span>
                        <span className="text-xl font-bold text-white uppercase tracking-tight leading-tight">
                            Ukraine U17
                            <span className="block text-brand-yellow">Rugby 7s</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
                        {Object.entries(navLinks[language]).map(([key, label]) => {
                            const isActive = location.pathname === `/${key}` ||
                                           (key === 'home' && location.pathname === '/');
                            const isClub100 = key === 'benefits';

                            if (isClub100) {
                                return (
                                    <Link
                                        key={key}
                                        to={`/${key}`}
                                        className={`ml-3 px-4 py-1.5 text-sm font-bold uppercase tracking-wide border transition-colors ${
                                            isActive
                                                ? 'bg-brand-yellow text-black border-brand-yellow'
                                                : 'text-brand-yellow border-brand-yellow/50 hover:bg-brand-yellow hover:text-black'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={key}
                                    to={key === 'home' ? '/' : `/${key}`}
                                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide border-b-2 transition-colors
                                        ${isActive
                                            ? 'text-brand-yellow border-brand-yellow bg-white/5'
                                            : 'text-white/80 border-transparent hover:text-brand-yellow hover:bg-white/5'
                                        }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Language Selector */}
                    <div className="hidden md:flex items-center flex-shrink-0 border border-white/15">
                        {languageOptions.map((option) => (
                            <button
                                key={option.code}
                                onClick={() => setLanguage(option.code)}
                                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                                    language === option.code
                                        ? 'bg-yellow-400 text-black'
                                        : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {option.flag} {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center w-10 h-10 border border-white/20"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Відкрити меню навігації"
                        >
                            <div className="relative w-5 h-4">
                                <span className={`absolute top-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                                <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400 -translate-y-1/2 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {Object.entries(navLinks[language]).map(([key, label]) => {
                            const isActive = location.pathname === `/${key}` ||
                                           (key === 'home' && location.pathname === '/');
                            const isClub100 = key === 'benefits';

                            if (isClub100) {
                                return (
                                    <Link
                                        key={key}
                                        to={`/${key}`}
                                        className={`block mt-2 px-3 py-2 text-base font-bold uppercase tracking-wide border text-center ${
                                            isActive
                                                ? 'bg-brand-yellow text-black border-brand-yellow'
                                                : 'text-brand-yellow border-brand-yellow/50'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={key}
                                    to={key === 'home' ? '/' : `/${key}`}
                                    className={`block px-3 py-2 text-base font-semibold uppercase tracking-wide border-l-2 ${
                                        isActive
                                            ? 'text-brand-yellow border-brand-yellow bg-white/5'
                                            : 'text-white/90 border-transparent hover:bg-white/5'
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        <div className="pt-4 pb-3 border-t border-white/10">
                            <div className="flex justify-center border border-white/15 w-fit mx-auto">
                                {languageOptions.map((option) => (
                                    <button
                                        key={option.code}
                                        onClick={() => setLanguage(option.code)}
                                        className={`px-3 py-1.5 text-sm font-medium ${
                                            language === option.code
                                                ? 'bg-yellow-400 text-black'
                                                : 'text-white/80'
                                        }`}
                                    >
                                        {option.flag} {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
