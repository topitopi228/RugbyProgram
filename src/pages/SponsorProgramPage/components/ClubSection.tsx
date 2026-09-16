import { useNavigate } from 'react-router-dom';

interface ClubSectionProps {
    language: string;
}

const ClubSection: React.FC<ClubSectionProps> = ({ language }) => {
    const navigate = useNavigate();

    return (
        <div id="club-section" className="relative py-24 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="relative bg-neutral-950 border border-white/10">
                    <div className="relative px-6 py-12 md:px-12 md:py-16">
                        {/* Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="animate-fade-up inline-flex items-center px-5 py-2.5 border border-brand-yellow/40">
                                <span className="text-brand-yellow font-semibold text-xs uppercase tracking-wider">
                                    {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                        language === 'EN' ? 'Exclusive Offer' :
                                            'Exkluzív ajánlat'}
                                </span>
                            </div>
                        </div>

                        {/* Main Title */}
                        <div className="animate-fade-up-1 text-center mb-6">
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white uppercase tracking-tight">
                                {language === 'UA' ? 'Клуб "100"' :
                                    language === 'EN' ? 'Club "100"' :
                                        'Klub "100"'}
                            </h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-px w-10 bg-white/20"></div>
                                <span className="text-xl">🏆</span>
                                <div className="h-px w-10 bg-white/20"></div>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-center text-neutral-300 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями' :
                                language === 'EN' ? 'Become part of an elite club with exclusive privileges' :
                                    'Legyen része egy elit klubnak exkluzív előnyökkel'}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                            {[
                                {
                                    icon: '🎖️',
                                    title: language === 'UA' ? 'Ексклюзивний статус' : language === 'EN' ? 'Exclusive Status' : 'Exkluzív státusz',
                                    desc: language === 'UA' ? 'Членство в елітному клубі' : language === 'EN' ? 'Elite club membership' : 'Elit klub tagság'
                                },
                                {
                                    icon: '🏅',
                                    title: language === 'UA' ? 'Персональний мерч' : language === 'EN' ? 'Personal Merch' : 'Személyes merchandising',
                                    desc: language === 'UA' ? 'Унікальна форма з вашим іменем' : language === 'EN' ? 'Unique uniform with your name' : 'Egyedi egyenruha a neveddel'
                                },
                                {
                                    icon: '🎯',
                                    title: language === 'UA' ? 'VIP-привілеї' : language === 'EN' ? 'VIP Privileges' : 'VIP előnyök',
                                    desc: language === 'UA' ? 'Доступ до закритих подій' : language === 'EN' ? 'Access to private events' : 'Hozzáférés privát eseményekhez'
                                },
                                {
                                    icon: '🎫',
                                    title: language === 'UA' ? 'Білети на Олімпіаду' : language === 'EN' ? 'Olympic Tickets' : 'Olimpiai jegyek',
                                    desc: language === 'UA' ? 'Гарантовані місця на іграх' : language === 'EN' ? 'Guaranteed seats at games' : 'Garantált helyek a játékokon'
                                }
                            ].map((item, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                <div
                                    key={idx}
                                    className={`relative bg-black p-6 border border-white/10 transition-all duration-200 hover:-translate-y-1 ${isEven ? 'hover:border-brand-yellow' : 'hover:border-brand-blue'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 bg-neutral-900 flex items-center justify-center text-2xl border transition-colors ${isEven ? 'border-brand-yellow/40' : 'border-brand-blue/40'}`}>
                                            {item.icon}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                                            <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col items-center gap-6">
                            <button
                                onClick={() => navigate('/benefits')}
                                className="px-10 py-4 bg-brand-yellow hover:bg-yellow-300 text-black font-bold uppercase tracking-wide text-lg transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    {language === 'UA' ? 'Дізнатися більше про переваги' :
                                        language === 'EN' ? 'Discover the Benefits' :
                                            'Fedezze fel az előnyöket'}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>

                            {/* Limited Slots Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20">
                                <span className="text-sm font-medium text-neutral-300 uppercase tracking-wide">
                                    {language === 'UA' ? 'Обмежена кількість місць - тільки 100 членів' :
                                        language === 'EN' ? 'Limited slots - only 100 members' :
                                            'Korlátozott helyek - csak 100 tag'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubSection;
