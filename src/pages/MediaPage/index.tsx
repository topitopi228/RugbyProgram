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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

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
        setCurrentPage(1); // Скинути на першу сторінку при зміні категорії
    }, [activeCategory, mediaItems]);

    // Синхронізація сторінки галереї з currentIndex (коли клікаєм на стрілки в плеєрі)
    useEffect(() => {
        const pageForCurrentIndex = Math.floor(currentIndex / itemsPerPage) + 1;
        if (pageForCurrentIndex !== currentPage) {
            setCurrentPage(pageForCurrentIndex);
        }
    }, [currentIndex]); // Тільки currentIndex в залежностях

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const handleMediaSelect = (index) => {
        setCurrentIndex(index);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Прокрутити до галереї
        const galleryElement = document.getElementById('media-gallery');
        if (galleryElement) {
            galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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

                {/* Main Content Area */}
                {isLoading ? (
                    <div className="flex items-center justify-center h-96">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                            <p className="text-gray-400">{t.loading}</p>
                        </div>
                    </div>
                ) : filteredItems.length > 0 ? (
                    <div>
                        {/* Premium Media Player */}
                        <motion.div 
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0 }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500/30 via-yellow-500/30 to-amber-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                                
                                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl rounded-3xl p-5 border border-slate-700/50 shadow-2xl overflow-hidden"
                                    style={{
                                        boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 100px rgba(251, 191, 36, 0.1)'
                                    }}
                                >
                                    {/* Decorative Corner Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>
                                    
                                    <MediaPlayer
                                        currentMedia={filteredItems[currentIndex]}
                                        onNext={handleNext}
                                        onPrevious={handlePrevious}
                                        language={language}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-gray-400 text-lg">{t.noMedia}</p>
                    </div>
                )}

                {/* Premium Media Gallery */}
                {filteredItems.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0 }}
                        className="mt-16"
                        id="media-gallery"
                    >
                        {/* Premium Section Header */}
                        <div className="relative mb-8">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
                            />
                            <h2 className="relative text-3xl font-bold mb-3 flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl border border-amber-400/30 shadow-lg">
                                    <FaTh className="w-6 h-6 text-amber-400" />
                                </div>
                                <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                                    {t.gallery}
                                </span>
                                <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
                            </h2>
                        </div>

                        {/* Gallery Container */}
                        <div className="relative group">
                            {/* Animated Glow Border */}
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl overflow-hidden"
                                style={{
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>
                                
                                <div className="relative z-10">
                                    <MediaGallery
                                        items={filteredItems}
                                        currentIndex={currentIndex}
                                        onSelect={handleMediaSelect}
                                        language={language}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Premium External Links */}
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0 }}
                    className="mt-20 mb-12"
                >
                    {/* Premium Section Header */}
                    <div className="relative mb-8">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                        />
                        <h2 className="relative text-3xl font-bold mb-3 flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30 shadow-lg">
                                <FaExternalLinkAlt className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                {t.externalLinks}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                        </h2>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {externalLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative"
                            >
                                {/* Animated Glow Border */}
                                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                                
                                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 shadow-xl overflow-hidden"
                                    style={{
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                                    }}
                                >
                                    {/* Decorative Corner Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Content */}
                                    <div className="relative flex items-start gap-4">
                                        {/* Icon Container */}
                                        <motion.div 
                                            className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/30 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            style={{
                                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent rounded-2xl"></div>
                                            <div className="relative text-blue-400 group-hover:text-blue-300 transition-colors">
                                                {getIconForLink(link.type)}
                                            </div>
                                        </motion.div>
                                        
                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                                                {link.title[language]}
                                            </h3>
                                            {link.description && (
                                                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                                    {link.description[language]}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Hover Arrow */}
                                    <motion.div 
                                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                                            <FaExternalLinkAlt className="w-4 h-4 text-blue-400" />
                                        </div>
                                    </motion.div>
                                    
                                    {/* Bottom Shine Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
