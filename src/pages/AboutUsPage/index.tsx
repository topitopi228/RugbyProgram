// @ts-nocheck
import { useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import { translations, getEvents, fundingBreakdowns } from '../../components/AboutTranslations';
import HeroSection from './components/HeroSection';
import EventsList from './components/EventsList';
import EquipmentSupport from './components/EquipmentSupport';
import ContactPartnersSection from '../../components/ContactPartnersSection';
import FundingModal from './components/FundingModal';

const AboutUsPage = () => {
    const { language } = useLanguage();
    const contactRef = useRef<HTMLDivElement>(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const openFundingModal = (event) => {
        setSelectedEvent(event);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedEvent(null);
        document.body.style.overflow = 'auto';
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
                    onOpenFundingModal={openFundingModal} 
                />
                <EquipmentSupport 
                    equipmentSupport={t.equipmentSupport} 
                    onScrollToContact={scrollToContact} 
                />
                <div ref={contactRef}>
                    <ContactPartnersSection language={language} />
                </div>
                <FundingModal 
                    selectedEvent={selectedEvent}
                    language={language}
                    fundingBreakdowns={fundingBreakdowns}
                    onClose={closeModal}
                />
            </div>
        </div>
    );
};

export default AboutUsPage;
