import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useLanguage} from './LanguageUtils';
import type {Language} from './LanguageUtils';
import {motion, AnimatePresence} from 'framer-motion';

// Navigation links with translations
const navLinks: Record<Language, { [key: string]: string }> = {
    UA: {
        home: 'Головна',
        team: 'Команда',
        club: 'Новини',
        about: 'Майбутнє',
        stadium: 'Спонсори',
        contact: 'Медіа',
    },
    EN: {
        home: 'Home',
        team: 'Team',
        club: 'News',
        about: 'Future',
        stadium: 'Sponsors',
        contact: 'Media',
    },
    HUN: {
        home: 'Főoldal',
        team: 'Csapat',
        club: 'Hírek',
        about: 'Jövő',
        stadium: 'Szponzorok',
        contact: 'Média',
    },
};

// Language options with flags
const languageOptions: { code: Language; label: string; flag: string }[] = [
    {code: 'UA', label: 'УКР', flag: '🇺🇦'},
    {code: 'EN', label: 'ENG', flag: '🇬🇧'},
    {code: 'HUN', label: 'MAG', flag: '🇭🇺'},
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {language, setLanguage} = useLanguage();
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center group"
                    >
                        <span
                            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            UKRAINE U16
                            RUGBY 7S
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {Object.entries(navLinks[language]).map(([key, label]) => (
                            <Link
                                key={key}
                                to={key === 'home' ? '/' : `/${key}`}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    location.pathname === `/${key}` ||
                                    (key === 'home' && location.pathname === '/')
                                        ? 'text-yellow-400'
                                        : 'text-white hover:text-yellow-400'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className="hidden md:flex items-center space-x-2">
                        {languageOptions.map((option) => (
                            <button
                                key={option.code}
                                onClick={() => setLanguage(option.code)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                    language === option.code
                                        ? 'bg-yellow-500 text-gray-900'
                                        : 'text-white hover:bg-gray-700'
                                }`}
                            >
                                {option.flag} {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="md:hidden bg-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {Object.entries(navLinks[language]).map(([key, label]) => (
                                <Link
                                    key={key}
                                    to={key === 'home' ? '/' : `/${key}`}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        location.pathname === `/${key}` ||
                                        (key === 'home' && location.pathname === '/')
                                            ? 'bg-gray-900 text-yellow-400'
                                            : 'text-white hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex space-x-2">
                                    {languageOptions.map((option) => (
                                        <button
                                            key={option.code}
                                            onClick={() => setLanguage(option.code)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                language === option.code
                                                    ? 'bg-yellow-500 text-gray-900'
                                                    : 'bg-gray-700 text-white'
                                            }`}
                                        >
                                            {option.flag} {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;