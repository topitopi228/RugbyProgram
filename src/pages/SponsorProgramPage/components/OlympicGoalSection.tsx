interface OlympicGoalSectionProps {
    olympicTitle: string;
    olympicGoal: string;
}

const OLYMPIC_RING_COLORS = ['#0085C7', '#000000', '#DF0024', '#F4C300', '#009F3D'];

const OlympicGoalSection: React.FC<OlympicGoalSectionProps> = ({ olympicTitle, olympicGoal }) => {
    return (
        <div className="relative py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="relative border border-white/10 overflow-hidden border-t-4 border-t-brand-blue">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/olymp.png"
                            alt="Olympic goal"
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                        {/* Two-tone overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-brand-blue/30"></div>
                    </div>

                    {/* Side accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-yellow z-10"></div>

                    {/* Content */}
                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
                        {/* Olympic Rings */}
                        <div className="flex justify-center mb-10">
                            <div className="flex space-x-2 sm:space-x-3">
                                {OLYMPIC_RING_COLORS.map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px]"
                                        style={{ borderColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="text-center mb-8">
                            <h2 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight uppercase tracking-tight text-brand-yellow">
                                {olympicTitle}
                            </h2>

                            {/* Decorative Element */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="h-px w-16 bg-yellow-400/60"></div>
                                <div className="w-2 h-2 bg-yellow-400"></div>
                                <div className="h-px w-16 bg-yellow-400/60"></div>
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto font-light">
                                {olympicGoal}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue"></div>
                </div>
            </div>
        </div>
    );
};

export default OlympicGoalSection;
