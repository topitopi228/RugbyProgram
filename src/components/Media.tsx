import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageUtils';

const Media = () => {
    const { language } = useLanguage();

    const translations = {
        UA: {
            title: 'Медіа',
            photos: 'Фото',
            videos: 'Відео',
            all: 'Всі',
            noMedia: 'Медіафайли відсутні',
        },
        EN: {
            title: 'Media',
            photos: 'Photos',
            videos: 'Videos',
            all: 'All',
            noMedia: 'No media available',
        },
        HUN: {
            title: 'Média',
            photos: 'Fotók',
            videos: 'Videók',
            all: 'Összes',
            noMedia: 'Nincs elérhető média',
        },
    };

    const t = translations[language];
    const [activeTab, setActiveTab] = React.useState('all');

    // Placeholder for media items - replace with your actual data
    const mediaItems = [
        { id: 1, type: 'photo', src: '/media/photo1.jpg', title: 'Training Session' },
        { id: 2, type: 'video', src: 'https://www.youtube.com/embed/...', title: 'Match Highlights' },
        // Add more media items as needed
    ];

    const filteredMedia = activeTab === 'all'
        ? mediaItems
        : mediaItems.filter(item => item.type === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">
                    {t.title}
                </h1>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg border border-gray-700 bg-gray-800 p-1">
                        {['all', 'photo', 'video'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    activeTab === tab
                                        ? 'bg-yellow-500 text-gray-900'
                                        : 'text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {t[tab === 'photo' ? 'photos' : tab === 'video' ? 'videos' : 'all']}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMedia.length > 0 ? (
                        filteredMedia.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                            >
                                {item.type === 'photo' ? (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-64 object-cover"
                                    />
                                ) : (
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src={item.src}
                                            title={item.title}
                                            className="w-full h-64"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-400">{t.noMedia}</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Media;
