import {useLanguage} from './LanguageUtils';
import {motion} from 'framer-motion';


type Translations = {
    title: string;
    subtitle: string;
    description: string;
    supportTitle: string;
    supportAreas: string[];
    benefitsTitle: string;
    benefitsList: string[];
    contactTitle: string;
    contactText: string;
    contactPhone: string;
    contactEmail: string;
    contactTelegram: string;
};

const translations: Record<string, Translations> = {
    UA: {
        title: 'Ласкаво просимо на офіційний сайт юнацької Збірної України з регбі-7 Ю-16!',
        subtitle: 'ПІДТРИМАТИ НАЦІОНАЛЬНУ ЗБІРНУ УКРАЇНИ З РЕГБІ-7',
        description: 'Наш проєкт вже має соціальну цінність, результати, команду, систему тренувань та мотивацію — більше, ніж у 90% заявників на гранти. Ви можете розраховувати на підтримку в таких напрямках:',
        supportTitle: 'Напрямки підтримки:',
        supportAreas: [
            'Фінансування зарплати керівнику (законно і очікувано)',
            'Обладнання: форма, м’ячі, рюкзаки, транспорт, страхування',
            'Поїздки на змагання — витрати на дітей повністю компенсуються',
            'Кошти на відкриття секцій в інших селах для масштабування',
            'Побудова міні-поля або тренувального майданчика на першому етапі'
        ],
        benefitsTitle: 'Що отримають спонсори?',
        benefitsList: [
            'Розміщення банерів на стадіоні',
            'Логотип на майках або маніжках',
            'Визнання в нашій спільноті',
            'Найвідданіші спонсори отримують білет на Олімпійські ігри, якщо збірна проходить на Олімпіаду'
        ],
        contactTitle: 'ГОТОВІ ПІДТРИМАТИ РЕГБІ?',
        contactText: 'МОЖЕТЕ ЗВ\'ЯЗАТИСЬ БУДЬ-ЯКИМ ЗРУЧНИМ ДЛЯ ВАС СПОСОБОМ!',
        contactPhone: '+48 501 820 396',
        contactEmail: 'rugby.support@gmail.com',
        contactTelegram: 't.me/ivanovich112',
        olympicGoal: 'Ми прагнемо гідно представити Україну на міжнародній арені та прославити нашу країну у світі. Кожен матч — це крок до великої мети та доказ незламності українського духу. Вихід на Юнацькі Олімпійські ігри 2026 року стане символом сили, єдності та віри в перемогу.',
        europeanGoal: 'Ми прагнемо в майбутньому виступати на чемпіонатах Європи на такому ж рівні, як сьогодні це роблять національна та юнацька збірні України. Наша мета — здобути пеемогу в дивізіоні Championship та гідно представляти Україну серед найсильніших команд на олімпійському рівні.',
        olympicTitle: 'Вихід на юнацькі олімпійські ігри 2026 року'
    },
    EN: {
        title: 'Welcome to the official website of the Ukrainian U-16 Rugby 7s National Team!',
        subtitle: 'SUPPORT THE UKRAINIAN NATIONAL RUGBY-7 TEAM',
        description: 'Our project already has social value, results, a team, a training system, and motivation—more than 90% of grant applicants. You can count on support in the following areas:',
        supportTitle: 'Areas of support:',
        supportAreas: [
            'Funding for the manager\'s salary (legal and expected)',
            'Equipment: uniforms, balls, backpacks, transportation, insurance',
            'Competition trips—full compensation for children\'s expenses',
            'Funds to open sections in other villages for scaling',
            'Construction of a mini-field or training ground in the first stage'
        ],
        benefitsTitle: 'What will sponsors receive?',
        benefitsList: [
            'Banner placement at the stadium',
            'Logo on jerseys or vests',
            'Recognition in our community',
            'The most dedicated sponsors receive an Olympic Games ticket if the team qualifies'
        ],
        contactTitle: 'READY TO SUPPORT RUGBY?',
        contactText: 'YOU CAN GET IN TOUCH ANY CONVENIENT WAY!',
        contactPhone: '+380 50 949 82 09',
        contactEmail: 'rugby.support@gmail.com',
        contactTelegram: 't.me/ivanovich112',
        olympicGoal: 'We strive to proudly represent Ukraine on the international stage and bring glory to our country worldwide. Every match is a step toward a great goal and proof of the unbreakable Ukrainian spirit. Qualifying for the Youth Olympic Games 2026 will become a symbol of strength, unity, and faith in victory.',
        europeanGoal: 'We aim to compete at European Championships in the future at the same level as the national and youth teams of Ukraine do today. Our goal is to win the Championship division and proudly represent Ukraine among the strongest teams at the Olympic level.',
        olympicTitle: 'Qualifying for the Youth Olympic Games 2026'
    },
    HUN: {
        title: 'Üdvözöljük az Ukrán U16-os Rögbi 7-es Válogatott hivatalos weboldalán!',
        subtitle: 'TÁMOGASD AZ UKRÁN RÖGBI-7-ES VÁLOGATOTTAT',
        description: 'Projektünk már most társadalmi értéket, eredményeket, csapatot, edzésrendszert és motivációt kínál – többet, mint a pályázók 90%-a. A következő területeken számíthatsz támogatásra:',
        supportTitle: 'Támogatási területek:',
        supportAreas: [
            'Az igazgató fizetésének finanszírozása (jogos és várható)',
            'Felszerelések: mezek, labdák, hátizsákok, szállítás, biztosítás',
            'Versenyutak – a gyerekek költségeinek teljes térítése',
            'Források szekciók megnyitására más falvakban a bővítés érdekében',
            'Mini-pálya vagy edzőtér építése az első szakaszban'
        ],
        benefitsTitle: 'Mit kapnak a támogatók?',
        benefitsList: [
            'Banner elhelyezése a stadionban',
            'Logó a mezeken vagy mellényekben',
            'Elismerés a közösségünkben',
            'A legelkötelezettebb szponzorok olimpiai jegyet kapnak, ha a csapat kijut az olimpiára'
        ],
        contactTitle: 'KÉSZ VAGY TÁMOGATNI A RÖGBIT?',
        contactText: 'BÁRMILYEN KÉNYELMES MÓDON FELVEHETED VELÜNK A KAPCSOLATOT!',
        contactPhone: '+380 50 949 82 09',
        contactEmail: 'rugby.support@gmail.com',
        contactTelegram: 't.me/ivanovich112',
        olympicGoal: 'Arra törekszünk, hogy méltósággal képviseljük Ukrajnát a nemzetközi színtereken, és dicsőséget hozzunk hazánknak a világban. Minden mérkőzés egy lépés a nagy cél felé, és bizonyítéka az ukrán szellem törhetetlen erejének. A 2026-os Ifjúsági Olimpiai Játékokra való kijutás az erő, az egység és a győzelembe vetett hit szimbólumává válik.',
        europeanGoal: 'Célunk, hogy a jövőben a mai ukrán nemzeti és ifjúsági csapatok szintjén szerepeljünk az Európa-bajnokságokon. Célunk a Championship divízió megnyerése, és hogy méltósággal képviseljük Ukrajnát a legerősebb csapatok között az olimpiai szinten.',
        olympicTitle: 'Kijutás a 2026-os Ifjúsági Olimpiai Játékokra'
    }
};

const SponsorProgram = () => {
    const {language} = useLanguage();
    const t = translations[language];

    return (
        <div className="min-h-screen bg-gray-50 mt-0 p-0 ">
            <div
                className="relative h-[500px] md:h-[80vh] w-full"
                style={{
                    backgroundImage: 'url(/spon_back.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '5px',
                    position: 'relative'
                }}
            >
                <div className="absolute inset-0"></div>
                <div
                    className="absolute bottom-0 left-0 right-0 z-10 container mx-auto px-4 pb-8 text-center text-white">
                    <h1 className="text-2xl md:text-5xl font-bold mb-4">{t.title}</h1>

                </div>
            </div>
            <div className="relative w-full flex items-center justify-center py-12 px-4 sm:px-6"
                 style={{
                     minHeight: '50vh',
                     marginTop: '7vh',
                     borderRadius: '20px',
                     maxWidth: '80vw',
                     marginLeft: 'auto',
                     marginRight: 'auto'
                 }}>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: 'url(/olymp.png)', borderRadius: '7px'}}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 w-full px-4 text-center text-white">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8"
                    >
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight"
                            style={{textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}
                        >
                            {t.olympicTitle}
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
                            style={{textShadow: '0 1px 2px rgba(0,0,0,0.4)'}}
                        >
                            {t.olympicGoal}
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.5}}
                        >
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            {/* Main Content */}
            <div className="container mx-auto mt-30">
                <div className="max-w-4xl mx-auto mb-16">

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div
                            className="bg-white p-6 rounded-lg shadow-md text-lg leading-relaxed font-light tracking-wide">
                            {t.europeanGoal}
                        </div>
                        <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                            <img
                                src="/spon_1.jpg"
                                alt="Rugby team training"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden h-64 md:h-96 mb-16">
                        <img
                            src="/spon_2.png"
                            alt="Rugby team in action"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Contact Section */}
                {/* Contact Section - Full width with no side margins */}
                <div className="w-full">
                    <div
                        className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative w-full">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            <div
                                className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mix-blend-soft-light transform rotate-45"></div>
                        </div>

                        <div className="max-w-7xl mx-auto relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                                    {t.contactTitle}
                                </h2>
                                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                                    {t.contactText}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-16">
                                {/* Phone */}
                                <motion.a
                                    whileHover={{y: -3}}
                                    href={`tel:${t.contactPhone.replace(/\s+/g, '')}`}
                                    className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group h-full"
                                >
                                    <div
                                        className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition-colors">
                                        <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-yellow-300 mb-1">
                        {language === 'UA' ? 'Телефон' : language === 'EN' ? 'Phone' : 'Telefon'}
                    </span>
                                    <span
                                        className="text-sm text-blue-200 group-hover:text-white transition-colors">{t.contactPhone}</span>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    whileHover={{y: -3}}
                                    href={`mailto:${t.contactEmail}`}
                                    className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group h-full"
                                >
                                    <div
                                        className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition-colors">
                                        <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-yellow-300 mb-1">Email</span>
                                    <span
                                        className="text-sm text-blue-200 group-hover:text-white transition-colors text-center">{t.contactEmail}</span>
                                </motion.a>

                                {/* Telegram */}
                                <motion.a
                                    whileHover={{y: -3}}
                                    href={`https://${t.contactTelegram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 flex flex-col items-center group h-full"
                                >
                                    <div
                                        className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-yellow-500/20 transition-colors">
                                        <svg className="h-6 w-6 text-yellow-400" fill="currentColor"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.243-1.865-.44-.752-.245-1.35-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-yellow-300 mb-1">Telegram</span>
                                    <span
                                        className="text-sm text-blue-200 group-hover:text-white transition-colors">{t.contactTelegram}</span>
                                </motion.a>
                            </div>

                            {/* Sponsors Section */}
                            <div className="mt-16">
                                <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 text-yellow-300">
                                    {language === 'UA' ? 'Наші спонсори' : language === 'EN' ? 'Our Sponsors' : 'Szponzoraink'}
                                </h3>

                                <div className="relative overflow-hidden">
                                    {/* Animated gradient overlay */}
                                    <div
                                        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
                                    <div
                                        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

                                    {/* Infinite carousel */}
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
                                        {/* Duplicate for seamless loop */}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorProgram;