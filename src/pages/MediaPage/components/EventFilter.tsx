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
            {/* Section Header */}
            <div className="relative mb-6">
                <h3 className="animate-fade-up text-2xl font-bold uppercase tracking-wide mb-2 flex items-center gap-3 text-white">
                    <div className="p-2 bg-neutral-950 rounded-lg border border-white/10">
                        <FaMapMarkerAlt className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span>
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
                    // "All" gets a distinct blue accent to stand out from the individual event cards.
                    const isAll = event.id === 'all';
                    const accentText = isAll ? 'text-brand-blue-light' : 'text-yellow-400';
                    const accentBorder = isAll ? 'border-brand-blue-light' : 'border-yellow-400';
                    const accentBorderHover = isAll ? 'hover:border-brand-blue-light/50' : 'hover:border-yellow-400/50';
                    const accentBg = isAll ? 'bg-brand-blue-light/10' : 'bg-yellow-400/10';
                    const accentBadgeBorder = isAll ? 'border-brand-blue-light/40' : 'border-yellow-400/40';

                    return (
                        <button
                            key={event.id}
                            onClick={() => onEventChange(event.id)}
                            className="group relative text-left"
                        >
                            {/* Card */}
                            <div className={`relative bg-neutral-950 rounded-lg p-4 border transition-all duration-200 hover:-translate-y-1 ${
                                isActive
                                    ? accentBorder
                                    : `border-white/10 ${accentBorderHover}`
                            }`}>
                                {/* Content */}
                                <div className="relative">
                                    {/* Event Name with Badge */}
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h4 className={`text-lg font-bold transition-colors duration-200 flex-1 ${
                                            isActive ? accentText : 'text-white'
                                        }`}>
                                            {event.name[language]}
                                        </h4>
                                        
                                        {/* Coming Soon Badge */}
                                        {!hasPhotos && event.id !== 'all' && (
                                            <div className="flex items-center gap-1 px-2 py-1 border border-white/20 rounded-lg">
                                                <FaClock className="w-2.5 h-2.5 text-neutral-400" />
                                                <span className="text-[10px] font-medium text-neutral-400 whitespace-nowrap">
                                                    {getComingSoonText()}
                                                </span>
                                            </div>
                                        )}
                                        
                                        {/* Photo Count Badge */}
                                        {hasPhotos && photoCount > 0 && (
                                            <div className={`px-2 py-1 rounded-lg border ${
                                                isActive
                                                    ? `${accentBg} ${accentBadgeBorder}`
                                                    : 'border-white/10'
                                            }`}>
                                                <span className={`text-xs font-bold ${
                                                    isActive ? accentText : 'text-neutral-400'
                                                }`}>
                                                    {photoCount}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Event Info */}
                                    {event.id !== 'all' && (
                                        <div className="space-y-1">
                                            {/* Date */}
                                            {event.date && (
                                                <div className="flex items-center gap-2 text-xs text-neutral-400">
                                                    <FaCalendar className="w-3 h-3" />
                                                    <span>{event.date}</span>
                                                </div>
                                            )}
                                            
                                            {/* Location */}
                                            {event.location[language] && (
                                                <div className="flex items-center gap-2 text-xs text-neutral-400">
                                                    <FaMapMarkerAlt className="w-3 h-3" />
                                                    <span>{event.location[language]}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Active Indicator */}
                                {isActive && (
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${isAll ? 'bg-brand-blue-light' : 'bg-yellow-400'}`} />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default EventFilter;
