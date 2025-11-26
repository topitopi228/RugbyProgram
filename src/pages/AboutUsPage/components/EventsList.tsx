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
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
            {events.map((event, index) => (
                <motion.div
                    key={event.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row h-full">
                        <div className="relative h-64 md:h-auto md:max-h-85 md:w-1/3">
                            <img
                                src={event.image}
                                alt={`Event ${event.id}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                <span className="text-yellow-400 font-medium text-lg">{event.date}</span>
                            </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-400 font-bold text-2xl mr-3">0{index + 1}</span>
                                <h3 className="text-2xl font-bold">{event.title}</h3>
                            </div>
                            <div className="flex items-center text-blue-200 mb-4">
                                <svg
                                    className="w-5 h-5 mr-2 text-yellow-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-lg">{event.location}</span>
                            </div>
                            {event.description && (
                                <p className="text-blue-100 text-lg mb-4">{event.description}</p>
                            )}
                            <p className="text-gray-300 mt-4">{event.details}</p>

                            {/* Funding Information */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg border border-yellow-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-yellow-400">
                                            {language === 'UA' ? 'Необхідна сума фінансування:' :
                                                language === 'EN' ? 'Required funding:' :
                                                    'Szükséges támogatás:'}
                                        </h4>
                                        <p className="text-2xl font-bold text-yellow-400">{event.funding}</p>
                                    </div>
                                    <button
                                        onClick={() => onOpenFundingModal(event)}
                                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300"
                                    >
                                        {language === 'UA' ? 'Детальніше' :
                                            language === 'EN' ? 'Details' :
                                                'Részletek'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default EventsList;
