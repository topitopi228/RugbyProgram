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
            contactEmail: 'shashero10@gmail.com',
            contactTelegram: 't.me/Shashero',
            headCoach: 'Головний тренер',
            fitnessCoach: 'Тренер з фізпідготовки',
            tacticalAnalyst: 'Тактичний аналітик',
            teamManager: 'Менеджер команд',
            headDoctor: 'Головний лікар',
            sportsDoctor: 'Лікар ігрових видів спорту',
            rehabilitationSpecialist: 'Реабілітолог',
            coach1: 'Антон Шашеро',
            coach2: 'Максим Дуля',
            coach3: 'Олександр Мігунов',
            coach4: 'Марцел Цитряк',
            doctor1: 'Богдан Дідик',
            doctor2: 'Олександр Ткаченко',
            doctor3: 'Валерія Павлюк',
            coach1Desc: 'Тренер збірної U-16, 10 років тренерського досвіду, учасник чемпіонатів Європи. Дитячий тренер різних вікових категорій та гравець РК "Арка Гдиня", основний гравець збірної України, чемпіон  України, віцечемпіон Грузії, бронзовий призер Польщі.',
            coach2Desc: 'Тренер збірної U-16, спеціаліст із фізичної підготовки, працює з юнацькими командами 5 років. Гравець РК "Поділля". Тренер дитячої та чоловічої команд РК "Закарпатські Шаркані", основний гравець збірної України, чемпіон Європи та України, тренер національної збірної України з пляжного регбі',
            coach3Desc: 'Тренер збірної U-18, тактичний аналітик збірної U-16, понад 17 років досвіду роботи з юнацькими командами, спеціаліст із ігрових стратегій,  екс гравець збірної України та РК "Поділля"',
            coach4Desc: 'Менеджер юнацької збірної України U-16 та збірної України з пляжного регбі. Відповідає за організацію навчально-тренувальних зборів, координацію логістики, комунікацію з федераціями та партнерами. Має досвід роботи з участю збірних у чемпіонатах Європи. Володіє 4 мовами, зокрема українською, угорською та англійською, що дозволяє йому ефективно виконувати функції перекладача.',
            doctor1Desc: 'Лікар жіночої національної збірної з регбі-7 та чоловічої національної збірної України з регбі-15. Відповідає за медичне забезпечення та реабілітацію спортсменів національних команд. Має багаторічний досвід роботи з елітними спортсменами, учасник міжнародних змагань та тренувальних зборів.',
            doctor2Desc: 'Головний лікар Західноукраїнської обласної лікарні з ігрових видів спорту (баскетбол, гандбол, регбі). Має багаторічний досвід роботи з професійними спортсменами, колишній гравець регбі.',
            doctor3Desc: 'Досвідчений реабілітолог з понад 6-річним стажем роботи з дітьми. Колишня гравчиня регбі, що дозволяє їй краще розуміти потреби спортсменів. Спеціалізується на відновленні після спортивних травм.',
            captain: 'Капітан команди',
            viceCaptain: 'Віце-капітан'
        },
        EN: {
            title: 'Team',
            mainCoaches: 'Head Coaches',
            doctors: 'Team Doctors',
            players: 'Players',
            foreignCoaches: 'Foreign Specialists',
            viewProfile: 'View Profile',
            supportTeam: 'Support Team',
            contactTitle: 'READY TO SUPPORT RUGBY?',
            contactText: 'YOU CAN GET IN TOUCH ANY CONVENIENT WAY!',
            contactPhone: '+48 501 820 396',
            contactEmail: 'rugby.support@gmail.com',
            contactTelegram: 't.me/ivanovich112',
            headCoach: 'Head Coach',
            fitnessCoach: 'Fitness Coach',
            tacticalAnalyst: 'Tactical Analyst',
            teamManager: 'Team Manager',
            headDoctor: 'Head Doctor',
            sportsDoctor: 'Team Sports Doctor',
            rehabilitationSpecialist: 'Rehabilitation Specialist',
            coach1: 'Anton Shashero',
            coach2: 'Maksym Dulya',
            coach3: 'Oleksandr Mighunov',
            coach4: 'Marcel Tsytsiak',
            doctor1: 'Bohdan Didyk',
            doctor2: 'Oleksandr Tkachenko',
            doctor3: 'Valeriia Pavliuk',
            coach1Desc: 'U-16 National Team Coach, 10 years of coaching experience, participant in European Championships. Youth coach for various age categories and player of RC "Arka Gdynia", main player of the Ukrainian National Team, Champion of Ukraine, Vice-Champion of Georgia, bronze medalist of Poland.',
            coach2Desc: 'U-16 National Team Coach, fitness specialist, working with youth teams for 5 years. Player of RC "Podillya". Coach of youth and men\'s teams of RC "Zakarpattia Sharkany", main player of the Ukrainian National Team, European and Ukrainian Champion, coach of the Ukrainian National Beach Rugby Team.',
            coach3Desc: 'U-18 National Team Coach, tactical analyst for U-16 National Team, over 17 years of experience working with youth teams, specialist in game strategies, former player of the Ukrainian National Team and RC "Podillya".',
            coach4Desc: 'Manager of the Ukrainian U-16 Youth National Team and the Ukrainian Beach Rugby National Team. Responsible for organizing training camps, logistics coordination, communication with federations and partners. Has experience working with national teams in European Championships. Speaks 4 languages, including Ukrainian, Hungarian, and English, which allows him to effectively perform translation functions.',
            doctor1Desc: 'Doctor of the Ukrainian Women\'s National Rugby 7s Team and Men\'s National Rugby 15s Team. Responsible for medical support and rehabilitation of national team athletes. Has years of experience working with elite athletes, participant in international competitions and training camps.',
            doctor2Desc: 'Head Doctor of the Western Ukrainian Regional Hospital for Team Sports (basketball, handball, rugby). Has many years of experience working with professional athletes, former rugby player.',
            doctor3Desc: 'Experienced rehabilitation specialist with over 6 years of experience working with children. Former rugby player, which allows her to better understand the needs of athletes. Specializes in sports injury recovery.',
            captain: 'Team Captain',
            viceCaptain: 'Vice-Captain'
        },
        HUN: {
            title: 'Csapat',
            mainCoaches: 'Vezetőedzők',
            doctors: 'Csapatorvosok',
            players: 'Játékosok',
            foreignCoaches: 'Külföldi szakemberek',
            viewProfile: 'Profil megtekintése',
            supportTeam: 'Csapat támogatása',
            contactTitle: 'KÉSZ VAGY TÁMOGATNI A RÖGBIT?',
            contactText: 'BÁRMILYEN KÉNYELMES MÓDON FELVEHETED VELÜNK A KAPCSOLATOT!',
            contactPhone: '+48 501 820 396',
            contactEmail: 'rugby.support@gmail.com',
            contactTelegram: 't.me/ivanovich112',
            headCoach: 'Vezetőedző',
            fitnessCoach: 'Erőnléti edző',
            tacticalAnalyst: 'Taktikai elemző',
            teamManager: 'Csapatmenedzser',
            headDoctor: 'Főorvos',
            sportsDoctor: 'Csapatsport orvos',
            rehabilitationSpecialist: 'Rehabilitációs szakember',
            coach1: 'Anton Sasero',
            coach2: 'Makszim Dulja',
            coach3: 'Olekszandr Mighunov',
            coach4: 'Marcel Ciciak',
            doctor1: 'Bohdan Didik',
            doctor2: 'Olekszandr Tkacsenko',
            doctor3: 'Valerija Pavljuk',
            coach1Desc: 'U16-os válogatott edző, 10 év edzői tapasztalattal, résztvevője európai bajnokságoknak. Ifjúsági edző különböző korosztályokban, valamint játékos az RC "Arka Gdynia" csapatában, az ukrán válogatott alapembere, Ukrajna bajnoka, Grúzia második helyezettje, Lengyelország bronzérmese.',
            coach2Desc: 'U16-os válogatott edző, erőnléti szakember, 5 éve dolgozik ifjúsági csapatokkal. Az RC "Podillya" játékosa. Az RC "Zakarpattia Sharkany" ifjúsági és felnőtt csapatainak edzője, az ukrán válogatott alapembere, Európa- és ukrán bajnok, az ukrán strandrögbiválogatott edzője.',
            coach3Desc: 'U18-as válogatott edző, az U16-os válogatott taktikai elemzője, több mint 17 év tapasztalattal ifjúsági csapatoknál, játékstratégiák specialistája, az ukrán válogatott és az RC "Podillya" korábbi játékosa.',
            coach4Desc: 'Az ukrán U16-os ifjúsági válogatott és az ukrán strandrögbiválogatott menedzsere. Felelős az edzőtáborok szervezéséért, a logisztikai koordinációért, a kommunikációért a szövetségekkel és partnerekkel. Tapasztalattal rendelkezik a válogatottak európai bajnokságokon való részvételében. Négy nyelven beszél, köztük ukránul, magyarul és angolul, ami lehetővé teszi számára a fordítói feladatok hatékony ellátását.',
            doctor1Desc: 'Az ukrán női rögbi 7-es és férfi rögbi 15-ös válogatott orvosa. Felelős a válogatott sportolók egészségügyi ellátásáért és rehabilitációjáért. Többéves tapasztalattal rendelkezik elit sportolókkal való munkában, résztvevője nemzetközi versenyeknek és edzőtáboroknak.',
            doctor2Desc: 'A Nyugat-ukrajnai Regionális Kórház csapatsport osztályának főorvosa (kosárlabda, kézilabda, rögbi). Többéves tapasztalattal rendelkezik professzionális sportolókkal való munkában, korábbi rögbijátékos.',
            doctor3Desc: 'Több mint 6 éves tapasztalattal rendelkező rehabilitációs szakember, aki gyerekekkel dolgozik. Korábbi rögbijátékos, ami segít neki jobban megérteni a sportolók igényeit. A sportolói sérülések utáni rehabilitáció szakértője.',
            captain: 'Csapatkapitány',
            viceCaptain: 'Alkapitány'
        }
    };

    const t = translations[language];

    const renderTeamSection = (title: string, items: Array<{
        id: string,
        name: string,
        role?: string,
        gg?: string,
        description?: string,
        isCaptain?: boolean,
        isViceCaptain?: boolean
    }>) => (
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
                    const imagePath = `/${item.id}.webp`;
                    const fallbackImagePath = `/${item.id}.webp`;

                    return (
                        <motion.div
                            key={item.id}
                            whileHover={{y: -5}}
                            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                        >
                            <div className="relative h-75 overflow-hidden">
                                <img
                                    src={imagePath}
                                    alt={item.name}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (target.src !== fallbackImagePath) {
                                            target.src = fallbackImagePath;
                                        } else {
                                            target.src = '/rugby_back.webp';
                                            target.onerror = null;
                                        }
                                    }}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                                />
                                {item.isCaptain && (
                                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                                        {t.captain}
                                    </div>
                                )}
                                {item.isViceCaptain && (
                                    <div className="absolute top-2 right-2 bg-gray-300 text-black text-xs font-bold px-2 py-1 rounded">
                                        {t.viceCaptain}
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                {item.role && <p className="text-gray-300 text-sm mt-1">{item.role}</p>}
                                {item.description && <p className="text-gray-300 text-sm mt-1">{item.description}</p>}
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
                    src="/backteam.webp"
                    alt="Rugby team"
                    fetchPriority="high"
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
                        name: t.coach1,
                        role: t.headCoach,
                        gg: t.coach1Desc
                    },
                    {
                        id: 'coach2',
                        name: t.coach2,
                        role: t.fitnessCoach,
                        gg: t.coach2Desc
                    },
                    {
                        id: 'coach3',
                        name: t.coach3,
                        role: t.tacticalAnalyst,
                        gg: t.coach3Desc
                    },
                    {
                        id: 'trener4',
                        name: t.coach4,
                        role: t.teamManager,
                        gg: t.coach4Desc
                    }
                ])}

                {/* Doctors Section */}
                {renderTeamSection(t.doctors, [
                    {
                        id: 'doc1',
                        name: t.doctor1,
                        role: t.headDoctor,
                        gg: t.doctor1Desc
                    },
                    {
                        id: 'doc2',
                        name: t.doctor2,
                        role: t.sportsDoctor,
                        gg: t.doctor2Desc
                    },
                    {
                        id: 'doc3',
                        name: t.doctor3,
                        role: t.rehabilitationSpecialist,
                        gg: t.doctor3Desc
                    }
                ])}

                {/* Players Section */}
                {renderTeamSection(t.players,
                    [
                        {id: 'player14', name: 'Олександр Бишук', isCaptain: true},
                        {id: 'player11', name: 'Владислав Кошелюк', isViceCaptain: true},
                        {id: 'player1', name: 'Микола Денбновецький '},
                        {id: 'player2', name: 'Ерік Тіппан'},
                        {id: 'player3', name: 'Володимир Рец'},
                        {id: 'player4', name: 'Нікіта Сачек '},
                        {id: 'player5', name: 'Даниіл Казнін'},
                        {id: 'player6', name: 'Мирослав Тарасюк'},
                        {id: 'player7', name: 'Юрій Штець'},
                        {id: 'player8', name: 'Богдан Пікульський'},
                        {id: 'player9', name: 'Владислав Садовський'},
                        {id: 'player10', name: 'Роман Присяжнюк'},
                        {id: 'player12', name: 'Артем Кухарський'},
                        {id: 'player13', name: 'Даниіл Плєшаков'},
                        {id: 'player15', name: 'Михайло Четверик'}
                    ]
                )}

                {/* Foreign Coaches Section */}
                {renderTeamSection(t.foreignCoaches, [
                    {
                        id: 'trenout1',
                        name: 'Паліко Джимшеладзе',
                        role: language === 'UA'
                            ? 'Колишній гравець збірної Грузії, рекордсмен за кількістю очок у національній команді'
                            : language === 'EN'
                                ? 'Former player of the Georgian national team, record holder for points scored in the national team'
                                : 'A grúz válogatott korábbi játékosa, a válogatottban szerzett pontok rekordere',
                        description: language === 'UA'
                            ? 'Провів 57 матчів за збірну, учасник Кубків світу 2003 та 2007 років. Чемпіон Грузії, багато років виступав у французьких клубах як провідний півзахисник.'
                            : language === 'EN'
                                ? 'Played 57 matches for the national team, participated in the 2003 and 2007 World Cups. Champion of Georgia, played for many years in French clubs as a leading midfielder.'
                                : '57 mérkőzést játszott a válogatottban, részt vett a 2003-as és 2007-es világbajnokságon. Grúzia bajnoka, sokáig francia klubokban játszott vezető középpárosként.'
                    },
                    {
                        id: 'trenout2',
                        name: 'Алан Бантінг',
                        role: language === 'UA'
                            ? 'Головний тренер жіночої збірної Нової Зеландії'
                            : language === 'EN'
                                ? 'Head Coach of the New Zealand Women\'s National Team'
                                : 'Új-Zéland női válogatottjának vezetőedzője',
                        description: language === 'UA'
                            ? 'Колишній тренер Black Ferns Sevens, який привів команду до перемоги у Світової серії регбі-7. Тренер  у розвитку жіночого регбі, відомий своїм інноваційним підходом до підготовки спортсменок. Під його керівництвом команда досягла безпрецедентного рівня майстерності та професіоналізму.'
                            : language === 'EN'
                                ? 'Former coach of Black Ferns Sevens who led the team to victory in the World Rugby Sevens Series. A manager in the development of women\'s rugby, known for his innovative approach to athlete preparation. Under his leadership, the team achieved an unprecedented level of skill and professionalism.'
                                : 'A Black Ferns Sevens korábbi edzője, aki a csapatot a World Rugby Seven Series győzelemhez vezette. A női rögbi fejlesztésének úttörője, ismert innovatív edzésmódszereiről. Vezetése alatt a csapat példátlan szakmai színvonalat ért el.'
                    },
                    {
                        id: 'trenout3',
                        name: 'Сер Грехем Генрі',
                        role: language === 'UA'
                            ? 'Колишній головний тренер All Blacks'
                            : language === 'EN'
                                ? 'Former Head Coach of All Blacks'
                                : 'Az All Blacks korábbi vezetőedzője',
                        description: language === 'UA'
                            ? 'Легендарний тренер, який привів All Blacks до перемоги на Кубку світу з регбі 2011 року. На чолі команди з 2004 по 2011 рік, встановив нові стандарти у світі регбі. Під його керівництвом All Blacks виграли Кубок Бледіслоу 7 разів поспіль та Кубок трьох націй 5 разів. Відзначений численними нагородами, включаючи орден Британської імперії та місце в Залі слави World Rugby.'
                            : language === 'EN'
                                ? 'Legendary coach who led the All Blacks to victory in the 2011 Rugby World Cup. At the helm from 2004 to 2011, he set new standards in world rugby. Under his leadership, the All Blacks won the Bledisloe Cup 7 times in a row and the Tri Nations 5 times. Honored with numerous awards, including the Order of the British Empire and induction into the World Rugby Hall of Fame.'
                                : 'Legendás edző, aki az All Blackst a 2011-es rögbi-világbajnoki győzelemhez vezette. 2004-től 2011-ig állt a csapat élén, új szabványokat állítva fel a világrögbi számára. Vezetésével az All Blacks 7-szer nyerte meg egymás után a Bledisloe-kupát és 5-ször a Három Nemzet Kupáját. Számos kitüntetés birtokosa, köztük a Brit Birodalom Rendjével és a World Rugby Hírességek Csarnokának tagjaként.'
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
            </div>
        </div>
    );
};

export default Team;