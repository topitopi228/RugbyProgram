// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaImage } from 'react-icons/fa';

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
                staggerChildren: 0
            } 
        }
    };

    const item = {
        hidden: { opacity: 1 },
        show: { 
            opacity: 1, 
            transition: { 
                duration: 0
            }
        }
    };

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
            {items.map((mediaItem, index) => {
                const isActive = index === currentIndex;
                
                return (
                    <motion.div
                        key={mediaItem.id}
                        variants={item}
                        onClick={() => onSelect(index)}
                        className="relative cursor-pointer"
                    >
                        {/* Card Container */}
                        <div className={`
                            relative aspect-video rounded-xl overflow-hidden border-2
                            ${isActive ? 'border-amber-500 shadow-lg' : 'border-slate-700/50'}
                            transition-all duration-200
                        `}>
                            {/* Thumbnail */}
                            <div className="absolute inset-0">
                                {mediaItem.type === 'video' && mediaItem.thumbnail === mediaItem.src ? (
                                    <video
                                        src={mediaItem.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        playsInline
                                        webkit-playsinline="true"
                                        preload="metadata"
                                    />
                                ) : (
                                    <img
                                        src={mediaItem.thumbnail}
                                        alt={mediaItem.title}
                                        className="w-full h-full object-cover"
                                        loading={index < 12 ? "eager" : "lazy"}
                                        decoding="async"
                                        fetchPriority={index < 6 ? "high" : "low"}
                                    />
                                )}
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />

                            {/* Media Type Badge */}
                            <div className="absolute top-2 left-2 z-10">
                                <div className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded-lg">
                                    {mediaItem.type === 'video' ? (
                                        <FaPlay className="w-3 h-3 text-white" />
                                    ) : (
                                        <FaImage className="w-3 h-3 text-white" />
                                    )}
                                </div>
                            </div>

                            {/* Play Button for Videos */}
                            {mediaItem.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10">
                                    <div className="p-3 bg-black/50 backdrop-blur-sm rounded-full">
                                        <FaPlay className="w-5 h-5 text-white ml-0.5" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default MediaGallery;
