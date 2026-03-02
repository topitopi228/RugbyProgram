// @ts-nocheck
import { useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageUtils';
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
        <div className="min-h-screen relative overflow-hidden text-white">
            {/* Modern Background with Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"></div>
            
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Subtle Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="relative">
                <HeroSection 
                    title={t.pageTitle} 
                    subtitle={t.upcomingEvents} 
                    fadeIn={fadeIn} 
                />
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
                />
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
