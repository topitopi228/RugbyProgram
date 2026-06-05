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
                    id: 2,
                    date: '16 Червня 2025',
                    title: 'Відбір найкращих кандидатів',
                    description: 'У м. Хмельницький пройшов відбірковий етап, де було відібрано найперспективніших гравців з усієї України для участі у збірній команді.',
                    expense: '300'
                },
                {
                    id: 1,
                    date: '7 Квітня 2025',
                    title: 'Перша перемога в Турнірі',
                    description: 'Наша команда здобула першу перемогу на міжнародному турнірі в м. Гдиня, Польща. Це історична подія для нашої збірної!',
                    expense: '10500'
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
                    title: 'Завершено тренувальні збори в Сутички',
                    description: 'Успішно завершилися навчально-тренувальні збори гравців сутички збірної України U16 з регбі-7. Упродовж трьох днів команда працювала над покращенням техніки виконання стандартних положень, зокрема схватів та коридорів. Особлива увага приділялася синхронізації дій гравців  та відпрацюванню тактичних схем. Збори пройшли в інтенсивному режимі з повною віддачею від кожного учасника.',
                    expense: '750',
                    image: '/news14.webp'
                },
                {
                    id: 15,
                    date: '4-9 Квітня 2026',
                    title: 'Навчально-тренувальні збори гравців віяла у Гдині',
                    description: 'З 4 по 9 квітня відбулись навчально-тренувальні збори у 4 гравців віяла юнацької національної збірної команди України з регбі-7 Ю-16. Збори проходили у місті Гдиня (Республіка Польща) та були зосереджені на індивідуальному розвитку гравців: відпрацюванні техніки передачі м\'яча, початкового удару, а також розвитку індивідуальних здібностей. Кожен із гравців максимально використав цю можливість - усі залишились задоволені, зробили для себе важливі висновки, покращили свої навички та піднялись на новий рівень. Це ще один крок вперед і важливий досвід, який наближає нас до великих досягнень.',
                    expense: '1600',
                    image: '/news15.webp'
                },
                {
                    id: 17,
                    date: '26 Травня - 3 Червня 2026',
                    title: 'Перемога в Кремі (Італія)',
                    description: 'Збірна України U16 з регбі-7 тріумфально виступила на міжнародному турнірі в Кремі (Італія). Наша команда посіла 1 місце серед 5 команд-учасниць турніру, не зазнавши жодної поразки протягом усього змагання, продемонструвавши високий рівень гри, дисципліну та командну взаємодію. Протягом перебування в Італії хлопці здобули безцінний міжнародний досвід, зіграли з сильними європейськими командами та показали характер і майстерність.\n' +
                        '\n' +
                        'Окрім матчів, під час перебування в Італії було проведено декілька спільних тренувань з італійськими командами, зокрема Crema Rugby. Під час цих занять тренери та гравці обох сторін обмінялися досвідом, методиками підготовки та підходами до розвитку молодих спортсменів. \n' +
                        '\n' +
                        'Поїздка стала важливим кроком не лише у спортивному розвитку команди, а й у зміцненні міжнародних зв’язків. Турнір у Кремі став яскравим прикладом того, як спорт об’єднує молодь різних країн та сприяє розвитку дружніх відносин між спортивними спільнотами.',
                    expense: '9325',
                    image: '/news17.webp'
                },
                {
                    id: 16,
                    date: '1-7 Травня 2026',
                    title: 'Завершено НТЗ у Гдині - команда готова до Кремони',
                    description: 'У місті Гдиня завершилися дуже продуктивні навчально-тренувальні збори, які стали важливим етапом підготовки нашої команди до майбутнього турніру в місті Кремона. Протягом зборів команда активно працювала над захисними діями, реалізацією простору, технічними аспектами гри та розвитком нейрошвидкості. Хлопці отримали багато нових знань, підняли рівень індивідуальної майстерності та почали значно краще бачити й читати ігрові ситуації на полі. Особливо цінним став досвід роботи зі шотландським тренером, який поділився важливими тонкощами регбі та допоміг команді дивитися на гру під іншим кутом. Щиро дякуємо йому за професіоналізм і внесок у розвиток команди. Також у межах збору ми провели спаринги проти Arka Gdynia U18 та здобули впевнені перемоги у всіх трьох матчах. Дякуємо всім тренерам, організаторам, партнерам і кожному, хто долучився до цього збору. Попереду нові виклики, нові емоції та нові перемоги!',
                    expense: '9500',
                    image: '/news16.webp'
                }

            ]
        },
        EN: {
            title: 'News',
            news: [
    {
        id: 2,
        date: 'June 16, 2025',
        title: 'Selection of the Best Candidates',
        description: 'A selection stage was held in Khmelnytskyi where the most promising players from all over Ukraine were selected to join the national team.',
        expense: '300'
    },
    {
        id: 1,
        date: 'April 7, 2025',
        title: 'First Tournament Victory',
        description: 'Our team achieved its first victory at the international tournament in Gdynia, Poland. This is a historic event for our national team!',
        expense: '10500'
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
    },
    {
        id: 15,
        date: 'April 4-9, 2026',
        title: 'Back Line Players Training Camp in Gdynia',
        description: 'From April 4 to 9, a training camp was held for 4 back line players of the Ukrainian youth rugby-7 U-16 national team. The camp took place in Gdynia (Republic of Poland) and focused on individual player development: practicing ball passing technique, kick-off, and developing individual abilities. Each player made the most of this opportunity - everyone was satisfied, drew important conclusions, improved their skills and reached a new level. This is another step forward and important experience that brings us closer to great achievements.',
        expense: '1600',
        image: '/news15.webp'
    },
                {
                    id: 17,
                    date: 'May 26 - June 3, 2026',
                    title: 'Victory in Crema (Italy)',
                    description: 'The Ukrainian U16 rugby-7 national team performed triumphantly at the international tournament in Crema, Italy. Our team took 1st place, demonstrating a high level of play and team coordination. During the week of the tournament, the boys gained invaluable international experience, played against strong European teams, and showed character and skill.',
                    expense: '9325',
                    image: '/news17.webp'
                },
    {
        id: 16,
        date: 'May 1-7, 2026',
        title: 'Training Camp in Gdynia Completed - Team Ready for Cremona',
        description: 'A highly productive training camp concluded in Gdynia, which became an important stage in our team\'s preparation for the upcoming tournament in Cremona. Throughout the camp, the team actively worked on defensive actions, space utilization, technical aspects of the game, and neurocognitive speed development. The players gained a lot of new knowledge, raised their individual skill level, and started to see and read game situations on the field much better. Particularly valuable was the experience of working with a Scottish coach who shared important rugby nuances and helped the team look at the game from a different angle. We sincerely thank him for his professionalism and contribution to the team\'s development. Also, during the camp, we played friendly matches against Arka Gdynia U18 and secured confident victories in all three matches. We thank all the coaches, organizers, partners, and everyone who contributed to this camp. New challenges, new emotions, and new victories are ahead!',
        expense: '9500',
        image: '/news16.webp'
    }
]
        },
        HUN: {
            title: 'Hírek',
            news: [
    {
        id: 2,
        date: '2025. június 16.',
        title: 'A legjobb játékosok kiválasztása',
        description: 'Kijevben lezajlott a válogató, ahol Ukrajna legígéretesebb játékosait válogatták be a válogatottba.',
        expense: '300'
    },
    {
        id: 1,
        date: '2025. április 7.',
        title: 'Első győzelem a versenyen',
        description: 'Csapatunk megszerezte első győzelmét a lengyelországi Gdyniában megrendezett nemzetközi versenyen. Történelmi pillanat a válogatottunk számára!',
        expense: '10500'
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
    },
    {
        id: 15,
        date: '2026. április 4-9.',
        title: 'Hátvédjátékosok edzőtábora Gdyniában',
        description: 'Április 4-9 között edzőtábort tartottak az ukrán ifjúsági rögbi-7 U-16 válogatott 4 hátvédjátékosa számára. Az edzőtábor Gdyniában (Lengyel Köztársaság) zajlott, és a játékosok egyéni fejlesztésére összpontosított: a labdaátadás technikájának gyakorlására, a kezdőrúgásra, valamint az egyéni képességek fejlesztésére. Minden játékos maximálisan kihasználta ezt a lehetőséget - mindenki elégedett volt, fontos következtetéseket vont le, javította készségeit és új szintre lépett. Ez újabb előrelépés és fontos tapasztalat, amely közelebb visz minket a nagy eredményekhez.',
        expense: '1600',
        image: '/news15.webp'
    },
                {
                    id: 17,
                    date: '2026. május 26. - június 3.',
                    title: 'Győzelem Crema (Olaszország)',
                    description: 'Az ukrán U16-os rögbi-7 válogatott diadalmasan szerepelt a cremonai nemzetközi tornán Olaszországban. Csapatunk az 1. helyen végzett, magas szintű játékot és csapatkoordinációt mutatva. A torna hetében a fiúk felbecsülhetetlen nemzetközi tapasztalatot szereztek, erős európai csapatok ellen játszottak, és jellemet és képességet mutattak.',
                    expense: '9325',
                    image: '/news17.webp'
                },
    {
        id: 16,
        date: '2026. május 1-7.',
        title: 'Gdyniai edzőtábor befejezve - csapat készen áll Cremonára',
        description: 'Gdyniában befejeződött egy rendkívül produktív edzőtábor, amely fontos szakasz volt csapatunk felkészítésében a közelgő cremonai tornára. A tábor során a csapat aktívan dolgozott a védekező akciókon, a tér kihasználásán, a játék technikai szempontjain és a neuro-sebesség fejlesztésén. A játékosok rengeteg új tudást szereztek, megemelték egyéni képességeik szintjét, és sokkal jobban kezdték látni és olvasni a játékhelyzeteket a pályán. Különösen értékes volt a skót edzővel való munka tapasztalata, aki fontos rögbi finomságokat osztott meg, és segített a csapatnak más szemszögből nézni a játékot. Őszintén köszönjük neki a professzionalizmust és a csapat fejlődéséhez való hozzájárulást. A tábor keretében barátságos mérkőzéseket játszottunk az Arka Gdynia U18 ellen, és mindhárom meccsen magabiztos győzelmet arattunk. Köszönjük minden edzőnek, szervezőnek, partnernek és mindenkinek, aki hozzájárult ehhez a táborhoz. Új kihívások, új érzelmek és új győzelmek várnak ránk!',
        expense: '9500',
        image: '/news16.webp'
    }
]
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-screen text-white">
            <HeroSection language={language} title={t.title} />
            <NewsSection news={t.news} language={language} />
            <ContactSection language={language} />
        </div>
    );
};

export default NewsPage;
