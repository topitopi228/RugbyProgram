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

// Language options with flags
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
                isScrolled 
                    ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-amber-500/20' 
                    : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center group transform hover:scale-105 transition-transform duration-300"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
                            UKRAINE U16
                            RUGBY 7S
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 flex-1 justify-center">
                        {Object.entries(navLinks[language]).map(([key, label]) => {
                            const isActive = location.pathname === `/${key}` || 
                                           (key === 'home' && location.pathname === '/');
                            const isClub100 = key === 'benefits';
                            
                            return (
                                <Link
                                    key={key}
                                    to={key === 'home' ? '/' : `/${key}`}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                                        ${isClub100 
                                            ? 'mx-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 hover:border-amber-400 hover:from-amber-500/20 hover:to-yellow-500/20' 
                                            : 'hover:bg-white/10'
                                        } ${isActive 
                                            ? isClub100 
                                                ? 'text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]' 
                                                : 'text-amber-400 bg-white/10' 
                                            : 'text-white/90 hover:text-amber-400'
                                        }`}
                                >
                                    {isClub100 && (
                                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                                        </span>
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isClub100 && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        )}
                                        {label}
                                    </span>
                                    {isActive && !isClub100 && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Language Selector */}
                    <div className="hidden md:flex items-center flex-shrink-0">
                        <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700/50">
                            {languageOptions.map((option) => (
                                <motion.button
                                    key={option.code}
                                    onClick={() => setLanguage(option.code)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                                        language === option.code
                                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {option.flag} {option.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg 
                                     bg-slate-800/70 backdrop-blur-sm
                                     border border-amber-500/40
                                     shadow-lg
                                     hover:bg-slate-700/70 hover:border-amber-400/60
                                     active:bg-slate-700/80
                                     transition-all duration-300"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Відкрити меню навігації"
                        >
                            <div className="relative w-5 h-4">
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        translateY: isMobileMenuOpen ? 8 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute top-0 left-0 w-full h-0.5 bg-amber-400 rounded-full transform origin-center"
                                />
                                <motion.span
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                        scale: isMobileMenuOpen ? 0 : 1
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-1/2 left-0 w-full h-0.5 bg-amber-400 rounded-full -translate-y-1/2"
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        translateY: isMobileMenuOpen ? -8 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full transform origin-center"
                                />
                            </div>
                        </motion.button>
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
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-amber-500/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {Object.entries(navLinks[language]).map(([key, label]) => {
                                const isActive = location.pathname === `/${key}` || 
                                               (key === 'home' && location.pathname === '/');
                                const isClub100 = key === 'benefits';
                                
                                return (
                                    <Link
                                        key={key}
                                        to={key === 'home' ? '/' : `/${key}`}
                                        className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                                            isClub100 
                                                ? 'bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30' 
                                                : ''
                                        } ${
                                            isActive
                                                ? isClub100 
                                                    ? 'text-amber-400 border-amber-400' 
                                                    : 'bg-slate-800/50 text-amber-400'
                                                : 'text-white/90 hover:bg-slate-800/30 hover:text-white'
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {isClub100 && (
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                            )}
                                            {label}
                                        </span>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 pb-3 border-t border-amber-500/20">
                                <div className="flex justify-center">
                                    <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700/50">
                                        {languageOptions.map((option) => (
                                            <button
                                                key={option.code}
                                                onClick={() => setLanguage(option.code)}
                                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                                                    language === option.code
                                                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg'
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;