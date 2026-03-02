// @ts-nocheck
import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import MediaPlayer from './components/MediaPlayer';
import MediaGallery from './components/MediaGallery';
import { getMediaItems, getExternalLinks } from './mediaData';
import { FaInstagram, FaYoutube, FaNewspaper, FaFacebook, FaExternalLinkAlt, FaFilter, FaPlay, FaImage, FaTh } from 'react-icons/fa';

const MediaPage = () => {
    const { language } = useLanguage();
    const [mediaItems, setMediaItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [externalLinks] = useState(getExternalLinks());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const translations = {
        UA: {
            title: 'Медіа',
            subtitle: 'Фото та відео нашої команди',
            allMedia: 'Всі медіа',
            videos: 'Відео',
            photos: 'Фото',
            matches: 'Матчі',
            training: 'Тренування',
            gallery: 'Галерея',
            externalLinks: 'Корисні посилання',
            loading: 'Завантаження...',
            noMedia: 'Медіа не знайдено',
            type: 'Тип:',
            date: 'Дата:',
            duration: 'Тривалість:',
            statistics: 'Статистика'
        },
        EN: {
            title: 'Media',
            subtitle: 'Photos and videos of our team',
            allMedia: 'All Media',
            videos: 'Videos',
            photos: 'Photos',
            matches: 'Matches',
            training: 'Training',
            gallery: 'Gallery',
            externalLinks: 'Useful Links',
            loading: 'Loading...',
            noMedia: 'No media found',
            type: 'Type:',
            date: 'Date:',
            duration: 'Duration:',
            statistics: 'Statistics'
        },
        HUN: {
            title: 'Média',
            subtitle: 'Csapatunk fotói és videói',
            allMedia: 'Összes média',
            videos: 'Videók',
            photos: 'Fotók',
            matches: 'Mérkőzések',
            training: 'Edzés',
            gallery: 'Galéria',
            externalLinks: 'Hasznos linkek',
            loading: 'Betöltés...',
            noMedia: 'Nem található média',
            type: 'Típus:',
            date: 'Dátum:',
            duration: 'Időtartam:',
            statistics: 'Statisztika'
        }
    };

    const t = translations[language];

    useEffect(() => {
        const loadMedia = async () => {
            try {
                const items = getMediaItems();
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
                setIsMobile(isMobileDevice);
                
                const formattedItems = items
                    .filter(item => {
                        // Приховати відео на мобільних пристроях
                        if (isMobileDevice && item.type === 'video') {
                            return false;
                        }
                        return true;
                    })
                    .map(item => ({
                        id: item.id.toString(),
                        type: item.type === 'video' ? 'video' : 'photo',
                        src: item.url,
                        thumbnail: item.poster || item.url,
                        title: item.title[language],
                        category: item.category,
                        duration: item.type === 'video' ? '2:34' : undefined,
                        date: '2025'
                    }));
                setMediaItems(formattedItems);
                setFilteredItems(formattedItems);
            } catch (error) {
                console.error('Error loading media:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadMedia();
    }, [language]);

    useEffect(() => {
        let filtered = mediaItems;
        
        if (activeCategory === 'videos') {
            filtered = mediaItems.filter(item => item.type === 'video');
        } else if (activeCategory === 'photos') {
            filtered = mediaItems.filter(item => item.type === 'photo');
        } else if (activeCategory === 'matches') {
            filtered = mediaItems.filter(item => item.category === 'matches');
        } else if (activeCategory === 'training') {
            filtered = mediaItems.filter(item => item.category === 'training');
        }
        
        setFilteredItems(filtered);
        setCurrentIndex(0);
    }, [activeCategory, mediaItems]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const handleMediaSelect = (index) => {
        setCurrentIndex(index);
    };

    const getIconForLink = (type) => {
        switch (type) {
            case 'instagram': return <FaInstagram className="w-5 h-5" />;
            case 'youtube': return <FaYoutube className="w-5 h-5" />;
            case 'facebook': return <FaFacebook className="w-5 h-5" />;
            case 'news': return <FaNewspaper className="w-5 h-5" />;
            default: return <FaExternalLinkAlt className="w-5 h-5" />;
        }
    };

    const categoryButtons = [
        { id: 'all', label: t.allMedia, icon: <FaTh className="w-4 h-4" /> },
        { id: 'videos', label: t.videos, icon: <FaPlay className="w-4 h-4" /> },
        { id: 'photos', label: t.photos, icon: <FaImage className="w-4 h-4" /> },
        { id: 'matches', label: t.matches, icon: <FaFilter className="w-4 h-4" /> },
        { id: 'training', label: t.training, icon: <FaFilter className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern */}
            <div 
                className="fixed inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Hero Section */}
            <HeroSection title={t.title} subtitle={t.subtitle} />

            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categoryButtons.filter(button => !(isMobile && button.id === 'videos')).map((button) => (
                        <motion.button
                            key={button.id}
                            onClick={() => setActiveCategory(button.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                                ${activeCategory === button.id 
                                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg shadow-amber-500/30' 
                                    : 'bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                                }
                            `}
                        >
                            {button.icon}
                            <span>{button.label}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Main Content Area */}
                {isLoading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                            <p className="text-gray-400">{t.loading}</p>
                        </div>
                    </div>
                ) : filteredItems.length > 0 ? (
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Media Player - Left Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 shadow-2xl">
                                <MediaPlayer
                                    currentMedia={filteredItems[currentIndex]}
                                    onNext={handleNext}
                                    onPrevious={handlePrevious}
                                    language={language}
                                />
                            </div>
                        </motion.div>

                        {/* Info & Stats - Right Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-4 space-y-6"
                        >
                            {/* Current Media Info */}
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                                <h3 className="text-xl font-bold text-amber-400 mb-4">
                                    {filteredItems[currentIndex]?.title}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400 text-sm">{t.type}</span>
                                        <span className="text-white">
                                            {filteredItems[currentIndex]?.type === 'video' ? t.videos : t.photos}
                                        </span>
                                    </div>
                                    {filteredItems[currentIndex]?.date && (
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400 text-sm">{t.date}</span>
                                            <span className="text-white">{filteredItems[currentIndex].date}</span>
                                        </div>
                                    )}
                                    {filteredItems[currentIndex]?.duration && (
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400 text-sm">{t.duration}</span>
                                            <span className="text-white">{filteredItems[currentIndex].duration}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Statistics */}
                            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                                <h3 className="text-lg font-semibold text-white mb-4">{t.statistics}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 bg-slate-800/50 rounded-xl">
                                        <p className="text-2xl font-bold text-amber-400">
                                            {mediaItems.filter(i => i.type === 'video').length}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">{t.videos}</p>
                                    </div>
                                    <div className="text-center p-3 bg-slate-800/50 rounded-xl">
                                        <p className="text-2xl font-bold text-amber-400">
                                            {mediaItems.filter(i => i.type === 'photo').length}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">{t.photos}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-gray-400 text-lg">{t.noMedia}</p>
                    </div>
                )}

                {/* Media Gallery */}
                {filteredItems.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <FaTh className="w-6 h-6 text-amber-400" />
                            <span>{t.gallery}</span>
                        </h2>
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                            <MediaGallery
                                items={filteredItems}
                                currentIndex={currentIndex}
                                onSelect={handleMediaSelect}
                                language={language}
                            />
                        </div>
                    </motion.div>
                )}

                {/* External Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <FaExternalLinkAlt className="w-6 h-6 text-amber-400" />
                        <span>{t.externalLinks}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {externalLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl group-hover:from-amber-500/30 group-hover:to-yellow-500/30 transition-all duration-300">
                                        {getIconForLink(link.type)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                                            {link.title[language]}
                                        </h3>
                                        {link.description && (
                                            <p className="text-sm text-gray-400 mt-1">
                                                {link.description[language]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FaExternalLinkAlt className="w-4 h-4 text-amber-400" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MediaPage;
