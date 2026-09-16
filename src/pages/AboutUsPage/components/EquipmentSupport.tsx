// @ts-nocheck

interface EquipmentSupportProps {
    equipmentSupport: {
        title: string;
        description: string;
        amount: string;
        items: string[];
        cta: string;
    };
    fadeIn?: any;
    onScrollToContact: () => void;
}

const EquipmentSupport: React.FC<EquipmentSupportProps> = ({ equipmentSupport, onScrollToContact }) => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="animate-fade-up text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-black border border-brand-yellow">
                        <svg className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider">
                            Equipment Support
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white">
                        {equipmentSupport.title}
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        {equipmentSupport.description}
                    </p>
                </div>

                {/* Equipment Card - split layout */}
                <div className="relative bg-neutral-950 border border-white/10 rounded-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image */}
                        <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden border-b-4 lg:border-b-0 lg:border-l-4 border-brand-yellow">
                            <img
                                src="/inven.webp"
                                alt={equipmentSupport.title}
                                loading="eager"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-brand-blue/20"></div>

                            {/* Amount Badge */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border border-brand-yellow">
                                    <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-2xl md:text-3xl font-extrabold text-brand-yellow">
                                        {equipmentSupport.amount}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-3/5 p-6 md:p-8">
                            {/* Items List */}
                            <ul className="space-y-3 mb-8">
                                {equipmentSupport.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        <div className="w-7 h-7 rounded-none bg-black flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-yellow">
                                            <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-neutral-300 text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                onClick={onScrollToContact}
                                className="w-full px-10 py-5 bg-brand-yellow text-black font-bold uppercase tracking-wide transition-all duration-200 hover:bg-brand-yellow-dim hover:-translate-y-0.5"
                            >
                                <span className="flex items-center justify-center gap-3 text-lg">
                                    {equipmentSupport.cta}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquipmentSupport;
