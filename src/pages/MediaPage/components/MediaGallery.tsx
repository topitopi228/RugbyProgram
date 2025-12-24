import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaImage, FaClock } from 'react-icons/fa';

interface MediaItem {
    id: string;
    type: 'video' | 'photo';
    src: string;
    thumbnail: string;
    title: string;
    description?: string;
    date?: string;
    duration?: string;
    category?: string;
}

interface MediaGalleryProps {
    items: MediaItem[];
    currentIndex: number;
    onSelect: (index: number) => void;
    language: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items, currentIndex, onSelect, language }) => {
    const container = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.05,
                delayChildren: 0.1
            } 
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const getCategoryColor = (category?: string) => {
        switch (category) {
            case 'matches': return 'from-red-500/20 to-orange-500/20';
            case 'training': return 'from-blue-500/20 to-cyan-500/20';
            case 'photos': return 'from-purple-500/20 to-pink-500/20';
            default: return 'from-gray-500/20 to-slate-500/20';
        }
    };

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
            {items.map((mediaItem, index) => (
                <motion.div
                    key={mediaItem.id}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelect(index)}
                    className={`
                        relative aspect-video rounded-xl overflow-hidden cursor-pointer
                        ${index === currentIndex ? 'ring-2 ring-amber-500 shadow-2xl shadow-amber-500/50' : ''}
                        group transition-all duration-300
                    `}
                >
                    {/* Thumbnail */}
                    <div className="absolute inset-0">
                        <img
                            src={mediaItem.thumbnail}
                            alt={mediaItem.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`
                        absolute inset-0 bg-gradient-to-t ${getCategoryColor(mediaItem.category)}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    `} />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Media Type Icon */}
                    <div className="absolute top-2 left-2 z-10">
                        <div className="p-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                            {mediaItem.type === 'video' ? (
                                <FaPlay className="w-3 h-3 text-white" />
                            ) : (
                                <FaImage className="w-3 h-3 text-white" />
                            )}
                        </div>
                    </div>

                    {/* Duration for videos */}
                    {mediaItem.type === 'video' && mediaItem.duration && (
                        <div className="absolute bottom-2 right-2 z-10">
                            <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg">
                                <FaClock className="w-2.5 h-2.5 text-white" />
                                <span className="text-xs text-white font-medium">{mediaItem.duration}</span>
                            </div>
                        </div>
                    )}

                    {/* Active Indicator */}
                    {index === currentIndex && (
                        <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 border-2 border-amber-500 rounded-xl pointer-events-none"
                            initial={false}
                            animate={{ opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white text-sm font-semibold line-clamp-1">
                            {mediaItem.title}
                        </h4>
                        {mediaItem.date && (
                            <p className="text-gray-300 text-xs mt-0.5">
                                {mediaItem.date}
                            </p>
                        )}
                    </div>

                    {/* Play Button Overlay for Videos */}
                    {mediaItem.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                            >
                                <FaPlay className="w-5 h-5 text-white ml-0.5" />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MediaGallery;
