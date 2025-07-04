import React, {useState} from 'react';
import {useLanguage} from './LanguageUtils';
import {Link} from 'react-router-dom';

const Club: React.FC = () => {
    const {language} = useLanguage();

    const handleImageClick = (src: string) => {
        window.open(src, '_blank', 'noopener,noreferrer');
    };

    // Об'єкт перекладів для клубу
    const translations = {
        UA: {
            clubTitle: 'РК Закарпатські Шаркані',
            intro1: 'Клуб об\'єднує молодь, студентів та школярів із Закарпаття, створюючи доступні умови для занять регбі, зосереджуючись на вразливих верствах населення - дітях-біженцях, дітях з малозабезпечених та багатодітних сімей, а також національних меншин.',
            intro2: 'Ми формуємо не просто команду, а сильну спільноту, яка розвиває спорт, дисципліну та лідерство.',
            intro3: 'Регулярно беремо участь у всеукраїнських змаганнях, зборах і турнірах, представляючи область на гідному рівні, а також організовуємо свої регіональні змагання та заходи.',
            intro4: 'Наша мета — зробити регбі в Закарпатті масовим і впізнаваним видом спорту.',
            intro5: 'Кожна вкладена гривня допомагає втримати дітей у спорті, а не на вулиці.',
            adultTitle: 'Дорослі',
            adultDesc: 'Доросла команда "Шаркані" — команда вищої ліги ,досвідчені гравці, які представляють Закарпаття на національному та міжнародному рівнях.',
            u14Title: 'U-14',
            u14Desc: 'Юнацька команда U-14 розвиває навички та дисципліну серед молодих гравців віком 12-14 років.',
            u12Title: 'U-12',
            u12Desc: 'Команда U-12 знайомить дітей віком 10-12 років із основами регбі та командної роботи.',
            u10Title: 'U-10',
            u10Desc: 'Наймолодша категорія U-10 зосереджена на базовій підготовці та любові до гри для дітей 8-10 років.',
            supportBtn: 'Підтримати',
            supportText: 'Допоможіть розвитку цієї категорії! Ваш внесок підтримає тренування, обладнання та поїздки.',
            nextBtn: 'Наступна',
        },
        EN: {
            clubTitle: 'RK Zakarpattia Sharks',
            intro1: 'The club unites youth, students, and schoolchildren from Zakarpattia, creating accessible conditions for playing rugby, focusing on vulnerable groups—refugee children, children from low-income and large families, and national minorities.',
            intro2: 'We are building not just a team, but a strong community that promotes sport, discipline, and leadership.',
            intro3: 'We regularly participate in national competitions, camps, and tournaments, representing the region at a high level, and also organize our own regional events and activities.',
            intro4: 'Our goal is to make rugby a widespread and recognizable sport in Zakarpattia.',
            intro5: 'Every hryvnia invested helps keep children in sports and off the streets.',
            adultTitle: 'Adults',
            adultDesc: 'The adult "Sharks" team consists of experienced players representing Zakarpattia at national and international levels.',
            u14Title: 'U-14',
            u14Desc: 'The U-14 youth team develops skills and discipline among players aged 12-14.',
            u12Title: 'U-12',
            u12Desc: 'The U-12 team introduces children aged 10-12 to the basics of rugby and teamwork.',
            u10Title: 'U-10',
            u10Desc: 'The youngest U-10 category focuses on basic training and love for the game for children aged 8-10.',
            supportBtn: 'Support',
            supportText: 'Help develop this category! Your contribution will support training, equipment, and trips.',
            nextBtn: 'Next',
        },
        HUN: {
            clubTitle: 'RK Zakarpátiai Cápa',
            intro1: 'A klub Kárpátalja fiataljait, diákjait és iskolásait egyesíti, létrehozva a rögbihez való hozzáférhető feltételeket, különös figyelmet fordítva a kiszolgáltatott csoportokra – menekült gyerekekre, alacsony jövedelmű és nagycsaládos gyerekekre, valamint nemzeti kisebbségekre.',
            intro2: 'Nem csupán egy csapatot építünk, hanem egy erős közösséget, amely elősegíti a sportot, a fegyelmet és a vezetői készségeket.',
            intro3: 'Rendszeresen részt veszünk az országos versenyeken, táborokban és tornákon, méltó szinten képviselve a régiót, valamint saját regionális rendezvényeket és eseményeket szervezünk.',
            intro4: 'Célunk, що a rögbi Kárpátalján elterjedt és felismerhető sporttá váljon.',
            intro5: 'Minden befektetett hrivnya segít a gyerekeket a sportban tartani, és az utcáról távol tartani.',
            adultTitle: 'Felnőttek',
            adultDesc: 'A felnőtt "Cápa" csapat tapasztalt játékosokból áll, akik Kárpátalját képviselik nemzeti és nemzetközi szinten.',
            u14Title: 'U-14',
            u14Desc: 'Az U-14 ifjúsági csapat a 12-14 éves játékosok készségeit és fegyelmezettségét fejleszti.',
            u12Title: 'U-12',
            u12Desc: 'Az U-12 csapat a 10-12 éves gyermekeket ismerteti meg a rögbi alapjaival és a csapatszellemével.',
            u10Title: 'U-10',
            u10Desc: 'A legfiatalabb U-10 kategória a 8-10 éves gyerekek alapképzésére és a játék szeretetére fókuszál.',
            supportBtn: 'Támogatás',
            supportText: 'Segíts ennek a kategóriának a fejlődésében! Adományod támogatja az edzéseket, felszerelést és utakat.',
            nextBtn: 'Következő',
        },
    };

    // Масив фотографій (замініть на свої)
    const allImages = [
        '/gallery1.jpg',
        '/gallery2.png',
        '/gallery3.png',
        '/gallery4.png',
        '/gallery5.png',
        '/gallery6.png',
        '/gallery7.jpg',
        '/gallery8.jpg',
        '/gallery10.png',
        '/gallery11.jpg',
    ];

    // Стан для відображення двох зображень
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функція для переходу до наступного зображення
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    // Функція для переходу до попереднього зображення
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10"
             style={{marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">{translations[language].clubTitle}</h1>
                <div className="text-white text-xl text-center mb-10">
                    <p className="mb-4">{translations[language].intro1}</p>
                    <p className="mb-4">{translations[language].intro2}</p>
                    <p className="mb-4">{translations[language].intro3}</p>
                    <p className="mb-4">{translations[language].intro4}</p>
                    <p className="mb-4">{translations[language].intro5}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{marginTop: '10vh'}}>
                    {/* Дорослі */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src="/adult_team.png"
                            alt="Закарпатські Шаркани"
                            className="w-full md:w-130 h-100 object-cover rounded-lg"
                            onClick={() => handleImageClick('/adult-team.png')}
                            style={{marginTop: '2vh'}}
                        />
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">{translations[language].adultTitle}</h2>
                        <p className="text-gray-600 mt-2">{translations[language].adultDesc}</p>
                        <Link
                            to="/contact"
                            className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors block text-center"
                        >
                            {translations[language].supportBtn}
                        </Link>
                    </div>

                    {/* U-14 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src="/u-14.JPG"
                            alt="Закарпатські Шаркани"
                            className="w-full md:w-130 h-100 object-cover rounded-lg"
                            onClick={() => handleImageClick('/u-14.JPG')}
                            style={{marginTop: '2vh'}}
                        />
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">{translations[language].u14Title}</h2>
                        <p className="text-gray-600 mt-2">{translations[language].u14Desc}</p>
                        <Link
                            to="/contact"
                            className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors block text-center"
                            style={{marginTop: '4vh'}}
                        >
                            {translations[language].supportBtn}
                        </Link>
                    </div>

                    {/* U-12 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src="/u-12-club.jpg"
                            alt="Закарпатські Шаркани"
                            className="w-full md:w-130 h-100 object-cover rounded-lg"
                            onClick={() => handleImageClick('/u-12-club.jpg')}
                            style={{marginTop: '2vh'}}
                        />
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">{translations[language].u12Title}</h2>
                        <p className="text-gray-600 mt-2">{translations[language].u12Desc}</p>
                        <Link
                            to="/contact"
                            className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors block text-center"
                            style={{marginTop: '4vh'}}
                        >
                            {translations[language].supportBtn}
                        </Link>
                    </div>

                    {/* U-10 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <img
                            src="/u-12.png"
                            alt={translations[language].u10Title}
                            className="w-full h-100 object-cover rounded-t-lg"
                            onClick={() => handleImageClick('/u-12.png')}
                            style={{marginTop: '2vh'}}
                        />
                        <h2 className="text-2xl font-semibold text-gray-700 mt-4">{translations[language].u10Title}</h2>
                        <p className="text-gray-600 mt-2">{translations[language].u10Desc}</p>
                        <Link
                            to="/contact"
                            className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors block text-center"
                            style={{marginTop: '4vh'}}
                        >
                            {translations[language].supportBtn}
                        </Link>
                    </div>
                </div>
                {/* Галерея */}
                <div className="mt-10 flex justify-center items-center" style={{maxWidth: '85vw', marginTop: '10vh'}}>
                    <div className="relative flex flex-row w-full max-w-4xl" style={{minWidth: '100%',marginLeft:'20vw'}}>
                        <button
                            className="bg-gray-100/50 text-white p-4 hover:bg-gray-300 transition-colors"
                            onClick={handlePrev}
                            style={{height: '5vh', borderRadius: '5px', marginTop: '30vh'}}
                        >
                            <img src="/back-button.png" alt="Back" className="w-full h-full object-cover"/>
                        </button>
                        <img
                            src={allImages[currentIndex]}
                            alt={`Gallery ${currentIndex + 1}`}
                            className="w-full object-cover rounded-lg mx-auto"
                            style={{minHeight: '35vh', maxHeight: '70vh', minWidth: '60vw', maxWidth: '60vw'}}
                            onClick={() => handleImageClick(allImages[currentIndex])}
                        />
                        <button
                            className="bg-gray-100/50 text-white p-4 hover:bg-gray-300 transition-colors"
                            onClick={handleNext}
                            style={{height: '5vh', borderRadius: '5px', marginTop: '30vh',marginRight:'10vw'}}
                        >
                            <img src="/next-button.png" alt="Next" className="w-full h-full object-cover"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Club;