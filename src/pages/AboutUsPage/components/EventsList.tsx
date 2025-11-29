// @ts-nocheck
import { motion } from 'framer-motion';

interface Event {
    id: number;
    date: string;
    title: string;
    location: string;
    description?: string;
    details: string;
    funding: string;
    image: string;
}

interface EventsListProps {
    events: Event[];
    language: string;
    fadeIn: any;
    onOpenFundingModal: (event: Event) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, language, fadeIn, onOpenFundingModal }) => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
                >
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                        {language === 'UA' ? 'Події' : language === 'EN' ? 'Events' : 'Események'}
                    </span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {language === 'UA' ? 'Наші майбутні події' : language === 'EN' ? 'Our Upcoming Events' : 'Közelgő eseményeink'}
                </h2>
            </motion.div>

            {/* Events Grid */}
            <div className="space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="group relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 shadow-2xl">
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Section */}
                                <div className="relative lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={`Event ${event.id}`}
                                        loading="eager"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    
                                    {/* Event Number Badge */}
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-slate-900 font-bold text-lg">0{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Date Badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-yellow-400/30">
                                            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-yellow-400 font-semibold">{event.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-3/5 p-6 md:p-8">
                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-slate-300 mb-4">
                                        <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-medium">{event.location}</span>
                                    </div>

                                    {/* Description */}
                                    {event.description && (
                                        <p className="text-slate-200 text-base mb-4 leading-relaxed">{event.description}</p>
                                    )}
                                    <p className="text-slate-400 text-sm leading-relaxed">{event.details}</p>

                                    {/* Funding Card */}
                                    <div className="mt-6 p-5 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div>
                                                <h4 className="text-sm font-medium text-yellow-400/80 mb-1 uppercase tracking-wide">
                                                    {language === 'UA' ? 'Необхідна сума' :
                                                        language === 'EN' ? 'Required funding' :
                                                            'Szükséges összeg'}
                                                </h4>
                                                <p className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                                    {event.funding}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => onOpenFundingModal(event)}
                                                className="group/btn relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    {language === 'UA' ? 'Детальніше' :
                                                        language === 'EN' ? 'Details' :
                                                            'Részletek'}
                                                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventsList;
