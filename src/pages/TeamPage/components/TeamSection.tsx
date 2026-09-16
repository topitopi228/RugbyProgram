// @ts-nocheck
interface TeamMember {
    id: string;
    name: string;
    role?: string;
    gg?: string;
    description?: string;
    isCaptain?: boolean;
    isViceCaptain?: boolean;
    birthDate?: string;
}

interface TeamSectionProps {
    title: string;
    items: TeamMember[];
    captainLabel?: string;
    viceCaptainLabel?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
    title,
    items,
    captainLabel,
    viceCaptainLabel,
}) => {
    return (
        <div className="mb-24 relative">
            {/* Section Header */}
            <div className="mb-16 text-center animate-fade-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
                    {title}
                </h2>
                <div className="w-16 h-0.5 bg-brand-yellow mx-auto mt-4" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {items.map((item, index) => {
                    const imagePath = `/${item.id}.webp`;
                    const fallbackImagePath = '/rugby_back.webp';

                    return (
                        <div
                            key={item.id}
                            className="relative w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] 2xl:w-[calc(20%-1.5rem)]"
                        >
                            <div className="relative rounded-lg bg-neutral-950 border border-white/10 overflow-hidden h-full flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-brand-yellow">
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                                    <img
                                        src={imagePath}
                                        alt={item.name}
                                        loading={index < 8 ? "eager" : "lazy"}
                                        decoding="async"
                                        fetchPriority={index < 4 ? "high" : "low"}
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
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="text-xl font-bold tracking-tight text-white">
                                        {item.name}
                                    </h3>
                                    {item.birthDate && (
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-white/10">
                                                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-neutral-300 text-sm font-semibold">{item.birthDate}</span>
                                            </div>
                                        </div>
                                    )}
                                    {item.role && (
                                        <p className="text-yellow-400 text-sm font-semibold mt-1.5 tracking-wide uppercase">
                                            {item.role}
                                        </p>
                                    )}
                                    {(item.description || item.gg) && (
                                        <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                                            {item.description || item.gg}
                                        </p>
                                    )}

                                    {/* Bottom Section with Badges */}
                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <div className="flex gap-2 flex-wrap">
                                            {item.isCaptain && (
                                                <span className="inline-flex items-center px-3 py-1.5 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wide border border-brand-yellow/40">
                                                    {captainLabel}
                                                </span>
                                            )}
                                            {item.isViceCaptain && (
                                                <span className="inline-flex items-center px-3 py-1.5 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wide border border-brand-blue/40">
                                                    {viceCaptainLabel}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection;
