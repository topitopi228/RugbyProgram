import { useLanguage } from '../../components/LanguageUtils';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import { translations } from './translations';
import { getTeamData } from './teamData';

const TeamPage = () => {
    const { language } = useLanguage();

    const t = translations[language];
    const teamData = getTeamData(language, t);

    return (
        <div className="min-h-screen bg-black text-white">
            <HeroSection title={t.title} />

            <div className="container mx-auto px-4 py-8">
                <TeamSection
                    title={t.mainCoaches}
                    items={teamData.coaches}
                />

                <div className="w-16 h-0.5 bg-brand-blue mx-auto my-8" />

                <TeamSection
                    title={t.doctors}
                    items={teamData.doctors}
                />

                <div className="w-16 h-0.5 bg-brand-yellow mx-auto my-8" />

                <TeamSection
                    title={t.players}
                    items={teamData.players}
                    captainLabel={t.captain}
                    viceCaptainLabel={t.viceCaptain}
                />

                <div className="w-16 h-0.5 bg-brand-blue mx-auto my-8" />

                <TeamSection
                    title={t.foreignCoaches}
                    items={teamData.foreignCoaches}
                />

                <ContactSection
                    language={language}
                />
            </div>
        </div>
    );
};

export default TeamPage;
