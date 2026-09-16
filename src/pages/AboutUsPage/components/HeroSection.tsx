// @ts-nocheck

interface HeroSectionProps {
    title: string;
    subtitle: string;
    fadeIn?: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <div className="relative w-full overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Column */}
                    <div className="w-full lg:w-1/2">
                        {/* Badge */}
                        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 mb-6 bg-black border border-brand-yellow rounded-none">
                            <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider">
                                About Us
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="animate-fade-up-1 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-6 leading-tight text-white">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="animate-fade-up-2 text-lg md:text-xl text-neutral-400 max-w-xl font-medium leading-relaxed">
                            {subtitle}
                        </p>

                        {/* Divider */}
                        <div className="animate-fade-up-3 h-1 w-24 bg-brand-yellow mt-8"></div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] md:h-[420px] lg:h-[480px] w-full overflow-hidden border-l-4 border-brand-yellow bg-neutral-950">
                            <img
                                src="/backmaj.webp"
                                alt="Rugby team"
                                fetchPriority="high"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
