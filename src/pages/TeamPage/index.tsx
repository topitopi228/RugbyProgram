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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <HeroSection title={t.title} />

            <div className="container mx-auto px-4 py-12">
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
