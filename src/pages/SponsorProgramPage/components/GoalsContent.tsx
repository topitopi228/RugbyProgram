interface GoalsContentProps {
    europeanGoal: string;
}

const GoalsContent: React.FC<GoalsContentProps> = ({ europeanGoal }) => {
    return (
        <div className="relative py-20 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Text Content */}
                <div className="mb-12">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="animate-fade-up inline-flex items-center px-5 py-2.5 mb-6 border border-brand-yellow/40">
                            <span className="text-sm font-semibold text-brand-yellow uppercase tracking-wider">
                                Європейські амбіції
                            </span>
                        </div>
                        <p className="animate-fade-up-1 text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                            {europeanGoal}
                        </p>
                    </div>
                </div>

                {/* Image Layout */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden border border-white/10 hover:border-brand-yellow/60 transition-colors">
                            <img
                                src="/iq1.webp"
                                alt="Rugby team training"
                                loading="eager"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden border border-white/10 hover:border-brand-blue/60 transition-colors">
                            <img
                                src="/iq2.webp"
                                alt="Rugby team in action"
                                loading="eager"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="w-32 h-1 bg-gradient-to-r from-brand-blue to-brand-yellow mx-auto mt-16"></div>
            </div>
        </div>
    );
};

export default GoalsContent;
