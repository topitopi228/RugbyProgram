// @ts-nocheck
import { useRef } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import { translations, getEvents } from '../../components/AboutTranslations';
import HeroSection from './components/HeroSection';
import EventsList from './components/EventsList';
import EquipmentSupport from './components/EquipmentSupport';
import ContactPartnersSection from '../../components/ContactPartnersSection';

const AboutUsPage = () => {
    const { language } = useLanguage();
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const t = translations[language];
    const events = getEvents(language, t);

    return (
        <div className="min-h-screen relative bg-black text-white">
            <div className="relative">
                <HeroSection
                    title={t.pageTitle}
                    subtitle={t.upcomingEvents}
                />
                <EventsList
                    events={events}
                    language={language}
                />
                <EquipmentSupport
                    equipmentSupport={t.equipmentSupport}
                    onScrollToContact={scrollToContact}
                />
                <div ref={contactRef}>
                    <ContactPartnersSection language={language} />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
