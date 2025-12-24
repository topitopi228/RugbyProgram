export interface MediaItem {
    id: number;
    type: 'video' | 'image';
    url: string;
    poster: string;
    title: {
        UA: string;
        EN: string;
        HUN: string;
    };
    category?: string;
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
            url: '/media2.webm',
            poster: '/team1.webp',
            title: { 
                UA: 'Товариський матч зі збірною України U17', 
                EN: 'Friendly match with Ukraine U17 team', 
                HUN: 'Barátságos mérkőzés az U17-es ukrán csapattal' 
            },
            category: 'matches'
        },
        // Photos
        {
            id: 15,
            type: 'image',
            url: '/drag1.webp',
            poster: '/drag1.webp',
            title: { 
                UA: 'НТЗ на Драгобраті - Командне фото', 
                EN: 'Training camp at Dragobrat - Team photo', 
                HUN: 'Edzőtábor Dragobratban - Csapatfotó' 
            },
            category: 'photos'
        },
        {
            id: 16,
            type: 'image',
            url: '/drag2.webp',
            poster: '/drag2.webp',
            title: { 
                UA: 'НТЗ на Драгобраті - Тренування', 
                EN: 'Training camp at Dragobrat - Training', 
                HUN: 'Edzőtábor Dragobratban - Edzés' 
            },
            category: 'photos'
        },
        {
            id: 17,
            type: 'image',
            url: '/drag3.webp',
            poster: '/drag3.webp',
            title: { 
                UA: 'Гірські тренування', 
                EN: 'Mountain training', 
                HUN: 'Hegyi edzés' 
            },
            category: 'photos'
        },
        {
            id: 18,
            type: 'image',
            url: '/drag4.webp',
            poster: '/drag4.webp',
            title: { 
                UA: 'Фізична підготовка', 
                EN: 'Physical training', 
                HUN: 'Fizikai felkészítés' 
            },
            category: 'photos'
        },
        {
            id: 19,
            type: 'image',
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
            type: 'image',
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
            type: 'image',
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
            type: 'image',
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
            type: 'image',
            url: '/drag9.webp',
            poster: '',
            title: { UA: 'Фото 9', EN: 'Photo 9', HUN: 'Fénykép 9' },
            category: 'photos'
        },
        {
            id: 24,
            type: 'image',
            url: '/drag10.webp',
            poster: '',
            title: { UA: 'Фото 10', EN: 'Photo 10', HUN: 'Fénykép 10' },
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
            url: 'https://youtu.be/gl_hsrpof3c',
            title: { UA: 'Відео з тренувань', EN: 'Training Video', HUN: 'Edzés videó' },
            description: {
                UA: 'Огляд тренувального процесу',
                EN: 'Training process overview',
                HUN: 'Az edzésfolyamat áttekintése'
            },
            image: 'https://img.youtube.com/vi/gl_hsrpof3c/maxresdefault.jpg',
        },
    ];
};

export const categories = [
    { id: 'all', name: { UA: 'Усі', EN: 'All', HUN: 'Mind' } },
    { id: 'photos', name: { UA: 'Фото', EN: 'Photos', HUN: 'Fényképek' } },
    { id: 'other', name: { UA: 'Інше', EN: 'Other', HUN: 'Egyéb' } },
];
