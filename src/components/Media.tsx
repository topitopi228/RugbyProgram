import {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useLanguage} from './LanguageUtils';
import {FaInstagram, FaYoutube, FaNewspaper, FaExternalLinkAlt, FaFacebook} from 'react-icons/fa';

interface MediaItem {
    id: number;
    type: 'video' | 'image';
    url: string;
    poster: string; // Поле для постера
    title: {
        UA: string;
        EN: string;
        HUN: string;
    };
    category?: string;
}

interface ExternalLink {
    id: number;
    type: 'instagram' | 'youtube' | 'news' | 'facebook';
    url: string;
    title: {
        UA: string;
        EN: string;
        HUN: string;
    };
    description?: {
        UA: string;
        EN: string;
        HUN: string;
    };
    image?: string;
}

const Media = () => {
    const {language} = useLanguage();
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
    const [externalLinks] = useState<ExternalLink[]>([
        {
            id: 1,
            type: 'facebook',
            url: 'https://www.facebook.com/share/v/1anno2TNGQ/',
            title: {UA: 'Facebook Пост', EN: 'Facebook Post', HUN: 'Facebook bejegyzés'},
            description: {
                UA: 'Оновлення з тренувального збору',
                EN: 'Training camp update',
                HUN: 'Edzőtábori frissítés'
            },
            image: '/face_post.webp',
        },
        {
            id: 2,
            type: 'news',
            url: 'https://www.rupor.info/news/196710/bf-mila-ta-oleksiy-yurenko-dopomogli-yunim-regbistam-u-16-uspishno-proyti-zbori-u-polshchi/',
            title: {UA: 'Новини Rupor', EN: 'Rupor News', HUN: 'Rupor Hírek'},
            description: {
                UA: 'БФ "Міла" та Олексій Юренко допомогли юним регбістам U16',
                EN: 'BF "Mila" and Oleksiy Yurenko helped young U16 rugby players',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko segítette a fiatal U16-os rögbistákat'
            },
            image: '/post2.webp',
        },
        {
            id: 3,
            type: 'news',
            url: 'https://kievtime.com/kiev/zavdyaky-pidtrymtsi-bf-mila-ta-oleksiya-yurenko-yuni-ukrayinski-regbisty-u-16-zrobyly-krok-do-olimpijskyh-igor/amp/',
            title: {UA: 'Kyiv Time', EN: 'Kyiv Time', HUN: 'Kijevi Idő'},
            description: {
                UA: 'Завдяки підтримці БФ "Міла" та Олексія Юренка',
                EN: 'Thanks to the support of BF "Mila" and Oleksiy Yurenko',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko támogatásának köszönhetően'
            },
            image: '/post3.webp',
        },
        {
            id: 4,
            type: 'news',
            url: 'https://gerasport.com/blogs/news/%D0%B7%D0%B1%D0%BE%D1%80%D0%B8-%D0%B7%D0%B1%D1%96%D1%80%D0%BD%D0%BE%D1%97-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8-%D0%B7-%D1%80%D0%B5%D0%B3%D0%B1%D1%96-u-16',
            title: {UA: 'Gera Sport', EN: 'Gera Sport', HUN: 'Gera Sport'},
            description: {
                UA: 'Збори збірної України з регбі U16',
                EN: 'Training camp of Ukraine U16 rugby team',
                HUN: 'Az ukrán U16-os rögbi válogatott edzőtábora'
            },
            image: '/post4.webp',
        },
        {
            id: 5,
            type: 'news',
            url: 'https://svoboda.ua/38885/2025/bf-mila-ta-oleksij-yurenko-dopomogli-yunim-regbistam-u-16-uspishno-projti-zbori-u-polshhi/',
            title: {UA: 'Свобода', EN: 'Svoboda', HUN: 'Szabadság'},
            description: {
                UA: 'БФ "Міла" та Олексій Юренко допомогли юним регбістам U16',
                EN: 'BF "Mila" and Oleksiy Yurenko helped young U16 rugby players',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko segítette a fiatal U16-os rögbistákat'
            },
            image: '/post5.webp',
        },
        {
            id: 6,
            type: 'news',
            url: 'https://for-ua.com/article/1242206',
            title: {UA: 'For-Ua', EN: 'For-Ua', HUN: 'For-Ua'},
            description: {
                UA: 'Новини про підготовку збірної U16',
                EN: 'News about U16 team preparation',
                HUN: 'Hírek az U16-os válogatott felkészüléséről'
            },
            image: '/post6.webp',
        },
        {
            id: 7,
            type: 'youtube',
            url: 'https://youtu.be/gl_hsrpof3c',
            title: {UA: 'Відео з тренувань', EN: 'Training Video', HUN: 'Edzés videó'},
            description: {
                UA: 'Огляд тренувального процесу',
                EN: 'Training process overview',
                HUN: 'Az edzésfolyamat áttekintése'
            },
            image: 'https://img.youtube.com/vi/gl_hsrpof3c/maxresdefault.jpg',
        },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const videoRef = useRef<HTMLVideoElement>(null);

    const container = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {staggerChildren: 0.1}},
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0, transition: {duration: 0.5}},
    };

    useEffect(() => {
        const loadMedia = async () => {
            try {
                const items: MediaItem[] = [
                    {
                        id: 1,
                        type: 'video',
                        url: '/media12.webm',
                        poster: '/media12_poster.jpg',
                        title: {UA: 'Тренування U16', EN: 'U16 Training', HUN: 'U16 Mérkőzés'},
                        category: 'matches'
                    },
                    {
                        id: 3,
                        type: 'video',
                        url: '/media15.webm',
                        poster: '/media15_poster.jpg',
                        title: {UA: 'Командні тренування', EN: 'Team Training', HUN: 'Csapat edzés'},
                        category: 'training'
                    },
                    {
                        id: 4,
                        type: 'video',
                        url: '/media16.webm',
                        poster: '/media16_poster.jpg',
                        title: {UA: 'Турнірні ігри', EN: 'Tournament Games', HUN: 'Torna mérkőzések'},
                        category: 'matches'
                    },
                    {
                        id: 5,
                        type: 'video',
                        url: '/media17.webm',
                        poster: '/media17_poster.jpg',
                        title: {
                            UA: 'Майстер-клас з гри в захисті',
                            EN: 'Defense Masterclass',
                            HUN: 'Védekezési mesterfokon'
                        },
                        category: 'training'
                    },
                    {
                        id: 6,
                        type: 'video',
                        url: '/media18.webm',
                        poster: '/media18_poster.jpg',
                        title: {UA: 'Атакувальні комбінації', EN: 'Attacking Combinations', HUN: 'Támadó kombinációk'},
                        category: 'training'
                    },
                    {
                        id: 7,
                        type: 'video',
                        url: '/media19.webm',
                        poster: '/media19_poster.jpg',
                        title: {UA: 'Перемога в турнірі', EN: 'Win in the tournament', HUN: 'Bedobások és rúgások'},
                        category: 'matches'
                    },
                    {
                        id: 8,
                        type: 'video',
                        url: '/media20.webm',
                        poster: '/media20_poster.jpg',
                        title: {UA: 'Швидкісні тренування', EN: 'Speed Training', HUN: 'Gyorsasági edzés'},
                        category: 'training'
                    },
                    {
                        id: 9,
                        type: 'video',
                        url: '/media21.webm',
                        poster: '/media21_poster.jpg',
                        title: {UA: 'Тренувальний збір', EN: 'Training Camp', HUN: 'Edzőtábor'},
                        category: 'training'
                    },
                    {
                        id: 11,
                        type: 'video',
                        url: '/media2.webm',
                        poster: '/media2_poster.jpg',
                        title: {UA: 'Фінальний матч', EN: 'Final Match', HUN: 'Döntő mérkőzés'},
                        category: 'matches'
                    },
                    {
                        id: 12,
                        type: 'video',
                        url: '/media3.webm',
                        poster: '/media3_poster.jpg',
                        title: {UA: 'Розминка', EN: 'Final Match', HUN: 'Döntő mérkőzés'},
                        category: 'training'
                    },
                    {
                        id: 13,
                        type: 'video',
                        url: '/media6.webm',
                        poster: '/media6_poster.jpg',
                        title: {UA: 'Тренувальний матч', EN: 'Training Match', HUN: 'Döntő mérkőzés'},
                        category: 'matches'
                    },
                    {
                        id: 14,
                        type: 'video',
                        url: '/media7.webm',
                        poster: '/media7_poster.jpg',
                        title: {UA: 'Тренування', EN: 'Training', HUN: 'Döntő mérkőzés'},
                        category: 'matches'
                    },
                    // Photo items (drag1.webp to drag10.webp)
                    {
                        id: 15,
                        type: 'image',
                        url: '/drag1.webp',
                        poster: '',
                        title: {UA: 'Фото 1', EN: 'Photo 1', HUN: 'Fénykép 1'},
                        category: 'photos'
                    },
                    {
                        id: 16,
                        type: 'image',
                        url: '/drag2.webp',
                        poster: '',
                        title: {UA: 'Фото 2', EN: 'Photo 2', HUN: 'Fénykép 2'},
                        category: 'photos'
                    },
                    {
                        id: 17,
                        type: 'image',
                        url: '/drag3.webp',
                        poster: '',
                        title: {UA: 'Фото 3', EN: 'Photo 3', HUN: 'Fénykép 3'},
                        category: 'photos'
                    },
                    {
                        id: 18,
                        type: 'image',
                        url: '/drag4.webp',
                        poster: '',
                        title: {UA: 'Фото 4', EN: 'Photo 4', HUN: 'Fénykép 4'},
                        category: 'photos'
                    },
                    {
                        id: 19,
                        type: 'image',
                        url: '/drag5.webp',
                        poster: '',
                        title: {UA: 'Фото 5', EN: 'Photo 5', HUN: 'Fénykép 5'},
                        category: 'photos'
                    },
                    {
                        id: 20,
                        type: 'image',
                        url: '/drag6.webp',
                        poster: '',
                        title: {UA: 'Фото 6', EN: 'Photo 6', HUN: 'Fénykép 6'},
                        category: 'photos'
                    },
                    {
                        id: 21,
                        type: 'image',
                        url: '/drag7.webp',
                        poster: '',
                        title: {UA: 'Фото 7', EN: 'Photo 7', HUN: 'Fénykép 7'},
                        category: 'photos'
                    },
                    {
                        id: 22,
                        type: 'image',
                        url: '/drag8.webp',
                        poster: '',
                        title: {UA: 'Фото 8', EN: 'Photo 8', HUN: 'Fénykép 8'},
                        category: 'photos'
                    },
                    {
                        id: 23,
                        type: 'image',
                        url: '/drag9.webp',
                        poster: '',
                        title: {UA: 'Фото 9', EN: 'Photo 9', HUN: 'Fénykép 9'},
                        category: 'photos'
                    },
                    {
                        id: 24,
                        type: 'image',
                        url: '/drag10.webp',
                        poster: '',
                        title: {UA: 'Фото 10', EN: 'Photo 10', HUN: 'Fénykép 10'},
                        category: 'photos'
                    },
                ];
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

    const categories = [
        {id: 'all', name: {UA: 'Усі', EN: 'All', HUN: 'Mind'}},
        {id: 'videos', name: {UA: 'Відео', EN: 'Video', HUN: 'Videó'}},
        {id: 'photos', name: {UA: 'Фото', EN: 'Photos', HUN: 'Fényképek'}},
        {id: 'other', name: {UA: 'Інше', EN: 'Other', HUN: 'Egyéb'}},
    ];

    const renderExternalLinks = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {externalLinks.map((link) => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-yellow-500/50 flex flex-col h-full"
                    whileHover={{scale: 1.02}}
                >
                    <div className="flex items-center mb-4">
                        <div
                            className={`p-3 rounded-lg ${link.type === 'instagram' ? 'bg-pink-600/20 text-pink-400' : link.type === 'youtube' ? 'bg-red-600/20 text-red-400' : link.type === 'facebook' ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600/20 text-blue-400'}`}>
                            {link.type === 'instagram' && <FaInstagram className="w-6 h-6"/>}
                            {link.type === 'youtube' && <FaYoutube className="w-6 h-6"/>}
                            {link.type === 'facebook' && <FaFacebook className="w-6 h-6"/>}
                            {link.type === 'news' && <FaNewspaper className="w-6 h-6"/>}
                        </div>
                        <h3 className="ml-4 text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                            {link.title[language]}
                        </h3>
                    </div>
                    {link.description &&
                        <p className="text-gray-300 text-sm mt-2 flex-grow">{link.description[language]}</p>}
                    {link.image &&
                        <img src={link.image} alt={link.title[language]} className="w-full h-40 object-cover mb-4"/>}
                    <div className="mt-4 flex items-center text-yellow-400 text-sm font-medium">
                        {language === 'UA' ? 'Відкрити' : language === 'EN' ? 'Open' : 'Megnyitás'} <FaExternalLinkAlt
                        className="w-3 h-3 ml-2"/>
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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold text-white mb-2">{language === 'UA' ? 'Медіа не знайдено' : language === 'EN' ? 'No media found' : 'Nincs megjeleníthető média'}</h2>
                    <p className="text-gray-400">{language === 'UA' ? 'На жаль, не вдалося завантажити медіафайли.' : language === 'EN' ? 'Could not load media files.' : 'Nem sikerült betölteni a médiafájlokat.'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl md:mt-13 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                        {language === 'UA' ? 'Медіа' : language === 'EN' ? 'Media' : 'Média'}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {language === 'UA' ? 'Останні відео та фото з тренувань та матчів нашої команди' : language === 'EN' ? 'Latest videos and photos from our team\'s training sessions and matches' : 'Legfrissebb videók és képek csapatunk edzéseiről és mérkőzéseiről'}
                    </p>
                </motion.div>

                <motion.div className="flex flex-wrap justify-center gap-2 mb-8" variants={container} initial="hidden"
                            animate="show">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/20' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            variants={item}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            {category.name[language]}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto mb-12 border border-gray-700/50"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                >
                    <div className="relative pt-[56.25%] bg-black">
                        {currentItem && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentItem.id}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.3}}
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
                                                        whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                                    >
                                                        <svg className="w-10 h-10 text-white" fill="currentColor"
                                                             viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z"/>
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <img src={currentItem.url} alt={currentItem.title[language]}
                                                 className="max-h-full max-w-full object-contain"/>
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
                                              d="M15 19l-7-7 7-7"/>
                                    </svg>
                                </button>
                                <button onClick={goToNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                                        aria-label={language === 'UA' ? 'Наступне' : language === 'EN' ? 'Next' : 'Következő'}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 5l7 7-7 7"/>
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
                                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
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
                                transition={{type: 'spring', stiffness: 300, damping: 20}}
                                onClick={() => selectMedia(index)}
                                className={`group cursor-pointer rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${currentItem?.id === item.id ? 'ring-2 ring-amber-500' : 'hover:border-amber-500/50'}`}
                            >
                                <div className="relative pt-[56.25%] bg-gray-900">
                                    {item.type === 'video' ? (
                                        <>
                                            <img
                                                src={item.poster}
                                                alt={item.title[language]}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div
                                                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor"
                                                         viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <img src={item.url} alt={item.title[language]}
                                             className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
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
    );
};

export default Media;
