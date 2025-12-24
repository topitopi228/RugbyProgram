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
            className="mb-24 relative"
        >
            {/* Section Decorative Header */}
            <div className="relative mb-16">
                {/* Decorative Lines */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                
                {/* Title with Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center"
                >
                    <div className="inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 blur-3xl"></div>
                        <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 px-8 py-2">
                            {title}
                        </h2>
                        {/* Decorative Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </div>
                </motion.div>
            </div>
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
                            className="relative h-full group"
                        >
                            {/* Premium Card Design */}
                            <div className="relative h-full">
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                                
                                {/* Main Card Container */}
                                <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-amber-500/30 via-purple-500/20 to-blue-500/30 h-full">
                                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/10 overflow-hidden h-full flex flex-col group-hover:border-amber-500/30 transition-all duration-500">
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                            {/* Subtle Pattern Overlay */}
                                            <div 
                                                className="absolute inset-0 opacity-10"
                                                style={{
                                                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                                    backgroundSize: '20px 20px'
                                                }}
                                            ></div>
                                            
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
                                                className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 z-20"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex flex-col grow relative">
                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>
                                            
                                            <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative z-10">
                                                {item.name}
                                            </h3>
                                            {item.role && (
                                                <p className="text-amber-400 text-sm font-semibold mt-1.5 tracking-wide uppercase relative z-10">
                                                    {item.role}
                                                </p>
                                            )}
                                            {(item.description || item.gg) && (
                                                <p className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10">
                                                    {item.description || item.gg}
                                                </p>
                                            )}

                                            {/* Bottom Section with Badges */}
                                            <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                                                <div className="flex gap-2 flex-wrap">
                                                    {item.isCaptain && (
                                                        <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 text-xs font-semibold rounded-lg border border-yellow-500/30 backdrop-blur-sm">
                                                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                                                            {captainLabel}
                                                        </span>
                                                    )}
                                                    {item.isViceCaptain && (
                                                        <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-slate-600/20 to-slate-700/20 text-gray-300 text-xs font-semibold rounded-lg border border-slate-500/30 backdrop-blur-sm">
                                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                                                            {viceCaptainLabel}
                                                        </span>
                                                    )}
                                                </div>
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
