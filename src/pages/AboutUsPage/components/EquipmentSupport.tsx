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
        <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="max-w-5xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                        {equipmentSupport.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                        {equipmentSupport.description}
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <motion.div
                        className="w-full md:w-1/2 lg:w-1/3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-full">
                            <img
                                src="/inven.webp"
                                alt={equipmentSupport.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{equipmentSupport.amount}</h3>
                                <ul className="space-y-2 text-left mb-6">
                                    {equipmentSupport.items.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-yellow-400 mr-2">•</span>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={onScrollToContact}
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                >
                                    {equipmentSupport.cta}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EquipmentSupport;
