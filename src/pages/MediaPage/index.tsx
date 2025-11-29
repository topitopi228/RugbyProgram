// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import { getMediaItems, getExternalLinks, categories } from './mediaData';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaYoutube, FaNewspaper, FaExternalLinkAlt, FaFacebook } from 'react-icons/fa';

const MediaPage = () => {
    const { language } = useLanguage();
    const [mediaItems, setMediaItems] = useState([]);
    const [externalLinks] = useState(getExternalLinks());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const videoRef = useRef<HTMLVideoElement>(null);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        const loadMedia = async () => {
            try {
                const items = getMediaItems();
                setMediaItems(items);
            } catch (error) {
                console.error('Помилка завантаження медіа:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadMedia();
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(e => console.error('Помилка відтворення відео:', e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [currentIndex, isPlaying]);

    useEffect(() => {
        setCurrentIndex(0);
        setIsPlaying(false);
    }, [activeCategory]);

    const currentItem = mediaItems[currentIndex] || null;
    const filteredItems = activeCategory === 'all' ? mediaItems :
        activeCategory === 'videos' ? mediaItems.filter(item => item.category === 'matches' || item.category === 'training') :
            activeCategory === 'photos' ? mediaItems.filter(item => item.category === 'photos') :
                mediaItems.filter(item => item.category === 'other');

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setCurrentIndex(nextIndex);
        setIsPlaying(true);
    };

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setCurrentIndex(prevIndex);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(e => console.error('Помилка відтворення:', e));
            } else {
                videoRef.current.pause();
            }
        }
    };

    const selectMedia = (index: number) => {
        setCurrentIndex(index);
        setIsPlaying(true);
    };

    const renderExternalLinks = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {externalLinks.map((link) => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-yellow-500/50 flex flex-col h-full"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="flex items-center mb-4">
                        <div
                            className={`p-3 rounded-lg ${link.type === 'instagram' ? 'bg-pink-600/20 text-pink-400' : link.type === 'youtube' ? 'bg-red-600/20 text-red-400' : link.type === 'facebook' ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600/20 text-blue-400'}`}>
                            {link.type === 'instagram' && <FaInstagram className="w-6 h-6" />}
                            {link.type === 'youtube' && <FaYoutube className="w-6 h-6" />}
                            {link.type === 'facebook' && <FaFacebook className="w-6 h-6" />}
                            {link.type === 'news' && <FaNewspaper className="w-6 h-6" />}
                        </div>
                        <h3 className="ml-4 text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                            {link.title[language]}
                        </h3>
                    </div>
                    {link.description &&
                        <p className="text-gray-300 text-sm mt-2 flex-grow">{link.description[language]}</p>}
                    {link.image &&
                        <img src={link.image} alt={link.title[language]} loading="eager" decoding="async" className="w-full h-40 object-cover mb-4" />}
                    <div className="mt-4 flex items-center text-yellow-400 text-sm font-medium">
                        {language === 'UA' ? 'Відкрити' : language === 'EN' ? 'Open' : 'Megnyitás'} <FaExternalLinkAlt
                        className="w-3 h-3 ml-2" />
                    </div>
                </motion.a>
            ))}
        </div>
    );

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="flex flex-col items-center">
                    <div
                        className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg text-gray-300">{language === 'UA' ? 'Завантаження медіа...' : language === 'EN' ? 'Loading media...' : 'Média betöltése...'}</p>
                </div>
            </div>
        );
    }

    if (mediaItems.length === 0) {
        return (
            <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
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

                <div className="relative text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold text-white mb-2">{language === 'UA' ? 'Медіа не знайдено' : language === 'EN' ? 'No media found' : 'Nincs megjeleníthető média'}</h2>
                    <p className="text-gray-400">{language === 'UA' ? 'На жаль, не вдалося завантажити медіафайли.' : language === 'EN' ? 'Could not load media files.' : 'Nem sikerült betölteni a médiafájlokat.'}</p>
                </div>
            </div>
        );
    }

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

            <div className="relative py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                <HeroSection language={language} />
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    language={language}
                />

                <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto mb-12 border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative pt-[56.25%] bg-black">
                        {currentItem && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentItem.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    {currentItem.type === 'video' ? (
                                        <div className="absolute inset-0 group">
                                            <video
                                                ref={videoRef}
                                                src={currentItem.url}
                                                poster={currentItem.poster}
                                                className="w-full h-full object-cover"
                                                controls={isPlaying}
                                                playsInline
                                                preload="metadata"
                                                onPlay={() => setIsPlaying(true)}
                                                onPause={() => setIsPlaying(false)}
                                                onEnded={goToNext}
                                                onClick={togglePlay}
                                            />
                                            {!isPlaying && (
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
                                                    onClick={togglePlay}
                                                >
                                                    <motion.div
                                                        className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform"
                                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                                                    >
                                                        <svg className="w-10 h-10 text-white" fill="currentColor"
                                                             viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={currentItem.url} alt={currentItem.title[language]}
                                                 loading="eager"
                                                 decoding="async"
                                                 className="max-h-full max-w-full object-contain" />
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        )}

                        {filteredItems.length > 1 && (
                            <>
                                <button onClick={goToPrevious}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                                        aria-label={language === 'UA' ? 'Попереднє' : language === 'EN' ? 'Previous' : 'Előző'}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={goToNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                                        aria-label={language === 'UA' ? 'Наступне' : language === 'EN' ? 'Next' : 'Következő'}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {currentItem && (
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-amber-400 text-sm font-medium">
                                            {currentItem.category === 'matches' ? (language === 'UA' ? 'Матч' : language === 'EN' ? 'Match' : 'Mérkőzés') : (language === 'UA' ? 'Тренування' : language === 'EN' ? 'Training' : 'Edzés')}
                                        </span>
                                        <span className="text-gray-500">•</span>
                                        <span
                                            className="text-sm text-gray-400">{currentIndex + 1} / {filteredItems.length}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{currentItem.title[language]}</h2>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={togglePlay}
                                            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                                            aria-label={isPlaying ? 'Pause' : 'Play'}>
                                        {isPlaying ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>

                {activeCategory === 'other' ? (
                    renderExternalLinks()
                ) : (
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                variants={container} initial="hidden" animate="show">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                animate="show"
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                onClick={() => selectMedia(index)}
                                className={`group cursor-pointer rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${currentItem?.id === item.id ? 'ring-2 ring-amber-500' : 'hover:border-amber-500/50'}`}
                            >
                                <div className="relative pt-[56.25%] bg-gray-900">
                                    {item.type === 'video' ? (
                                        <>
                                            <img
                                                src={item.poster}
                                                alt={item.title[language]}
                                                loading={index < 4 ? "eager" : "lazy"}
                                                decoding="async"
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div
                                                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor"
                                                         viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <img src={item.url} alt={item.title[language]}
                                             loading={index < 4 ? "eager" : "lazy"}
                                             decoding="async"
                                             className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    )}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-xs font-medium px-2 py-1 rounded bg-amber-500/90 text-gray-900">
                                                {item.category === 'matches' ? (language === 'UA' ? 'Матч' : language === 'EN' ? 'Match' : 'Mérkőzés') : (language === 'UA' ? 'Тренування' : language === 'EN' ? 'Training' : 'Edzés')}
                                            </span>
                                            <span
                                                className="text-xs text-gray-400">{index + 1} / {filteredItems.length}</span>
                                        </div>
                                        <h3 className="text-white font-medium mt-1 line-clamp-1">{item.title[language]}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
                </div>
            </div>
        </div>
    );
};

export default MediaPage;
