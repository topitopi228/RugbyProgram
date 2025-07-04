import React from 'react';
import { useLanguage } from './LanguageUtils';
import { Link } from 'react-router-dom';

const NationalTeam: React.FC = () => {
  const { language } = useLanguage();

  const handleImageClick = (src: string) => {
    window.open(src, '_blank', 'noopener,noreferrer');
  };

  // Об'єкт перекладів для національної збірної
  const translations = {
    UA: {
      teamTitle: 'Збірна України U-16',
      intro1: 'Допомога національній команді на змаганнях, включаючи екіпіровку та міжнародні поїздки.',
      intro2: 'У складі збірної — представники нашого клубу: гравець, головний тренер, менеджер і лікар, які не лише виконують свої ролі, а й формують спортивне обличчя країни на європейській арені.',
      intro3: 'Команда системно бере участь у навчально-тренувальних зборах та товариських іграх за кордоном, готуючись представляти Україну з честю і гідністю на Європейських змаганнях.',
      intro4: 'Збірна U-16 — це фундамент майбутньої національної команди, який потребує стабільної підтримки для зростання та збереження потенціалу молодих спортсменів.',
      intro5: 'Кожен внесок допомагає нашим юнакам здобувати досвід, розвиватися та вірити в майбутнє українського спорту.',
      supportBtn: 'Підтримати',
    },
    EN: {
      teamTitle: 'Ukraine U-16 National Team',
      intro1: 'Support for the national team in competitions, including equipment and international trips.',
      intro2: 'The team includes representatives from our club: a player, head coach, manager, and doctor, who not only fulfill their roles but also shape the sporting face of the country on the European stage.',
      intro3: 'The team systematically participates in training camps and friendly matches abroad, preparing to represent Ukraine with honor and dignity at European competitions.',
      intro4: 'The U-16 team is the foundation of the future national team, requiring stable support for the growth and preservation of young athletes\' potential.',
      intro5: 'Every contribution helps our young players gain experience, develop, and believe in the future of Ukrainian sports.',
      supportBtn: 'Support',
    },
    HUN: {
      teamTitle: 'Ukrajna U-16 Válogatott',
      intro1: 'A nemzeti csapat támogatása a versenyeken, beleértve a felszerelést és a nemzetközi utazásokat.',
      intro2: 'A csapatban a klubunk képviselői találhatók: egy játékos, a vezetőedző, a menedzser és az orvos, akik nemcsak szerepeiket töltik be, hanem alakítják az ország sportarcát az európai színpadon.',
      intro3: 'A csapat rendszeresen részt vesz edzőtáborokban és barátságos mérkőzéseken külföldön, hogy méltósággal és büszkeséggel képviselje Ukrajnát az európai versenyeken.',
      intro4: 'Az U-16 válogatott a jövőbeli nemzeti csapat alapja, amely stabil támogatásra szorul a fiatal sportolók fejlődéséhez és potenciáljának megőrzéséhez.',
      intro5: 'Minden hozzájárulás segít fiataljainknak tapasztalatot szerezni, fejlődni és hinni az ukrán sport jövőjében.',
      supportBtn: 'Támogatás',
    },
  };

  // Масив зображень для галереї (6 зображень)
  const galleryImages = [
    '/nat1.jpg',
    '/nat2.png',
    '/u-16.JPG',
    '/nat4.jpg',
    '/nat5.jpg',
    '/nat6.png',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10" style={{ marginTop: '90px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">{translations[language].teamTitle}</h1>
        <div className="text-white text-xl text-center mb-10">
          <p className="mb-4">{translations[language].intro1}</p>
          <p className="mb-4">{translations[language].intro2}</p>
          <p className="mb-4">{translations[language].intro3}</p>
          <p className="mb-4">{translations[language].intro4}</p>
          <p className="mb-4">{translations[language].intro5}</p>
        </div>
        {/* Галерея */}
        <div className="mt-10 grid grid-cols-2 gap-6" style={{ marginTop: '10vh' }}>
          {galleryImages.map((src, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
                style={{ minHeight: '60vh' }}
                onClick={() => handleImageClick(src)}
              />
            </div>
          ))}
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