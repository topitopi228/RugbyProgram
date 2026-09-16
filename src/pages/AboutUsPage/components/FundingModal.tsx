// @ts-nocheck

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
        <>
            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div
                        className="animate-fade-up bg-neutral-950 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-yellow">
                                    {selectedEvent.title}
                                </h2>
                                <p className="text-brand-yellow text-lg mt-1">{selectedEvent.funding}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-neutral-400 hover:text-white p-1 -m-1 transition-colors"
                                aria-label={language === 'UA' ? 'Закрити' : language === 'EN' ? 'Close' : 'Bezárás'}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold uppercase mb-4 text-brand-yellow border-b border-white/10 pb-2">
                                {language === 'UA' ? 'Детальний розподіл коштів' :
                                    language === 'EN' ? 'Funding Breakdown' : 'Pénzügyi felosztás'}
                            </h3>
                            <div className="space-y-4">
                                {(fundingBreakdowns[selectedEvent.id] || fundingBreakdowns.default)?.map((item, index) => {
                                    const isTotalRow = item.category.UA === 'Загальна сума';

                                    if (isTotalRow) {
                                        return (
                                            <div
                                                key={index}
                                                className="relative mt-6 rounded-lg overflow-hidden bg-black border border-brand-yellow border-r-brand-blue p-5"
                                            >
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-none bg-brand-yellow flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <h4 className="font-bold text-xl uppercase text-white">{item.category[language]}</h4>
                                                    </div>

                                                    <div className="flex flex-col items-end gap-2">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-2xl font-extrabold text-brand-yellow">
                                                                {item.amount}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-brand-blue font-medium px-3 py-1 border border-brand-blue/40">
                                                            {item.description[language]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={index} className="bg-black rounded-lg overflow-hidden border border-white/10">
                                            <div className="p-4 flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-lg text-white">{item.category[language]}</h4>
                                                    <p className="text-brand-yellow">{item.amount}</p>
                                                </div>
                                                <span className="text-sm text-neutral-400">{item.description[language]}</span>
                                            </div>
                                            {item.subItems && (
                                                <div className="p-4 pt-2 border-t border-white/10">
                                                    <ul className="space-y-2 text-sm text-neutral-400">
                                                        {item.subItems?.map((subItem, subIndex) => (
                                                            <li key={subIndex} className="flex items-start">
                                                                <span className="text-brand-yellow mr-2">•</span>
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
                                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wide transition-colors"
                            >
                                {language === 'UA' ? 'Закрити' :
                                    language === 'EN' ? 'Close' : 'Bezárás'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FundingModal;
