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
    firstName: 'Шандор',
    lastName: 'Федір',
    photo: getMemberPhoto(1), // /club1.webp
    membershipLevel: 'gold',
    joinDate: '2025-12-18',
    bio: 'Надзвичайний і Повноважний Посол України в Угорщині. Активний промоутер розвитку регбі в регіоні та підтримки молодіжних команд.',
    position: 'Надзвичайний і Повноважний Посол України в Угорщині'
  },
  {
    id: 2,
    firstName: 'Антон',
    lastName: 'Копілов',
    photo: getMemberPhoto(2), // /club2.webp
    membershipLevel: 'gold',
    joinDate: '2025-12-24',
    bio: 'Підприємець, який активно підтримує розвиток молодіжного спорту в Україні. Вірить у силу регбі як інструменту виховання характеру та командного духу.',
    position: 'Підприємець'
  },
  {
    id: 3,
    firstName: 'Андрій',
    lastName: 'Петьовка',
    photo: getMemberPhoto(3), // /club3.webp
    membershipLevel: 'gold',
    joinDate: '2025-12-24',
    bio: 'Меценат спорту, який присвятив себе підтримці молодих спортсменів. Активно сприяє розвитку регбі-7 серед юніорів України.',
    position: 'Меценат спорту'
  },
  {
    id: 4,
    firstName: 'Олексій',
    lastName: 'Юренко',
    photo: getMemberPhoto(4), // /club4.webp
    membershipLevel: 'gold',
    joinDate: '2025-12-24',
    bio: 'Засновник благодійного фонду "Міла". Підтримує соціальні ініціативи та розвиток молодіжного спорту в Україні.',
    position: 'Засновник БФ "Міла"'
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
      return 'border-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.5)]';
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
      return 'from-purple-900/30 via-purple-800/20 to-purple-900/30';
    default:
      return 'from-slate-800/80 to-slate-700/80';
  }
};
