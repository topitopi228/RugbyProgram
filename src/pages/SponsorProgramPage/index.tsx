import { useLanguage } from '../../components/LanguageUtils';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OlympicGoalSection from './components/OlympicGoalSection';
import ClubSection from './components/ClubSection';
import GoalsContent from './components/GoalsContent';
import ContactSection from './components/ContactSection';
import { translations } from './translations';

const SponsorProgram = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const t = translations[language];

    useEffect(() => {
        // Check if there's a hash in the URL
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                // Small timeout to ensure the component is fully rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <HeroSection language={language} />
            <OlympicGoalSection 
                olympicTitle={t.olympicTitle} 
                olympicGoal={t.olympicGoal} 
            />
            <ClubSection language={language} />
            <GoalsContent europeanGoal={t.europeanGoal} />
            <ContactSection
                language={language}
                contactTitle={t.contactTitle}
                contactText={t.contactText}
                contactPhone={t.contactPhone}
                contactEmail={t.contactEmail}
                contactTelegram={t.contactTelegram}
            />
        </div>
    );
};

export default SponsorProgram;
