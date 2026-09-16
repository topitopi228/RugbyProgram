// @ts-nocheck

interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <div className="relative text-center pt-20 pb-6">
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                {/* Accent Bar */}
                <div className="animate-fade-up flex items-center justify-center gap-1.5 mb-4">
                    <div className="h-1 w-8 rounded-full bg-brand-yellow" />
                    <div className="h-1 w-4 rounded-full bg-brand-blue-light" />
                </div>

                {/* Title */}
                <h1 className="animate-fade-up-1 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide mb-3 text-white">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="animate-fade-up-2 text-base md:text-lg text-neutral-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
