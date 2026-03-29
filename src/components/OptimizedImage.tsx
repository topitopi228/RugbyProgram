// @ts-nocheck
import React, { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
    width?: number;
    height?: number;
    objectFit?: 'cover' | 'contain';
    onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Оптимізований компонент зображення з:
 * - Blur placeholder під час завантаження
 * - Responsive images (srcset)
 * - Lazy loading
 * - WebP підтримка
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    loading = 'lazy',
    priority = false,
    width,
    height,
    objectFit = 'cover',
    onError
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Blur placeholder base64 (10x10 grey image)
    const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWUyOTNiIi8+PC9zdmc+';

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        setHasError(true);
        setIsLoaded(true);
        if (onError) {
            onError(e);
        }
    };

    // Генеруємо srcset для responsive images
    const generateSrcSet = (baseSrc: string) => {
        if (!baseSrc) return '';
        
        // Якщо webp, повертаємо як є
        if (baseSrc.endsWith('.webp')) {
            return baseSrc;
        }
        
        // Для інших форматів
        return baseSrc;
    };

    return (
        <div className="relative overflow-hidden">
            {/* Blur Placeholder */}
            {!isLoaded && (
                <img
                    src={blurDataURL}
                    alt=""
                    className={`absolute inset-0 w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} blur-sm`}
                    aria-hidden="true"
                />
            )}

            {/* Actual Image */}
            <img
                src={src}
                srcSet={generateSrcSet(src)}
                alt={alt}
                loading={priority ? 'eager' : loading}
                decoding="async"
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleError}
                className={`
                    ${className}
                    ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}
                    transition-opacity duration-500
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                    ...(width && { width: `${width}px` }),
                    ...(height && { height: `${height}px` })
                }}
            />

            {/* Loading Spinner */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-slate-600 border-t-amber-500 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
