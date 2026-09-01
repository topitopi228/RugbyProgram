export type MembershipLevel = 'starter' | 'silver' | 'gold' | 'platinum';

export interface ClubMember {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
  membershipLevel: MembershipLevel;
  joinDate: string;
  bio: string;
  position?: string;
}

// Функція генерації шляху до фото члена клубу
const getMemberPhoto = (memberId: number): string => {
  return `/club${memberId}.webp`;
};

// Реальні члени клубу
export const clubMembers: ClubMember[] = [
  {
    id: 1,
    firstName: 'Федір',
    lastName: 'Шандор',
    photo: getMemberPhoto(1), // /club1.webp
    membershipLevel: 'gold',
    joinDate: '2025-04-07',
    bio: 'Надзвичайний і Повноважний Посол України в Угорщині. Активний промоутер розвитку регбі в регіоні та підтримки молодіжних команд.',
    position: 'Надзвичайний і Повноважний Посол України в Угорщині'
  },
  {
    id: 2,
    firstName: 'Антон',
    lastName: 'Копилов',
    photo: getMemberPhoto(2), // /club2.webp
    membershipLevel: 'gold',
    joinDate: '2025-07-10',
    bio: 'Підприємець, який активно підтримує розвиток молодіжного спорту в Україні. Вірить у силу регбі як інструменту виховання характеру та командного духу.',
    position: 'Підприємець'
  },
  {
    id: 3,
    firstName: 'Андрій',
    lastName: 'Петьовка',
    photo: getMemberPhoto(3), // /club3.webp
    membershipLevel: 'gold',
    joinDate: '2025-07-10',
    bio: 'Меценат спорту, який присвятив себе підтримці молодих спортсменів. Активно сприяє розвитку регбі-7 серед юніорів України.',
    position: 'Меценат спорту'
  },
  {
    id: 4,
    firstName: 'Олексій',
    lastName: 'Юренко',
    photo: getMemberPhoto(4), // /club4.webp
    membershipLevel: 'gold',
    joinDate: '2025-04-07',
    bio: 'Засновник благодійного фонду "Міла". Підтримує соціальні ініціативи та розвиток молодіжного спорту в Україні.',
    position: 'Засновник БФ "Міла"'
  },
  {
    id: 5,
    firstName: 'Денис',
    lastName: 'Рибачок',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'gold',
    joinDate: '2026-09-01',
    bio: 'Підтримує розвиток молодіжного регбі в Україні та сприяє підготовці національної збірної.',
    position: 'Меценат'
  },
  {
    id: 16,
    firstName: 'Максим',
    lastName: 'Рашовський',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'gold',
    joinDate: '2026-09-01',
    bio: 'Активний прихильник українського спорту, який вірить у майбутнє юних регбістів.',
    position: 'Меценат'
  },
  {
    id: 17,
    firstName: 'Максим',
    lastName: 'Замрика',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'gold',
    joinDate: '2026-09-01',
    bio: 'Підприємець, який підтримує розвиток регбі-7 та допомагає молодим спортсменам.',
    position: 'Меценат'
  },
  {
    id: 18,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-08-15',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 19,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-09-20',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 20,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-10-05',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 21,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-11-12',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 22,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-12-01',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 23,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2026-01-10',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 24,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2026-02-15',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 12,
    firstName: 'Анонімний',
    lastName: 'меценат',
    photo: '/diamond-platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-03-01',
    bio: 'Високоповажний благодійник, який робить значний внесок у розвиток українського регбі. Підтримка на найвищому рівні.',
    position: 'Елітний меценат'
  },
  {
    id: 13,
    firstName: 'Анонімний',
    lastName: 'меценат',
    photo: '/diamond-platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-03-15',
    bio: 'Видатний благодійник, чия щедра підтримка допомагає юним спортсменам досягати найвищих результатів.',
    position: 'Елітний меценат'
  },
  {
    id: 14,
    firstName: 'Анонімний',
    lastName: 'меценат',
    photo: '/diamond-platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-04-01',
    bio: 'Преміум-партнер проєкту, який вірить у силу спорту та інвестує в майбутнє українських чемпіонів.',
    position: 'Елітний меценат'
  },
  {
    id: 15,
    firstName: 'Анонімний',
    lastName: 'меценат',
    photo: '/diamond-platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-04-20',
    bio: 'VIP-благодійник найвищого рівня, чия підтримка є фундаментом успіху збірної України з регбі-7.',
    position: 'Елітний меценат'
  }
];

// Функція для отримання кольору рамки за рівнем підписки
export const getMembershipBorderStyle = (level: MembershipLevel): string => {
  switch (level) {
    case 'starter':
      return 'border-slate-600';
    case 'silver':
      return 'border-gray-300 shadow-[0_0_12px_rgba(192,192,192,0.6)]';
    case 'gold':
      return 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]';
    case 'platinum':
      return 'border-[#a78bfa] shadow-[0_0_20px_rgba(167,139,250,0.4)]';
    default:
      return 'border-slate-600';
  }
};

// Функція для отримання градієнту фону за рівнем підписки
export const getMembershipGradient = (level: MembershipLevel): string => {
  switch (level) {
    case 'starter':
      return 'from-slate-800/80 to-slate-700/80';
    case 'silver':
      return 'from-gray-600/40 via-gray-500/30 to-gray-600/40';
    case 'gold':
      return 'from-amber-900/30 via-amber-800/20 to-amber-900/30';
    case 'platinum':
      return 'from-slate-800/90 via-slate-900 to-slate-800/90';
    default:
      return 'from-slate-800/80 to-slate-700/80';
  }
};
