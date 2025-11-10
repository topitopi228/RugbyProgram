// @ts-nocheck
import {motion, AnimatePresence} from 'framer-motion';
import {useLanguage} from './LanguageUtils';
import {useRef, useState} from 'react';
import DonationProgress from './DonationProgress';
import { translations, getEvents, fundingBreakdowns } from './AboutTranslations';

const AboutUs = () => {
    const {language} = useLanguage();
    const contactRef = useRef<HTMLDivElement>(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({behavior: 'smooth'});
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
        hidden: {opacity: 0, y: 20},
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
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="/backmaj.webp"
                    alt="Rugby team"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="max-w-7xl mx-auto w-full text-center"
                    >
                        <motion.h1
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
                        >
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                                {t.pageTitle}
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
                        >
                            {t.upcomingEvents}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            <DonationProgress/>

            <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                        variants={fadeIn}
                        className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="relative h-64 md:h-auto md:max-h-85 md:w-1/3">
                                <img
                                    src={event.image}
                                    alt={`Event ${event.id}`}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                    <span className="text-yellow-400 font-medium text-lg">{event.date}</span>
                                </div>
                            </div>
                            <div className="p-6 md:w-2/3">
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-400 font-bold text-2xl mr-3">0{index + 1}</span>
                                    <h3 className="text-2xl font-bold">{event.title}</h3>
                                </div>
                                <div className="flex items-center text-blue-200 mb-4">
                                    <svg
                                        className="w-5 h-5 mr-2 text-yellow-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-lg">{event.location}</span>
                                </div>
                                {event.description && (
                                    <p className="text-blue-100 text-lg mb-4">{event.description}</p>
                                )}
                                <p className="text-gray-300 mt-4">{event.details}</p>

                                {/* Funding Information */}
                                <div
                                    className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg border border-yellow-500/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-medium text-yellow-400">
                                                {language === 'UA' ? 'Необхідна сума фінансування:' :
                                                    language === 'EN' ? 'Required funding:' :
                                                        'Szükséges támogatás:'}
                                            </h4>
                                            <p className="text-2xl font-bold text-yellow-400">{event.funding}</p>
                                        </div>
                                        <button
                                            onClick={() => openFundingModal(event)}
                                            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300"
                                        >
                                            {language === 'UA' ? 'Детальніше' :
                                                language === 'EN' ? 'Details' :
                                                    'Részletek'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeIn}
                        className="max-w-5xl mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                            {t.equipmentSupport.title}
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                            {t.equipmentSupport.description}
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <motion.div
                            className="w-full md:w-1/2 lg:w-1/3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={fadeIn}
                        >
                            <div
                                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-full">
                                <img
                                    src="/inven.webp"
                                    alt={t.equipmentSupport.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">{t.equipmentSupport.amount}</h3>
                                    <ul className="space-y-2 text-left mb-6">
                                        {t.equipmentSupport.items.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-yellow-400 mr-2">•</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                    >
                                        {t.equipmentSupport.cta}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div ref={contactRef} id="contact" className="w-full">
                <div
                    className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 text-white py-12 px-4 sm:px-6 lg:px-8 relative w-full rounded-2xl overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div
                            className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mix-blend-soft-light transform rotate-45"></div>
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="max-w-7xl mx-auto relative z-10"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                                {t.contactTitle}
                            </h2>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                {t.contactText}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {/* Phone */}
                            <motion.a
                                whileHover={{y: -5}}
                                href={`tel:${t.contactPhone.replace(/\s+/g, '')}`}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                            >
                                <div
                                    className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold text-yellow-300 mb-2">
                                        {language === 'UA' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Telefon'}
                                    </span>
                                <span className="text-blue-100">{t.contactPhone}</span>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                whileHover={{y: -5}}
                                href={`mailto:${t.contactEmail}`}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                            >
                                <div
                                    className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold text-yellow-300 mb-2">Email</span>
                                <span className="text-blue-100 break-all text-sm">{t.contactEmail}</span>
                            </motion.a>

                            {/* Telegram */}
                            <motion.a
                                whileHover={{y: -5}}
                                href={`https://${t.contactTelegram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                            >
                                <div
                                    className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold text-yellow-300 mb-2">Telegram</span>
                                <span className="text-blue-100">@{t.contactTelegram.split('/').pop()}</span>
                            </motion.a>
                        </div>

                        {/* Sponsors Section */}
                        <div className="mt-16">
                            <motion.h3
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6}}
                                className="text-2xl md:text-4xl font-bold text-center mb-8 text-yellow-300"
                            >
                                {t.ourSponsors}
                            </motion.h3>

                            <div className="relative overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
                                <div
                                    className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

                                <div className="flex space-x-8 py-4 animate-marquee whitespace-nowrap">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="inline-flex items-center justify-center px-6">
                                            <div
                                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                                <img
                                                    src={`/spin-${num}.webp`}
                                                    alt={`Sponsor ${num}`}
                                                    className="h-12 w-auto max-w-[150px] object-contain  hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={`dup-${num}`}
                                             className="inline-flex items-center justify-center px-6">
                                            <div
                                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                                <img
                                                    src={`/spin-${num}.webp`}
                                                    alt={`Sponsor ${num}`}
                                                    className="h-12 w-auto max-w-[150px] object-contain  hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.9, opacity: 0}}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                        {selectedEvent.title}
                                    </h2>
                                    <p className="text-yellow-400 text-lg mt-1">{selectedEvent.funding}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-white p-1 -m-1 transition-colors"
                                    aria-label={language === 'UA' ? 'Закрити' : language === 'EN' ? 'Close' : 'Bezárás'}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-yellow-400/30 pb-2">
                                    {language === 'UA' ? 'Детальний розподіл коштів' :
                                        language === 'EN' ? 'Funding Breakdown' : 'Pénzügyi felosztás'}
                                </h3>
                                <div className="space-y-4">
                                    {fundingBreakdowns[selectedEvent.id]?.map((item, index) => (
                                        <div key={index}
                                             className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                                            <div className="p-4 bg-white/5 flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-lg">{item.category[language]}</h4>
                                                    <p className="text-yellow-400">{item.amount}</p>
                                                </div>
                                                <span
                                                    className="text-sm text-gray-300">{item.description[language]}</span>
                                            </div>
                                            <div className="p-4 pt-2 bg-white/2.5">
                                                <ul className="space-y-2 text-sm text-gray-300">
                                                    {item.subItems?.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="flex items-start">
                                                            <span className="text-yellow-400 mr-2">•</span>
                                                            <span>{subItem[language]}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg border border-yellow-500/20 flex justify-between items-center">
                                    <span className="font-bold text-lg">
                                        {language === 'UA' ? 'Загальна сума:' :
                                            language === 'EN' ? 'Total amount:' : 'Összesen:'}
                                    </span>
                                    <span className="text-2xl font-bold text-yellow-400">{selectedEvent.funding}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-full transition-all duration-300"
                                >
                                    {language === 'UA' ? 'Закрити' :
                                        language === 'EN' ? 'Close' : 'Bezárás'}
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-medium rounded-full transition-all duration-300"
                                >
                                    {language === 'UA' ? 'Підтримати' :
                                        language === 'EN' ? 'Support' : 'Támogatás'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutUs;