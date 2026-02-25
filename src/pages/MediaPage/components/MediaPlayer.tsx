import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';

interface MediaItem {
    id: string;
    type: 'video' | 'photo';
    src: string;
    thumbnail: string;
    title: string;
    description?: string;
    date?: string;
    duration?: string;
}

interface MediaPlayerProps {
    currentMedia: MediaItem | null;
    onNext: () => void;
    onPrevious: () => void;
    language: string;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ currentMedia, onNext, onPrevious, language }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isBuffering, setIsBuffering] = useState(false);
    const [bufferedPercentage, setBufferedPercentage] = useState(0);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsPlaying(false);
        setImageLoaded(false);
        if (currentMedia?.type === 'photo') {
            // Auto advance to next photo after 5 seconds
            const timer = setTimeout(() => {
                onNext();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [currentMedia, onNext]);

    const togglePlay = () => {
        if (currentMedia?.type === 'video' && videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current && progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const clickedValue = (x / rect.width) * duration;
            videoRef.current.currentTime = clickedValue;
            setCurrentTime(clickedValue);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (containerRef.current?.requestFullscreen) {
                containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    if (!currentMedia) {
        return (
            <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-gray-500 text-lg">
                    {language === 'UA' ? 'Оберіть медіа для перегляду' : 
                     language === 'EN' ? 'Select media to view' : 
                     'Válasszon médiát a megtekintéshez'}
                </div>
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Media Content */}
            {currentMedia.type === 'video' ? (
                <video
                    ref={videoRef}
                    src={currentMedia.src}
                    className="w-full h-full object-contain"
                    onTimeUpdate={(e) => {
                        const video = e.target as HTMLVideoElement;
                        setCurrentTime(video.currentTime);
                        if (video.buffered.length > 0) {
                            const buffered = (video.buffered.end(video.buffered.length - 1) / video.duration) * 100;
                            setBufferedPercentage(buffered);
                        }
                    }}
                    onLoadedMetadata={(e) => {
                        setDuration((e.target as HTMLVideoElement).duration);
                        setIsBuffering(false);
                    }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onWaiting={() => setIsBuffering(true)}
                    onPlaying={() => setIsBuffering(false)}
                    onCanPlay={() => setIsBuffering(false)}
                    onClick={togglePlay}
                    preload="auto"
                    playsInline
                    muted={isMuted}
                />
            ) : (
                <motion.img
                    src={currentMedia.src}
                    alt={currentMedia.title}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    onLoad={() => setImageLoaded(true)}
                />
            )}

            {/* Buffering Indicator */}
            {isBuffering && currentMedia.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-white text-sm">
                            {language === 'UA' ? 'Завантаження...' : 
                             language === 'EN' ? 'Loading...' : 
                             'Betöltés...'}
                        </p>
                    </div>
                </div>
            )}

            {/* Overlay Controls */}
            <AnimatePresence>
                {(isHovering || !isPlaying) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"
                    >
                        {/* Side Navigation Controls */}
                        <button
                            onClick={onPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all hover:scale-110 group"
                        >
                            <FaChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>

                        <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all hover:scale-110 group"
                        >
                            <FaChevronRight className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>

                        {/* Center Play/Pause Control for Videos */}
                        {currentMedia.type === 'video' && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <button
                                    onClick={togglePlay}
                                    className="p-6 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110"
                                >
                                    {isPlaying ? (
                                        <FaPause className="w-8 h-8 text-white" />
                                    ) : (
                                        <FaPlay className="w-8 h-8 text-white ml-1" />
                                    )}
                                </button>
                            </div>
                        )}

                        {/* Bottom Controls */}
                        {currentMedia.type === 'video' && (
                            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                                {/* Progress Bar */}
                                <div 
                                    ref={progressRef}
                                    className="relative h-2 bg-white/20 rounded-full cursor-pointer group/progress hover:h-3 transition-all"
                                    onClick={handleProgressClick}
                                >
                                    {/* Buffered Progress */}
                                    <div 
                                        className="absolute h-full bg-white/20 rounded-full"
                                        style={{ width: `${bufferedPercentage}%` }}
                                    />
                                    
                                    {/* Current Progress */}
                                    <div 
                                        className="absolute h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                                        style={{ width: `${(currentTime / duration) * 100}%` }}
                                    >
                                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                                    </div>
                                </div>

                                {/* Control Buttons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={togglePlay}
                                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                        >
                                            {isPlaying ? (
                                                <FaPause className="w-5 h-5 text-white" />
                                            ) : (
                                                <FaPlay className="w-5 h-5 text-white" />
                                            )}
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={toggleMute}
                                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                {isMuted ? (
                                                    <FaVolumeMute className="w-5 h-5 text-white" />
                                                ) : (
                                                    <FaVolumeUp className="w-5 h-5 text-white" />
                                                )}
                                            </button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.1"
                                                value={isMuted ? 0 : volume}
                                                onChange={handleVolumeChange}
                                                className="w-20 accent-amber-400"
                                            />
                                        </div>

                                        <span className="text-white text-sm">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </span>
                                    </div>

                                    <button
                                        onClick={toggleFullscreen}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        {isFullscreen ? (
                                            <FaCompress className="w-5 h-5 text-white" />
                                        ) : (
                                            <FaExpand className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MediaPlayer;
