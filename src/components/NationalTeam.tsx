import React from 'react';
import { useLanguage } from './LanguageUtils';
import { Link } from 'react-router-dom';

const NationalTeam = () => {
  const { language } = useLanguage();

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
      coach1Name: 'Антон Шашеро',
      coach1Description: 'Головний тренер збірної U-16, 10 років тренерського досвіду, учасник чемпіонатів Європи.',
      coach2Name: 'Максим Дуля',
      coach2Description: 'Помічник тренера, спеціаліст із фізичної підготовки, працює з юнацькими командами 5 років. Гравець РК "Полісся".',
      coach3Name: 'Олександр Мігунов',
      coach3Description: 'Тренер із тактики, 7 років досвіду роботи з юнацькими командами, спеціаліст із ігрових стратегій.',
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
      coach1Name: 'Anton Shashero',
      coach1Description: 'Head coach of the U-16 team, 10 years of coaching experience, participant in European championships.',
      coach2Name: 'Maksym Dulia',
      coach2Description: 'Assistant coach, specialist in physical training, working with youth teams for 5 years. Player of RC "Polissya".',
      coach3Name: 'Oleksandr Migunov',
      coach3Description: 'Tactics coach, 7 years of experience with youth teams, specialist in game strategies.',
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
      coach1Name: 'Anton Shashero',
      coach1Description: 'Az U-16 válogatott vezetőedzője, 10 éves edzői tapasztalattal, európai bajnokságok résztvevője.',
      coach2Name: 'Maksym Dulia',
      coach2Description: 'Segédedző, fizikai felkészülés specialista, 5 éve dolgozik ifjúsági csapatokkal. Játékos a RC "Polissya" csapatában.',
      coach3Name: 'Oleksandr Migunov',
      coach3Description: 'Taktikai edző, 7 éves tapasztalattal ifjúsági csapatokkal, játékstratégiák specialistája.',
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
    { firstName: 'Микола', lastName: 'Денбновецький', image: '/player1.jpg' },
    { firstName: 'Ерік', lastName: 'Тіппан', image: '/player2.jpg' },
    { firstName: 'Володимир', lastName: 'Рец', image: '/player3.jpg' },
    { firstName: 'Нікіта', lastName: 'Сачек', image: '/player4.jpg' },
    { firstName: 'Даниіл', lastName: 'Казнін', image: '/player5.jpg' },
    { firstName: 'Мирослав', lastName: 'Тарасюк', image: '/player6.jpg' },
    { firstName: 'Юрій', lastName: 'Штець', image: '/player7.jpg' },
    { firstName: 'Богдан', lastName: 'Пікульский', image: '/player8.jpg' },
    { firstName: 'Владислав', lastName: 'Кошелюк', image: '/player9.jpg' },
    { firstName: 'Артем', lastName: 'Кухарский', image: '/player10.jpg' },
    { firstName: 'Даніїл', lastName: 'Плєшаков', image: '/player11.jpg' },
    { firstName: 'Олександр', lastName: 'Бишук', image: '/player12.jpg' },
    { firstName: 'Михайло', lastName: 'Четвертик', image: '/player13.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10" style={{ marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
        <div
          className="border-t-2 w-full my-4 md:min-h-5 mt-0 min-h-2"
          style={{ borderRadius: '7px', background: '#1e2838' }}
        />
        <div className="md:mt-5">
          <h2 className="text-4xl font-semibold text-center text-yellow-400 md:mb-10">{translations[language].ourTeamTitle}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Тренери (зліва) */}
            <div className="flex-1 bg-gray-100/80 p-6 rounded-lg shadow-md">
              {coaches.map((coach, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center mb-6 gap-4">
                    <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full md:w-1/3 h-80 object-cover rounded-lg"
                        onClick={() => handleImageClick(coach.image)}
                    />
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{coach.name}</h3>
                      <p className="text-gray-800 text-base">{coach.description}</p>
                    </div>
                  </div>
              ))}
            </div>
            {/* Гравці (справа) */}
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

export default NationalTeam;