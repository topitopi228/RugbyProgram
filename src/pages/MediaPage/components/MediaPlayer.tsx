// @ts-nocheck
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
            const elem = containerRef.current;
            if (elem) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if ((elem as any).webkitRequestFullscreen) {
                    (elem as any).webkitRequestFullscreen();
                } else if ((elem as any).mozRequestFullScreen) {
                    (elem as any).mozRequestFullScreen();
                } else if ((elem as any).msRequestFullscreen) {
                    (elem as any).msRequestFullscreen();
                }
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).mozCancelFullScreen) {
                (document as any).mozCancelFullScreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
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
            className="relative w-full aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-3xl overflow-hidden group shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onClick={(e) => {
                if ((e.target as HTMLElement).tagName !== 'BUTTON' && (e.target as HTMLElement).tagName !== 'INPUT') {
                    setIsHovering(!isHovering);
                }
            }}
            style={{
                boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 0 100px rgba(0,0,0,0.3)'
            }}
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
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    muted={isMuted}
                    controlsList="nodownload"
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
                {(isHovering || !isPlaying || 'ontouchstart' in window) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"
                    >
                        {/* Premium Side Navigation Controls */}
                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrevious();
                            }}
                            whileHover={{ scale: 1.15, x: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md rounded-full border border-amber-400/30 shadow-xl hover:shadow-amber-500/30 transition-all z-10 group/btn"
                            style={{
                                boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover/btn:opacity-100 rounded-full transition-opacity duration-300"></div>
                            <FaChevronLeft className="w-5 h-5 text-amber-400/80 group-hover/btn:text-amber-300 relative z-10 transition-colors" />
                        </motion.button>

                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            whileHover={{ scale: 1.15, x: 3 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md rounded-full border border-amber-400/30 shadow-xl hover:shadow-amber-500/30 transition-all z-10 group/btn"
                            style={{
                                boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover/btn:opacity-100 rounded-full transition-opacity duration-300"></div>
                            <FaChevronRight className="w-5 h-5 text-amber-400/80 group-hover/btn:text-amber-300 relative z-10 transition-colors" />
                        </motion.button>

                        {/* Premium Center Play/Pause Control for Videos */}
                        {currentMedia.type === 'video' && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <motion.button
                                    onClick={togglePlay}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative p-8 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 backdrop-blur-md rounded-full border-2 border-amber-400/50 shadow-2xl group/play"
                                    style={{
                                        boxShadow: '0 20px 40px rgba(251, 191, 36, 0.4), inset 0 -2px 8px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-0 group-hover/play:opacity-50 blur-xl transition-opacity duration-500 animate-pulse"></div>
                                    
                                    {/* Inner Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full"></div>
                                    
                                    {isPlaying ? (
                                        <FaPause className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
                                    ) : (
                                        <FaPlay className="w-10 h-10 text-white ml-1 relative z-10 drop-shadow-lg" />
                                    )}
                                </motion.button>
                            </div>
                        )}

                        {/* Premium Bottom Controls */}
                        {currentMedia.type === 'video' && (
                            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm">
                                {/* Premium Progress Bar */}
                                <div 
                                    ref={progressRef}
                                    className="relative h-2.5 bg-slate-800/60 rounded-full cursor-pointer group/progress hover:h-3.5 transition-all shadow-inner"
                                    onClick={handleProgressClick}
                                    style={{
                                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    {/* Buffered Progress */}
                                    <div 
                                        className="absolute h-full bg-slate-600/40 rounded-full"
                                        style={{ width: `${bufferedPercentage}%` }}
                                    />
                                    
                                    {/* Current Progress with Gradient */}
                                    <motion.div 
                                        className="absolute h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full shadow-lg"
                                        style={{ 
                                            width: `${(currentTime / duration) * 100}%`,
                                            boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
                                        }}
                                        animate={{
                                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    >
                                        {/* Progress Handle */}
                                        <motion.div 
                                            className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full shadow-xl border-2 border-white/30 opacity-0 group-hover/progress:opacity-100 transition-opacity"
                                            whileHover={{ scale: 1.3 }}
                                            style={{
                                                boxShadow: '0 4px 12px rgba(251, 191, 36, 0.8)'
                                            }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Premium Control Buttons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        {/* Play/Pause Button */}
                                        <motion.button
                                            onClick={togglePlay}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2.5 bg-gradient-to-br from-slate-800/60 to-slate-700/60 hover:from-amber-500/30 hover:to-yellow-500/30 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-amber-400/50 shadow-lg"
                                        >
                                            {isPlaying ? (
                                                <FaPause className="w-5 h-5 text-amber-400" />
                                            ) : (
                                                <FaPlay className="w-5 h-5 text-amber-400 ml-0.5" />
                                            )}
                                        </motion.button>

                                        {/* Volume Controls */}
                                        <div className="flex items-center gap-3 px-3 py-2 bg-slate-800/40 rounded-xl border border-slate-700/30 backdrop-blur-sm">
                                            <motion.button
                                                onClick={toggleMute}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-1.5 hover:bg-amber-500/20 rounded-lg transition-colors"
                                            >
                                                {isMuted ? (
                                                    <FaVolumeMute className="w-4 h-4 text-amber-400/80" />
                                                ) : (
                                                    <FaVolumeUp className="w-4 h-4 text-amber-400/80" />
                                                )}
                                            </motion.button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.1"
                                                value={isMuted ? 0 : volume}
                                                onChange={handleVolumeChange}
                                                className="w-24 h-1.5 accent-amber-400 bg-slate-700 rounded-full cursor-pointer"
                                                style={{
                                                    background: `linear-gradient(to right, rgb(251 191 36) 0%, rgb(251 191 36) ${(isMuted ? 0 : volume) * 100}%, rgb(51 65 85) ${(isMuted ? 0 : volume) * 100}%, rgb(51 65 85) 100%)`
                                                }}
                                            />
                                        </div>

                                        {/* Time Display */}
                                        <div className="px-3 py-1.5 bg-slate-900/60 rounded-lg border border-slate-700/30 backdrop-blur-sm">
                                            <span className="text-amber-400 text-sm font-mono font-semibold">
                                                {formatTime(currentTime)}
                                            </span>
                                            <span className="text-slate-500 mx-1">/</span>
                                            <span className="text-slate-400 text-sm font-mono">
                                                {formatTime(duration)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Fullscreen Button */}
                                    <motion.button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFullscreen();
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2.5 bg-gradient-to-br from-slate-800/60 to-slate-700/60 hover:from-amber-500/30 hover:to-yellow-500/30 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-amber-400/50 shadow-lg touch-manipulation"
                                    >
                                        {isFullscreen ? (
                                            <FaCompress className="w-5 h-5 text-amber-400" />
                                        ) : (
                                            <FaExpand className="w-5 h-5 text-amber-400" />
                                        )}
                                    </motion.button>
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
