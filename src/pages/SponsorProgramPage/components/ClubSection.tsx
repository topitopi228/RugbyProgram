// @ts-nocheck
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ClubSectionProps {
    language: string;
}

const ClubSection: React.FC<ClubSectionProps> = ({ language }) => {
    const navigate = useNavigate();

    return (
        <div id="club-section" className="relative py-24 overflow-hidden">
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
            
            {/* Animated Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                    initial={{ 
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                        y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
            
            {/* Dynamic Gradient Orbs */}
            <motion.div 
                className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)',
                    left: '10%',
                    top: '20%'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)',
                    right: '10%',
                    bottom: '10%'
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative"
                >
                    {/* Premium Card Container */}
                    <div className="relative">
                        <div 
                            className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Corner Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-600/5 to-transparent rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-600/5 to-transparent rounded-full blur-3xl"></div>

                        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
                            {/* Badge */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-2xl backdrop-blur-sm">
                                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-slate-300 font-semibold text-xs uppercase tracking-wider">
                                        {language === 'UA' ? 'Ексклюзивна пропозиція' :
                                            language === 'EN' ? 'Exclusive Offer' :
                                                'Exkluzív ajánlat'}
                                    </span>
                                </div>
                            </div>

                            {/* Main Title */}
                            <div className="text-center mb-6">
                                <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">
                                    {language === 'UA' ? 'Клуб "100"' :
                                        language === 'EN' ? 'Club "100"' :
                                            'Klub "100"'}
                                </h2>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-px w-10 bg-slate-700"></div>
                                    <span className="text-xl">🏆</span>
                                    <div className="h-px w-10 bg-slate-700"></div>
                                </div>
                            </div>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-center text-slate-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
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
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: 0.1 * idx, 
                                            duration: 0.5
                                        }}
                                        className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-colors duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-2xl border border-slate-600/50">
                                                {item.icon}
                                            </div>
                                            
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col items-center gap-6">
                                <button
                                    onClick={() => navigate('/benefits')}
                                    className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    <span className="text-sm font-medium text-slate-300">
                                        {language === 'UA' ? 'Обмежена кількість місць - тільки 100 членів' :
                                            language === 'EN' ? 'Limited slots - only 100 members' :
                                                'Korlátozott helyek - csak 100 tag'}
                                    </span>
                                </div>
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
