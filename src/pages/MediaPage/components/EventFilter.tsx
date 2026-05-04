import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaClock } from 'react-icons/fa';
import type { EventCategoryInfo, EventCategory } from '../mediaData';

interface EventFilterProps {
    eventCategories: EventCategoryInfo[];
    activeEvent: EventCategory;
    onEventChange: (eventId: EventCategory) => void;
    language: 'UA' | 'EN' | 'HUN';
    photoCounts?: Record<string, number>; // Додаємо кількість фото для кожної події
}

const EventFilter = ({ eventCategories, activeEvent, onEventChange, language, photoCounts = {} }: EventFilterProps) => {
    const getComingSoonText = () => {
        switch (language) {
            case 'UA': return 'Скоро';
            case 'EN': return 'Coming Soon';
            case 'HUN': return 'Hamarosan';
            default: return 'Coming Soon';
        }
    };

    return (
        <div className="mb-12">
            {/* Premium Section Header */}
            <div className="relative mb-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                        <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                        {language === 'UA' ? 'Виберіть подію' : language === 'EN' ? 'Select Event' : 'Válassz eseményt'}
                    </span>
                </h3>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {eventCategories.map((event) => {
                    const isActive = activeEvent === event.id;
                    const photoCount = photoCounts[event.id] || 0;
                    const hasPhotos = photoCount > 0 || event.id === 'all';
                    
                    return (
                        <motion.button
                            key={event.id}
                            onClick={() => onEventChange(event.id)}
                            whileHover={{ scale: 1.02, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative text-left transition-all duration-300 ${
                                isActive ? 'z-10' : 'z-0'
                            }`}
                        >
                            {/* Glow Effect for Active */}
                            {isActive && (
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500/50 via-yellow-500/50 to-amber-500/50 rounded-2xl blur-lg"></div>
                            )}
                            
                            {/* Card */}
                            <div className={`relative bg-gradient-to-br backdrop-blur-xl rounded-2xl p-4 border-2 transition-all duration-300 overflow-hidden ${
                                isActive 
                                    ? 'from-slate-800/95 to-slate-900/95 border-amber-500/70 shadow-2xl shadow-amber-500/20' 
                                    : 'from-slate-900/70 to-slate-800/70 border-slate-700/50 hover:border-slate-600/70'
                            }`}>
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 ${
                                    isActive 
                                        ? 'bg-amber-500/20 opacity-100' 
                                        : 'bg-purple-500/10 opacity-0 group-hover:opacity-100'
                                }`}></div>
                                
                                {/* Content */}
                                <div className="relative">
                                    {/* Event Name with Badge */}
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h4 className={`text-lg font-bold transition-colors duration-300 flex-1 ${
                                            isActive 
                                                ? 'text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text' 
                                                : 'text-white group-hover:text-purple-300'
                                        }`}>
                                            {event.name[language]}
                                        </h4>
                                        
                                        {/* Coming Soon Badge */}
                                        {!hasPhotos && event.id !== 'all' && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-slate-700/80 to-slate-600/80 border border-slate-500/50 rounded-lg"
                                            >
                                                <FaClock className="w-2.5 h-2.5 text-slate-400" />
                                                <span className="text-[10px] font-medium text-slate-300 whitespace-nowrap">
                                                    {getComingSoonText()}
                                                </span>
                                            </motion.div>
                                        )}
                                        
                                        {/* Photo Count Badge */}
                                        {hasPhotos && photoCount > 0 && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className={`px-2 py-1 rounded-lg border transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500/50'
                                                        : 'bg-slate-700/50 border-slate-600/50 group-hover:border-purple-500/50'
                                                }`}
                                            >
                                                <span className={`text-xs font-bold ${
                                                    isActive ? 'text-amber-400' : 'text-slate-300 group-hover:text-purple-300'
                                                }`}>
                                                    {photoCount}
                                                </span>
                                            </motion.div>
                                        )}
                                    </div>
                                    
                                    {/* Event Info */}
                                    {event.id !== 'all' && (
                                        <div className="space-y-1">
                                            {/* Date */}
                                            {event.date && (
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <FaCalendar className="w-3 h-3" />
                                                    <span>{event.date}</span>
                                                </div>
                                            )}
                                            
                                            {/* Location */}
                                            {event.location[language] && (
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <FaMapMarkerAlt className="w-3 h-3" />
                                                    <span>{event.location[language]}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                
                                {/* Active Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeEvent"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default EventFilter;
