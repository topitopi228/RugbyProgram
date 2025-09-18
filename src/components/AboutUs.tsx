import { motion } from 'framer-motion';
import { useLanguage } from './LanguageUtils';

const AboutUs = () => {
    const { language } = useLanguage();

    const translations = {
        UA: {
            pageTitle: 'Майбутні заходи',
            upcomingEvents: 'Майбутні заходи збірної України U16 з регбі-7',
            event1: {
                date: '10-15 Лютого 2026',
                title: 'Турнір - Lisbon 7s',
                location: 'м. Лісабон, Португалія',
                funding: '24 000 €'
            },
            event2: {
                date: '18-23 Березня 2026',
                title: 'Найважливіше НТЗ',
                description: 'за участю провідних іноземних тренерів',
                location: 'м. Батумі, Грузія',
                funding: '25 000+ €'
            },
            event3: {
                date: '25-29 Червня 2026',
                title: 'Міжнародний турнір',
                description: 'з 30 національними командами з різних куточків світу',
                location: 'м. Клагенфурт, Австрія',
                funding: '20 000+ €'
            },
            contactTitle: "Зв'яжіться з нами",
            contactText: "Маєте питання або бажаєте підтримати нашу команду? Зв'яжіться з нами за допомогою наведених нижче контактів.",
            contactPhone: "+380 96 000 0000",
            contactEmail: "info@ukr-rugby.com",
            contactTelegram: "t.me/ukr_rugby",
            ourSponsors: "Наші спонсори"
        },
        EN: {
            pageTitle: 'Upcoming Events',
            upcomingEvents: 'Upcoming Events of Ukraine U16 Rugby-7 Team',
            event1: {
                date: 'February 10-15, 2026',
                title: 'Tournament - Lisbon 7s',
                location: 'Lisbon, Portugal',
                funding: '24,000 €'
            },
            event2: {
                date: 'March 18-23, 2026',
                title: 'Most Important Training Camp',
                description: 'with leading foreign coaches',
                location: 'Batumi, Georgia',
                funding: '25,000+ €'
            },
            event3: {
                date: 'June 25-29, 2026',
                title: 'International Tournament',
                description: 'with 30 national teams from around the world',
                location: 'Klagenfurt, Austria',
                funding: '20,000+ €'
            },
            contactTitle: "Contact Us",
            contactText: "Have questions or want to support our team? Contact us using the information below.",
            contactPhone: "+380 96 000 0000",
            contactEmail: "info@ukr-rugby.com",
            contactTelegram: "t.me/ukr_rugby",
            ourSponsors: "Our Sponsors"
        },
        HUN: {
            pageTitle: 'Közelgő események',
            upcomingEvents: 'Az Ukrán U16-os Rögbi-7 Válogatott közelgő eseményei',
            event1: {
                date: '2026. február 10-15.',
                title: 'Lisbon 7s Bajnokság',
                location: 'Lisszabon, Portugália',
                funding: '24 000 €'
            },
            event2: {
                date: '2026. március 18-23.',
                title: 'Legfontosabb Edzőtábor',
                description: 'vezető külföldi edzőkkel',
                location: 'Batumi, Grúzia',
                funding: '25 000+ €'
            },
            event3: {
                date: '2026. június 25-29.',
                title: 'Nemzetközi Torna',
                description: '30 nemzeti csapattal a világ különböző részeiről',
                location: 'Klagenfurt, Ausztria',
                funding: '20 000+ €'
            },
            contactTitle: "Lépjen kapcsolatba velünk",
            contactText: "Kérdése van vagy támogatná csapatunkat? Lépjen velünk kapcsolatba az alábbi elérhetőségeken.",
            contactPhone: "+380 96 000 0000",
            contactEmail: "info@ukr-rugby.com",
            contactTelegram: "t.me/ukr_rugby",
            ourSponsors: "Szponzoraink"
        }
    };

    const t = translations[language];

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

    const events = [
        {
            id: 1,
            image: '/maj1.png',
            date: t.event1.date,
            title: t.event1.title,
            description: t.event1.description,
            location: t.event1.location,
            funding: t.event1.funding,
            details: language === 'UA' ?
                'Турнір з регбі-7 для юніорських команд у Лісабоні. Наші гравці отримають можливість змагатися з найсильнішими командами Європи, показати свій рівень підготовки та набратися досвіду міжнародних змагань.' :
                language === 'EN' ?
                'Rugby-7 tournament for junior teams in Lisbon. Our players will have the opportunity to compete with the strongest teams in Europe, demonstrate their skill level, and gain international competition experience.' :
                'Rögbi-7 torna ifjúsági csapatok számára Lisszabonban. Játékosaink lehetőséget kapnak arra, hogy versenyezzenek Euróga legerősebb csapataival, bemutassák szintjüket és nemzetközi versenytapasztalatot szerezzenek.'
        },
        {
            id: 2,
            image: '/maj2.png',
            date: t.event2.date,
            title: t.event2.title,
            description: t.event2.description,
            location: t.event2.location,
            funding: t.event2.funding,
            details: language === 'UA' ?
                'Інтенсивний навчально-тренувальний збір за участі провідних європейських тренерів. Програма включає тренування з техніки, тактики, фізичної підготовки та психологічного тренінгу.' :
                language === 'EN' ?
                'Intensive training camp with leading European coaches. The program includes technical, tactical, physical training, and psychological preparation sessions.' :
                'Intenzív edzőtábor vezető európai edzőkkel. A programba tartozik technikai, taktikai, fizikai edzés és pszichológiai felkészítés is.'
        },
        {
            id: 3,
            image: '/maj3.png',
            date: t.event3.date,
            title: t.event3.title,
            description: t.event3.description,
            location: t.event3.location,
            funding: t.event3.funding,
            details: language === 'UA' ?
                'Великий міжнародний турнір за участі 30 національних команд з усього світу. Унікальна можливість для наших юних гравців виступити на міжнародній арені та показати свій потенціал.' :
                language === 'EN' ?
                'Major international tournament featuring 30 national teams from around the world. A unique opportunity for our young players to perform on the international stage and demonstrate their potential.' :
                'Nagy nemzetközi torna, 30 ország csapataival. Kiváló lehetőség fiatal játékosaink számára, hogy nemzetközi színtéren mutathassák be tudásukat és potenciáljukat.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="/backmaj.png"
                    alt="Rugby team"
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
                        <div className="flex flex-col md:flex-row">
                            <div className="relative h-64 md:h-auto md:w-1/3">
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
                                            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
                                            {language === 'UA' ? 'Підтримати' :
                                                language === 'EN' ? 'Support' :
                                                    'Támogatás'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full">
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
                                {language === 'UA' ? 'Наші спонсори' : language === 'EN' ? 'Our Sponsors' : 'Szponzoraink'}
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
                                                    src={`/spin-${num}.png`}
                                                    alt={`Sponsor ${num}`}
                                                    className="h-12 w-auto max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
                                                    src={`/spin-${num}.png`}
                                                    alt={`Sponsor ${num}`}
                                                    className="h-12 w-auto max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
        </div>
    );
};

export default AboutUs;