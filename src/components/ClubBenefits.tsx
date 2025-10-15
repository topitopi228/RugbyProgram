
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageUtils';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaTrophy, FaStar, FaGift, FaUsers, FaMedal, FaGlobe, FaHeart, FaChartLine, FaFire } from 'react-icons/fa';

const ClubBenefits = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const translations = {
        UA: {
            heroTitle: 'Просто Клуб',
            heroSubtitle: 'Ексклюзивні привілеї для спонсорів збірної України U16 з регбі-7',
            heroDescription: 'Приєднуйтесь до елітного клубу підтримки українського спорту та отримайте унікальні можливості',
            joinButton: 'Приєднатися до клубу',

            aboutTitle: 'Про Клуб "100"',
            aboutDescription: 'Клуб "100" - це унікальна можливість стати частиною історії українського регбі. Ми об\'єднуємо 100 найвідданіших спонсорів, які підтримують юнацьку збірну України U16 і вірять у майбутнє українського спорту - це інвестиції в юних українців, спорт і прогрес країни.',

            membershipTitle: 'Членство починається від',
            membershipAmount: '5 000 ₴',
            membershipNote: 'Це внесок у майбутнє українського регбі',

            benefitsTitle: 'Ваші ексклюзивні привілеї',

            benefits: [
                {
                    icon: 'media',
                    title: 'Медіа присутність',
                    description: 'Розміщення вашого логотипу на офіційних каналах збірної, в соціальних мережах та на промо-матеріалах'
                },
                {
                    icon: 'merch',
                    title: 'Персональне екіпірування',
                    description: 'Ексклюзивна форма клубу з вашим іменем, офіційні майки команди та брендований мерч'
                },
                {
                    icon: 'vip',
                    title: 'VIP-доступ на заходи',
                    description: 'Можливість відвідати тренувальні збори, змагання і навіть забити тренувальний try разом з командою'
                },
                {
                    icon: 'broadcast',
                    title: 'Трансляції та медіа',
                    description: 'Закріплені офіційні трансляції матчів збірної з візуальним відображенням вашого внеску, вигуки під час прямих ефірів'
                },
                {
                    icon: 'networking',
                    title: 'Нетворкінг',
                    description: 'Знайомтесь зі провідними партнерами збірної, інші спонсорами та будуйте ділові зв\'язки'
                },
                {
                    icon: 'exclusive',
                    title: 'Ексклюзивні події',
                    description: 'Ваша ім\'я буде бренд на спеціальних подіях і святах, відповідні 100 партнерам збірної'
                },
                {
                    icon: 'olympic',
                    title: 'Офіційний статус',
                    description: 'Іменний сертифікат члена Клубу "100", визнання в офіційній спільноті та позначка на ресурсах спонсору'
                },
                {
                    icon: 'activity',
                    title: 'Залучення',
                    description: 'Щорічне визнання у річних звітах та публічне згадування вашого внеску в рзвиток регбі на офіційних майданчиках'
                },
            ],

            levelsTitle: 'Рівні членства Клубу "100"',
            levels: [
                {
                    name: 'Starter',
                    amount: '5 000 ₴',
                    color: 'from-gray-600 to-gray-800',
                    benefits: [
                        'Офіційний сертифікат члена Клубу',
                        'Логотип на сайті серед спонсорів',
                        'Щомісячні оновлення про команду',
                        'Ексклюзивний мерч Клубу "100"'
                    ]
                },
                {
                    name: 'Silver',
                    amount: '15 000 ₴',
                    color: 'from-gray-400 to-gray-600',
                    benefits: [
                        'Всі переваги рівня Starter',
                        'Персоналізована форма з вашим ім\'ям',
                        'VIP-запрошення на 1 матч збірної',
                        'Згадування в соціальних мережах'
                    ]
                },
                {
                    name: 'Gold',
                    amount: '50 000 ₴',
                    color: 'from-yellow-400 to-yellow-600',
                    popular: true,
                    benefits: [
                        'Всі переваги рівня Silver',
                        'Логотип на формі команди',
                        'VIP-доступ на всі домашні матчі',
                        'Особиста зустріч з командою',
                        'Розміщення банера на стадіоні'
                    ]
                },
                {
                    name: 'Platinum',
                    amount: '100 000 ₴',
                    color: 'from-blue-400 to-purple-600',
                    benefits: [
                        'Всі переваги рівня Gold',
                        'Великий логотип на всіх матчах',
                        'Участь у тренуваннях команди',
                        'Персональний відеоогляд сезону',
                        'Білет на Олімпіаду (при проходженні)'
                    ]
                }
            ],

            attributesTitle: 'Атрибутика та форма',
            attributesDescription: 'Кожен спонсор отримає ексклюзивну атрибутику, яка демонструє ваше підтримання та статус',

            firstMembersTitle: 'Перші учасники клубу',
            firstMembersSubtitle: 'Станьте одним з перших 100 членів елітного клубу',
            slotsAvailable: 'Доступно місць',

            ctaTitle: 'Готові стати частиною історії?',
            ctaDescription: 'Приєднайтесь до Клубу "100" та допоможіть юним спортсменам досягти олімпійських висот',
            ctaButton: 'Приєднатися до Клубу "100"',

            backButton: 'Повернутися до спонсорів'
        },
        EN: {
            heroTitle: 'Simply Club',
            heroSubtitle: 'Exclusive benefits for Ukraine U16 Rugby-7 national team sponsors',
            heroDescription: 'Join the elite club supporting Ukrainian sports and gain unique opportunities',
            joinButton: 'Join the Club',

            aboutTitle: 'About Club "100"',
            aboutDescription: 'Club "100" is a unique opportunity to become part of Ukrainian rugby history. We unite the 100 most dedicated sponsors who support Ukraine\'s U16 youth team and believe in the future of Ukrainian sports - it\'s an investment in young Ukrainians, sports, and the country\'s progress.',

            membershipTitle: 'Membership starts from',
            membershipAmount: '5 000 ₴',
            membershipNote: 'This is a contribution to the future of Ukrainian rugby',

            benefitsTitle: 'Your Exclusive Benefits',

            benefits: [
                {
                    icon: 'media',
                    title: 'Media Presence',
                    description: 'Your logo on official team channels, social media, and promotional materials'
                },
                {
                    icon: 'merch',
                    title: 'Personal Equipment',
                    description: 'Exclusive club uniform with your name, official team jerseys, and branded merchandise'
                },
                {
                    icon: 'vip',
                    title: 'VIP Event Access',
                    description: 'Opportunity to attend training camps, competitions, and even score a training try with the team'
                },
                {
                    icon: 'broadcast',
                    title: 'Broadcasting & Media',
                    description: 'Official match broadcasts with visual recognition of your contribution and shoutouts during live streams'
                },
                {
                    icon: 'networking',
                    title: 'Networking',
                    description: 'Meet leading team partners, other sponsors, and build business connections'
                },
                {
                    icon: 'exclusive',
                    title: 'Exclusive Events',
                    description: 'Your name will be branded at special events and celebrations for the 100 team partners'
                },
                {
                    icon: 'olympic',
                    title: 'Official Status',
                    description: 'Named Club "100" membership certificate, recognition in the official community, and sponsor resource marking'
                },
                {
                    icon: 'activity',
                    title: 'Engagement',
                    description: 'Annual recognition in yearly reports and public mention of your contribution to rugby development on official platforms'
                },
            ],

            levelsTitle: 'Club "100" Membership Levels',
            levels: [
                {
                    name: 'Starter',
                    amount: '5 000 ₴',
                    color: 'from-gray-600 to-gray-800',
                    benefits: [
                        'Official Club membership certificate',
                        'Logo on website among sponsors',
                        'Monthly team updates',
                        'Exclusive Club "100" merchandise'
                    ]
                },
                {
                    name: 'Silver',
                    amount: '15 000 ₴',
                    color: 'from-gray-400 to-gray-600',
                    benefits: [
                        'All Starter level benefits',
                        'Personalized uniform with your name',
                        'VIP invitation to 1 team match',
                        'Social media mentions'
                    ]
                },
                {
                    name: 'Gold',
                    amount: '50 000 ₴',
                    color: 'from-yellow-400 to-yellow-600',
                    popular: true,
                    benefits: [
                        'All Silver level benefits',
                        'Logo on team uniform',
                        'VIP access to all home matches',
                        'Personal team meeting',
                        'Stadium banner placement'
                    ]
                },
                {
                    name: 'Platinum',
                    amount: '100 000 ₴',
                    color: 'from-blue-400 to-purple-600',
                    benefits: [
                        'All Gold level benefits',
                        'Large logo at all matches',
                        'Participation in team training',
                        'Personal season video review',
                        'Olympic ticket (if qualified)'
                    ]
                }
            ],

            attributesTitle: 'Attributes and Uniform',
            attributesDescription: 'Each sponsor receives exclusive attributes demonstrating your support and status',

            firstMembersTitle: 'First Club Members',
            firstMembersSubtitle: 'Become one of the first 100 members of the elite club',
            slotsAvailable: 'Slots Available',

            ctaTitle: 'Ready to Become Part of History?',
            ctaDescription: 'Join Club "100" and help young athletes reach Olympic heights',
            ctaButton: 'Join Club "100"',

            backButton: 'Back to Sponsors'
        },
        HUN: {
            heroTitle: 'Egyszerűen Klub',
            heroSubtitle: 'Exkluzív előnyök az Ukrajna U16 Rögbi-7 válogatott szponzorai számára',
            heroDescription: 'Csatlakozzon az ukrán sportot támogató elit klubhoz és szerezzen egyedi lehetőségeket',
            joinButton: 'Csatlakozás a Klubhoz',

            aboutTitle: 'A "100" Klubról',
            aboutDescription: 'A "100" Klub egyedülálló lehetőség arra, hogy része legyen az ukrán rögbi történetének. Egyesítjük a 100 legelkötelezettebb szponzort, akik támogatják Ukrajna U16-os ifjúsági csapatát és hisznek az ukrán sport jövőjében - ez befektetés a fiatal ukrajnokban, a sportban és az ország fejlődésében.',

            membershipTitle: 'Tagság kezdődik',
            membershipAmount: '5 000 ₴',
            membershipNote: 'Ez hozzájárulás az ukrán rögbi jövőjéhez',

            benefitsTitle: 'Exkluzív Előnyei',

            benefits: [
                {
                    icon: 'media',
                    title: 'Média Jelenlét',
                    description: 'Logója a csapat hivatalos csatornáin, közösségi médián és promóciós anyagokon'
                },
                {
                    icon: 'merch',
                    title: 'Személyes Felszerelés',
                    description: 'Exkluzív klub egyenruha nevével, hivatalos csapat mezek és márkás árucikkek'
                },
                {
                    icon: 'vip',
                    title: 'VIP Esemény Hozzáférés',
                    description: 'Lehetőség edzőtáborok, versenyek látogatására és akár edzésen való részvételre a csapattal'
                },
                {
                    icon: 'broadcast',
                    title: 'Közvetítés és Média',
                    description: 'Hivatalos mérkőzés közvetítések hozzájárulásának vizuális megjelenítésével és élő közvetítések alatt'
                },
                {
                    icon: 'networking',
                    title: 'Hálózatépítés',
                    description: 'Találkozzon vezető csapat partnerekkel, más szponzorokkal és építsen üzleti kapcsolatokat'
                },
                {
                    icon: 'exclusive',
                    title: 'Exkluzív Események',
                    description: 'Neve márkázva lesz különleges eseményeken és ünnepségeken a 100 csapat partner számára'
                },
                {
                    icon: 'olympic',
                    title: 'Hivatalos Státusz',
                    description: 'Névre szóló "100" Klub tagsági igazolvány, elismerés a hivatalos közösségben és szponzor forrás jelölés'
                },
                {
                    icon: 'activity',
                    title: 'Elkötelezettség',
                    description: 'Éves elismerés az éves jelentésekben és nyilvános említés hozzájárulásáról a rögbi fejlesztéséhez hivatalos platformokon'
                },
            ],

            levelsTitle: '"100" Klub Tagsági Szintek',
            levels: [
                {
                    name: 'Starter',
                    amount: '5 000 ₴',
                    color: 'from-gray-600 to-gray-800',
                    benefits: [
                        'Hivatalos Klub tagsági igazolvány',
                        'Logó a weboldalon a szponzorok között',
                        'Havi csapat frissítések',
                        'Exkluzív "100" Klub árucikkek'
                    ]
                },
                {
                    name: 'Silver',
                    amount: '15 000 ₴',
                    color: 'from-gray-400 to-gray-600',
                    benefits: [
                        'Minden Starter szint előny',
                        'Személyre szabott egyenruha nevével',
                        'VIP meghívás 1 csapat mérkőzésre',
                        'Közösségi média említések'
                    ]
                },
                {
                    name: 'Gold',
                    amount: '50 000 ₴',
                    color: 'from-yellow-400 to-yellow-600',
                    popular: true,
                    benefits: [
                        'Minden Silver szint előny',
                        'Logó a csapat egyenruhán',
                        'VIP hozzáférés minden hazai mérkőzéshez',
                        'Személyes csapattalálkozó',
                        'Stadion banner elhelyezés'
                    ]
                },
                {
                    name: 'Platinum',
                    amount: '100 000 ₴',
                    color: 'from-blue-400 to-purple-600',
                    benefits: [
                        'Minden Gold szint előny',
                        'Nagy logó minden mérkőzésen',
                        'Részvétel csapat edzésben',
                        'Személyes szezon videó áttekintés',
                        'Olimpiai jegy (ha kvalifikál)'
                    ]
                }
            ],

            attributesTitle: 'Attribútumok és Egyenruha',
            attributesDescription: 'Minden szponzor kap exkluzív attribútumokat, amelyek bemutatják támogatását és státuszát',

            firstMembersTitle: 'Első Klub Tagok',
            firstMembersSubtitle: 'Legyen az első 100 tag egyike az elit klubban',
            slotsAvailable: 'Elérhető Helyek',

            ctaTitle: 'Kész Része Lenni a Történelemnek?',
            ctaDescription: 'Csatlakozzon a "100" Klubhoz és segítsen fiatal sportolóknak elérni az olimpiai magasságokat',
            ctaButton: 'Csatlakozás a "100" Klubhoz',

            backButton: 'Vissza a Szponzorokhoz'
        }
    };

    const t = translations[language as keyof typeof translations] || translations.UA;

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: JSX.Element } = {
            media: <FaGlobe className="w-8 h-8" />,
            merch: <FaGift className="w-8 h-8" />,
            vip: <FaCrown className="w-8 h-8" />,
            broadcast: <FaFire className="w-8 h-8" />,
            networking: <FaUsers className="w-8 h-8" />,
            exclusive: <FaStar className="w-8 h-8" />,
            olympic: <FaMedal className="w-8 h-8" />,
            activity: <FaChartLine className="w-8 h-8" />
        };
        return iconMap[iconName] || <FaStar className="w-8 h-8" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden pt-24 pb-32 px-4"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
                            <FaCrown className="text-yellow-400" />
                            <span className="text-yellow-300 font-semibold">Ексклюзивний Клуб</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
                    >
                        {t.heroTitle}
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
                    >
                        {t.heroSubtitle}
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        {t.heroDescription}
                    </motion.p>

                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        onClick={() => navigate('/#ggwp')}
                        className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {t.joinButton}
                            <FaHeart className="group-hover:scale-110 transition-transform" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </div>
            </motion.div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/10 rounded-full mb-4">
                            <span className="text-5xl font-bold text-yellow-400">1/100</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">{t.aboutTitle}</h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            {t.aboutDescription}
                        </p>
                    </div>

                    <div className="flex flex-col items-center mt-12 p-8 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30">
                        <p className="text-gray-300 text-lg mb-2">{t.membershipTitle}</p>
                        <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-2">
                            {t.membershipAmount}
                        </p>
                        <p className="text-gray-400">{t.membershipNote}</p>
                    </div>
                </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-300"
                >
                    {t.benefitsTitle}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-gray-900">
                                        {getIcon(benefit.icon)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-yellow-300 mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Membership Levels */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-300"
                >
                    {t.levelsTitle}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.levels.map((level, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay:index * 0.1, duration: 0.5 }}
                            className={`relative ${level.popular ? 'scale-105' : ''}`}
                        >
                            {level.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                                        Популярний
                                    </span>
                                </div>
                            )}
                            <div className={`bg-gradient-to-br ${level.color} rounded-2xl p-6 border-2 ${level.popular ? 'border-yellow-400' : 'border-gray-700'} hover:border-yellow-500 transition-all duration-300 h-full flex flex-col`}>
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                                    <p className="text-3xl font-bold text-yellow-300">{level.amount}</p>
                                </div>
                                <ul className="space-y-3 flex-grow">
                                    {level.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <FaStar className="text-yellow-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate('/#ggwp')}
                                    className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Обрати план
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* First Members Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">{t.firstMembersTitle}</h2>
                    <p className="text-xl text-gray-400 mb-8">{t.firstMembersSubtitle}</p>
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full px-8 py-3">
                        <FaUsers className="text-yellow-400 text-2xl" />
                        <span className="text-2xl font-bold text-white">{t.slotsAvailable}: </span>
                        <span className="text-3xl font-bold text-yellow-400">85/100</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                    {Array.from({ length: 100 }).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 20) * 0.02, duration: 0.3 }}
                            className={`aspect-square rounded-lg flex items-center justify-center font-bold text-lg ${
                                index < 15
                                    ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900'
                                    : 'bg-gray-800/50 border border-gray-700 text-gray-500'
                            }`}
                        >
                            {index < 15 ? <FaCrown /> : index + 1}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/30 text-center"
                >
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
                    </div>

                    <div className="relative z-10">
                        <FaTrophy className="text-6xl text-yellow-400 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300">{t.ctaTitle}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t.ctaDescription}
                        </p>
                        <button
                            onClick={() => navigate('/#ggwp')}
                            className="group relative px-12 py-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-xl rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {t.ctaButton}
                                <FaHeart className="group-hover:scale-125 transition-transform" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button
                        onClick={() => navigate('/stadium')}
                        className="group inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t.backButton}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ClubBenefits;