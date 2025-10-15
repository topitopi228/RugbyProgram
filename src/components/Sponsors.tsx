import {motion} from 'framer-motion';
import {useLanguage} from './LanguageUtils';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const Sponsors = () => {
    const {language} = useLanguage();
    const navigate = useNavigate();
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        navigate('/#ggwp');
    };

    const translations = {
        UA: {
            companySponsors: 'Компанії-партнери',
            personalSponsors: (
                <>
                    <span className="block text-2xl md:text-3xl font-bold text-white mb-2">Наші меценати</span>
                    <span className="text-base text-gray-300 font-medium">хто вже нас підтримав</span>
                </>
            ),
            becomeSponsor: 'Підтримати',
            companySponsorsList: [
                {
                    image: '/spin-4.png',
                    name: 'БФ "Міла" Олексія Юренка',
                    url: 'https://www.facebook.com/p/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D0%A4%D0%BE%D0%BD%D0%B4-%D0%9C%D0%86%D0%9B%D0%90-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D1%8F-%D0%AE%D1%80%D0%B5%D0%BD%D0%BA%D0%B0-61572065630183/'
                },
                {
                    image: '/spin-3.png',
                    name: 'Федерація регбі України',
                    url: 'https://rugby.org.ua/'
                },
                {
                    image: '/spin-2.png',
                    name: 'БФ "Nova Ukraine"',
                    url: 'https://novaukraine.org/'
                },
                {
                    image: '/spin-1.png',
                    name: 'Готель-ресторан "Згарда"',
                    url: 'https://www.instagram.com/zgardadragobrat/'
                },
            ],
            personalSponsorsList: [
                {
                    image: '/spon1.png',
                    name: 'ШАНДОР ФЕДІР',
                    position: 'Посол України в Угорщині, президент федерації регбі Закарпатської області',
                },
                {
                    image: '/spon2.png',
                    name: 'БАЖЕНКОВ ЄВГЕН',
                    position: 'Президент федерації регбі України',
                },
                {
                    image: '/spon3.png',
                    name: 'БИХОВ РОМАН',
                    position: 'Президент федерації регбі Харківської області',
                },
                {
                    image: '/spon4.png',
                    name: 'ПОТАПЕНКО ОЛЕКСАНДР',
                    position: 'Президент Київської міської федерації регбі',
                },
                {
                    image: '/spon5.webp',
                    name: 'ЕТНАРОВИЧ ОЛЕГ ',
                    position: 'Український підприємець, меценат, президент федерації регбі Одещини',
                },
                {
                    image: '/spon6.jpeg',
                    name: 'ЮРЕНКО ОЛЕКСІЙ',
                    position: 'Засновник БФ "Міла", підприємець',
                },
                {
                    image: '/spon7.jpg',
                    name: 'ПEТЬОВКА АНДРІЙ',
                    position: 'Підприємець, меценат спорту',
                },
                {
                    image: '/spon8.webp',
                    name: 'КОПИЛОВ АНТОН',
                    position: 'Підприємець, інвестор',
                },
                {
                    image: '/spon9.jpg',
                    name: 'АДАМИК ПЕТРО',
                    position: 'Бізнесмен, меценат,резидент федерації регбі Львівщини',
                },
                {
                    image: '/spon10.jpg',
                    name: 'Brent Impey',
                    position: 'Бізнесмен, меценат',
                },

            ],
            olympicInvitation: {
                title: 'Досягнення Олімпійської Мрії Разом',
                highlight: 'Усі спонсори, які допоможуть нам досягти нашої мети, отримають запрошення на Олімпійські ігри',
                description: 'Коли наша збірна U-16 вийде на Олімпіаду, ми запросимо кожного, хто підтримав нас у цій подорожі. Ваша підтримка - це крок до історії українського регбі!',
                cta: 'допомогти збірній'
            },
        },
        EN: {
            companySponsors: 'Company Sponsors',
            personalSponsors: (
                <>
                    <span className="block text-2xl md:text-3xl font-bold text-white mb-2">Our patrons</span>
                    <span className="text-base text-gray-300 font-medium">who have previously supported the development of Ukrainian rugby</span>
                </>
            ),
            becomeSponsor: 'Support',
            companySponsorsList: [
                {
                    image: '/spin-4.png',
                    name: 'Charity Fund "Mila" by Oleksiy Yurenko',
                    url: 'https://mila.help/'
                },
                {
                    image: '/spin-3.png',
                    name: 'Ukraine Rugby Union',
                    url: 'https://rugby.org.ua/'
                },
                {
                    image: '/spin-2.png',
                    name: 'Charity Fund "Nova Ukraine"',
                    url: 'https://novaukraine.org/'
                },
                {
                    image: '/spin-1.png',
                    name: 'Restaurant-Hotel "Zharda"',
                    url: 'https://www.instagram.com/zgardarestaurant/'
                },
            ],
            personalSponsorsList: [
                {
                    image: '/spon1.png',
                    name: 'FEDIR SHANDOR',
                    position: 'Ambassador of Ukraine to Hungary, President of the Zakarpattia Regional Rugby Federation',
                },
                {
                    image: '/spon2.png',
                    name: 'YEVHEN BAZHENKOV',
                    position: 'President of the Ukraine Rugby Union',
                },
                {
                    image: '/spon3.png',
                    name: 'ROMAN BIKHOV',
                    position: 'President of the Kharkiv Regional Rugby Federation',
                },
                {
                    image: '/spon4.png',
                    name: 'OLEKSANDR POTAPENKO',
                    position: 'President of the Kyiv City Rugby Federation',
                },
                {
                    image: '/spon5.webp',
                    name: 'OLEH ETNAROVYCH',
                    position: 'Ukrainian entrepreneur, philanthropist, President of the Odesa Regional Rugby Federation',
                },
                {
                    image: '/spon6.jpeg',
                    name: 'OLEKSIY YURENKO',
                    position: 'Founder of "Mila" Charity Fund, entrepreneur',
                },
                {
                    image: '/spon7.jpg',
                    name: 'ANDRII PITOVKA',
                    position: 'Entrepreneur, sports patron',
                },
                {
                    image: '/spon8.webp',
                    name: 'ANTON KOPILOV',
                    position: 'Entrepreneur, investor',
                },
                {
                    image: '/spon9.jpg',
                    name: 'PETRO ADAMYK',
                    position: 'Businessman, philanthropist',
                },
            ],
            olympicInvitation: {
                title: 'Achieving the Olympic Dream Together',
                highlight: 'All sponsors who help us reach our goal will receive an invitation to the Olympic Games',
                description: 'When our U-16 team makes it to the Olympics, we will invite everyone who supported us on this journey. Your support is a step towards Ukrainian rugby history!',
                cta: 'Help the Team'
            },
        },
        HUN: {
            companySponsors: 'Céges Szponzorok',
            personalSponsors: (
                <>
                    <span className="block text-2xl md:text-3xl font-bold text-white mb-2">Mecénásaink</span>
                    <span className="text-base text-gray-300 font-medium">akik korábban támogatták az ukrán rögbi fejlődését</span>
                </>
            ),
            becomeSponsor: 'Támogatás',
            companySponsorsList: [
                {
                    image: '/spin-4.png',
                    name: 'Jótékonysági Alap "Mila" Olekszij Jurenko',
                    url: 'https://mila.help/'
                },
                {
                    image: '/spin-3.png',
                    name: 'Ukrajnai Rögbi Szövetség',
                    url: 'https://rugby.org.ua/'
                },
                {
                    image: '/spin-2.png',
                    name: 'Jótékonysági Alap "Nova Ukraine"',
                    url: 'https://novaukraine.org/'
                },
                {
                    image: '/spin-1.png',
                    name: 'Étterem-Szálló "Zharda"',
                    url: 'https://www.instagram.com/zgardarestaurant/'
                },
            ],
            personalSponsorsList: [
                {
                    image: '/spon1.png',
                    name: 'FEDIR SHANDOR',
                    position: 'Ukrajna magyarországi nagykövete, a Kárpátaljai Területi Rögbi Szövetség elnöke',
                },
                {
                    image: '/spon2.png',
                    name: 'YEVHEN BAZHENKOV',
                    position: 'Az Ukrán Rögbi Szövetség elnöke',
                },
                {
                    image: '/spon3.png',
                    name: 'ROMAN BIKHOV',
                    position: 'A Harkovi Területi Rögbi Szövetség elnöke',
                },
                {
                    image: '/spon4.png',
                    name: 'OLEKSANDR POTAPENKO',
                    position: 'A Kijevi Városi Rögbi Szövetség elnöke',
                },
                {
                    image: '/spon5.webp',
                    name: 'OLEH ETNAROVICS',
                    position: 'Ukrán vállalkozó, mecénás, az Odeszai Területi Rögbi Szövetség elnöke',
                },
                {
                    image: '/spon6.jpeg',
                    name: 'OLEKSIY YURENKO',
                    position: 'A "Mila" Alapítvány alapítója, vállalkozó',
                },
                {
                    image: '/spon7.jpg',
                    name: 'ANDRII PITOVKA',
                    position: 'Vállalkozó, sporttámogató',
                },
                {
                    image: '/spon8.webp',
                    name: 'ANTON KOPILOV',
                    position: 'Vállalkozó, befektető',
                },
                {
                    image: '/spon9.jpg',
                    name: 'PETRO ADAMYK',
                    position: 'Üzletember, mecénás',
                },
            ],
            olympicInvitation: {
                title: 'Közösen az Olimpiai Álomért',
                highlight: 'Minden támogató, aki segít elérni a célunkat, meghívást kap az Olimpiai Játékokra',
                description: 'Amikor U-16-os csapatunk kijut az olimpiára, mi mindenkit meghívunk, aki támogatott minket ezen az úton. Támogatásod lépés az ukrán rögbi történelem felé!',
                cta: 'Légy Te is a Csapat Része!'
            },
        },
    };

    const t = translations[language as keyof typeof translations] || translations.EN;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Olympic Invitation Section */}
                <motion.div
                    className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 mb-20 shadow-2xl border border-blue-700/50"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div
                            className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
                        <div
                            className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            {/* Text Content */}
                            <div className="lg:w-2/3">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300"
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.2, duration: 0.5}}
                                >
                                    {t.olympicInvitation.title}
                                </motion.h2>
                                <motion.p
                                    className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed text-white"
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.3, duration: 0.5}}
                                >
                                    {t.olympicInvitation.highlight}
                                </motion.p>
                                <motion.p
                                    className="text-blue-100 mb-8 text-lg max-w-3xl"
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.4, duration: 0.5}}
                                >
                                    {t.olympicInvitation.description}
                                </motion.p>
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: 0.5, duration: 0.5}}
                                >
                                    <button
                                        onClick={scrollToContact}
                                        className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {t.olympicInvitation.cta}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </span>
                                        <span
                                            className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Olympic Rings & U-16 Badge */}
                            <motion.div
                                className="relative w-full max-w-xs h-auto lg:w-96 lg:h-[500px] flex-shrink-0 flex flex-col items-center"
                                initial={{opacity: 0, scale: 0.9}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: 0.2}}
                            >
                                {/* Olympic Rings */}
                                <div className="relative w-full flex items-center justify-center">
                                    {/* Main Container for Rings */}
                                    <div
                                        className="relative w-48 h-32 md:w-72 md:h-48 flex items-center justify-center">
                                        {/* Row 1 - Top Rings (Blue, Black, Red) */}
                                        <div
                                            className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 md:space-x-9">
                                            {/* Blue Ring */}
                                            <motion.div
                                                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-blue-500 shadow-lg bg-transparent cursor-pointer"
                                                initial={{scale: 0, opacity: 0, y: -50, rotate: -180}}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate: 0,
                                                    boxShadow: [
                                                        '0 0 0 0 rgba(59, 130, 246, 0.7)',
                                                        '0 0 0 10px rgba(59, 130, 246, 0)',
                                                        '0 0 0 0 rgba(59, 130, 246, 0)'
                                                    ]
                                                }}
                                                transition={{
                                                    rotate: {
                                                        delay: 0.2,
                                                        duration: 0.8,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    scale: {
                                                        delay: 0.2,
                                                        duration: 0.6,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    y: {delay: 0.2, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1]},
                                                    opacity: {delay: 0.2, duration: 0.6},
                                                    boxShadow: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: 'loop',
                                                        delay: 0.8
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -5,
                                                    transition: {duration: 0.2}
                                                }}
                                            />

                                            {/* Black Ring */}
                                            <motion.div
                                                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-black shadow-lg bg-transparent cursor-pointer"
                                                initial={{scale: 0, opacity: 0, y: -50, rotate: -180}}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate: 0,
                                                    boxShadow: [
                                                        '0 0 0 0 rgba(0, 0, 0, 0.5)',
                                                        '0 0 0 10px rgba(0, 0, 0, 0)',
                                                        '0 0 0 0 rgba(0, 0, 0, 0)'
                                                    ]
                                                }}
                                                transition={{
                                                    rotate: {
                                                        delay: 0.4,
                                                        duration: 0.8,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    scale: {
                                                        delay: 0.4,
                                                        duration: 0.6,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    y: {delay: 0.4, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1]},
                                                    opacity: {delay: 0.4, duration: 0.6},
                                                    boxShadow: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: 'loop',
                                                        delay: 1.0
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -5,
                                                    transition: {duration: 0.2}
                                                }}
                                            />

                                            {/* Red Ring */}
                                            <motion.div
                                                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-red-500 shadow-lg bg-transparent cursor-pointer"
                                                initial={{scale: 0, opacity: 0, y: -50, rotate: -180}}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate: 0,
                                                    boxShadow: [
                                                        '0 0 0 0 rgba(239, 68, 68, 0.7)',
                                                        '0 0 0 10px rgba(239, 68, 68, 0)',
                                                        '0 0 0 0 rgba(239, 68, 68, 0)'
                                                    ]
                                                }}
                                                transition={{
                                                    rotate: {
                                                        delay: 0.6,
                                                        duration: 0.8,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    scale: {
                                                        delay: 0.6,
                                                        duration: 0.6,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    y: {delay: 0.6, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1]},
                                                    opacity: {delay: 0.6, duration: 0.6},
                                                    boxShadow: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: 'loop',
                                                        delay: 1.2
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -5,
                                                    transition: {duration: 0.2}
                                                }}
                                            />
                                        </div>

                                        {/* Row 2 - Bottom Rings (Yellow, Green) */}
                                        <div
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4 md:space-x-9 mt-3 md:mt-5">
                                            {/* Yellow Ring */}
                                            <motion.div
                                                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-yellow-400 shadow-lg bg-transparent cursor-pointer"
                                                initial={{scale: 0, opacity: 0, y: 50, rotate: 180}}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate: 0,
                                                    boxShadow: [
                                                        '0 0 0 0 rgba(234, 179, 8, 0.7)',
                                                        '0 0 0 10px rgba(234, 179, 8, 0)',
                                                        '0 0 0 0 rgba(234, 179, 8, 0)'
                                                    ]
                                                }}
                                                transition={{
                                                    rotate: {
                                                        delay: 0.3,
                                                        duration: 0.8,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    scale: {
                                                        delay: 0.3,
                                                        duration: 0.6,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    y: {delay: 0.3, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1]},
                                                    opacity: {delay: 0.3, duration: 0.6},
                                                    boxShadow: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: 'loop',
                                                        delay: 1.4
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: 5,
                                                    transition: {duration: 0.2}
                                                }}
                                            />

                                            {/* Green Ring */}
                                            <motion.div
                                                className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-[4px] md:border-[5px] border-green-500 shadow-lg bg-transparent cursor-pointer"
                                                initial={{scale: 0, opacity: 0, y: 50, rotate: 180}}
                                                animate={{
                                                    scale: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                    rotate: 0,
                                                    boxShadow: [
                                                        '0 0 0 0 rgba(16, 185, 129, 0.7)',
                                                        '0 0 0 10px rgba(16, 185, 129, 0)',
                                                        '0 0 0 0 rgba(16, 185, 129, 0)'
                                                    ]
                                                }}
                                                transition={{
                                                    rotate: {
                                                        delay: 0.5,
                                                        duration: 0.8,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    scale: {
                                                        delay: 0.5,
                                                        duration: 0.6,
                                                        ease: [0.175, 0.885, 0.32, 1.275]
                                                    },
                                                    y: {delay: 0.5, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.1]},
                                                    opacity: {delay: 0.5, duration: 0.6},
                                                    boxShadow: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: 'loop',
                                                        delay: 1.6
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: 5,
                                                    transition: {duration: 0.2}
                                                }}
                                            />
                                        </div>

                                        {/* Connecting Animation */}
                                        <motion.div
                                            className="absolute inset-0"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{delay: 1.8, duration: 0.5}}
                                        >
                                            {[1, 2, 3, 4].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute bg-yellow-400 rounded-full"
                                                    initial={{scale: 0}}
                                                    animate={{
                                                        scale: [0, 1, 0],
                                                        opacity: [0, 0.8, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatDelay: 2,
                                                        delay: 1.8 + (i * 0.3),
                                                        ease: "easeInOut"
                                                    }}
                                                    style={{
                                                        width: 8,
                                                        height: 8,
                                                        left: '50%',
                                                        top: '50%',
                                                        x: -4,
                                                        y: -4,
                                                    }}
                                                />
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* U-16 Badge */}
                                <motion.div
                                    className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-yellow-400 bg-blue-900/95 backdrop-blur-sm flex items-center justify-center z-20 shadow-xl mt-6 md:mt-8"
                                    initial={{scale: 0, opacity: 0}}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        boxShadow: [
                                            '0 0 0 0 rgba(234, 179, 8, 0.4)',
                                            '0 0 0 10px rgba(234, 179, 8, 0)',
                                            '0 0 0 20px rgba(234, 179, 8, 0)'
                                        ]
                                    }}
                                    transition={{
                                        scale: {
                                            delay: 1.2,
                                            type: 'spring',
                                            stiffness: 150,
                                            damping: 12
                                        },
                                        opacity: {
                                            delay: 1.2,
                                            duration: 0.5
                                        },
                                        boxShadow: {
                                            delay: 1.5,
                                            duration: 4,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'easeOut'
                                        }
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-yellow-400 opacity-0"
                                        initial={{scale: 0.8}}
                                        animate={{
                                            scale: 1.2,
                                            opacity: [0, 0.1, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'easeInOut',
                                            delay: 1.5
                                        }}
                                    />

                                    <div className="relative z-10 text-center">
                                        <div
                                            className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold">U-16
                                        </div>
                                        <div className="text-white text-xs md:text-sm font-medium mt-1">
                                            {language === 'UA' ? 'Команда' : language === 'EN' ? 'Team' : 'Csapat'}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Become a Sponsor Benefits Section */}
                <motion.div 
                    className="relative py-20 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-amber-900/20"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                {language === 'UA' ? 'Переваги нам допомагати' :
                                 language === 'EN' ? 'Why Become Our Sponsor?' : 
                                 'Miért legyen szponzorunk?'}
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                {language === 'UA' ? 'Приєднуйтесь до нашої місії та отримайте унікальні можливості для вашого бренду' :
                                 language === 'EN' ? 'Join our mission and get unique opportunities for your brand' :
                                 'Csatlakozzon küldetésünkhöz, és kapjon egyedi lehetőségeket márkájának'}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Глобальне висвітлення' : 
                                           language === 'EN' ? 'Global Exposure' : 'Globális láthatóság',
                                    description: language === 'UA' ? 'Ваш бренд побачать по всьому світу через наші міжнародні змагання та медіа-покриття' :
                                                language === 'EN' ? 'Your brand will be seen worldwide through our international competitions and media coverage' :
                                                'Márkádat a világ minden táján látni fogják nemzetközi versenyeinken és médialefedettségünkön keresztül'
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Реклама на екіпіруванні' :
                                           language === 'EN' ? 'Kit Branding' : 'Felszerelésre nyomtatott reklám',
                                    description: language === 'UA' ? 'Логотип вашого бренду буде розміщено на екіпіруванні команди під час всіх матчів та заходів' :
                                                language === 'EN' ? 'Your brand logo will be featured on team kits during all matches and events' :
                                                'Márkajelzésed a csapat mezein lesz látható minden mérkőzésen és eseményen'
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Онлайн-присутність' :
                                           language === 'EN' ? 'Online Presence' : 'Online jelenlét',
                                    description: language === 'UA' ? 'Згадки та логотипи на наших соціальних мережах, вебсайті та цифрових матеріалах' :
                                                language === 'EN' ? 'Mentions and logos on our social media, website, and digital materials' :
                                                'Megemlítések és logók közösségi média felületeinken, weboldalunkon és digitális anyagainkon'
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Мережування' :
                                           language === 'EN' ? 'Networking' : 'Hálózatépítés',
                                    description: language === 'UA' ? 'Доступ до ексклюзивних заходів та можливість знайомства з іншими спонсорами та партнерами' :
                                                language === 'EN' ? 'Access to exclusive events and opportunities to connect with other sponsors and partners' :
                                                'Kizárólagos eseményekhez való hozzáférés és lehetőségek más szponzorokkal és partnerekkel való kapcsolatfelvételre'
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Підтримка молодіжного спорту' :
                                           language === 'EN' ? 'Youth Sports Support' : 'Ifjúsági sport támogatása',
                                    description: language === 'UA' ? 'Допоможіть нам надихати та підтримувати молодих спортсменів у здобутті їхніх мрій' :
                                                language === 'EN' ? 'Help us inspire and support young athletes in achieving their dreams' :
                                                'Segítsen nekünk megihletni és támogatni a fiatal sportolókat álmaik megvalósításában'
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    title: language === 'UA' ? 'Підтримка України' :
                                           language === 'EN' ? 'Supporting Ukraine' : 'Ukrajna támogatása',
                                    description: language === 'UA' ? 'Допоможіть нам представляти Україну на міжнародній арені та підтримувати позитивний імідж нашої країни' :
                                                language === 'EN' ? 'Help us represent Ukraine internationally and support the positive image of our country' :
                                                'Segítsen nekünk Ukrajnát nemzetközileg képviselni és országunk pozitív imázsát támogatni'
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: '0 10px 25px -5px rgba(234, 179, 8, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                    }}
                                >
                                    <div className="w-16 h-16 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-gray-300">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        {/* Club Benefits Promo Section */}
<motion.div
    className="mt-20 mb-20 relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl" />
    <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
    </div>

    <div className="relative z-10 text-center px-6 py-16 md:py-20">
        {/* Badge */}
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full px-6 py-2 mb-6"
        >
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-300 font-bold text-sm uppercase">
                {language === 'UA' ? 'Спеціальна пропозиція' :
                 language === 'EN' ? 'Special Offer' :
                 'Különleges Ajánlat'}
            </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
        >
            {language === 'UA' ? '🏆 Просто Клуб "100"' :
             language === 'EN' ? '🏆 Simply Club "100"' :
             '🏆 Egyszerűen Klub "100"'}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white font-semibold mb-4 max-w-4xl mx-auto"
        >
            {language === 'UA' ? 'Станьте частиною елітного клубу з ексклюзивними привілеями!' :
             language === 'EN' ? 'Become part of an elite club with exclusive privileges!' :
             'Legyen része egy elit klubnak exkluzív előnyökkel!'}
        </motion.p>

        {/* Description */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
            {language === 'UA' ?
                'VIP-доступ на матчі • Персональна форма • Ваше ім\'я в історії • Білети на Олімпіаду • і ще багато іншого!' :
             language === 'EN' ?
                'VIP match access • Personal uniform • Your name in history • Olympic tickets • and much more!' :
             'VIP meccs hozzáférés • Személyes egyenruha • Neved a történelemben • Olimpiai jegyek • és még sok más!'}
        </motion.p>

        {/* Benefits Icons */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto"
        >
            {[
                { icon: '🎖️', text: language === 'UA' ? 'Ексклюзивний статус' : language === 'EN' ? 'Exclusive status' : 'Exkluzív státusz' },
                { icon: '🏅', text: language === 'UA' ? 'Персональний мерч' : language === 'EN' ? 'Personal merch' : 'Személyes merchandising' },
                { icon: '🎯', text: language === 'UA' ? 'VIP-привілеї' : language === 'EN' ? 'VIP privileges' : 'VIP előnyök' },
                { icon: '✨', text: language === 'UA' ? 'Унікальні можливості' : language === 'EN' ? 'Unique opportunities' : 'Egyedi lehetőségek' }
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500/30">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                </div>
            ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            onClick={() => navigate('/benefits')}
            className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
        >
            <span className="relative z-10 flex items-center gap-2">
                {language === 'UA' ? 'Дізнатися більше про переваги' :
                 language === 'EN' ? 'Discover the Benefits' :
                 'Fedezze fel az előnyöket'}
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Additional Info */}
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-sm text-gray-400"
        >
            {language === 'UA' ? '⚡ Обмежена кількість місць - тільки 100 членів!' :
             language === 'EN' ? '⚡ Limited slots - only 100 members!' :
             '⚡ Korlátozott helyek - csak 100 tag!'}
        </motion.p>
    </div>
</motion.div>

                    </div>
                </motion.div>

                {/* Company Sponsors Section */}
                <div className="max-w-7xl mx-auto mt-10">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300"
                    >
                        {t.companySponsors}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {t.companySponsorsList.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
                            >
                                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                    <div className="h-40 flex items-center justify-center mb-4">
                                        <img
                                            src={sponsor.image}
                                            alt={sponsor.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-center text-yellow-300">
                                        {sponsor.name}
                                    </h3>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Personal Sponsors Section */}
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300 mt-24"
                    >
                        {t.personalSponsors}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {t.personalSponsorsList.map((sponsor, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30 flex flex-col items-center text-center"
                            >
                                <div
                                    className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-yellow-400/50">
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                                    {sponsor.name}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {sponsor.position}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Become a Sponsor Button */}
                    <motion.div
                        className="flex justify-center mt-16"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4, duration: 0.6}}
                    >
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold rounded-full text-lg md:text-xl hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center"
                        >
                            {t.becomeSponsor}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </button>
                    </motion.div>

                </div>

                {/* This is the target for the scroll */}
                <div ref={contactRef} id="contact" className="h-1"></div>
            </div>
        </div>
    );
};

export default Sponsors;
