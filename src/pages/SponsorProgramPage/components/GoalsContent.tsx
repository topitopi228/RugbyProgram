// @ts-nocheck
import { motion } from 'framer-motion';

interface GoalsContentProps {
    europeanGoal: string;
}

const GoalsContent: React.FC<GoalsContentProps> = ({ europeanGoal }) => {
    return (
        <div className="container mx-auto mt-30">
            <div className="max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-lg leading-relaxed font-light tracking-wide">
                        {europeanGoal}
                    </div>
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-auto">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            src="/iq1.webp"
                            alt="Rugby team training"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-xl overflow-hidden h-64 md:h-96 mb-16"
                >
                    <motion.img
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        src="/iq2.webp"
                        alt="Rugby team in action"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default GoalsContent;
