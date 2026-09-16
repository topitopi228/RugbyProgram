// @ts-nocheck
interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="relative bg-black mt-20">
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Text side */}
                    <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-up">
                        <span className="inline-block h-1 w-14 bg-brand-yellow mb-6" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                            {title}
                        </h1>
                        <span className="mt-6 inline-block h-1 w-8 bg-brand-blue" />
                    </div>

                    {/* Image side */}
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-[300px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl border border-white/10">
                            <img
                                src="/backteam.webp"
                                alt="Rugby team"
                                fetchPriority="high"
                                loading="eager"
                                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-brand-yellow/20 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
