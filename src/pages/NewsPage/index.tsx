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
