export interface MediaItem {
    id: number;
    type: 'video' | 'photo';
    url: string;
    poster: string;
    title: {
        UA: string;
        EN: string;
        HUN: string;
    };
    category?: string;
    event?: EventCategory; // Нова властивість для події
    cloudinaryId?: string; // ID в Cloudinary
}

export type EventCategory = 
    | 'all'
    | 'lisbon2026'
    | 'gdynia1'
    | 'gdynia2'
    | 'batumi2025'
    | 'newzealand2026'
    | 'italy2026'
    | 'france2026'
    | 'austria2026'
    | 'britain2026'
    | 'other';

export interface EventCategoryInfo {
    id: EventCategory;
    folder: string; // Назва папки в Cloudinary
    name: {
        UA: string;
        EN: string;
        HUN: string;
    };
    date: string;
    location: {
        UA: string;
        EN: string;
        HUN: string;
    };
}

export interface ExternalLink {
    id: number;
    type: 'instagram' | 'youtube' | 'news' | 'facebook';
    url: string;
    title: {
        UA: string;
        EN: string;
        HUN: string;
    };
    description?: {
        UA: string;
        EN: string;
        HUN: string;
    };
    image?: string;
}

export const getMediaItems = (): MediaItem[] => {
    return [
        // New Photos - media28-31 (First)
        {
            id: 101,
            type: 'photo',
            url: '/media28.webp',
            poster: '/media28.webp',
            title: {
                UA: 'Командне фото',
                EN: 'Team photo',
                HUN: 'Csapatfotó'
            },
            category: 'photos',
            event: 'other'
        },
        {
            id: 102,
            type: 'photo',
            url: '/media29.webp',
            poster: '/media29.webp',
            title: {
                UA: 'Тренувальний момент',
                EN: 'Training moment',
                HUN: 'Edzési pillanat'
            },
            category: 'photos'
        },
        {
            id: 103,
            type: 'photo',
            url: '/media30.webp',
            poster: '/media30.webp',
            title: {
                UA: 'Командна підготовка',
                EN: 'Team preparation',
                HUN: 'Csapat felkészítés'
            },
            category: 'photos'
        },
        {
            id: 104,
            type: 'photo',
            url: '/media31.webp',
            poster: '/media31.webp',
            title: {
                UA: 'Спортивна практика',
                EN: 'Sports practice',
                HUN: 'Sport gyakorlat'
            },
            category: 'photos'
        },
        {
            id: 105,
            type: 'photo',
            url: '/media32.webp',
            poster: '/media32.webp',
            title: {
                UA: 'Тренувальний процес',
                EN: 'Training process',
                HUN: 'Edzési folyamat'
            },
            category: 'photos'
        },
        {
            id: 106,
            type: 'photo',
            url: '/media33.webp',
            poster: '/media33.webp',
            title: {
                UA: 'Командна гра',
                EN: 'Team game',
                HUN: 'Csapatjáték'
            },
            category: 'photos'
        },
        {
            id: 107,
            type: 'photo',
            url: '/media34.webp',
            poster: '/media34.webp',
            title: {
                UA: 'Тренувальний момент',
                EN: 'Training moment',
                HUN: 'Edzési pillanat'
            },
            category: 'photos'
        },
        {
            id: 108,
            type: 'photo',
            url: '/media35.webp',
            poster: '/media35.webp',
            title: {
                UA: 'Командна підготовка',
                EN: 'Team preparation',
                HUN: 'Csapat felkészítés'
            },
            category: 'photos'
        },
        {
            id: 109,
            type: 'photo',
            url: '/media36.webp',
            poster: '/media36.webp',
            title: {
                UA: 'Спортивна практика',
                EN: 'Sports practice',
                HUN: 'Sport gyakorlat'
            },
            category: 'photos'
        },
        {
            id: 110,
            type: 'photo',
            url: '/media37.webp',
            poster: '/media37.webp',
            title: {
                UA: 'Тренувальний процес',
                EN: 'Training process',
                HUN: 'Edzési folyamat'
            },
            category: 'photos'
        },
        {
            id: 111,
            type: 'photo',
            url: '/media38.webp',
            poster: '/media38.webp',
            title: {
                UA: 'Командна робота',
                EN: 'Teamwork',
                HUN: 'Csapatmunka'
            },
            category: 'photos'
        },
        {
            id: 112,
            type: 'photo',
            url: '/media39.webp',
            poster: '/media39.webp',
            title: {
                UA: 'Ігрова практика',
                EN: 'Game practice',
                HUN: 'Játék gyakorlat'
            },
            category: 'photos'
        },
        {
            id: 113,
            type: 'photo',
            url: '/media60.webp',
            poster: '/media60.webp',
            title: {
                UA: 'Тренувальний момент',
                EN: 'Training moment',
                HUN: 'Edzési pillanat'
            },
            category: 'photos'
        },
        {
            id: 114,
            type: 'photo',
            url: '/media61.webp',
            poster: '/media61.webp',
            title: {
                UA: 'Командна підготовка',
                EN: 'Team preparation',
                HUN: 'Csapat felkészítés'
            },
            category: 'photos'
        },
        {
            id: 115,
            type: 'photo',
            url: '/media62.webp',
            poster: '/media62.webp',
            title: {
                UA: 'Спортивна практика',
                EN: 'Sports practice',
                HUN: 'Sport gyakorlat'
            },
            category: 'photos'
        },
        {
            id: 116,
            type: 'photo',
            url: '/media64.webp',
            poster: '/media64.webp',
            title: {
                UA: 'Командна робота',
                EN: 'Teamwork',
                HUN: 'Csapatmunka'
            },
            category: 'photos'
        },
        // Videos
        {
            id: 1,
            type: 'video',
            url: '/media1.webm',
            poster: '/news1.webp',
            title: { 
                UA: 'Перемога на турнірі в Польщі', 
                EN: 'Victory at tournament in Poland', 
                HUN: 'Győzelem a lengyelországi tornán' 
            },
            category: 'matches'
        },
        {
            id: 2,
            type: 'video',
            url: '/media25.webm',
            poster: '',
            title: { 
                UA: 'Тренувальний момент', 
                EN: 'Training moment', 
                HUN: 'Edzési pillanat' 
            },
            category: 'matches'
        },
        {
            id: 3,
            type: 'video',
            url: '/media26.webm',
            poster: '',
            title: { 
                UA: 'Командна робота', 
                EN: 'Teamwork', 
                HUN: 'Csapatmunka' 
            },
            category: 'matches'
        },
        {
            id: 4,
            type: 'video',
            url: '/media27.webm',
            poster: '',
            title: { 
                UA: 'Ігрова практика', 
                EN: 'Game practice', 
                HUN: 'Játék gyakorlat' 
            },
            category: 'matches'
        },
        // Photos
        {
            id: 19,
            type: 'photo',
            url: '/drag5.webp',
            poster: '/drag5.webp',
            title: { 
                UA: 'Командний дух', 
                EN: 'Team spirit', 
                HUN: 'Csapatszellem' 
            },
            category: 'photos'
        },
        {
            id: 20,
            type: 'photo',
            url: '/drag6.webp',
            poster: '/drag6.webp',
            title: { 
                UA: 'Ранкова розминка', 
                EN: 'Morning warm-up', 
                HUN: 'Reggeli bemelegítés' 
            },
            category: 'photos'
        },
        {
            id: 21,
            type: 'photo',
            url: '/drag7.webp',
            poster: '/drag7.webp',
            title: { 
                UA: 'Тактична підготовка', 
                EN: 'Tactical preparation', 
                HUN: 'Taktikai felkészülés' 
            },
            category: 'photos'
        },
        {
            id: 22,
            type: 'photo',
            url: '/drag8.webp',
            poster: '/drag8.webp',
            title: { 
                UA: 'Силові вправи', 
                EN: 'Strength exercises', 
                HUN: 'Erőnléti gyakorlatok' 
            },
            category: 'photos'
        },
        {
            id: 23,
            type: 'photo',
            url: '/drag9.webp',
            poster: '',
            title: { UA: 'Фото 9', EN: 'Photo 9', HUN: 'Fénykép 9' },
            category: 'photos'
        },
        {
            id: 24,
            type: 'photo',
            url: '/drag10.webp',
            poster: '',
            title: {
                UA: 'Силові вправи',
                EN: 'Strength exercises',
                HUN: 'Erőnléti gyakorlatok'
            },
            category: 'photos'
        },
        {
            id: 25,
            type: 'photo',
            url: '/media11.webp',
            poster: '/media11.webp',
            title: {
                UA: 'Тренувальний момент',
                EN: 'Training moment',
                HUN: 'Edzési pillanat'
            },
            category: 'photos'
        },
        {
            id: 26,
            type: 'photo',
            url: '/media12.webp',
            poster: '/media12.webp',
            title: {
                UA: 'Командна робота',
                EN: 'Teamwork',
                HUN: 'Csapatmunka'
            },
            category: 'photos'
        },
        {
            id: 27,
            type: 'photo',
            url: '/media13.webp',
            poster: '/media13.webp',
            title: {
                UA: 'Ігрова практика',
                EN: 'Game practice',
                HUN: 'Játék gyakorlat'
            },
            category: 'photos'
        },
        {
            id: 28,
            type: 'photo',
            url: '/media14.webp',
            poster: '/media14.webp',
            title: {
                UA: 'Тактичні вправи',
                EN: 'Tactical exercises',
                HUN: 'Taktikai gyakorlatok'
            },
            category: 'photos'
        },
        {
            id: 29,
            type: 'photo',
            url: '/media15.webp',
            poster: '/media15.webp',
            title: {
                UA: 'Фізична підготовка',
                EN: 'Physical training',
                HUN: 'Fizikai edzés'
            },
            category: 'photos'
        },
        {
            id: 30,
            type: 'photo',
            url: '/media16.webp',
            poster: '/media16.webp',
            title: {
                UA: 'Командний дух',
                EN: 'Team spirit',
                HUN: 'Csapatszellem'
            },
            category: 'photos'
        },
        {
            id: 31,
            type: 'photo',
            url: '/media17.webp',
            poster: '/media17.webp',
            title: {
                UA: 'Тренування на полі',
                EN: 'Field training',
                HUN: 'Pályán edzés'
            },
            category: 'photos'
        },
        {
            id: 32,
            type: 'photo',
            url: '/media22.webp',
            poster: '/media22.webp',
            title: {
                UA: 'Командна підготовка',
                EN: 'Team preparation',
                HUN: 'Csapat felkészítés'
            },
            category: 'photos'
        },
        {
            id: 33,
            type: 'photo',
            url: '/media23.webp',
            poster: '/media23.webp',
            title: {
                UA: 'Тренувальний процес',
                EN: 'Training process',
                HUN: 'Edzési folyamat'
            },
            category: 'photos'
        },
        {
            id: 34,
            type: 'photo',
            url: '/media24.webp',
            poster: '/media24.webp',
            title: {
                UA: 'Спортивна підготовка',
                EN: 'Sports preparation',
                HUN: 'Sport felkészítés'
            },
            category: 'photos'
        },
    ];
};

export const getExternalLinks = (): ExternalLink[] => {
    return [
        {
            id: 1,
            type: 'facebook',
            url: 'https://www.facebook.com/share/v/1anno2TNGQ/',
            title: { UA: 'Facebook Пост', EN: 'Facebook Post', HUN: 'Facebook bejegyzés' },
            description: {
                UA: 'Оновлення з тренувального збору',
                EN: 'Training camp update',
                HUN: 'Edzőtábori frissítés'
            },
            image: '/face_post.webp',
        },
        {
            id: 2,
            type: 'news',
            url: 'https://www.rupor.info/news/196710/bf-mila-ta-oleksiy-yurenko-dopomogli-yunim-regbistam-u-16-uspishno-proyti-zbori-u-polshchi/',
            title: { UA: 'Новини Rupor', EN: 'Rupor News', HUN: 'Rupor Hírek' },
            description: {
                UA: 'БФ "Міла" та Олексій Юренко допомогли юним регбістам U16',
                EN: 'BF "Mila" and Oleksiy Yurenko helped young U16 rugby players',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko segítette a fiatal U16-os rögbistákat'
            },
            image: '/post2.webp',
        },
        {
            id: 3,
            type: 'news',
            url: 'https://kievtime.com/kiev/zavdyaky-pidtrymtsi-bf-mila-ta-oleksiya-yurenko-yuni-ukrayinski-regbisty-u-16-zrobyly-krok-do-olimpijskyh-igor/amp/',
            title: { UA: 'Kyiv Time', EN: 'Kyiv Time', HUN: 'Kijevi Idő' },
            description: {
                UA: 'Завдяки підтримці БФ "Міла" та Олексія Юренка',
                EN: 'Thanks to the support of BF "Mila" and Oleksiy Yurenko',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko támogatásának köszönhetően'
            },
            image: '/post3.webp',
        },
        {
            id: 4,
            type: 'news',
            url: 'https://gerasport.com/blogs/news/%D0%B7%D0%B1%D0%BE%D1%80%D0%B8-%D0%B7%D0%B1%D1%96%D1%80%D0%BD%D0%BE%D1%97-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8-%D0%B7-%D1%80%D0%B5%D0%B3%D0%B1%D1%96-u-16',
            title: { UA: 'Gera Sport', EN: 'Gera Sport', HUN: 'Gera Sport' },
            description: {
                UA: 'Збори збірної України з регбі U16',
                EN: 'Training camp of Ukraine U16 rugby team',
                HUN: 'Az ukrán U16-os rögbi válogatott edzőtábora'
            },
            image: '/post4.webp',
        },
        {
            id: 5,
            type: 'news',
            url: 'https://svoboda.ua/38885/2025/bf-mila-ta-oleksij-yurenko-dopomogli-yunim-regbistam-u-16-uspishno-projti-zbori-u-polshhi/',
            title: { UA: 'Свобода', EN: 'Svoboda', HUN: 'Szabadság' },
            description: {
                UA: 'БФ "Міла" та Олексій Юренко допомогли юним регбістам U16',
                EN: 'BF "Mila" and Oleksiy Yurenko helped young U16 rugby players',
                HUN: 'A "Mila" Alapítvány és Olekszij Jurenko segítette a fiatal U16-os rögbistákat'
            },
            image: '/post5.webp',
        },
        {
            id: 6,
            type: 'news',
            url: 'https://for-ua.com/article/1242206',
            title: { UA: 'For-Ua', EN: 'For-Ua', HUN: 'For-Ua' },
            description: {
                UA: 'Новини про підготовку збірної U16',
                EN: 'News about U16 team preparation',
                HUN: 'Hírek az U16-os válogatott felkészüléséről'
            },
            image: '/post6.webp',
        },
        {
            id: 7,
            type: 'youtube',
            url: 'https://youtu.be/MT6fQ7OK8qA',
            title: { UA: 'НТЗ сутички в Ужгороді', EN: 'Forward Training Camp in Uzhhorod', HUN: 'Csatár edzőtábor Ungvárott' },
            description: {
                UA: 'Навчально-тренувальні збори гравців сутички в Ужгороді',
                EN: 'Forward players training camp in Uzhhorod',
                HUN: 'Csatárjátékosok edzőtábora Ungvárott'
            },
            image: 'https://img.youtube.com/vi/MT6fQ7OK8qA/maxresdefault.jpg',
        },
    ];
};

// Категорії подій для фільтрації
export const eventCategories: EventCategoryInfo[] = [
    {
        id: 'all',
        folder: 'all',
        name: { UA: 'Усі події', EN: 'All Events', HUN: 'Összes esemény' },
        date: '',
        location: { UA: '', EN: '', HUN: '' }
    },
    {
        id: 'lisbon2026',
        folder: 'Lisbon2026',
        name: { UA: 'Лісабон 2026', EN: 'Lisbon 2026', HUN: 'Lisszabon 2026' },
        date: '10-15 Лютого 2026',
        location: { UA: 'Португалія', EN: 'Portugal', HUN: 'Portugália' }
    },
    {
        id: 'gdynia1',
        folder: '1gdynia2025',
        name: { UA: 'Гдиня I (2025)', EN: 'Gdynia I (2025)', HUN: 'Gdynia I (2025)' },
        date: '1-7 Травня 2025',
        location: { UA: 'Польща', EN: 'Poland', HUN: 'Lengyelország' }
    },
    {
        id: 'gdynia2',
        folder: '2gdynia2025',
        name: { UA: 'Гдиня II (2025)', EN: 'Gdynia II (2025)', HUN: 'Gdynia II (2025)' },
        date: '2025',
        location: { UA: 'Польща', EN: 'Poland', HUN: 'Lengyelország' }
    },
    {
        id: 'batumi2025',
        folder: 'batumi2025',
        name: { UA: 'Батумі 2025', EN: 'Batumi 2025', HUN: 'Batumi 2025' },
        date: 'Листопад 2025',
        location: { UA: 'Грузія', EN: 'Georgia', HUN: 'Grúzia' }
    },
    {
        id: 'newzealand2026',
        folder: 'newzealand2026',
        name: { UA: 'Нова Зеландія 2026', EN: 'New Zealand 2026', HUN: 'Új-Zéland 2026' },
        date: '20-28 Січня 2026',
        location: { UA: 'Нова Зеландія', EN: 'New Zealand', HUN: 'Új-Zéland' }
    },
    {
        id: 'italy2026',
        folder: 'italy2026',
        name: { UA: 'Крам, Італія 2026', EN: 'Cram, Italy 2026', HUN: 'Cram, Olaszország 2026' },
        date: '27-31 Травня 2026',
        location: { UA: 'Італія', EN: 'Italy', HUN: 'Olaszország' }
    },
    {
        id: 'france2026',
        folder: 'france2026',
        name: { UA: 'Франція 2026', EN: 'France 2026', HUN: 'Franciaország 2026' },
        date: '1-7 Червня 2026',
        location: { UA: 'Франція', EN: 'France', HUN: 'Franciaország' }
    },
    {
        id: 'austria2026',
        folder: 'austria2026',
        name: { UA: 'Австрія 2026', EN: 'Austria 2026', HUN: 'Ausztria 2026' },
        date: '16-21 Червня 2026',
        location: { UA: 'Австрія', EN: 'Austria', HUN: 'Ausztria' }
    },
    {
        id: 'britain2026',
        folder: 'britain2026',
        name: { UA: 'Британія 2026', EN: 'Britain 2026', HUN: 'Britannia 2026' },
        date: '13-17 Серпня 2026',
        location: { UA: 'Великобританія', EN: 'Great Britain', HUN: 'Nagy-Britannia' }
    }
];

export const categories = [
    { id: 'all', name: { UA: 'Усі', EN: 'All', HUN: 'Mind' } },
    { id: 'photos', name: { UA: 'Фото', EN: 'Photos', HUN: 'Fényképek' } },
    { id: 'other', name: { UA: 'Інше', EN: 'Other', HUN: 'Egyéb' } },
];
