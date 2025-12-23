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
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 items-stretch">
                {items.map((item, index) => {
                    const imagePath = `/${item.id}.webp`;
                    const fallbackImagePath = '/rugby_back.webp';

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="relative h-full"
                        >
                            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-400/20 to-indigo-400/10 h-full">
                                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden h-full flex flex-col">
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img
                                            src={imagePath}
                                            alt={item.name}
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.src !== fallbackImagePath) {
                                                    target.src = fallbackImagePath;
                                                } else {
                                                    (target as any).onerror = null;
                                                }
                                            }}
                                            className="w-full h-full object-cover object-top"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                        {/* no hover overlay */}

                                        {(item.isCaptain || item.isViceCaptain) && (
                                            <div
                                                className={`absolute top-3 right-3 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ${
                                                    item.isCaptain
                                                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600'
                                                        : 'bg-gradient-to-r from-gray-300 to-gray-400'
                                                }`}
                                            >
                                                {item.isCaptain ? captainLabel : viceCaptainLabel}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col grow">
                                        <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                                        {item.role && (
                                            <p className="text-amber-400/90 text-sm font-medium mt-1">{item.role}</p>
                                        )}
                                        {(item.description || item.gg) && (
                                            <p className="text-gray-300/90 text-sm mt-2">{item.description || item.gg}</p>
                                        )}

                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <div className="flex gap-2 flex-wrap">
                                                {item.isCaptain && (
                                                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/20">
                                                        {captainLabel}
                                                    </span>
                                                )}
                                                {item.isViceCaptain && (
                                                    <span className="px-3 py-1 bg-white/5 text-gray-200 text-xs rounded-full border border-white/20">
                                                        {viceCaptainLabel}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default TeamSection;
