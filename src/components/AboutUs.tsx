import {useLanguage} from './LanguageUtils';

const AboutUs = () => {
    const {language} = useLanguage();

    // Об'єкт перекладів
    const translations = {
        UA: {
            aboutTitle: 'Хто ми: ',
            aboutText: 'Ми — молоді українські регбісти, гравці національної збірної України з регбі-7 та регбі-15, діючі тренери збірної U-16, а також наставники юнацьких і дитячих команд в Україні та Польщі.\n' +
                '🔹 Максим Дуля — гравець напівпрофесійного клубу РК «Поділля»\n' +
                '🔹 Антон [Прізвище] — гравець професійного польського клубу РК «Гдиня»\n' +
                'Ми створили цей проєкт, щоб стати провідниками для українських юних регбістів до Олімпійської арени. Ми мріємо і працюємо над тим, щоб Україна не лише боксувала — а перемагала і в командних ігрових видах спорту.',
            uniquenessTitle: 'Наша унікальність: Інновації та натхнення',
            uniquenessText: 'Ми — одні з перших, хто почав змінювати правила гри.\n' +
                'Буквально. Ми започаткували в Україні новий формат: регбі 1 на 1.\n' +
                'Також, регулярно проводимо регіональні чемпіонати та турніри - адаптивні ігри для дітей з інклюзією, снігове регбі, пляжні матчі. Це — справжні інновації в українському спорті.\n' +
                'Усе, що ми створюємо — нашими руками, нашою ініціативою. Ми працюємо на ентузіазмі, бо знаємо: саме так народжуються зміни.\n' +
                'Щороку ми беремо участь у Всеукраїнських та міжнародних змаганнях. Протягом минулих двох років - займаємо призові місця у Чемпіонаті України з регбі-15 серед чоловічих команд вищої ліги, жіноча команда Ю-14 посіла 3 місце на Чемпіонаті України з регбі-7 серед жіночих юнацьких команд 2024 року тощо.',
            projectTitle: 'Проєкт “Майбутні чемпіони: Спорт. Майбутнє. Історія”',
            projectText: 'Представляємо проєкт “Майбутні чемпіони” — унікальну ініціативу, що поєднує спортивні досягнення з соціальною відповідальністю.\n' +
                'Наша мета — створити платформу для розвитку молодих чемпіонів, особливо серед вразливих категорій, й формувати нову історію українського спорту.\n' +
                'Запрошуємо потенційних спонсорів підтримати цей амбіційний проєкт та знайти своє місце у спортивному майбутньому Закарпаття.',
            goalsTitle: 'Суть та цінності організації:',
            goalsText: 'У нас за плечима — участь у чемпіонатах Європи, численні перемоги з вихованцями на всеукраїнських та міжнародних змаганнях, понад 5 років тренерської діяльності. Але наш головний шлях — тільки починається.\n' +
                '🎯 Наша мета проста і сильна:\n' +
                '🔸 Потрапити з українськими хлопцями на юнацькі Олімпійські ігри\n' +
                '🔸 А потім — разом з ними вийти на справжню Олімпійську арену\n' +
                '🔸 Побудувати перший регбійний стадіон в Закарпатті\n' +
                '🔸 Підтримати клуб "Закарпатські Шаркані"\n' +
                'І ми не самі. Поруч із нами — сильні наставники світового рівня:\n' +
                '• тренер олімпійських чемпіонів з регбі-7 Алан Баден (Жіноча збірна)\n' +
                '• містер Генрі, який працював із найкращими світовими гравцями\n' +
                '• провідний тренер із Грузії (ім’я додамо), один із лідерів європейської школи регбі\n' +
                'Ці наставники — наша опора. А ми, у свою чергу, — опора для українських дітей, особливо тих, хто не має фінансових можливостей. Ми хочемо дати їм шанс. Шанс мріяти, тренуватися, змагатися — і перемагати.',
        },
        EN: {
            aboutTitle: 'Who We Are: ',
            aboutText: 'We are young Ukrainian rugby players, members of the Ukrainian national rugby-7 and rugby-15 teams, active coaches of the U-16 national team, and mentors of youth and children\'s teams in Ukraine and Poland.\n' +
                '🔹 Maksym Dulya — player of the semi-professional club RC “Podillia”\n' +
                '🔹 Anton [Last Name] — player of the professional Polish club RC “Gdynia”\n' +
                'We created this project to guide young Ukrainian rugby players to the Olympic stage. We dream and work to ensure that Ukraine not only competes but excels in team sports.',
            uniquenessTitle: 'Our Uniqueness: Innovation and Inspiration',
            uniquenessText: 'We are among the first to start changing the rules of the game.\n' +
                'Literally. We pioneered a new format in Ukraine: rugby 1 on 1.\n' +
                'We also regularly host regional championships and tournaments—adaptive games for children with inclusion, snow rugby, and beach matches. These are true innovations in Ukrainian sports.\n' +
                'Everything we create is done with our hands and our initiative. We work with enthusiasm because we know: this is how change is born.\n' +
                'Every year, we participate in national and international competitions. Over the past two years, we have secured prize-winning positions in the Ukraine Championship for Rugby-15 among men’s top league teams, and our U-14 women’s team took 3rd place in the Ukraine Championship for Rugby-7 among youth women’s teams in 2024, among others.',
            projectTitle: 'Project “Future Champions: Sport. Future. History”',
            projectText: 'We present the project “Future Champions”—a unique initiative that combines sporting achievements with social responsibility.\n' +
                'Our goal is to create a platform for developing young champions, especially among vulnerable groups, and to shape a new history of Ukrainian sports.\n' +
                'We invite potential sponsors to support this ambitious project and find their place in the sporting future of Zakarpattia.',
            goalsTitle: 'Essence and Values of the Organization:',
            goalsText: 'We have participated in European championships, achieved numerous victories with our trainees in national and international competitions, and have over 5 years of coaching experience. But our main journey is just beginning.\n' +
                '🎯 Our goal is simple and bold:\n' +
                '🔸 To qualify Ukrainian boys for the Youth Olympic Games\n' +
                '🔸 And then—take them to the true Olympic stage\n' +
                '🔸 To build the first rugby stadium in Zakarpattia\n' +
                '🔸 To support the "Zakarpattia Sharkani" club\n' +
                'And we are not alone. We are supported by world-class mentors:\n' +
                '• Alan Baden, coach of Olympic rugby-7 champions (Women\'s team)\n' +
                '• Mr. Henry, who has worked with the world’s best players\n' +
                '• A leading coach from Georgia (name to be added), one of the leaders of the European rugby school\n' +
                'These mentors are our foundation. And we, in turn, are the foundation for Ukrainian children, especially those without financial means. We want to give them a chance. A chance to dream, train, compete—and win.',
        },
        HUN: {
            aboutTitle: 'Kik Vagyunk:',
            aboutText: 'Fiatal ukrán rögbisek vagyunk, az ukrán nemzeti rögbi-7 és rögbi-15 válogatottak játékosai, az U-16-os válogatott aktív edzői, valamint Ukrajnában és Lengyelországban működő ifjúsági és gyermekcsapatok mentorai.\n' +
                '🔹 Maksym Dulya — a félprofi RC „Podillia” klub játékosa\n' +
                '🔹 Anton [Vezetéknév] — a professzionális lengyel RC „Gdynia” klub játékosa\n' +
                'Ezt a projektet azért hoztuk létre, hogy az ukrán fiatal rögbiseket az olimpiai színtérre vezessük. Arról álmodunk és azon dolgozunk, hogy Ukrajna ne csak versenyezzen, hanem kiemelkedjen a csapatsportokban.',
            uniquenessTitle: 'Egyediségünk: Innováció és Inspiráció',
            uniquenessText: 'Mi vagyunk az elsők között, akik elkezdték megváltoztatni a játék szabályait.\n' +
                'Szó szerint. Új formátumot indítottunk el Ukrajnában: rögbi 1 az 1-ben.\n' +
                'Rendszeresen rendezünk regionális bajnokságokat és tornákat – inkluzív játékokat gyerekeknek, hó-rögbit és strandmérkőzéseket. Ezek valódi innovációk az ukrán sportban.\n' +
                'Mindent, amit létrehozunk, saját kezünkkel és kezdeményezésünkkel tesszük. Enthuziazmussal dolgozunk, mert tudjuk: így születnek a változások.\n' +
                'Évente részt veszünk nemzeti és nemzetközi versenyeken. Az elmúlt két évben díjnyertes helyezéseket értünk el az Ukrajna Bajnokságon a rögbi-15 férfi elit ligájában, a női U-14 csapatunk pedig a 3. helyet szerezte meg az Ukrajna Bajnokságon a rögbi-7 ifjúsági női csapatok között 2024-ben, többek között.',
            projectTitle: 'Projekt „Jövő Bajnokai: Sport. Jövő. Történelem”',
            projectText: 'Bemutatjuk a „Jövő Bajnokai” projektet – egy egyedi kezdeményezést, amely a sportteljesítményeket a társadalmi felelősségvállalással ötvözi.\n' +
                'Célunk, hogy platformot teremtsünk fiatal bajnokok fejlesztésére, különösen a kiszolgáltatott csoportok körében, és új fejezetet írjunk az ukrán sport történetében.\n' +
                'Potenciális szponzorokat invitálunk, hogy támogassák ezt az ambiciózus projektet, és találják meg helyüket Zakarpátia sportjövőjében.',
            goalsTitle: 'A Szervezet Lényege és Értékei:',
            goalsText: 'Részt vettünk európai bajnokságokon, számos győzelmet arattunk tanítványainkkal nemzeti és nemzetközi versenyeken, és több mint 5 év edzői tapasztalattal rendelkezünk. De a fő utunk csak most kezdődik.\n' +
                '🎯 Célunk egyszerű és merész:\n' +
                '🔸 Ukrán fiúkkal kvalifikálni az ifjúsági olimpiai játékokra\n' +
                '🔸 Majd velük együtt kilépni az igazi olimpiai színtérre\n' +
                '🔸 Megépíteni az első rögbi stadiont Kárpátalján\n' +
                '🔸 Támogatni a „Zakarpátiai Sharkani” klubot\n' +
                'És nem vagyunk egyedül. Világszínvonalú mentorok támogatnak minket:\n' +
                '• Alan Baden, a rögbi-7 olimpiai bajnokainak edzője (női válogatott)\n' +
                '• Mr. Henry, aki a világ legjobb játékosaival dolgozott\n' +
                '• Egy vezető grúz edző (nevét később adjuk meg), az európai rögbi iskola egyik vezetője\n' +
                'Ezek a mentorok a mi alapunk. Mi pedig az ukrán gyerekek, különösen a nehéz anyagi helyzetben lévők alapja vagyunk. Esélyt szeretnénk adni nekik. Esélyt arra, hogy álmodjanak, edzenek, versenyezzenek – és győzzenek.',
        },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center gap-10"
             style={{marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="flex flex-col items-center mt-10 gap-5"
                 style={{color: 'white', marginTop: '15vh', textAlign: 'center', maxWidth: '60vw', marginLeft: '20vw'}}>
                <h1 className="text-5xl font-bold mb-6">{translations[language].projectTitle}</h1>
                <p className="text-xl mb-4 whitespace-pre-line">{translations[language].projectText}</p>
            </div>
            <div className=" flex flex-row justify-between w-full max-w-6xl mx-auto mt-0 md:max-h-150"
                 style={{marginLeft: '7vw', marginBottom: '10vh'}}>
                <div className="bg-gray-100/70 p-6 rounded-lg shadow-md flex-1" style={{minWidth: '40vw'}}>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">{translations[language].aboutTitle}</h1>
                    <p className="text-gray-800 text-xl mb-4 whitespace-pre-line">{translations[language].aboutText}</p>
                </div>
                <div className="">
                    <img src="/2.jpg" alt="About Us Photo"
                         className="w-full h-auto object-cover rounded-lg md:max-h-150"
                         style={{marginTop: '0vh', marginLeft: '5vw'}}/>
                </div>
            </div>
            <div className="flex  items-center justify-between w-full max-w-6xl mx-auto mt-0 md:max-h-150"
                 style={{marginLeft: '7vw', marginBottom: '10vh'}}>
                <div className="bg-gray-100/70 p-6 rounded-lg shadow-md flex-1 text-center"
                     style={{minWidth: '80vw', minHeight: '60vh', maxWidth: '90vw'}}>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">{translations[language].goalsTitle}</h1>
                    <p className="text-gray-800 text-xl mb-4 whitespace-pre-line">{translations[language].goalsText}</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto mt-0 md:max-h-150"
                 style={{marginLeft: '7vw', marginBottom: '10vh'}}>
                <div className="bg-gray-100/70 p-6 rounded-lg shadow-md flex-1"
                     style={{minWidth: '40vw', minHeight: '60vh'}}>
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">{translations[language].uniquenessTitle}</h1>
                    <p className="text-gray-800 text-xl mb-4 whitespace-pre-line">{translations[language].uniquenessText}</p>
                </div>
                <div className="">
                    <img src="/photo_about.png" alt="About Us Photo"
                         className="w-full h-auto object-cover rounded-lg md:min-h-150"
                         style={{marginTop: '0vh', marginLeft: '5vw'}}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;