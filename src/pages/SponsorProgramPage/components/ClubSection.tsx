// @ts-nocheck
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ClubSectionProps {
    language: string;
}

const ClubSection: React.FC<ClubSectionProps> = ({ language }) => {
    const navigate = useNavigate();

    return (
        <div className="relative py-16 overflow-hidden">
            {/* Elegant Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900/50"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Premium Card Container */}
                    <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-yellow-400/20 shadow-2xl overflow-hidden">
                        {/* Subtle Glow Effect */}
                        <div className="absolute -inset-px bg-gradient-to-r from-yellow-400/10 via-amber-400/5 to-yellow-400/10 rounded-3xl opacity-50"></div>
                        
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-full blur-3xl"></div>

                        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
                            {/* Badge */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 border border-yellow-400/30 rounded-2xl backdrop-blur-sm">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wider">
                                        {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                            language === 'EN' ? 'Exclusive Offer' :
                                                'Exkluzív ajánlat'}
                                    </span>
                                </div>
                            </div>

                            {/* Main Title */}
                            <div className="text-center mb-6">
                                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                        {language === 'UA' ? 'Клуб "100"' :
                                            language === 'EN' ? 'Club "100"' :
                                                'Klub "100"'}
                                    </span>
                                </h2>
                                <div className="flex items-center justify-center gap-2 text-yellow-400/60">
                                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/60"></div>
                                    <span className="text-xl">🏆</span>
                                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/60"></div>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-center text-slate-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                                {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями' :
                                    language === 'EN' ? 'Become part of an elite club with exclusive privileges' :
                                        'Legyen része egy elit klubnak exkluzív előnyökkel'}
                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10">
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
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                        className="group relative"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 group-hover:border-yellow-400/30 transition-all duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center text-xl border border-yellow-400/20">
                                                    {item.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-base font-bold text-white mb-0.5">{item.title}</h3>
                                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col items-center gap-5">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    onClick={() => navigate('/benefits')}
                                    className="group relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bold text-base rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:-translate-y-1"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {language === 'UA' ? 'Дізнатися більше про переваги' :
                                            language === 'EN' ? 'Discover the Benefits' :
                                                'Fedezze fel az előnyöket'}
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </motion.button>

                                {/* Limited Slots Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-yellow-400/20 rounded-full">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-xs font-medium text-slate-300">
                                        {language === 'UA' ? 'Обмежена кількість місць - тільки 100 членів' :
                                            language === 'EN' ? 'Limited slots - only 100 members' :
                                                'Korlátozott helyek - csak 100 tag'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClubSection;
