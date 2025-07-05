import React from 'react';
import {useLanguage} from './LanguageUtils';

const AboutUs: React.FC = () => {
    const {language} = useLanguage();

    // Об'єкт перекладів
    const translations = {
        UA: {
            aboutTitle: 'Хто ми: Суть та цінності організації',
            aboutText: '«Закарпатські Шаркані» — це громадська організація, заснована ентузіастами, тренерами та спортсменами, які об’єдналися навколо однієї ідеї: спорт має бути доступним для всіх.\n' +
                'Ми — не просто регбійний клуб. Ми — середовище, у якому виростають лідери, чемпіони і соціально активні громадяни. Участь у національних та міжнародних змаганнях — це не мета, а інструмент виховання.\n' +
                'До складу нашої дорослої команди входять 25 гравців та штатна команда, що включає головного тренера, менеджера, дитячого тренера, реабілітолога та кваліфікованих суддів. Також, у нас є дитячі команди різних вікових категорій, що, загалом, включають понад 40 дітей.\n' +
                'Наші гравці є в складі кожної вікової категорії збірних України з регбі.',
            uniquenessTitle: 'Наша унікальність: Інновації та натхнення',
            uniquenessText: 'Ми — одні з перших, хто почав змінювати правила гри.\n' +
                'Буквально. Ми започаткували в Україні новий формат: регбі 1 на 1.\n' +
                'Також, регулярно проводимо регіональні чемпіонати та турніри - адаптивні ігри для дітей з інклюзією, снігове регбі, пляжні матчі. Це — справжні інновації в українському спорті.\n' +
                'Усе, що ми створюємо — нашими руками, нашою ініціативою. Ми працюємо на ентузіазмі, бо знаємо: саме так народжуються зміни.\n' +
                'Щороку ми беремо участь у Всеукраїнських та міжнародних змаганнях. Протягом минулих двох років - займаємо призові місця у Чемпіонаті України з регбі-15 серед чоловічих команд вищої ліги, жіноча команда Ю-14 посіла 3 місце на Чемпіонаті України з регбі-7 серед жіночих юнацьких команд 2024 року тощо.',
            projectTitle: 'Проєкт “Закарпатські Шаркані: Спорт. Майбутнє. Історія”',
            projectText: 'Представляємо проєкт “Закарпатські Шаркані: Спорт. Майбутнє. Історія” — унікальну ініціативу, що поєднує спортивні досягнення з соціальною відповідальністю.\n' +
                'Наша мета — створити платформу для розвитку молодих чемпіонів, особливо серед вразливих категорій, й формувати нову історію українського спорту.\n' +
                'Запрошуємо потенційних спонсорів підтримати цей амбіційний проєкт та знайти своє місце у спортивному майбутньому Закарпаття.',
        },
        EN: {
            aboutTitle: 'Who We Are: Essence and Values of the Organization',
            aboutText: '“Zakarpattia Sharkani” is a public organization founded by enthusiasts, coaches, and athletes united by one idea: sports should be accessible to everyone.\n' +
                'We are more than just a rugby club. We are a community where leaders, champions, and socially active citizens grow. Participation in national and international competitions is not the goal, but a tool for upbringing.\n' +
                'Our adult team consists of 25 players and a staff including a head coach, manager, youth coach, rehabilitator, and qualified referees. We also have youth teams across various age groups, totaling over 40 children.\n' +
                'Our players are part of every age category of the Ukrainian national rugby teams.',
            uniquenessTitle: 'Our Uniqueness: Innovation and Inspiration',
            uniquenessText: 'We are among the first to start changing the rules of the game.\n' +
                'Literally. We pioneered a new format in Ukraine: rugby 1 on 1.\n' +
                'We also regularly host regional championships and tournaments—adaptive games for children with inclusion, snow rugby, and beach matches. These are true innovations in Ukrainian sports.\n' +
                'Everything we create is done with our hands and our initiative. We work with enthusiasm because we know: this is how change is born.\n' +
                'Every year, we participate in national and international competitions. Over the past two years, we have secured prize-winning positions in the Ukraine Championship for Rugby-15 among men’s top league teams, and our U-14 women’s team took 3rd place in the Ukraine Championship for Rugby-7 among youth women’s teams in 2024, among others.',
            projectTitle: 'Project “Zakarpattia Sharkani: Sport. Future. History”',
            projectText: 'We present the project “Zakarpattia Sharkani: Sport. Future. History”—a unique initiative that combines sporting achievements with social responsibility.\n' +
                'Our goal is to create a platform for developing young champions, especially among vulnerable groups, and to shape a new history of Ukrainian sports.\n' +
                'We invite potential sponsors to support this ambitious project and find their place in the sporting future of Zakarpattia.',
        },
        HUN: {
            aboutTitle: 'Kik Vagyunk: A Szervezet Lényege és Értékei',
            aboutText: 'A „Zakarpátiai Sharkani” egy közhasznú szervezet, amelyet lelkes amatőrök, edzők és sportolók alapítottak, akik egy közös ötlet körül tömörültek: a sport mindenkinek elérhető kell, hogy legyen.\n' +
                'Nem csupán egy rögbi klub vagyunk. Olyan közösség vagyunk, ahol vezetők, bajnokok és társadalmilag aktív polgárok nőnek fel. A nemzeti és nemzetközi versenyeken való részvétel nem cél, hanem nevelési eszköz.\n' +
                'Felnőtt csapatunk 25 játékosból és egy személyzetből áll, amely magában foglalja a főedzőt, a menedzsert, a gyermekedzőt, a rehabilitációs szakembert és képzett játékvezetőket. Emellett különböző korosztályú gyermekcsapataink is vannak, amelyek összesen több ніж 40 gyermeket számlálnak.\n' +
                'Játékosaink minden korosztályú ukrán rögbi válogatottban jelen vannak.',
            uniquenessTitle: 'Egyediségünk: Innováció és Inspiráció',
            uniquenessText: 'Mi vagyunk az elsők között, akik elkezdték megváltoztatni a játék szabályait.\n' +
                'Szó szerint. Új formátumot indítottunk el Ukrajnában: rögbi 1 az 1-ben.\n' +
                'Rendszeresen rendezünk regionális bajnokságokat és tornákat – inkluzív játékokat gyerekeknek, hó-rögbit és strandmérkőzéseket. Ezek valódi innovációk az ukrán sportban.\n' +
                'Mindent, amit létrehozunk, saját kezünkkel és kezdeményezésünkkel tesszük. Enthuziazmussal dolgozunk, mert tudjuk: így születnek a változások.\n' +
                'Évente részt veszünk nemzeti és nemzetközi versenyeken. Az elmúlt két évben díjnyertes helyezéseket értünk el az Ukrajna Bajnokságon a rögbi-15 férfi elit ligájában, a női U-14 csapatunk pedig a 3. helyet szerezte meg az Ukrajna Bajnokságon a rögbi-7 ifjúsági női csapatok között 2024-ben, többek között.',
            projectTitle: 'Projekt „Zakarpátiai Sharkani: Sport. Jövő. Történelem”',
            projectText: 'Bemutatjuk a „Zakarpátiai Sharkani: Sport. Jövő. Történelem” projektet – egy egyedi kezdeményezést, amely a sportteljesítményeket a társadalmi felelősségvállalással ötvözi.\n' +
                'Célunk, hogy platformot teremtsünk fiatal bajnokok fejlesztésére, különösen a kiszolgáltatott csoportok körében, és új fejezetet írjunk az ukrán sport történetében.\n' +
                'Potenciális szponzorokat invitálunk, hogy támogassák ezt az ambiciózus projektet, és találják meg helyüket Zakarpátia sportjövőjében.',
        },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center gap-15"
             style={{marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="flex flex-col items-center mt-10 gap-5"
                 style={{color: 'white', marginTop: '15vh', textAlign: 'center', maxWidth: '60vw',marginLeft:'20vw'}}>
                <h1 className="text-5xl font-bold mb-6">{translations[language].projectTitle}</h1>
                <p className="text-xl mb-4 whitespace-pre-line">{translations[language].projectText}</p>
            </div>
            <div className="flex flex-row  justify-between w-full max-w-6xl mx-auto mt-6"
                 style={{marginLeft: '7vw', marginBottom: '10vh'}}>
                <div className="bg-gray-100/70 p-6 rounded-lg shadow-md flex-1" style={{minWidth:'40vw'}}>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">{translations[language].aboutTitle}</h1>
                    <p className="text-gray-800 text-xl mb-4 whitespace-pre-line">{translations[language].aboutText}</p>
                </div>
                <div className="">
                    <img src="/photo_about.png" alt="About Us Photo" className="w-full h-auto object-cover rounded-lg"
                        style={{marginTop:'0vh',minHeight: '73vh',minWidth:'35vw',marginLeft:'5vw'}}/>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto mt-6"
                 style={{marginLeft: '7vw', marginBottom: '10vh'}}>
                <div className="bg-gray-100/70 p-6 rounded-lg shadow-md flex-1" style={{minWidth:'40vw',minHeight:'60vh'}}>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">{translations[language].uniquenessTitle}</h1>
                    <p className="text-gray-800 text-xl mb-4 whitespace-pre-line">{translations[language].uniquenessText}</p>
                </div>
                <div className="">
                    <img src="/mount.png" alt="About Us Photo" className="w-full h-auto object-cover rounded-lg"
                         style={{marginTop: '0vh', minHeight: '80vh', minWidth: '35vw', marginLeft: '5vw'}}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;