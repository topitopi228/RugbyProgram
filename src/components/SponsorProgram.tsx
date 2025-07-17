import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import "./SponsorsProgram.css";
import {useLanguage} from './LanguageUtils';

const SponsorProgram = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
    const location = useLocation();
    const {language} = useLanguage(); // Отримуємо поточну мову з контексту

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 550);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleImageClick = (src) => {
        window.open(src, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        if (location.pathname === '/contact') {
            const contactSection = document.getElementById('contacts');
            if (contactSection) {
                contactSection.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [location]);

    // Об'єкт перекладів
    const translations = {
        UA: {
            supportTitle: 'Підтримай Регбі України',
            supportText: 'Станьте спонсором і допоможіть розвивати регбі в Україні! Наш проєкт уже має соціальну цінність, результати, команду, систему тренувань та мотивацію — більше, ніж у 90% заявників на гранти. Ви можете розраховувати на підтримку в таких напрямках:',
            supportList: [
                'Фінансування зарплати керівнику (законно і очікувано).',
                'Обладнання: форма, м’ячі, рюкзаки, транспорт, страхування.',
                'Поїздки на змагання — витрати на дітей повністю компенсують.',
                'Кошти на відкриття секцій в інших селах для масштабування.',
                'Побудова міні-поля або тренувального майданчика на першому етапі.',
            ],
            readyText: '🙌 Ви вже готові! Долучіться до нас і допоможіть регбі зростати. Ось три ключові проєкти:',
            zakarpattiaTitle: 'РК Закарпатські Шаркани',
            zakarpattiaDesc1: 'Підтримка місцевої команди "ЗАКАРПАТСЬКІ ШАРКАНІ" різних вікових категорій:',
            zakarpattiaDesc2: 'Організація тренувань, забезпечення сучасним обладнанням, такими як форма, м’ячі та рюкзаки.',
            zakarpattiaDesc3: 'Організація поїздок на міжнародні змагання за спонсорські кошти, що сприяє розвитку регбі серед юніорів, юнаків та дорослих.',
            zakarpattiaBenefits: 'Спонсори отримують: розміщення банерів, логотип на майках або маніжках, та визнання в нашій спільноті.',
            zakarpattiaMobile: 'Підтримка місцевої команди "ЗАКАРПАТСЬКІ ШАРКАНІ" різних вікових категорій: Організація тренувань, забезпечення сучасним обладнанням, такими як форма, м’ячі та рюкзаки.',
            u16Title: 'Збірна України U-16',
            u16Desc1: 'Допомога національній збірній U-16:',
            u16Desc2: 'Організація тренувань, забезпечення сучасним обладнанням, такими як форма, м’ячі та рюкзаки.',
            u16Desc3: 'Організація поїздок на міжнародні змагання та тренувальних зборів за спонсорські кошти, що сприяє розвитку регбі серед юніорів, юнаків та дорослих.',
            u16Benefits: 'Спонсори отримують: розміщення банерів, логотип на майках або маніжках, та визнання в нашій спільноті. Найвідданіші спонсори отримують білет на олімпійські ігри, якщо збірна проходить на олімпіаду.',
            u16Mobile: 'Допомога національній збірній U-16 Організація поїздок на міжнародні змагання та тренувальних зборів за спонсорські кошти.',
            stadiumTitle: 'Новий стадіон',
            stadiumDesc1: 'Будівництво сучасного регбійного стадіону.',
            stadiumDesc2: 'Це буде перший спеціалізований регбійний об’єкт на Закарпатті, створений із нуля.',
            stadiumDesc3: 'Він покликаний стати центром розвитку регбі в області — для тренувань, змагань, зборів та дитячих секцій.',
            stadiumDesc4: 'Проєкт передбачає якісне поле, роздягальні, душові, складські приміщення та трибуни для глядачів.',
            stadiumMobile: 'Будівництво сучасного регбійного стадіону. Це буде перший спеціалізований регбійний об’єкт на Закарпатті, створений із нуля.',
            learnMore: 'Дізнатися більше',
            contactTitle: 'ГОТОВІ ПІДТРИМАТИ РЕГБІ? МОЖЕТЕ ЗВ\'ЯЗАТИСЬ БУДЬ ЯКИМ ЗРУЧНИМ СПОСОБОМ!',
        },
        EN: {
            supportTitle: 'Support Ukrainian Rugby',
            supportText: 'Become a sponsor and help develop rugby in Ukraine! Our project already has social value, results, a team, a training system, and motivation—more than 90% of grant applicants. You can count on support in the following areas:',
            supportList: [
                'Funding for the manager\'s salary (legal and expected).',
                'Equipment: uniforms, balls, backpacks, transportation, insurance.',
                'Competition trips—full compensation for children\'s expenses.',
                'Funds to open sections in other villages for scaling.',
                'Construction of a mini-field or training ground in the first stage.',
            ],
            readyText: '🙌 You’re ready! Join us and help rugby grow. Here are three key projects:',
            zakarpattiaTitle: 'RK Zakarpattia Sharkani',
            zakarpattiaDesc1: 'Support for the local team "Zakarpattia Sharks" across various age groups:',
            zakarpattiaDesc2: 'Organizing training, providing modern equipment such as uniforms, balls, and backpacks.',
            zakarpattiaDesc3: 'Organizing trips to international competitions with sponsor funds, fostering rugby development among juniors, youths, and adults.',
            zakarpattiaBenefits: 'Sponsors receive: banner placement, logo on jerseys or vests, and recognition in our community.',
            zakarpattiaMobile: 'Support for the local team "Zakarpattia Sharks" across various age groups: Organizing training, providing modern equipment such as uniforms, balls, and backpacks.',
            u16Title: 'Ukraine U-16 National Team',
            u16Desc1: 'Support for the national U-16 team:',
            u16Desc2: 'Organizing training, providing modern equipment such as uniforms, balls, and backpacks.',
            u16Desc3: 'Organizing trips to international competitions and training camps with sponsor funds, fostering rugby development among juniors, youths, and adults.',
            u16Benefits: 'Sponsors receive: banner placement, logo on jerseys or vests, and recognition in our community. The most dedicated sponsors receive an Olympic Games ticket if the team qualifies.',
            u16Mobile: 'Support for the national U-16 team: Organizing trips to international competitions and training camps with sponsor funds.',
            stadiumTitle: 'New Stadium',
            stadiumDesc1: 'Construction of a modern rugby stadium.',
            stadiumDesc2: 'It will be the first specialized rugby facility in Zakarpattia, built from scratch.',
            stadiumDesc3: 'It is intended to become a center for rugby development in the region—for training, competitions, camps, and youth sections.',
            stadiumDesc4: 'The project includes a high-quality field, changing rooms, showers, storage facilities, and stands for spectators.',
            stadiumMobile: 'Construction of a modern rugby stadium. It will be the first specialized rugby facility in Zakarpattia, built from scratch.',
            learnMore: 'Learn More',
            contactTitle: 'READY TO SUPPORT RUGBY? YOU CAN GET IN TOUCH ANY CONVENIENT WAY!',
        },
        HUN: {
            supportTitle: 'Támogatni a kárpátaljai rögbit',
            supportText: 'Legyél szponzor, és segíts a rögbi fejlesztésében Ukrajnában! Projektünk már most is társadalmi értéket, eredményeket, csapatot, edzésrendszert és motivációt kínál – többet, mint a pályázók 90%-a. A következő területeken számíthatsz támogatásra:',
            supportList: [
                'A vezető fizetésének finanszírozása (jogszerű és elvárható).',
                'Felszerelés: egyenruhák, labdák, hátizsákok, szállítás, biztosítás.',
                'Versenyutak – a gyerekek költségeit teljes mértékben megtérítjük.',
                'Pénz más falvakban lévő szekciók megnyitására a bővítés érdekében.',
                'Mini-pálya vagy edzőpálya építése az első szakaszban.',
            ],
            readyText: '🙌 Készen állsz! Csatlakozz hozzánk, és segíts a rögbi növekedésében. Íme három kulcsfontosságú projekt:',
            zakarpattiaTitle: 'RK Zakarpátiai Sharkani',
            zakarpattiaDesc1: 'A "Zakarpátiai Sharkani" helyi csapatának támogatása különböző korcsoportokban:',
            zakarpattiaDesc2: 'Edzések szervezése, modern felszerelések biztosítása, mint például egyenruhák, labdák és hátizsákok.',
            zakarpattiaDesc3: 'Nemzetközi versenyekre való utazások szervezése szponzori pénzekből, elősegítve a rögbi fejlődését a juniorok, ifjak és felnőttek körében.',
            zakarpattiaBenefits: 'A szponzorok kapnak: banner elhelyezést, logót a mezeken vagy mellényeken, valamint elismerést közösségünkben.',
            zakarpattiaMobile: 'A "Zakarpátiai Sharkani" helyi csapatának támogatása különböző korcsoportokban: Edzések szervezése, modern felszerelések biztosítása, mint például egyenruhák, labdák és hátizsákok.',
            u16Title: 'Ukrajna U-16 Válogatott',
            u16Desc1: 'A nemzeti U-16 válogatott támogatása:',
            u16Desc2: 'Edzések szervezése, modern felszerelések biztosítása, mint például egyenruhák, labdák és hátizsákok.',
            u16Desc3: 'Nemzetközi versenyekre és edzőtáborokra való utazások szervezése szponzori pénzekből, elősegítve a rögbi fejlődését a juniorok, ifjak és felnőttek körében.',
            u16Benefits: 'A szponzorok kapnak: banner elhelyezést, logót a mezeken vagy mellényeken, valamint elismerést közösségünkben. A legelkötelezettebb szponzorok olimpiai jegyet kapnak, ha a csapat kvalifikál.',
            u16Mobile: 'A nemzeti U-16 válogatott támogatása: Nemzetközi versenyекre és edzőtáborokra való utazások szervezése szponзори pénzekből.',
            stadiumTitle: 'Új Stadion',
            stadiumDesc1: 'Modern rögbi stadion építése.',
            stadiumDesc2: 'Ez lesz az első speciális rögbi létesítmény Kárpátalján, amely nulláról épül.',
            stadiumDesc3: 'Célja, hogy a régió rögbi-fejlesztésének központja legyen – edzésekhez, versenyekhez, táborokhoz és gyermekszekciókhoz.',
            stadiumDesc4: 'A projekt magában foglal egy minőségi pályát, öltözőket, zuhanyzókat, raktárhelyiségeket és nézőtribünöket.',
            stadiumMobile: 'Modern rögbi stadion építése. Ez lesz az első speciális rögbi létesítmény Kárпátalján, amely nulláról épül.',
            learnMore: 'Tudj meg többet',
            contactTitle: 'KÉSZ VAGY TÁMOGATNI A RÖGBIT? BÁRMILYEN KÉNYELMES MÓDON FELVEHETED VELÜNK A KAPCSOLATOT!',
        },
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-between">
                <div className="text-center py-10" style={{marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">{translations[language].supportTitle}</h2>
                    <p className="md:text-lg text-white mb-8">{translations[language].supportText}</p>
                    <ul className="text-left max-w-2xl mx-auto md:text-lg text-white mb-8 list-disc pl-6">
                        {translations[language].supportList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="md:text-lg text-white mb-8">{translations[language].readyText}</p>
                    <div className="flex flex-col gap-15">
                        {/* Збірна України U-16 */}
                        <div
                            className="bg-gray-100/80 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                            style={{maxWidth: '70vw', marginLeft: '15vw'}}
                        >
                            <div className="mb-4 md:mb-0 md:mr-6">
                                <h3 className="text-4xl font-semibold text-gray-800 mb-2">{translations[language].u16Title}</h3>
                                <div
                                    className="border-t-2 border-gray-300 w-full my-4 md:min-h-3 mt-0 min-h-2"
                                    style={{
                                        borderRadius: '7px',
                                        background: '#1e2838',
                                    }}
                                />
                                <img
                                    src="/u-16.JPG"
                                    alt="Збірна України U-16"
                                    className="w-full md:w-130 md:h-100 object-cover rounded-lg"
                                    onClick={() => handleImageClick('/u-16.JPG')}
                                />
                            </div>
                            <div className="flex-1 md:mt-15">
                                {isMobile ? (
                                    <p className="text-black md:text-xl mb-4">{translations[language].u16Mobile}</p>
                                ) : (
                                    <>
                                        <p className="text-black md:text-xl mb-4">{translations[language].u16Desc1}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].u16Desc2}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].u16Desc3}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].u16Benefits}</p>
                                    </>
                                )}
                                <Link
                                    to="/national-team"
                                    className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                                >
                                    {translations[language].learnMore}
                                </Link>
                            </div>
                        </div>
                        <div
                            className="bg-gray-100/80 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                            style={{maxWidth: '70vw', marginLeft: '15vw', marginTop: '5vh'}}
                        >
                            <div className="mb-4 md:mb-0 md:mr-6">
                                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-0 mb-2">{translations[language].zakarpattiaTitle}</h3>
                                <div
                                    className="border-t-2 border-gray-300 w-full my-4 md:min-h-3 mt-0 min-h-2"
                                    style={{
                                        borderRadius: '7px',
                                        background: '#1e2838',
                                    }}
                                />
                                <img
                                    src="/sharkani1.JPG"
                                    alt="Закарпатські Шаркани"
                                    className="w-full md:w-130 md:h-100 md:mt-0 object-cover rounded-lg h-60"
                                    onClick={() => handleImageClick('/sharkani1.JPG')}
                                />
                            </div>
                            <div className="flex-1 mt-0">
                                {isMobile ? (
                                    <p className="text-black md:text-xl mb-4">{translations[language].zakarpattiaMobile}</p>
                                ) : (
                                    <>
                                        <p className="text-black md:text-xl mb-4">{translations[language].zakarpattiaDesc1}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].zakarpattiaDesc2}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].zakarpattiaDesc3}</p>
                                        <p className="text-black md:text-xl mb-4">{translations[language].zakarpattiaBenefits}</p>
                                    </>
                                )}
                                <Link
                                    to="/club"
                                    className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                                >
                                    {translations[language].learnMore}
                                </Link>
                            </div>
                        </div>
                        {/* Новий стадіон */}
                        <div
                            className="bg-gray-100/80 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                            style={{maxWidth: '70vw', marginLeft: '15vw'}}
                        >
                            <div className="mb-4 md:mb-0 md:mr-6">
                                <h3 className="text-4xl font-semibold text-gray-800 mb-2">{translations[language].stadiumTitle}</h3>
                                <div
                                    className="border-t-2 border-gray-300 w-full my-4 md:min-h-3 mt-0 min-h-2"
                                    style={{
                                        borderRadius: '7px',
                                        background: '#1e2838',
                                    }}
                                />
                                <img
                                    src="/gdynia.png"
                                    alt="Gdynia"
                                    className="w-full md:w-130 md:h-100 object-cover rounded-lg"
                                    onClick={() => handleImageClick('/gdynia.png')}
                                    style={{marginTop: '2vh'}}
                                />
                            </div>
                            <div className="flex-1">
                                {isMobile ? (
                                    <p className="text-black md:text-xl mb-4">{translations[language].stadiumMobile}</p>
                                ) : (
                                    <>
                                        <p className="text-black mb-4 md:text-xl">{translations[language].stadiumDesc1}</p>
                                        <p className="text-black mb-4 md:text-xl">{translations[language].stadiumDesc2}</p>
                                        <p className="text-black mb-4 md:text-xl">{translations[language].stadiumDesc3}</p>
                                        <p className="text-black mb-4 md:text-xl">{translations[language].stadiumDesc4}</p>
                                    </>
                                )}
                                <Link
                                    to="/stadium"
                                    className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                                >
                                    {translations[language].learnMore}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white py-8 w-full md:min-h-40 md:p-0 min-h-70" id="contacts" style={{
                borderRadius: '10px',
                padding: 0,
                backgroundColor: 'rgba(50, 50, 50, 0.9)'
            }}>
                <div
                    className="container mx-auto flex flex-row items-center max-w-full px-0 p-0"
                    style={{borderRadius: '10px'}}
                >
                    {/* Логотип */}
                    <div className="text-center mt-7 min-w-18 md:ml-30 ml-5 ">
                        <img
                            src="/logo_rugby.png"
                            alt="Wins Trans Logo"
                            className="logo-contact-png rounded-lg w-[100px] h-[50px] md:w-[250px] md:h-[100px] mb-5 "
                        />
                        <img
                            src="/logo_ukr.jpg"
                            alt="Ukraine Logo"
                            className="logo-contact-png rounded-lg md:w-[250px] md:h-[100px] mt-5 md:mb-1"
                        />
                    </div>
                    {/* Форма */}
                    <div
                        className="flex flex-col items-center p-0 max-w-full px-0 mt-7"
                        style={{marginLeft: '5vw', maxHeight: '25vh'}}
                    >
                        <h1
                            className={`text font-bold text-yellow-400 ${isMobile ? 'mb-1' : 'mb-2'}`}
                            style={{marginBottom: '1vh'}}
                        >
                            <Link to="/" className="text-white md:text-lg text-xs" style={{marginBottom: '1vh'}}>
                                {translations[language].contactTitle}
                            </Link>
                        </h1>
                        <div className="flex items-center gap-2  md:max-h-[6vh] animate-pulse"
                             style={{marginTop: '20px'}}>
                            <div className="bg-white rounded-full p-2">
                                <img
                                    src="/phone-call-white.png"
                                    alt="Phone"
                                    className="w-[20px] md:h-[20px] object-contain"
                                />
                            </div>
                            <a
                                href="tel:+380992671566"
                                className="text-white font-bold md:text-[15px] ml-[0.6vw] hover:underline"
                            >
                                (050) 949 82 09
                            </a>
                        </div>
                        <div className="flex items-center gap-2 max-h-[6vh] animate-pulse" style={{marginTop: '20px'}}>
                            <div className="bg-white rounded-full p-2" style={{marginLeft: '60px'}}>
                                <img
                                    src="/telegram.png"
                                    alt="Telegram"
                                    className="w-[20px] h-[20px] object-contain"
                                />
                            </div>
                            <a
                                href="https://t.me/@ivanovich112"
                                className="text-white text-[13px] font-bold ml-[0.5vw] hover:underline"
                                style={{marginRight: '105px'}}
                            >
                                TELEGRAM
                            </a>
                        </div>
                        <div className="flex items-center gap-2 max-h-[6vh] animate-pulse" style={{marginTop: '20px'}}>
                            <div className="bg-white rounded-full p-2 md:ml-25 ml-20 min-w-9">
                                <img
                                    src="/gmail.png"
                                    alt="Gmail"
                                    className="md:w-[20px] md:h-[20px] w-[40px] h-[20px] object-contain"
                                />
                            </div>
                            <a
                                href="viber://chat?number=%2B992671566"
                                className="text-white text-[15px] font-bold ml-[1vw] hover:underline"
                                style={{marginRight: '1vw'}}
                            >
                                rugby.support@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SponsorProgram;