// @ts-nocheck

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
    fadeIn?: any;
    onOpenFundingModal: (event: Event) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, language, onOpenFundingModal }) => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black">
            {/* Section Header */}
            <div className="animate-fade-up text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-black border border-brand-yellow">
                    <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider">
                        {language === 'UA' ? 'Події' : language === 'EN' ? 'Events' : 'Események'}
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white">
                    {language === 'UA' ? 'Наші майбутні події' : language === 'EN' ? 'Our Upcoming Events' : 'Közelgő eseményeink'}
                </h2>
            </div>

            {/* Events Grid */}
            <div className="space-y-8">
                {events.map((event) => {
                    const accentBorder = 'border-brand-yellow';
                    const accentBorderSoft = 'border-brand-yellow/40';
                    const accentText = 'text-brand-yellow';
                    const accentHover = 'hover:border-brand-yellow/60';

                    return (
                    <div
                        key={event.id}
                        className={`relative bg-neutral-950 border border-white/10 rounded-lg overflow-hidden transition-colors duration-200 ${accentHover}`}
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Image Section */}
                            <div className="relative lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={`Event ${event.id}`}
                                    loading="eager"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* Date Badge */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-black border ${accentBorder}`}>
                                        <svg className={`w-5 h-5 ${accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className={`${accentText} font-bold`}>{event.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-3/5 p-6 md:p-8">
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-4">
                                    {event.title}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-neutral-400 mb-4">
                                    <svg className={`w-5 h-5 ${accentText} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="font-medium">{event.location}</span>
                                </div>

                                {/* Description */}
                                {event.description && (
                                    <p className="text-neutral-300 text-base mb-4 leading-relaxed">{event.description}</p>
                                )}
                                <p className="text-neutral-400 text-sm leading-relaxed">{event.details}</p>

                                {/* Funding Card */}
                                <div className={`mt-6 p-5 bg-black border ${accentBorderSoft}`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <h4 className="text-sm font-bold text-neutral-400 mb-1 uppercase tracking-wide">
                                                {language === 'UA' ? 'Необхідна сума' :
                                                    language === 'EN' ? 'Required funding' :
                                                        'Szükséges összeg'}
                                            </h4>
                                            <p className={`text-3xl font-extrabold ${accentText}`}>
                                                {event.funding}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => onOpenFundingModal(event)}
                                            className="px-6 py-3 bg-brand-yellow text-black font-bold uppercase tracking-wide hover:bg-brand-yellow-dim transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                {language === 'UA' ? 'Детальніше' :
                                                    language === 'EN' ? 'Details' :
                                                        'Részletek'}
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventsList;
