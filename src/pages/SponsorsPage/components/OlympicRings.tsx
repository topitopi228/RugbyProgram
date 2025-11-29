// @ts-nocheck
import { motion } from 'framer-motion';

interface OlympicRingsProps {
    language: string;
}

const OlympicRings: React.FC<OlympicRingsProps> = ({ language }) => {
    return (
        <motion.div
            className="relative w-full max-w-xs h-auto lg:w-96 lg:h-[500px] flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Olympic Rings */}
            <div className="relative w-full flex items-center justify-center">
                <div className="relative w-48 h-32 md:w-72 md:h-48 flex items-center justify-center">
                    {/* Row 1 - Top Rings (Blue, Black, Red) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 md:space-x-9">
                        {/* Blue Ring */}
                        <motion.div
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-blue-500 shadow-lg bg-transparent cursor-pointer"
                            initial={{ scale: 0, opacity: 0, y: -50, rotate: -180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                boxShadow: [
                                    '0 0 0 0 rgba(59, 130, 246, 0.7)',
                                    '0 0 0 10px rgba(59, 130, 246, 0)',
                                    '0 0 0 0 rgba(59, 130, 246, 0)'
                                ]
                            }}
                            transition={{
                                rotate: { delay: 0.2, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
                                scale: { delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
                                y: { delay: 0.2, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
                                opacity: { delay: 0.2, duration: 0.6 },
                                boxShadow: { duration: 3, repeat: Infinity, repeatType: 'loop', delay: 0.8 }
                            }}
                            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                        />

                        {/* Black Ring */}
                        <motion.div
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-black shadow-lg bg-transparent cursor-pointer"
                            initial={{ scale: 0, opacity: 0, y: -50, rotate: -180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                boxShadow: [
                                    '0 0 0 0 rgba(0, 0, 0, 0.5)',
                                    '0 0 0 10px rgba(0, 0, 0, 0)',
                                    '0 0 0 0 rgba(0, 0, 0, 0)'
                                ]
                            }}
                            transition={{
                                rotate: { delay: 0.4, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
                                scale: { delay: 0.4, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
                                y: { delay: 0.4, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
                                opacity: { delay: 0.4, duration: 0.6 },
                                boxShadow: { duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1.0 }
                            }}
                            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                        />

                        {/* Red Ring */}
                        <motion.div
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-red-500 shadow-lg bg-transparent cursor-pointer"
                            initial={{ scale: 0, opacity: 0, y: -50, rotate: -180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                boxShadow: [
                                    '0 0 0 0 rgba(239, 68, 68, 0.7)',
                                    '0 0 0 10px rgba(239, 68, 68, 0)',
                                    '0 0 0 0 rgba(239, 68, 68, 0)'
                                ]
                            }}
                            transition={{
                                rotate: { delay: 0.6, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
                                scale: { delay: 0.6, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
                                y: { delay: 0.6, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
                                opacity: { delay: 0.6, duration: 0.6 },
                                boxShadow: { duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1.2 }
                            }}
                            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                        />
                    </div>

                    {/* Row 2 - Bottom Rings (Yellow, Green) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4 md:space-x-9 mt-3 md:mt-5">
                        {/* Yellow Ring */}
                        <motion.div
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-yellow-400 shadow-lg bg-transparent cursor-pointer"
                            initial={{ scale: 0, opacity: 0, y: 50, rotate: 180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                boxShadow: [
                                    '0 0 0 0 rgba(234, 179, 8, 0.7)',
                                    '0 0 0 10px rgba(234, 179, 8, 0)',
                                    '0 0 0 0 rgba(234, 179, 8, 0)'
                                ]
                            }}
                            transition={{
                                rotate: { delay: 0.3, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
                                scale: { delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
                                y: { delay: 0.3, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
                                opacity: { delay: 0.3, duration: 0.6 },
                                boxShadow: { duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1.4 }
                            }}
                            whileHover={{ scale: 1.1, y: 5, transition: { duration: 0.2 } }}
                        />

                        {/* Green Ring */}
                        <motion.div
                            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-green-500 shadow-lg bg-transparent cursor-pointer"
                            initial={{ scale: 0, opacity: 0, y: 50, rotate: 180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                boxShadow: [
                                    '0 0 0 0 rgba(16, 185, 129, 0.7)',
                                    '0 0 0 10px rgba(16, 185, 129, 0)',
                                    '0 0 0 0 rgba(16, 185, 129, 0)'
                                ]
                            }}
                            transition={{
                                rotate: { delay: 0.5, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
                                scale: { delay: 0.5, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
                                y: { delay: 0.5, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1] },
                                opacity: { delay: 0.5, duration: 0.6 },
                                boxShadow: { duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1.6 }
                            }}
                            whileHover={{ scale: 1.1, y: 5, transition: { duration: 0.2 } }}
                        />
                    </div>

                    {/* Connecting Animation */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.5 }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-yellow-400 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    delay: 1.8 + (i * 0.3),
                                    ease: "easeInOut"
                                }}
                                style={{
                                    width: 8,
                                    height: 8,
                                    left: '50%',
                                    top: '50%',
                                    x: -4,
                                    y: -4,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* U-16 Badge */}
            <motion.div
                className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-yellow-400 bg-blue-900/95 backdrop-blur-sm flex items-center justify-center z-20 shadow-xl mt-6 md:mt-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    boxShadow: [
                        '0 0 0 0 rgba(234, 179, 8, 0.4)',
                        '0 0 0 10px rgba(234, 179, 8, 0)',
                        '0 0 0 20px rgba(234, 179, 8, 0)'
                    ]
                }}
                transition={{
                    scale: { delay: 1.2, type: 'spring', stiffness: 150, damping: 12 },
                    opacity: { delay: 1.2, duration: 0.5 },
                    boxShadow: { delay: 1.5, duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeOut' }
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400 opacity-0"
                    initial={{ scale: 0.8 }}
                    animate={{
                        scale: 1.2,
                        opacity: [0, 0.1, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: 1.5
                    }}
                />

                <div className="relative z-10 text-center">
                    <div className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold">U-16</div>
                    <div className="text-white text-xs md:text-sm font-medium mt-1">
                        {language === 'UA' ? 'Команда' : language === 'EN' ? 'Team' : 'Csapat'}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default OlympicRings;
