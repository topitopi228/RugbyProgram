// @ts-nocheck
import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import HeroSection from './components/HeroSection';
import MediaGallery from './components/MediaGallery';
import Lightbox from './components/Lightbox';
import { getMediaItems, getExternalLinks, eventCategories } from './mediaData';
import type { EventCategory } from './mediaData';
import { loadAllCloudinaryImages } from './cloudinaryService';
import EventFilter from './components/EventFilter';
import { FaInstagram, FaYoutube, FaNewspaper, FaFacebook, FaExternalLinkAlt, FaTh } from 'react-icons/fa';

const MediaPage = () => {
    const { language } = useLanguage();
    const [mediaItems, setMediaItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [externalLinks] = useState(getExternalLinks());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeEvent, setActiveEvent] = useState<EventCategory>('all'); // Нова змінна для події
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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

    // Завантаження медіа при завантаженні сторінки
    useEffect(() => {
        const loadMedia = async () => {
            try {
                setIsLoading(true);
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
                setIsMobile(isMobileDevice);
                
                // Завантажуємо локальні медіа (фото + відео)
                const localItems = getMediaItems();
                const formattedLocal = localItems
                    .filter(item => {
                        // Приховати відео на мобільних пристроях
                        if (isMobileDevice && item.type === 'video') {
                            return false;
                        }
                        return true;
                    })
                    .map(item => ({
                        id: item.id.toString(),
                        type: item.type,
                        src: item.url,
                        thumbnail: item.poster || item.url,
                        title: item.title[language],
                        category: item.category,
                        event: item.event,
                        duration: item.type === 'video' ? '2:34' : undefined,
                        date: '2025-2026'
                    }));
                
                // Завантажуємо фото з Cloudinary
                const cloudinaryMedia = await loadAllCloudinaryImages();
                const formattedCloudinary = cloudinaryMedia.map(item => ({
                    id: item.id.toString(),
                    type: item.type,
                    src: item.url,
                    thumbnail: item.poster || item.url,
                    title: item.title[language],
                    category: item.category,
                    event: item.event,
                    duration: undefined,
                    date: '2025-2026'
                }));
                
                // Об'єднуємо локальні та Cloudinary медіа
                const allMedia = [...formattedLocal, ...formattedCloudinary];
                
                setMediaItems(allMedia);
                setFilteredItems(allMedia);
            } catch (error) {
                console.error('Error loading media:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadMedia();
    }, [language]);

    // Підрахунок кількості фото для кожної події
    const photoCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        eventCategories.forEach(event => {
            if (event.id === 'all') {
                counts[event.id] = mediaItems.length;
            } else {
                counts[event.id] = mediaItems.filter(item => item.event === event.id).length;
            }
        });
        return counts;
    }, [mediaItems]);

    // Фільтрація по події
    useEffect(() => {
        let filtered = mediaItems;
        
        // Спочатку фільтруємо по події
        if (activeEvent !== 'all') {
            filtered = mediaItems.filter(item => item.event === activeEvent);
        }
        
        // Потім фільтруємо по категорії (фото/відео)
        if (activeCategory === 'videos') {
            filtered = filtered.filter(item => item.type === 'video');
        } else if (activeCategory === 'photos') {
            filtered = filtered.filter(item => item.type === 'photo');
        }
        
        setFilteredItems(filtered);
        setCurrentIndex(0);
        setCurrentPage(1);
    }, [activeEvent, activeCategory, mediaItems]);

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
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
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

    const handleEventChange = (eventId: EventCategory) => {
        setActiveEvent(eventId);
        setCurrentIndex(0);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <HeroSection title={t.title} subtitle={t.subtitle} />

            <div className="relative z-10 container mx-auto px-4 py-12">
                
                {/* Event Filter */}
                <EventFilter
                    eventCategories={eventCategories}
                    activeEvent={activeEvent}
                    onEventChange={handleEventChange}
                    language={language}
                    photoCounts={photoCounts}
                />

                {/* Main Content Area */}
                {isLoading && (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-neutral-400 font-bold uppercase tracking-wide">{t.loading}</p>
                    </div>
                )}
                {!isLoading && filteredItems.length === 0 && (
                    <div className="flex items-center justify-center h-96">
                        <p className="text-neutral-400 text-lg">{t.noMedia}</p>
                    </div>
                )}

                {/* Media Gallery */}
                {filteredItems.length > 0 && (
                    <div className="mt-16" id="media-gallery">
                        {/* Section Header */}
                        <div className="relative mb-8 border-b border-white/10 pb-4">
                            <h2 className="animate-fade-up relative text-3xl font-bold uppercase tracking-wide flex items-center gap-4 text-white">
                                <div className="p-3 bg-neutral-950 rounded-lg border border-white/10">
                                    <FaTh className="w-6 h-6 text-yellow-400" />
                                </div>
                                <span>{t.gallery}</span>
                            </h2>
                        </div>

                        {/* Gallery Container */}
                        <div className="relative bg-neutral-950 rounded-lg p-8 border border-white/10">
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
                )}

                {/* External Links */}
                <div className="mt-20 mb-12">
                    {/* Section Header */}
                    <div className="relative mb-8 border-b border-white/10 pb-4">
                        <h2 className="animate-fade-up relative text-3xl font-bold uppercase tracking-wide flex items-center gap-4 text-white">
                            <div className="p-3 bg-neutral-950 rounded-lg border border-brand-blue-light/30">
                                <FaExternalLinkAlt className="w-6 h-6 text-brand-blue-light" />
                            </div>
                            <span>{t.externalLinks}</span>
                        </h2>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {externalLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="relative bg-neutral-950 rounded-lg p-6 border border-white/10 group-hover:border-brand-blue-light transition-all duration-200 group-hover:-translate-y-1">
                                    {/* Content */}
                                    <div className="relative flex items-start gap-4">
                                        {/* Icon Container */}
                                        <div className="flex-shrink-0 p-4 bg-black rounded-lg border border-white/10 transition-transform duration-200 group-hover:scale-110">
                                            <div className="relative text-brand-blue-light">
                                                {getIconForLink(link.type)}
                                            </div>
                                        </div>
                                        
                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                {link.title[language]}
                                            </h3>
                                            {link.description && (
                                                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                                                    {link.description[language]}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="p-2 bg-brand-blue-light/10 rounded-lg border border-brand-blue-light/30">
                                            <FaExternalLinkAlt className="w-4 h-4 text-brand-blue-light" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <Lightbox
                    item={filteredItems[currentIndex] ?? null}
                    onClose={closeLightbox}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                />
            )}
        </div>
    );
};

export default MediaPage;
