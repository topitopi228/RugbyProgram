// @ts-nocheck
import { motion, AnimatePresence } from 'framer-motion';

interface FundingModalProps {
    selectedEvent: any;
    language: string;
    fundingBreakdowns: any;
    onClose: () => void;
}

const FundingModal: React.FC<FundingModalProps> = ({
    selectedEvent,
    language,
    fundingBreakdowns,
    onClose
}) => {
    return (
        <AnimatePresence>
            {selectedEvent && (
                <motion.div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                    {selectedEvent.title}
                                </h2>
                                <p className="text-yellow-400 text-lg mt-1">{selectedEvent.funding}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white p-1 -m-1 transition-colors"
                                aria-label={language === 'UA' ? 'Закрити' : language === 'EN' ? 'Close' : 'Bezárás'}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-yellow-400/30 pb-2">
                                {language === 'UA' ? 'Детальний розподіл коштів' :
                                    language === 'EN' ? 'Funding Breakdown' : 'Pénzügyi felosztás'}
                            </h3>
                            <div className="space-y-4">
                                {(fundingBreakdowns[selectedEvent.id] || fundingBreakdowns.default)?.map((item, index) => {
                                    const isTotalRow = item.category.UA === 'Загальна сума';
                                    
                                    if (isTotalRow) {
                                        return (
                                            <motion.div 
                                                key={index}
                                                initial={{ scale: 0.95, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="relative mt-6 rounded-xl overflow-hidden"
                                            >
                                                {/* Glowing background effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 blur-xl" />
                                                
                                                <div className="relative bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-xl p-5 backdrop-blur-sm">
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
                                                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="font-bold text-xl text-white">{item.category[language]}</h4>
                                                        </div>
                                                        
                                                        <div className="flex flex-col items-end gap-2">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                                                    {item.amount}
                                                                </span>
                                                            </div>
                                                            <span className="text-xs text-amber-400/80 font-medium px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                                                                {item.description[language]}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    }
                                    
                                    return (
                                        <div key={index} className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                                            <div className="p-4 bg-white/5 flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-lg">{item.category[language]}</h4>
                                                    <p className="text-yellow-400">{item.amount}</p>
                                                </div>
                                                <span className="text-sm text-gray-300">{item.description[language]}</span>
                                            </div>
                                            {item.subItems && (
                                                <div className="p-4 pt-2 bg-white/2.5">
                                                    <ul className="space-y-2 text-sm text-gray-300">
                                                        {item.subItems?.map((subItem, subIndex) => (
                                                            <li key={subIndex} className="flex items-start">
                                                                <span className="text-yellow-400 mr-2">•</span>
                                                                <span>{subItem[language]}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex justify-end mt-8">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-full transition-all duration-300"
                            >
                                {language === 'UA' ? 'Закрити' :
                                    language === 'EN' ? 'Close' : 'Bezárás'}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FundingModal;
