import React from 'react';
import {motion} from 'framer-motion';
import {useLanguage} from './LanguageUtils';

const Club: React.FC = () => {
    const {language} = useLanguage();

    const fadeInUp = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6}
        }
    };

    const translations = {
        UA: {
            title: 'Новини',
            news: [
                {
                    id: 1,
                    date: '19 Серпня 2025',
                    title: 'Завершення НТЗ на Драгобраті',
                    description: 'Успішно завершилися навчально-тренувальні збори на гірському курорті Драгобрат. Команда провела інтенсивні тренування на висоті, що дозволило значно покращити фізичну підготовку гравців.'
                },
                {
                    id: 2,
                    date: '26 липня 2025',
                    title: 'Збірники взяли участь у НТЗ в Закарпатті',
                    description: 'Наші гравці взяли участь у спільних тренувальних зборах з командами Закарпаття. Було проведено низку товариських матчів та спільних тренувань.'
                },
                {
                    id: 3,
                    date: '10 Липня 2025',
                    title: 'Друге міжнародне НТЗ',
                    description: 'Команда відвідала міжнародний тренувальний табір, де мала можливість змагатися з командами з-за кордону та покращити свою майстерність.'
                },
                {
                    id: 4,
                    date: '16 Червня 2025',
                    title: 'Відбір найкращих кандидатів',
                    description: 'У м. Хмельницький пройшов відбірковий етап, де було відібрано найперспективніших гравців з усієї України для участі у збірній команді.'
                },
                {
                    id: 5,
                    date: '7 Квітня 2025',
                    title: 'Перша перемога в Турнірі',
                    description: 'Наша команда здобула першу перемогу на міжнародному турнірі в м. Гдиня, Польща. Це історична подія для нашого клубу!'
                }
            ]
        },
        EN: {
            title: 'News',
            news: [
                {
                    id: 1,
                    date: 'August 19, 2025',
                    title: 'Completion of Training Camp in Drahobrat',
                    description: 'Successfully completed training camp at the Drahobrat mountain resort. The team conducted intensive high-altitude training, significantly improving players\' physical condition.'
                },
                {
                    id: 2,
                    date: 'July 26, 2025',
                    title: 'Team Participated in Training Camp in Zakarpattia',
                    description: 'Our players participated in joint training sessions with Zakarpattia teams, including friendly matches and combined training.'
                },
                {
                    id: 3,
                    date: 'July 10, 2025',
                    title: 'Second International Training Camp',
                    description: 'The team attended an international training camp, competing with foreign teams and improving their skills.'
                },
                {
                    id: 4,
                    date: 'June 16, 2025',
                    title: 'Selection of the Best Candidates',
                    description: 'The selection stage in Khmelnytskyi identified the most promising players from across Ukraine for the national team.'
                },
                {
                    id: 5,
                    date: 'April 7, 2025',
                    title: 'First Tournament Victory',
                    description: 'Our team achieved its first victory at the international tournament in Gdynia, Poland. A historic event for our club!'
                }
            ]
        },
        HUN: {
            title: 'Hírek',
            news: [
                {
                    id: 1,
                    date: '2025. augusztus 19.',
                    title: 'Sikeres edzőtábor a Drahobrat hegyen',
                    description: 'Sikeresen befejeződött a kiemelkedő edzőtábor a Drahobrat hegyi üdülőhelyen, ahol a csapat intenzív magassági edzéseket folytatott.'
                },
                {
                    id: 2,
                    date: '2025. július 26.',
                    title: 'Edzőtábor részvétel Kárpátalján',
                    description: 'Játékosaink részt vettek közös edzéseken a Kárpátaljai csapatokkal, barátságos mérkőzéseket és közös edzéseket tartva.'
                },
                {
                    id: 3,
                    date: '2025. július 10.',
                    title: 'Második nemzetközi edzőtábor',
                    description: 'A csapat nemzetközi edzőtáborban vett részt, ahol külföldi csapatok ellen versenyezhetett.'
                },
                {
                    id: 4,
                    date: '2025. június 16.',
                    title: 'Legjobb játékosok kiválasztása',
                    description: 'Kijevben lezajlott a válogató, ahol Ukrajna legígéretesebb játékosait válogatták be a válogatottba.'
                },
                {
                    id: 5,
                    date: '2025. április 7.',
                    title: 'Első győzelem a versenyen',
                    description: 'Csapatunk megszerezte első győzelmét a lengyelországi Gdyniában megrendezett nemzetközi versenyen. Történelmi pillanat a klubunk számára!'
                }
            ]
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Enhanced Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/70 to-blue-900/90 z-10"></div>
                    
                    {/* Floating Animated Elements */}
                    <div className="absolute top-1/4 -left-20 w-40 h-40 bg-yellow-400/20 rounded-full filter blur-3xl animate-float"></div>
                    <div className="absolute top-1/3 -right-10 w-60 h-60 bg-blue-400/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-400/20 rounded-full filter blur-3xl animate-float animation-delay-3000"></div>
                    
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                
                {/* Hero Content */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20"
                        >
                            {language === 'UA' ? 'Останні новини' : language === 'EN' ? 'Latest Updates' : 'Legfrissebb hírek'}
                        </motion.div>
                        
                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                                {t.title}
                            </span>
                        </motion.h1>
                        
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8"
                        >
                            {language === 'UA' 
                                ? 'Дізнайтеся про останні події, досягнення та новини нашого клубу' 
                                : language === 'EN' 
                                    ? 'Stay updated with the latest events, achievements, and club news' 
                                    : 'Maradjon naprakész a legfrissebb eseményekről, eredményekről és klubhírekről'}
                        </motion.p>
                        
                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <a 
                                href="#news"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                {language === 'UA' ? 'Читати новини' : language === 'EN' ? 'Read News' : 'Hírek olvasása'}
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                    
                    {/* Scroll Indicator */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    >
                        <span className="text-sm text-blue-200 mb-2">
                            {language === 'UA' ? 'Прокрутіть вниз' : language === 'EN' ? 'Scroll down' : 'Görgessen le'}
                        </span>
                        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center p-1">
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="w-1 h-2 bg-blue-300 rounded-full"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* News Section */}
            <div id="news" className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-12">
                    {t.news.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInUp}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                        >
                            <div className="md:flex">
                                <div className="md:flex-shrink-0 md:w-1/3">
                                    <div className="h-64 md:h-full overflow-hidden">
                                        <img
                                            src={`/news${index + 1}.png`}
                                            alt={item.title}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/rugby_back.jpg';
                                            }}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="text-yellow-400 text-sm font-medium mb-2">
                                        {item.date}
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full">
                <div
                    className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 text-white py-12 px-4 sm:px-6 lg:px-8 relative w-full overflow-hidden">
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
                                {language === 'UA' ? 'Залишились питання?' : language === 'EN' ? 'Have questions?' : 'Kérdése van?'}
                            </h2>
                            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                {language === 'UA'
                                    ? 'Зв\'яжіться з нами зручним для вас способом!'
                                    : language === 'EN'
                                        ? 'Contact us in any convenient way!'
                                        : 'Lépjen velünk kapcsolatba bármilyen kényelmes módon!'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {/* Phone */}
                            <motion.a
                                whileHover={{y: -5}}
                                href="tel:+48501820396"
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
                                <span className="text-blue-100">+48 501 820 396</span>
                            </motion.a>

                            {/* Email */}
                            <motion.a
                                whileHover={{y: -5}}
                                href="mailto:rugby.support@gmail.com"
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
                                <span className="text-blue-100 break-all text-sm">rugby.support@gmail.com</span>
                            </motion.a>

                            {/* Telegram */}
                            <motion.a
                                whileHover={{y: -5}}
                                href="https://t.me/ivanovich112"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group"
                            >
                                <div
                                    className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold text-yellow-300 mb-2">Telegram</span>
                                <span className="text-blue-100">@ivanovich112</span>
                            </motion.a>
                        </div>
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
                                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                                <img
                                                    src={`/spin-${num}.png`}
                                                    alt={`Sponsor ${num}`}
                                                    className="h-12 w-auto max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={`dup-${num}`} className="inline-flex items-center justify-center px-6">
                                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
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

export default Club;