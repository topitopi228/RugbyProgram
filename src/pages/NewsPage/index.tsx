// @ts-nocheck
import React from 'react';
import { useLanguage } from '../../components/LanguageUtils';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';

const NewsPage = () => {
    const { language } = useLanguage();

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
                    expense: '0',
                    image: '/news7.webp'
                },
                {
                    id: 8,
                    date: '19-25 Листопада 2025',
                    title: 'Найважливіше НТЗ у Грузії',
                    description: 'Збірна України U16 з регбі-7 успішно завершила інтенсивний навчально-тренувальний збір у м. Батумі, Грузія. За участю провідних іноземних тренерів команда провела тренування з техніки, тактики, фізичної підготовки та психологічного тренінгу.',
                    expense: '15700',
                    image: '/news8.webp'
                },
                {
                    id: 9,
                    date: '22-23 Грудня 2025',
                    title: 'Тренувальні збори у Хмельницькому',
                    description: 'У Хмельницькому відбулися навчально-тренувальні збори, під час яких збірна України U16 провела серію тренувальних матчів проти команди U17. Ці товариські ігри стали важливим етапом підготовки молодших гравців, дозволивши їм отримати цінний досвід гри проти старших та досвідченіших суперників. Інтенсивні тренування та практичні матчі допомогли команді покращити тактичну взаємодію та підвищити рівень майстерності.',
                    expense: '300',
                    image: '/news9.webp'
                },
                {
                    id: 10,
                    date: '30 Січня - 9 Лютого 2026',
                    title: 'Успішна подорож тренерів до Нової Зеландії',
                    description: 'Тренери збірної України U16 проводять навчальний збір на базі NZCIS та IRANZ в Новій Зеландії для підвищення тренерської кваліфікації. Дякуємо NZCIS та IRANZ за підтримку і можливість професійного розвитку.',
                    expense: '8100',
                    image: '/newzealand.webp'
                },
                {
                    id: 11,
                    date: '12-16 Лютого 2026',
                    title: 'Участь у міжнародному турнірі Lisbon 7s',
                    description: 'Збірна України U16 з регбі-7 успішно взяла участь у престижному міжнародному турнірі Lisbon 7s у Португалії. Наші гравці отримали цінний досвід змагань з найсильнішими командами Європи, показали високий рівень підготовки та командної взаємодії.',
                    expense: '9700',
                    image: '/news11.webp'
                },
                {
                    id: 12,
                    date: '5-6 Березня 2026',
                    title: 'Тест-матч збірних U-16 проти U-18',
                    description: 'З 5 по 6 березня у місті Хмельницький були проведені тест-матчі юнацьких збірних України з Регбі-7 між командами U-16 та U-18. Збірні команди проводять підготовку до участі в міжнародних змаганнях, зокрема до етапів Чемпіонату Європи з регбі-7 серед юнацьких команд. За підсумками тестових матчів команди показали хороші результати. Після ігор тренерські штаби провели детальний розбір матчів, зробили необхідні висновки та продовжують працювати над покращенням індивідуальних і командних навичок гравців перед майбутніми турнірами.',
                    expense: '300',
                    image: '/news12.webp'
                },
                {
                    id: 13,
                    date: '20-23 Березня 2026',
                    title: 'Збори гравців сутички в Ужгороді',
                    description: 'Семеро гравців сутички юнацької збірної України з регбі провели чотириденні навчально-тренувальні збори в місті Ужгород. Упродовж зборів відпрацьовували ліфт, гру в повітрі, командну взаємодію та комунікацію. Команда суттєво додала в зіграності й стала ще більш згуртованою. Збори пройшли під керівництвом тренера Максима Дулі, менеджера Марцела Цитряка та лікаря Олександра Ткаченка. Усі учасники відпрацювали на максимум — потужно, дисципліновано та з повною віддачею.',
                    expense: '750',
                    image: '/media28.webp'
                },
                {
                    id: 14,
                    date: '21-23 Квітня 2026',
                    title: 'Завершено тренувальні збори в сутичках',
                    description: 'Успішно завершилися навчально-тренувальні збори гравців сутички збірної України U16 з регбі-7. Упродовж трьох днів команда працювала над покращенням техніки виконання стандартних положень, зокрема схватів та коридорів. Особлива увага приділялася синхронізації дій гравців першої лінії та відпрацюванню тактичних схем. Збори пройшли в інтенсивному режимі з повною віддачею від кожного учасника.',
                    expense: '750',
                    image: '/news14.webp'
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
    },
    {
        id: 8,
        date: 'November 19-25, 2025',
        title: 'Key Training Camp in Georgia',
        description: 'The Ukrainian U16 rugby-7 national team successfully completed an intensive training camp in Batumi, Georgia. With leading foreign coaches, the team conducted training sessions on technique, tactics, physical conditioning, and psychological preparation.',
        expense: '15700',
        image: '/news8.webp'
    },
    {
        id: 9,
        date: 'December 22-23, 2025',
        title: 'Training Camp in Khmelnytskyi',
        description: 'A training camp was held in Khmelnytskyi where the Ukrainian U16 national team played a series of practice matches against the U17 team. These friendly games became an important stage in the preparation of younger players, allowing them to gain valuable experience playing against older and more experienced opponents. Intensive training and practice matches helped the team improve tactical coordination and enhance their skill level.',
        expense: '300',
        image: '/news9.webp'
    },
    {
        id: 10,
        date: 'January 30 - February 9, 2026',
        title: 'Successful Coaches\' Trip to New Zealand',
        description: 'Ukrainian U16 national team coaches are conducting a training camp at NZCIS and IRANZ base in New Zealand for coaching qualification enhancement. We thank NZCIS and IRANZ for their support and opportunity for professional development.',
        expense: '8100',
        image: '/newzealand.webp'
    },
    {
        id: 11,
        date: 'February 12-16, 2026',
        title: 'Participation in Lisbon 7s International Tournament',
        description: 'Ukraine U16 rugby-7 national team successfully participated in the prestigious Lisbon 7s international tournament in Portugal. Our players gained valuable experience competing with the strongest teams in Europe, demonstrating high level of preparation and team coordination.',
        expense: '9700',
        image: '/news11.webp'
    },
    {
        id: 12,
        date: 'March 5-6, 2026',
        title: 'U-16 vs U-18 Test Match',
        description: 'From March 5 to 6, test matches of Ukrainian youth Rugby-7 national teams between U-16 and U-18 teams were held in Khmelnytskyi. The national teams are preparing for international competitions, particularly for the European Rugby-7 Championship stages among youth teams. Based on the test match results, the teams showed good performance. After the games, the coaching staff conducted a detailed match analysis, drew necessary conclusions, and continue to work on improving individual and team skills of players before upcoming tournaments.',
        expense: '300',
        image: '/news12.webp'
    },
    {
        id: 13,
        date: 'March 20-23, 2026',
        title: 'Forward Players Training Camp in Uzhhorod',
        description: 'Seven forward players of the Ukrainian youth rugby national team completed a four-day training camp in Uzhhorod. During the camp, they practiced lineouts, aerial play, team coordination, and communication. The team significantly improved their cohesion and became even more united. The camp was conducted under the leadership of coach Maksym Dulia, manager Martsel Tsytriak, and team doctor Oleksandr Tkachenko. All participants worked to the maximum — powerfully, disciplined, and with complete dedication.',
        expense: '750',
        image: '/media28.webp'
    },
    {
        id: 14,
        date: 'April 21-23, 2026',
        title: 'Forward Training Camp Completed',
        description: 'The forward players training camp of Ukraine U16 rugby-7 national team has been successfully completed. For three days, the team worked on improving the technique of set pieces, particularly scrums and lineouts. Special attention was paid to synchronizing the actions of front row players and practicing tactical schemes. The camp was held in intensive mode with full dedication from each participant.',
        expense: '750',
        image: '/news14.webp'
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
    },
    {
        id: 8,
        date: '2025. november 19-25.',
        title: 'Legfontosabb edzőtábor Grúziában',
        description: 'Az ukrán U16-os rögbi-7 válogatott sikeresen befejezte az intenzív edzőtábort Batumiban, Grúziában. Vezető külföldi edzők irányításával a csapat technikai, taktikai, fizikai felkészítési és pszichológiai edzéseket tartott.',
        expense: '15700',
        image: '/news8.webp'
    },
    {
        id: 9,
        date: '2025. december 22-23.',
        title: 'Edzőtábor Hmelnickijben',
        description: 'Hmelnickijben edzőtábort tartottak, ahol az ukrán U16-os válogatott edzőmérkőzéseket játszott az U17-es csapat ellen. Ezek a barátságos játékok fontos szakaszt jelentettek a fiatalabb játékosok felkészítésében, lehetővé téve számukra, hogy értékes tapasztalatot szerezzenek idősebb és tapasztaltabb ellenfelek ellen játszva. Az intenzív edzések és gyakorló mérkőzések segítették a csapatot a taktikai koordináció javításában és a képességek szintjének emelésében.',
        expense: '300',
        image: '/news9.webp'
    },
    {
        id: 10,
        date: '2026. január 30. - február 9.',
        title: 'Sikeres edzői utazás Új-Zélandra',
        description: 'Az ukrán U16-os válogatott edzői oktatási tábort tartanak az NZCIS és IRANZ bázisán Új-Zélandon az edzői képességek fejlesztésére. Köszönjük az NZCIS és IRANZ-nak a támogatást és a szakmai fejlődés lehetőségét.',
        expense: '8100',
        image: '/newzealand.webp'
    },
    {
        id: 11,
        date: '2026. február 12-16.',
        title: 'Részvétel a Lisbon 7s nemzetközi tornán',
        description: 'Az ukrán U16-os rögbi-7 válogatott sikeresen részt vett a rangos Lisbon 7s nemzetközi tornán Portugáliában. Játékosaink értékes tapasztalatot szereztek Európa legerősebb csapataival való versengésben, magas szintű felkészültséget és csapatkoordinációt mutatva.',
        expense: '9700',
        image: '/news11.webp'
    },
    {
        id: 12,
        date: '2026. március 5-6.',
        title: 'U-16 vs U-18 tesztmérkőzés',
        description: 'Március 5-6 között tesztmérkőzéseket tartottak az ukrán ifjúsági rögbi-7 válogatottak között U-16 és U-18 csapatok között Hmelnickijben. A válogatottak nemzetközi versenyekre készülnek, különösen az ifjúsági csapatok közötti Európa rögbi-7 bajnokság szakaszaira. A tesztmérkőzések eredményei alapján a csapatok jó teljesítményt mutattak. A játékok után az edzői stáb részletes mérkőzéselemzést végzett, levonta a szükséges következtetéseket, és folytatja a játékosok egyéni és csapatképességeinek fejlesztését a közelgő tornák előtt.',
        expense: '300',
        image: '/news12.webp'
    },
    {
        id: 13,
        date: '2026. március 20-23.',
        title: 'Csatárjátékosok edzőtábora Ungvárott',
        description: 'Az ukrán ifjúsági rögbi válogatott hét csatárjátékosa négynapos edzőtábort teljesített Ungvárott. A tábor során gyakorolták a bedobásokat, a levegőben való játékot, a csapatkoordinációt és a kommunikációt. A csapat jelentősen javította az összhangjukat és még egységesebbé vált. Az edzőtábort Maksym Dulia edző, Martsel Tsytriak menedzser és Olekszandr Tkachenko csapatorvos irányításával tartották. Minden résztvevő maximálisan dolgozott — erőteljesen, fegyelmezetten és teljes elkötelezettséggel.',
        expense: '750',
        image: '/media28.webp'
    },
    {
        id: 14,
        date: '2026. április 21-23.',
        title: 'Csatár edzőtábor befejezve',
        description: 'Sikeresen befejeződött az ukrán U16-os rögbi-7 válogatott csatárjátékosainak edzőtábora. Három napig a csapat a standard helyzetek technikájának javításán dolgozott, különösen a scrumok és bedobások terén. Különös figyelmet fordítottak az első sor játékosainak szinkronizálására és a taktikai sémák gyakorlására. Az edzőtábor intenzív üzemmódban zajlott, minden résztvevő teljes elkötelezettségével.',
        expense: '750',
        image: '/news14.webp'
    }
]
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
            <HeroSection language={language} title={t.title} />
            <NewsSection news={t.news} language={language} />
            <ContactSection language={language} />
        </div>
    );
};

export default NewsPage;
