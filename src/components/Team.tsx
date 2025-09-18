import {useLanguage} from './LanguageUtils';
import {motion} from 'framer-motion';


const Team = () => {
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
            title: 'Команда',
            mainCoaches: 'Головні тренери',
            doctors: 'Лікарі команди',
            players: 'Гравці',
            foreignCoaches: 'Іноземні фахівці',
            viewProfile: 'Переглянути профіль',
            supportTeam: 'Підтримати команду',
            contactTitle: 'ГОТОВІ ПІДТРИМАТИ РЕГБІ?',
            contactText: 'МОЖЕТЕ ЗВ\'ЯЗАТИСЬ БУДЬ-ЯКИМ ЗРУЧНИМ ДЛЯ ВАС СПОСОБОМ!',
            contactPhone: '+48 501 820 396',
            contactEmail: 'rugby.support@gmail.com',
            contactTelegram: 't.me/ivanovich112'
        },
        EN: {
            title: 'Team',
            mainCoaches: 'Head Coaches',
            doctors: 'Team Doctors',
            players: 'Players',
            foreignCoaches: 'Foreign Coaches',
            viewProfile: 'View Profile',
            supportTeam: 'Support Team',
            contactTitle: 'READY TO SUPPORT RUGBY?',
            contactText: 'YOU CAN GET IN TOUCH ANY CONVENIENT WAY!',
            contactPhone: '+48 501 820 396',
            contactEmail: 'rugby.support@gmail.com',
            contactTelegram: 't.me/ivanovich112'
        },
        HUN: {
            title: 'Csapat',
            mainCoaches: 'Vezetőedzők',
            doctors: 'Csapatorvosok',
            players: 'Játékosok',
            foreignCoaches: 'Külföldi edzők',
            viewProfile: 'Profil megtekintése',
            supportTeam: 'Csapat támogatása',
            contactTitle: 'KÉSZ VAGY TÁMOGATNI A RÖGBIT?',
            contactText: 'BÁRMILYEN KÉNYELMES MÓDON FELVEHETED VELÜNK A KAPCSOLATOT!',
            contactPhone: '+48 501 820 396',
            contactEmail: 'rugby.support@gmail.com',
            contactTelegram: 't.me/ivanovich112'
        }
    };

    const t = translations[language];

    const renderTeamSection = (title: string, items: Array<{ id: string, name: string, role?: string }>) => (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={fadeInUp}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => {
                    const imagePath = `/${item.id}.jpg`;
                    const fallbackImagePath = `/${item.id}.png`;

                    return (
                        <motion.div
                            key={item.id}
                            whileHover={{y: -5}}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                        >
                            <div className="h-75 overflow-hidden">
                                <img
                                    src={imagePath}
                                    loading="lazy"
                                    alt={item.name}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (target.src !== fallbackImagePath) {
                                            target.src = fallbackImagePath;
                                        } else {
                                            target.src = '/rugby_back.jpg';
                                            target.onerror = null;
                                        }
                                    }}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                {item.role && <p className="text-gray-300 text-sm mt-1">{item.role}</p>}
                                {item.gg && <p className="text-gray-300 text-sm mt-1">{item.gg}</p>}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Hero Section with Background Image */}
            <div className="relative h-[500px] md:h-[80vh] w-full overflow-hidden">
                <img
                    src="/backteam.png"
                    alt="Rugby team"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-end pb-8 text-center">
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-4xl md:text-6xl font-bold mb-4 px-4 text-yellow-400"
                    >
                        {t.title}
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Main Coaches Section */}
                {renderTeamSection(t.mainCoaches, [
                    {
                        id: 'coach1',
                        name: 'Антон Шашеро',
                        role: 'Головний тренер',
                        gg: 'Тренер збірної U-16, 10 років тренерського досвіду, учасник чемпіонатів Європи. Дитячий тренер різних вікових категорій та гравець РК "Арка Гдиня", основний гравець збірної України, чемпіон Європи та України, віцечемпіон Грузії, чемпіон Польщі.'
                    },
                    {
                        id: 'coach2',
                        name: 'Максим Дуля',
                        role: 'Тренер з фізпідготовки',
                        gg: 'Тренер збірної U-16, спеціаліст із фізичної підготовки, працює з юнацькими командами 5 років. Гравець РК "Поділля". Тренер дитячої та чоловічої команд РК “Закарпатські Шаркані”, основний гравець збірної України, чемпіон Європи та України, тренер національної збірної України з пляжного регбі'
                    },
                    {
                        id: 'coach3',
                        name: 'Олександр Мігунов',
                        role: 'Тактичний аналітик',
                        gg: 'Тренер збірної U-18, тактичний аналітик збірної U-16, понад 7 років досвіду роботи з юнацькими командами, спеціаліст із ігрових стратегій, більше 20 вихованців - майстри спорту України з регбі. Найкращий гравець Чемпіонату Європи 2007 року.'
                    },
                    {
                        id: 'trener4',
                        name: 'Марцел Цитряк',
                        role: 'Менеджер',
                        gg: 'Менеджер юнацької збірної України U-16 та збірної України з пляжного регбі. Відповідає за організацію навчально-тренувальних зборів, координацію логістики, комунікацію з федераціями та партнерами. Має досвід роботи з участю збірних у чемпіонатах Європи. '
                    }
                ])}

                {/* Doctors Section */}
                {renderTeamSection(t.doctors, [
                    {id: 'doc1', name: 'Богдан Дідик', role: 'Головний лікар'},
                    {id: 'doc2', name: 'Олександр Ткаченко', role: 'Лікар-реабілітолог'},
                    {id: 'doc3', name: 'Валерія Павлюк', role: 'Масажист'}
                ])}

                {/* Players Section */}
                {renderTeamSection(t.players,
                    [
                        {id: 'player1', name: 'Денбовецький Микола'},
                        {id: 'player2', name: 'Ерік Тіппан'},
                        {id: 'player3', name: 'Володимир Рец'},
                        {id: 'player4', name: 'Данніл Казнін'},
                        {id: 'player5', name: 'Данніл Казнін'},
                        {id: 'player6', name: 'Тарасюк Мирослав'},
                        {id: 'player7', name: 'Богдан Пікульский'},
                        {id: 'player8', name: 'Богдан Пікульський'},
                        {id: 'player9', name: 'Богдан Дідик'},
                        {id: 'player10', name: 'Роман Присяжнюк'},
                        {id: 'player11', name: 'Владислав Кошелюк'},
                        {id: 'player12', name: 'Данніл'},
                        {id: 'player13', name: 'Данііл'},
                        {id: 'player14', name: 'Богдан Дідик'},
                    ]
                )}

                {/* Foreign Coaches Section */}
                {renderTeamSection(t.foreignCoaches, [
                    {
                        id: 'trenout2',
                        name: 'Алан Бантінг',
                        role: 'Головний тренер жіночої збірної Нової Зеландії, раніше очолював Black Ferns Sevens. Переможець міжнародних турнірів та Супер Регбі Аупікі з Chiefs Manawa. Відомий як лідер і новатор у розвитку жіночого регбі.'
                    },
                    {
                        id: 'trenout3',
                        name: 'Сер Грехем Генрі',
                        role: 'Легендарний тренер збірної «All Blacks», з якою здобув Кубок світу-2011. Очолював команду з 2004 по 2011 рік, багаторазовий переможець Tri Nations та Кубка Бледіслоу. Кавалер ордена, член Зали слави World Rugby.'
                    }
                ])}

                {/* Contact & Sponsors Section */}
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
        </div>
    );
};

export default Team;