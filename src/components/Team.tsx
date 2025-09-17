import {useLanguage} from './LanguageUtils';
import {Link} from 'react-router-dom';

const Team = () => {
    const {language} = useLanguage();

    const handleImageClick = (src) => {
        window.open(src, '_blank', 'noopener,noreferrer');
    };

    // Об'єкт перекладів
    const translations = {
        UA: {
            teamTitle: 'Збірна України U-16',
            intro1: 'Допомога національній команді на змаганнях, включаючи екіпіровку та міжнародні поїздки.',
            intro2: 'У складі збірної — представники нашого клубу: гравець, головний тренер, менеджер і лікар, які не лише виконують свої ролі, а й формують спортивне обличчя країни на європейській арені.',
            intro3: 'Команда системно бере участь у навчально-тренувальних зборах та товариських іграх за кордоном, готуючись представляти Україну з честю і гідністю на Європейських змаганнях.',
            intro4: 'Збірна U-16 — це фундамент майбутньої національної команди, який потребує стабільної підтримки для зростання та збереження потенціалу молодих спортсменів.',
            intro5: 'Кожен внесок допомагає нашим юнакам здобувати досвід, розвиватися та вірити в майбутнє українського спорту.',
            ourTeamTitle: 'Наша команда',
            supportTitle: 'Професійна підтримка',
            coach1Name: 'Антон Шашеро',
            coach1Description: 'Тренер збірної U-16, 10 років тренерського досвіду, учасник чемпіонатів Європи. Дитячий тренер різних вікових категорій та гравець РК "Арка Гдиня", основний гравець збірної України, чемпіон Європи та України, віцечемпіон Грузії, чемпіон Польщі.',
            coach2Name: 'Максим Дуля',
            coach2Description: 'Тренер збірної U-16, спеціаліст із фізичної підготовки, працює з юнацькими командами 5 років. Гравець РК "Полісся". Дитячий тренер різних вікових категорій та гравець РК "Полісся", основний гравець збірної України, чемпіон Європи та України, віцечемпіон Грузії, чемпіон Польщі.',
            coach3Name: 'Олександр Мігунов',
            coach3Description: 'Тренер збірної U-18, тактичний аналітик збірної U-16, 7 років досвіду роботи з юнацькими командами, спеціаліст із ігрових стратегій.',
            supportText: [
                'До консультування команди було залучено таких всесвітньо відомих тренерів, як:',
                'Сер Грехем Генрі (Нова Зеландія) — легендарний наставник, який привів збірну Нової Зеландії до перемоги на Кубку світу з регбі.',
                'Алан Бантінг (Нова Зеландія) — провідний фахівець із підготовки жіночих команд, головний тренер жіночої збірної Нової Зеландії з регбі-7.',
                'Паліко Джимшеладзе (Грузія) — один із провідних тренерів Кавказького регіону, який сприяв інтеграції європейських підходів у тренування юнацьких команд.'
            ],
            supportBtn: 'Підтримати',
        },
        EN: {
            teamTitle: 'Ukraine U-16 National Team',
            intro1: 'Support for the national team in competitions, including equipment and international trips.',
            intro2: 'The team includes representatives from our club: a player, head coach, manager, and doctor, who not only fulfill their roles but also shape the sporting face of the country on the European stage.',
            intro3: 'The team systematically participates in training camps and friendly matches abroad, preparing to represent Ukraine with honor and dignity at European competitions.',
            intro4: 'The U-16 team is the foundation of the future national team, requiring stable support for the growth and preservation of young athletes\' potential.',
            intro5: 'Every contribution helps our young players gain experience, develop, and believe in the future of Ukrainian sports.',
            ourTeamTitle: 'Our Team',
            supportTitle: 'Professional Support',
            coach1Name: 'Anton Shashero',
            coach1Description: 'Coach of the U-16 team, 10 years of coaching experience, participant in European championships. Youth coach for various age groups and player of RC "Arka Gdynia", main player of the Ukraine national team, European and Ukrainian champion, vice-champion of Georgia, Polish champion.',
            coach2Name: 'Maksym Dulia',
            coach2Description: 'Coach of the U-16 team, specialist in physical training, working with youth teams for 5 years. Player of RC "Polissya". Youth coach for various age groups and player of RC "Polissya", main player of the Ukraine national team, European and Ukrainian champion, vice-champion of Georgia, Polish champion.',
            coach3Name: 'Oleksandr Migunov',
            coach3Description: 'Coach of the U-18 team, tactical analyst for the U-16 team, 7 years of experience with youth teams, specialist in game strategies.',
            supportText: [
                'The team has been consulted by such world-renowned coaches as:',
                'Sir Graham Henry (New Zealand) — a legendary mentor who led the New Zealand national team to victory in the Rugby World Cup.',
                'Alan Bunting (New Zealand) — a leading specialist in preparing women\'s teams, head coach of the New Zealand women\'s rugby-7 national team.',
                'Paliko Jimshadze (Georgia) — one of the leading coaches in the Caucasus region, who contributed to the integration of European approaches into the training of youth teams.'
            ],
            supportBtn: 'Support',
        },
        HUN: {
            teamTitle: 'Ukrajna U-16 Válogatott',
            intro1: 'A nemzeti csapat támogatása a versenyeken, beleértve a felszerelést és a nemzetközi utazásokat.',
            intro2: 'A csapatban a klubunk képviselői találhatók: egy játékos, a vezetőedző, a menedzser és az orvos, akik nemcsak szerepeiket töltik be, hanem alakítják az ország sportarcát az európai színpadon.',
            intro3: 'A csapat rendszeresen részt vesz edzőtáborokban és barátságos mérkőzéseken külföldön, hogy méltósággal és büszkeséggel képviselje Ukrajnát az európai versenyeken.',
            intro4: 'Az U-16 válogatott a jövőbeli nemzeti csapat alapja, amely stabil támogatásra szorul a fiatal sportolók fejlődéséhez és potenciáljának megőrzéséhez.',
            intro5: 'Minden hozzájárulás segít fiataljainknak tapasztalatot szerezni, fejlődni és hinni az ukrán sport jövőjében.',
            ourTeamTitle: 'Csapatunk',
            supportTitle: 'Szakmai Támogatás',
            coach1Name: 'Anton Shashero',
            coach1Description: 'U-16 válogatott edzője, 10 éves edzői tapasztalattal, európai bajnokságok résztvevője. Különböző korcsoportok ifjúsági edzője és az RC "Arka Gdynia" játékosa, az ukrán válogatott alapjátékosa, Európa- і Ukrajna-bajnok, Grúzia ezüstérmese, Lengyelország bajnoka.',
            coach2Name: 'Maksym Dulia',
            coach2Description: 'U-16 válogatott edzője, fizikai felkészülés specialista, 5 éve dolgozik ifjúsági csapatokkal. Játékos a RC "Polissya" csapatában. Különböző korcsoportok ifjúsági edzője és az RC "Polissya" játékosa, az ukrán válogatott alapjátékosa, Európa- і Ukrajna-bajnok, Grúzia ezüstérmese, Lengyelország bajnoka.',
            coach3Name: 'Oleksandr Migunov',
            coach3Description: 'U-18 válogatott edzője, az U-16 válogatott taktikai elemzője, 7 éves tapasztalattal ifjúsági csapatokkal, játékstratégiák specialistája.',
            supportText: [
                'A csapat konzultációjához olyan világhírű edzőket vontak be, mint:',
                'Sir Graham Henry (Új-Zéland) — legendás edző, aki az új-zélandi válogatottat a rúgbi-világbajnokság győzelméig vezette.',
                'Alan Bunting (Új-Zéland) — a női csapatok felkészítésének vezető szakembere, az új-zélandi női rúgbi-7 válogatott vezetőedzője.',
                'Paliko Jimshadze (Grúzia) — a Kaukázus régió egyik vezető edzője, aki hozzájárult az európai megközelítések integrációjához a ifjúsági csapatok edzésében.'
            ],
            supportBtn: 'Támogatás',
        },
    };

    // Дані для тренерів
    const coaches = [
        {
            name: translations[language].coach1Name,
            description: translations[language].coach1Description,
            image: '/coach1.jpg',
        },
        {
            name: translations[language].coach2Name,
            description: translations[language].coach2Description,
            image: '/coach2.jpg',
        },
        {
            name: translations[language].coach3Name,
            description: translations[language].coach3Description,
            image: '/coach3.jpg',
        },
    ];

    // Дані для гравців (13 гравців)
    const players = [
        {firstName: 'Микола', lastName: 'Денбновецький', image: '/player1.jpg'},
        {firstName: 'Ерік', lastName: 'Тіппан', image: '/player2.jpg'},
        {firstName: 'Володимир', lastName: 'Рец', image: '/player3.jpg'},
        {firstName: 'Нікіта', lastName: 'Сачек', image: '/player4.jpg'},
        {firstName: 'Даниіл', lastName: 'Казнін', image: '/player5.jpg'},
        {firstName: 'Мирослав', lastName: 'Тарасюк', image: '/player6.jpg'},
        {firstName: 'Юрій', lastName: 'Штець', image: '/player7.jpg'},
        {firstName: 'Богдан', lastName: 'Пікульский', image: '/player8.jpg'},
        {firstName: 'Владислав', lastName: 'Кошелюк', image: '/player9.jpg'},
        {firstName: 'Артем', lastName: 'Кухарский', image: '/player10.jpg'},
        {firstName: 'Даніїл', lastName: 'Плєшаков', image: '/player11.jpg'},
        {firstName: 'Олександр', lastName: 'Бишук', image: '/player12.jpg'},
        {firstName: 'Михайло', lastName: 'Четвертик', image: '/player13.jpg'},
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10"
             style={{marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">{translations[language].teamTitle}</h1>
                <div className="text-white text-xl text-center mb-10 max-w-[60vw] mx-auto">
                    <p className="mb-4">{translations[language].intro1}</p>
                    <p className="mb-4">{translations[language].intro2}</p>
                    <p className="mb-4">{translations[language].intro3}</p>
                    <p className="mb-4">{translations[language].intro4}</p>
                    <p className="mb-4">{translations[language].intro5}</p>
                </div>
                {/* Секція "Наша команда" */}
                <div className="border-t-2 w-full my-4 md:min-h-5 mt-0 min-h-2"
                     style={{borderRadius: '7px', background: '#1e2838'}}/>
                <div className="md:mt-5">
                    <h2 className="text-4xl font-semibold text-center text-yellow-400 md:mb-10">{translations[language].ourTeamTitle}</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Тренери */}
                        <div className="flex flex-col md:w-[45vw]">
                            <div className="flex-1 bg-gray-100/80 p-6 rounded-lg shadow-md">
                                {coaches.map((coach, index) => (
                                    <div key={index} className="flex flex-col md:flex-row items-center mb-6 gap-4">
                                        <img
                                            src={coach.image}
                                            alt={coach.name}
                                            className="w-full md:w-1/3 h-80 object-cover rounded-lg"
                                            onClick={() => handleImageClick(coach.image)}
                                        />
                                        <div className="flex-1 p-0">
                                            <h3 className="text-3xl font-bold text-gray-800 mb-2">{coach.name}</h3>
                                            <p className="text-gray-800 text-lg">{coach.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="border-t-2 w-full my-4 md:min-h-5 mt-0 min-h-2"
                                     style={{borderRadius: '7px', background: '#1e2838'}}/>
                                <div>
                                    <h3 className="text-4xl font-bold text-center text-black mb-6">{translations[language].supportTitle}</h3>
                                    {translations[language].supportText.map((text, index) => (
                                        <p key={index}
                                           className={index === 0 ? 'text-gray-800 text-lg mb-4' : 'text-gray-800 text-lg mb-4'}>
                                            {index === 0 ? text : <span
                                                className="text-2xl font-semibold block">{text.split(' — ')[0]}</span>}
                                            {index > 0 && <span className="text-lg"> — {text.split(' — ')[1]}</span>}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Гравці */}
                        <div className="flex-1 bg-gray-100/80 p-3 rounded-lg shadow-md">
                            <div className="flex flex-wrap gap-4 justify-center">
                                {players.map((player, index) => (
                                    <div key={index} className="flex flex-col items-center w-1/4 min-w-[150px]">
                                        <img
                                            src={player.image}
                                            alt={`${player.firstName} ${player.lastName}`}
                                            className="w-full h-60 object-cover rounded-lg mb-2"
                                            onClick={() => handleImageClick(player.image)}
                                        />
                                        <p className="text-gray-800 text-lg text-center">{`${player.firstName} ${player.lastName}`}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Кнопка підтримки */}
                <div className="text-center mt-10">
                    <Link
                        to="/contact"
                        className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors text-lg"
                    >
                        {translations[language].supportBtn}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;