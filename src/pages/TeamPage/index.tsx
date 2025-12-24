import { useLanguage } from '../../components/LanguageUtils';
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

            <div className="container mx-auto px-4 py-12 relative z-10">
                <TeamSection
                    title={t.mainCoaches}
                    items={teamData.coaches}
                    fadeInUp={fadeInUp}
                />

                <TeamSection
                    title={t.doctors}
                    items={teamData.doctors}
                    fadeInUp={fadeInUp}
                />

                <TeamSection
                    title={t.players}
                    items={teamData.players}
                    captainLabel={t.captain}
                    viceCaptainLabel={t.viceCaptain}
                    fadeInUp={fadeInUp}
                />

                <TeamSection
                    title={t.foreignCoaches}
                    items={teamData.foreignCoaches}
                    fadeInUp={fadeInUp}
                />

                <ContactSection
                    language={language}
                    contactTitle={t.contactTitle}
                    contactText={t.contactText}
                    contactPhone={t.contactPhone}
                    contactEmail={t.contactEmail}
                    contactTelegram={t.contactTelegram}
                />
            </div>
        </div>
    );
};

export default TeamPage;
