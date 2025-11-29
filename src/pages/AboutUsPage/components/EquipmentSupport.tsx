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
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-purple-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm"
                    >
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                            Equipment
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {equipmentSupport.title}
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
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="group relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-purple-400/50 transition-all duration-500 shadow-2xl">
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src="/inven.webp"
                                        alt={equipmentSupport.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    
                                    {/* Amount Badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-md rounded-full border border-purple-400/30">
                                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
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
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-300 leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        onClick={onScrollToContact}
                                        className="group/btn relative w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {equipmentSupport.cta}
                                            <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
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
