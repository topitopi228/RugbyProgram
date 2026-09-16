// @ts-nocheck
import { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface MediaItem {
    id: string;
    type: 'video' | 'photo';
    src: string;
    thumbnail: string;
    title: string;
}

interface LightboxProps {
    item: MediaItem | null;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrevious }) => {
    useEffect(() => {
        if (!item) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrevious();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [item, onClose, onNext, onPrevious]);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-4 right-4 z-10 p-3 bg-neutral-950 border border-white/20 hover:border-brand-yellow transition-colors"
                aria-label="Close"
            >
                <FaTimes className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrevious();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-neutral-950 border border-brand-yellow/50 hover:border-brand-yellow transition-colors"
                aria-label="Previous"
            >
                <FaChevronLeft className="w-5 h-5 text-brand-yellow" />
            </button>

            {/* Next */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-neutral-950 border border-brand-yellow/50 hover:border-brand-yellow transition-colors"
                aria-label="Next"
            >
                <FaChevronRight className="w-5 h-5 text-brand-yellow" />
            </button>

            {/* Media */}
            <div
                className="relative max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {item.type === 'video' ? (
                    <video
                        src={item.src}
                        controls
                        autoPlay
                        playsInline
                        className="max-w-full max-h-[90vh] border border-white/10"
                    />
                ) : (
                    <img
                        src={item.src}
                        alt={item.title}
                        className="max-w-full max-h-[90vh] object-contain border border-white/10"
                    />
                )}
            </div>

            {/* Title */}
            {item.title && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-950 border border-white/10 max-w-[90vw]">
                    <p className="text-white text-sm font-semibold text-center truncate">{item.title}</p>
                </div>
            )}
        </div>
    );
};

export default Lightbox;
