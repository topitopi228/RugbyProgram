import { useLanguage } from '../../components/LanguageUtils';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import { translations } from './translations';
import { getTeamData } from './teamData';

const TeamPage = () => {
    const { language } = useLanguage();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const t = translations[language];
    const teamData = getTeamData(language, t);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
            {/* Modern Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-600/5 to-yellow-600/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            ></div>
            
            <HeroSection title={t.title} />

            {/* Transition Section - removed subtitle to show more sky */}

            <div className="container mx-auto px-4 py-8 relative z-10">
                <TeamSection
                    title={t.mainCoaches}
                    items={teamData.coaches}
                    fadeInUp={fadeInUp}
                />

                {/* Section Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-32 flex items-center justify-center my-8"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    </div>
                    <div className="relative bg-slate-950 px-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    </div>
                </motion.div>

                <TeamSection
                    title={t.doctors}
                    items={teamData.doctors}
                    fadeInUp={fadeInUp}
                />

                {/* Section Divider with Icon */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-32 flex items-center justify-center my-8"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    </div>
                    <div className="relative bg-slate-950 px-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </motion.div>

                <TeamSection
                    title={t.players}
                    items={teamData.players}
                    captainLabel={t.captain}
                    viceCaptainLabel={t.viceCaptain}
                    fadeInUp={fadeInUp}
                />

                {/* Section Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-32 flex items-center justify-center my-8"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                    </div>
                    <div className="relative bg-slate-950 px-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    </div>
                </motion.div>

                <TeamSection
                    title={t.foreignCoaches}
                    items={teamData.foreignCoaches}
                    fadeInUp={fadeInUp}
                />

                <ContactSection
                    language={language}
                />
            </div>
        </div>
    );
};

export default TeamPage;
