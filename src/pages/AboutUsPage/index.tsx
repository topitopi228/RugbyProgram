// @ts-nocheck
import { useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import DonationProgress from '../../components/DonationProgress';
import { translations, getEvents, fundingBreakdowns } from '../../components/AboutTranslations';
import HeroSection from './components/HeroSection';
import EventsList from './components/EventsList';
import EquipmentSupport from './components/EquipmentSupport';
import ContactSection from './components/ContactSection';
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

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.6
            }
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <HeroSection 
                title={t.pageTitle} 
                subtitle={t.upcomingEvents} 
                fadeIn={fadeIn} 
            />
            <DonationProgress />
            <EventsList 
                events={events} 
                language={language} 
                fadeIn={fadeIn} 
                onOpenFundingModal={openFundingModal} 
            />
            <EquipmentSupport 
                equipmentSupport={t.equipmentSupport} 
                fadeIn={fadeIn} 
                onScrollToContact={scrollToContact} 
            />
            <ContactSection 
                ref={contactRef}
                language={language}
                contactTitle={t.contactTitle}
                contactText={t.contactText}
                contactPhone={t.contactPhone}
                contactEmail={t.contactEmail}
                contactTelegram={t.contactTelegram}
                ourSponsors={t.ourSponsors}
            />
            <FundingModal 
                selectedEvent={selectedEvent}
                language={language}
                fundingBreakdowns={fundingBreakdowns}
                onClose={closeModal}
                onScrollToContact={scrollToContact}
            />
        </div>
    );
};

export default AboutUsPage;
