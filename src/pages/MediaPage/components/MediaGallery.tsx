// @ts-nocheck
import React from 'react';
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
    currentPage: number;
    onPageChange: (page: number) => void;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ items, currentIndex, onSelect, language, currentPage, onPageChange }) => {
    const itemsPerPage = 12; // 2 ряди по 6 колонок
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    // Обчислити індекси для поточної сторінки
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {currentItems.map((mediaItem, indexInPage) => {
                    const index = indexOfFirstItem + indexInPage;
                const isActive = index === currentIndex;
                
                return (
                    <div
                        key={mediaItem.id}
                        onClick={() => onSelect(index)}
                        className="relative cursor-pointer transition-all duration-200 hover:-translate-y-1"
                    >
                        {/* Card Container */}
                        <div className={`
                            relative aspect-video rounded-lg overflow-hidden border-2
                            ${isActive ? 'border-yellow-400' : 'border-white/10 hover:border-yellow-400/50'}
                            transition-colors duration-200
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
                            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200" />

                            {/* Media Type Badge */}
                            <div className="absolute top-2 left-2 z-10">
                                <div className="px-2 py-1 bg-black/80 rounded-lg">
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
                                    <div className="p-3 bg-black/60 rounded-full">
                                        <FaPlay className="w-5 h-5 text-white ml-0.5" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
                })}
            </div>

            {/* Пагінація */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-3">
                    {/* Кнопка Попередня */}
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-neutral-950 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-lg border border-white/10 hover:border-yellow-400 transition-colors duration-200 disabled:hover:border-white/10"
                    >
                        ←
                    </button>

                    {/* Номери сторінок */}
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                                className={`
                                    px-4 py-2 font-bold rounded-lg border transition-colors duration-200
                                    ${currentPage === pageNumber
                                        ? 'bg-yellow-400 text-black border-yellow-400'
                                        : 'bg-neutral-950 text-white border-white/10 hover:border-yellow-400'
                                    }
                                `}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                    {/* Кнопка Наступна */}
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-neutral-950 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-lg border border-white/10 hover:border-yellow-400 transition-colors duration-200 disabled:hover:border-white/10"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default MediaGallery;
