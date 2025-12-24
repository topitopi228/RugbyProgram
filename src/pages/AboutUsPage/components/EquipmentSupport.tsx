// @ts-nocheck
import { motion } from 'framer-motion';

interface EquipmentSupportProps {
    equipmentSupport: {
        title: string;
        description: string;
        amount: string;
        items: string[];
        cta: string;
    };
    fadeIn: any;
    onScrollToContact: () => void;
}

const EquipmentSupport: React.FC<EquipmentSupportProps> = ({ equipmentSupport, fadeIn, onScrollToContact }) => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-2 border-amber-500/30 rounded-full backdrop-blur-sm"
                    >
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">
                            Equipment Support
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                            {equipmentSupport.title}
                        </span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {equipmentSupport.description}
                    </p>
                </motion.div>

                {/* Equipment Card */}
                <div className="flex justify-center">
                    <motion.div
                        className="w-full max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="group relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-yellow-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-slate-700/30 group-hover:border-amber-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-amber-500/20">
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src="/inven.webp"
                                        alt={equipmentSupport.title}
                                        loading="eager"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    
                                    {/* Amount Badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border-2 border-amber-500/40">
                                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                                                {equipmentSupport.amount}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    {/* Items List */}
                                    <ul className="space-y-3 mb-8">
                                        {equipmentSupport.items.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/30">
                                                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-200 text-base leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        onClick={onScrollToContact}
                                        className="group/btn relative w-full px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/30"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                            {equipmentSupport.cta}
                                            <svg className="w-6 h-6 transition-transform group-hover/btn:translate-x-2 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EquipmentSupport;
