import React from 'react';
import {motion} from 'framer-motion';
import {useLanguage} from './LanguageUtils';
import {useNavigate} from 'react-router-dom';

const News: React.FC = () => {
    const {language} = useLanguage();
    const navigate = useNavigate();

    const handleNewsClick = (id: number) => {
        navigate(`/contact`);
    };

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
                    date: '7 Квітня 2025',
                    title: 'Перша перемога в Турнірі',
                    description: 'Наша команда здобула першу перемогу на міжнародному турнірі в м. Гдиня, Польща. Це історична подія для нашої збірної!',
                    expense: '10500'
                },
                {
                    id: 2,
                    date: '16 Червня 2025',
                    title: 'Відбір найкращих кандидатів',
                    description: 'У м. Хмельницький пройшов відбірковий етап, де було відібрано найперспективніших гравців з усієї України для участі у збірній команді.',
                    expense: '300'
                },
                {
                    id: 3,
                    date: '10 Липня 2025',
                    title: 'Друге міжнародне НТЗ',
                    description: 'Команда відвідала міжнародний тренувальний табір, де мала можливість змагатися з командами з-за кордону та покращити свою майстерність.',
                    expense: '8000'
                },
                {
                    id: 4,
                    date: '26 липня 2025',
                    title: 'Збірники взяли участь у НТЗ в Закарпатті',
                    description: 'Наші гравці взяли участь у спільних тренувальних зборах з командами Закарпаття. Було проведено низку товариських матчів та спільних тренувань.',
                    expense: '1500'
                },
                {
                    id: 5,
                    date: '19 Серпня 2025',
                    title: 'Завершення НТЗ на Драгобраті',
                    description: 'Успішно завершилися навчально-тренувальні збори на гірському курорті Драгобрат. Команда провела інтенсивні тренування на висоті, що дозволило значно покращити фізичну підготовку гравців.',
                    expense: '5800'
                },
                {
                    id: 6,
                    date: '13 Жовтня 2025',
                    title: 'Відбірковий етап у Хмельницькому',
                    description: 'У Хмельницькому відбувся відбірковий етап для формування юнацької збірної України з регбі-7 серед гравців 2010-2011 р.н. Під час одноденного турніру було виявлено найперспективніших гравців з різних регіонів України через серію ігрових тестів та оцінювання технічних показників.',
                    expense: '300',
                    image: '/news1.webp'
                },

                {
                    id: 7,
                    date: '8 Листопада 2025',
                    title: 'Кандидати в збірну України з регбі-7 U16 завершили чемпіонат України з регбі-15',
                    description: 'Команда Хмельницького посіла 1 місце на чемпіонаті України з регбі-15 серед юнацьких команд. Збірна Київської області виборола срібні нагороди, а команда зі Львова замкнула трійку призерів. Цей турнір став важливим етапом у підготовці до міжнародних змагань.',
                    expense: '300',
                    image: '/news7.webp'
                }

            ]
        },
        EN: {
            title: 'News',
            news: [
    {
        id: 1,
        date: 'April 7, 2025',
        title: 'First Tournament Victory',
        description: 'Our team achieved its first victory at the international tournament in Gdynia, Poland. This is a historic event for our national team!',
        expense: '10500'
    },
    {
        id: 2,
        date: 'June 16, 2025',
        title: 'Selection of the Best Candidates',
        description: 'A selection stage was held in Khmelnytskyi where the most promising players from all over Ukraine were selected to join the national team.',
        expense: '300'
    },
    {
        id: 3,
        date: 'July 10, 2025',
        title: 'Second International Training Camp',
        description: 'The team attended an international training camp where they had the opportunity to compete with teams from abroad and improve their skills.',
        expense: '8000'
    },
    {
        id: 4,
        date: 'July 26, 2025',
        title: 'Team Participated in Training Camp in Zakarpattia',
        description: 'Our players participated in joint training sessions with Zakarpattia teams, including friendly matches and combined training sessions.',
        expense: '1500'
    },
    {
        id: 5,
        date: 'August 19, 2025',
        title: 'Completion of Training Camp in Drahobrat',
        description: 'The training camp at the Drahobrat mountain resort was successfully completed. The team conducted intensive high-altitude training, which significantly improved the players\' physical condition.',
        expense: '5800'
    },
    {
        id: 6,
        date: 'October 13, 2025',
        title: 'Selection Stage in Khmelnytskyi',
        description: 'A selection stage was held in Khmelnytskyi to form the Ukrainian U16 rugby-7 national team for players born in 2010-2011. During the one-day tournament, the most promising players from different regions of Ukraine were identified through a series of game tests and technical assessments.',
        expense: '300',
        image: '/news1.webp'
    },
    {
        id: 7,
        date: 'November 8, 2025',
        title: 'Candidates for the Ukrainian Rugby-7 U16 Team Completed the Ukrainian Rugby-15 Championship',
        description: 'The Khmelnytskyi team took 1st place at the Ukrainian Rugby-15 Championship among youth teams. The Kyiv region team won silver medals, and the Lviv team finished third. This tournament was an important stage in preparation for international competitions.',
        expense: '300',
        image: '/news7.webp'
    }
]
        },
        HUN: {
            title: 'Hírek',
            news: [
    {
        id: 1,
        date: '2025. április 7.',
        title: 'Első győzelem a versenyen',
        description: 'Csapatunk megszerezte első győzelmét a lengyelországi Gdyniában megrendezett nemzetközi versenyen. Történelmi pillanat a válogatottunk számára!',
        expense: '10500'
    },
    {
        id: 2,
        date: '2025. június 16.',
        title: 'A legjobb játékosok kiválasztása',
        description: 'Kijevben lezajlott a válogató, ahol Ukrajna legígéretesebb játékosait válogatták be a válogatottba.',
        expense: '300'
    },
    {
        id: 3,
        date: '2025. július 10.',
        title: 'Második nemzetközi edzőtábor',
        description: 'A csapat nemzetközi edzőtáborban vett részt, ahol külföldi csapatok ellen versenyezhettek, és fejleszthették tudásukat.',
        expense: '8000'
    },
    {
        id: 4,
        date: '2025. július 26.',
        title: 'Edzőtábor részvétel Kárpátalján',
        description: 'Játékosaink részt vettek közös edzéseken a Kárpátaljai csapatokkal, barátságos mérkőzéseket és közös edzéseket tartva.',
        expense: '1500'
    },
    {
        id: 5,
        date: '2025. augusztus 19.',
        title: 'Sikeres edzőtábor a Drahobrat hegyen',
        description: 'Sikeresen befejeződött a kiemelkedő edzőtábor a Drahobrat hegyi üdülőhelyen, ahol a csapat intenzív magassági edzéseket folytatott.',
        expense: '5800'
    },
    {
        id: 6,
        date: '2025. október 13.',
        title: 'Válogatás Hmelnickijben',
        description: 'Hmelnickijben megtartották a válogatási szakaszt az ukrán U16-os rögbi-7 válogatott összeállítására a 2010-2011-ben született játékosok számára. Az egynapos torna során azonosították Ukrajna különböző régióiból a legtehetségesebb játékosokat játéktesztek és technikai értékelések révén.',
        expense: '300',
        image: '/news1.webp'
    },
    {
        id: 7,
        date: '2025. november 8.',
        title: 'Az ukrán U16-os rögbi-7 válogatott jelöltjei befejezték az ukrán rögbi-15 bajnokságot',
        description: 'A Hmelnickij csapat az első helyen végzett az ukrán U16-os rögbi-15 bajnokságon. A Kijevi terület csapata ezüstérmet szerzett, a Lvivi csapat pedig a harmadik helyen végzett. Ez a verseny fontos lépés volt a nemzetközi versenyekre való felkészülésben.',
        expense: '300',
        image: '/news7.webp'
    }
]
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Enhanced Hero Section */}
            <div
                className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Gradient Mesh Background */}
                    <div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/80 to-blue-900/30"></div>

                    {/* Animated Particles */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/5"
                            initial={{
                                scale: Math.random() * 0.5 + 0.5,
                                opacity: 0,
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: `${Math.random() * 400 + 100}px`,
                                height: `${Math.random() * 400 + 100}px`,
                            }}
                        />
                    ))}

                    {/* Animated Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
                        }}
                    ></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-6xl mx-auto w-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {opacity: 0},
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                variants={{
                                    hidden: {y: 20, opacity: 0},
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 10
                                        }
                                    }
                                }}
                                className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold tracking-wide text-yellow-400 uppercase bg-yellow-400/10 rounded-full border border-yellow-400/20 backdrop-blur-sm"
                            >
                    <span className="relative flex h-3 w-3 mr-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                    </span>
                                {language === 'UA' ? 'Останні новини' : language === 'EN' ? 'Latest Updates' : 'Legfrissebb hírek'}
                            </motion.div>

                            {/* Main Title with Animated Gradient */}
                            <motion.h1
                                variants={{
                                    hidden: {y: 30, opacity: 0},
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12
                                        }
                                    }
                                }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-none"
                            >
                    <span className="relative">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-300% animate-gradient">
                            {t.title}
                        </span>
                        <span
                            className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400/0 via-yellow-400/80 to-yellow-400/0 rounded-full"></span>
                    </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                variants={{
                                    hidden: {y: 20, opacity: 0},
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.2,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12
                                        }
                                    }
                                }}
                                className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-12 leading-relaxed"
                            >
                                {language === 'UA'
                                    ? 'Дізнайтеся про останні події, досягнення та новини нашої команди'
                                    : language === 'EN'
                                        ? 'Stay updated with the latest events, achievements, and team news'
                                        : 'Maradjon naprakész a legfrissebb eseményekről, eredményekről és csapathírekről'}
                            </motion.p>

                            {/* CTA Button with Hover Effect */}
                            <motion.div
                                variants={{
                                    hidden: {y: 20, opacity: 0},
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.3,
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12
                                        }
                                    }
                                }}
                                className="mt-2"
                            >
                                <a
                                    href="#news"
                                    className="relative inline-flex items-center px-6 py-2.5 text-base font-medium text-blue-100 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-300 hover:border-yellow-400/30 hover:text-yellow-300"
                                >
                                    {language === 'UA' ? 'Читати новини' : language === 'EN' ? 'Read News' : 'Hírek olvasása'}
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Animated Scroll Indicator */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{
                                opacity: [0, 1, 0],
                                y: [20, 0, -10]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                        >
                <span className="text-sm font-medium text-blue-200/80 mb-3">
                    {language === 'UA' ? 'Прокрутіть вниз' : language === 'EN' ? 'Scroll down' : 'Görgessen le'}
                </span>
                            <div className="w-10 h-16 border-2 border-blue-300/50 rounded-full flex justify-center p-1">
                                <motion.div
                                    animate={{y: [0, 20, 0]}}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-1 h-4 bg-gradient-to-b from-yellow-300 to-amber-400 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div id="news" className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-12">
                    {t.news
                        .sort((a, b) => b.id - a.id) // This will sort in descending order by ID
                        .map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-100px"}}
                                variants={fadeInUp}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
                                onClick={() => handleNewsClick(item.id)}
                            >
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0 md:w-1/3">
                                        <div className="h-64 md:h-full overflow-hidden">
                                            <img
                                                src={`/news${item.id}.webp`}
                                                alt={item.title}
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = '/backmaj.webp';
                                                }}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                            <div className="text-yellow-400 text-sm font-medium mb-2">
                                                    {item.date}
                                                </div>
                                                <h2 className="text-2xl font-bold text-white mb-3">
                                                    {item.title}
                                                </h2>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Modern Expense Badge */}
                                            <div className="ml-4 flex-shrink-0">
                                                <motion.div
                                                    initial={{opacity: 0, scale: 0.8}}
                                                    whileInView={{opacity: 1, scale: 1}}
                                                    viewport={{once: true}}
                                                    transition={{duration: 0.5, delay: 0.2}}
                                                    className="relative group"
                                                >
                                                    <div
                                                        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div
                                                        className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-xl px-3 py-2 hover:border-emerald-400/40 transition-all duration-300">
                                                        <div className="flex items-center space-x-2">
                                                            <div className="text-center">
                                                                <div
                                                                    className="text-xs text-emerald-300 font-medium leading-tight">
                                                                    {language === 'UA' ? 'БУЛО ВИТРАЧЕНО' : language === 'EN' ? 'WAS SPENT' : 'ELKÖLTÖTTEK'}
                                                                </div>
                                                                <div
                                                                    className="text-lg font-bold text-emerald-400 leading-tight">
                                                                    {item.expense}€
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
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
                                href="shashero10@gmail.com"
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
                                <span className="text-blue-100 break-all text-sm">shashero10@gmail.com</span>
                            </motion.a>

                            {/* Telegram */}
                            <motion.a
                                whileHover={{y: -5}}
                                href="https://t.me/Shashero"
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
                                <span className="text-blue-100">@Shashero</span>
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
                                            <div
                                                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-24 flex items-center">
                                                <img
                                                    src={`/spin-${num}.png`}
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
                                                    src={`/spin-${num}.png`}
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
        </div>
    );
};

export default News;
