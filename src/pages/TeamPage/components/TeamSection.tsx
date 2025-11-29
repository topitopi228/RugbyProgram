// @ts-nocheck
import { motion } from 'framer-motion';

interface TeamMember {
    id: string;
    name: string;
    role?: string;
    gg?: string;
    description?: string;
    isCaptain?: boolean;
    isViceCaptain?: boolean;
}

interface TeamSectionProps {
    title: string;
    items: TeamMember[];
    captainLabel?: string;
    viceCaptainLabel?: string;
    fadeInUp: any;
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
    title, 
    items, 
    captainLabel, 
    viceCaptainLabel,
    fadeInUp 
}) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => {
                    const imagePath = `/${item.id}.webp`;
                    const fallbackImagePath = `/${item.id}.webp`;

                    return (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                        >
                            <div className="relative h-75 overflow-hidden">
                                <img
                                    src={imagePath}
                                    alt={item.name}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (target.src !== fallbackImagePath) {
                                            target.src = fallbackImagePath;
                                        } else {
                                            target.src = '/rugby_back.webp';
                                            target.onerror = null;
                                        }
                                    }}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                                {item.isCaptain && captainLabel && (
                                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                                        {captainLabel}
                                    </div>
                                )}
                                {item.isViceCaptain && viceCaptainLabel && (
                                    <div className="absolute top-2 right-2 bg-gray-300 text-black text-xs font-bold px-2 py-1 rounded">
                                        {viceCaptainLabel}
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                {item.role && <p className="text-gray-300 text-sm mt-1">{item.role}</p>}
                                {item.description && <p className="text-gray-300 text-sm mt-1">{item.description}</p>}
                                {item.gg && <p className="text-gray-300 text-sm mt-1">{item.gg}</p>}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default TeamSection;
