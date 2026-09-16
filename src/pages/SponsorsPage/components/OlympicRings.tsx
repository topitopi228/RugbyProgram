// @ts-nocheck

interface OlympicRingsProps {
    language: string;
}

const OlympicRings: React.FC<OlympicRingsProps> = ({ language }) => {
    return (
        <div className="relative w-full max-w-xs h-auto lg:w-96 lg:h-[500px] flex-shrink-0 flex flex-col items-center">
            {/* Olympic Rings */}
            <div className="relative w-full flex items-center justify-center">
                <div className="relative w-48 h-32 md:w-72 md:h-48 flex items-center justify-center">
                    {/* Row 1 - Top Rings (Blue, Black, Red) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 md:space-x-9">
                        {/* Blue Ring */}
                        <div className="animate-fade-up w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-blue-500 bg-transparent" style={{ animationDelay: '0.05s' }} />

                        {/* Black Ring */}
                        <div className="animate-fade-up w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-white bg-transparent" style={{ animationDelay: '0.15s' }} />

                        {/* Red Ring */}
                        <div className="animate-fade-up w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-red-500 bg-transparent" style={{ animationDelay: '0.25s' }} />
                    </div>

                    {/* Row 2 - Bottom Rings (Yellow, Green) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4 md:space-x-9 mt-3 md:mt-5">
                        {/* Yellow Ring */}
                        <div className="animate-fade-up w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-yellow-400 bg-transparent" style={{ animationDelay: '0.35s' }} />

                        {/* Green Ring */}
                        <div className="animate-fade-up w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-green-500 bg-transparent" style={{ animationDelay: '0.45s' }} />
                    </div>
                </div>
            </div>

            {/* U-16 Badge */}
            <div className="animate-fade-up relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-yellow-400 bg-black flex items-center justify-center z-20 mt-6 md:mt-8" style={{ animationDelay: '0.55s' }}>
                <div className="relative z-10 text-center">
                    <div className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold">U-16</div>
                    <div className="text-white text-xs md:text-sm font-medium mt-1">
                        {language === 'UA' ? 'Команда' : language === 'EN' ? 'Team' : 'Csapat'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OlympicRings;
