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
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-08-15',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 6,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-09-20',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 7,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-10-05',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 8,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-11-12',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 9,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2025-12-01',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 10,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/logo_ukr.jpg',
    membershipLevel: 'silver',
    joinDate: '2026-01-10',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Анонімний член клубу'
  },
  {
    id: 11,
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
    lastName: 'член клубу',
    photo: '/platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-03-01',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Елітний меценат'
  },
  {
    id: 13,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-03-15',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Елітний меценат'
  },
  {
    id: 14,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-04-01',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
    position: 'Елітний меценат'
  },
  {
    id: 15,
    firstName: 'Анонімний',
    lastName: 'член клубу',
    photo: '/platinum.svg',
    membershipLevel: 'platinum',
    joinDate: '2026-04-20',
    bio: 'За бажанням члена клубу особисті дані залишаються конфіденційними.',
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
      return 'border-[#a78bfa] shadow-[0_0_25px_rgba(167,139,250,0.8),0_0_50px_rgba(139,92,246,0.4)]';
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
      return 'from-violet-900/40 via-purple-800/30 to-indigo-900/40';
    default:
      return 'from-slate-800/80 to-slate-700/80';
  }
};
