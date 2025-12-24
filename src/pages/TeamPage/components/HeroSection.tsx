// @ts-nocheck
import { motion } from 'framer-motion';

interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="relative">
            {/* Main Hero Container */}
            <div className="relative h-[550px] md:h-[85vh] w-full overflow-hidden">
                <img
                    src="/backteam.webp"
                    alt="Rugby team"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Multiple Gradient Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent"></div>
                
                {/* Radial Gradient for Vignette Effect */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50"></div>
                
                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end pb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 px-4"
                    >
                        <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
                            {title}
                        </span>
                    </motion.h1>
                    
                    {/* Animated Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="mt-8"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="inline-block"
                        >
                            <svg className="w-6 h-6 text-amber-400/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            
            {/* Smooth Transition Wave */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-20 pointer-events-none">
                <svg 
                    className="w-full h-24 md:h-32 fill-slate-950"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0,56 C150,100 350,0 600,56 C850,112 1050,0 1200,56 L1200,120 L0,120 Z" opacity="0.5"></path>
                    <path d="M0,56 C150,80 350,20 600,56 C850,92 1050,20 1200,56 L1200,120 L0,120 Z" opacity="0.7"></path>
                    <path d="M0,88 C150,108 350,68 600,88 C850,108 1050,68 1200,88 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10"></div>
            
            {/* Animated Light Beams */}
            <div className="absolute bottom-0 left-1/4 w-px h-48 bg-gradient-to-t from-amber-400/20 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-px h-48 bg-gradient-to-t from-amber-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/2 w-px h-32 bg-gradient-to-t from-amber-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
    );
};

export default HeroSection;
