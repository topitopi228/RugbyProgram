// @ts-nocheck
export interface Sponsor {
    image: string;
    name: string;
    url?: string;
    position?: string;
}

export interface OlympicInvitation {
    title: string;
    highlight: string;
    description: string;
    cta: string;
}

export interface Translations {
    companySponsors: string;
    personalSponsors: JSX.Element;
    becomeSponsor: string;
    companySponsorsList: Sponsor[];
    personalSponsorsList: Sponsor[];
    olympicInvitation: OlympicInvitation;
}

export const getCompanySponsors = (language: string): Sponsor[] => {
    const sponsors = [
        {
            image: '/spin-4.webp',
            name: language === 'UA' ? 'БФ "Міла" Олексія Юренка' : 
                  language === 'EN' ? 'Charity Fund "Mila" by Oleksiy Yurenko' : 
                  'Jótékonysági Alap "Mila" Olekszij Jurenko',
            url: 'https://www.facebook.com/p/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D0%A4%D0%BE%D0%BD%D0%B4-%D0%9C%D0%86%D0%9B%D0%90-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D1%8F-%D0%AE%D1%80%D0%B5%D0%BD%D0%BA%D0%B0-61572065630183/'
        },
        {
            image: '/spin-3.webp',
            name: language === 'UA' ? 'Федерація регбі України' : 
                  language === 'EN' ? 'Ukraine Rugby Union' : 
                  'Ukrajnai Rögbi Szövetség',
            url: 'https://rugby.org.ua/'
        },
        {
            image: '/spin-2.webp',
            name: language === 'UA' ? 'БФ "Nova Ukraine"' : 
                  language === 'EN' ? 'Charity Fund "Nova Ukraine"' : 
                  'Jótékonysági Alap "Nova Ukraine"',
            url: 'https://novaukraine.org/'
        },
        {
            image: '/spin-1.webp',
            name: language === 'UA' ? 'Готель-ресторан "Згарда"' : 
                  language === 'EN' ? 'Restaurant-Hotel "Zharda"' : 
                  'Étterem-Szálló "Zharda"',
            url: 'https://www.instagram.com/zgardadragobrat/'
        },
        {
            image: '/spin-5.webp',
            name: language === 'UA' ? 'Chervona Kalyna medical resort' : 
                  language === 'EN' ? 'Chervona Kalyna medical resort' : 
                  'Chervona Kalyna medical resort',
            url: 'https://chervona-kalina.rv.ua/'
        },
    ];
    return sponsors;
};

export const getPersonalSponsors = (language: string): Sponsor[] => {
    if (language === 'UA') {
        return [
            {
                image: '/spon1.webp',
                name: 'ШАНДОР ФЕДІР',
                position: 'Посол України в Угорщині',
            },
            {
                image: '/spon2.webp',
                name: 'БАЖЕНКОВ ЄВГЕН',
                position: 'Приватний підприємець',
            },
            {
                image: '/spon3.webp',
                name: 'БИХОВ РОМАН',
                position: 'Приватний підприємець',
            },
            {
                image: '/spon6.webp',
                name: 'ЮРЕНКО ОЛЕКСІЙ',
                position: 'Засновник БФ "Міла", підприємець',
            },
            {
                image: '/spon7.webp',
                name: 'ПEТЬОВКА АНДРІЙ',
                position: 'Підприємець, меценат спорту',
            },
            {
                image: '/spon8.webp',
                name: 'КОПИЛОВ АНТОН',
                position: 'Підприємець, інвестор',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Бізнесмен, меценат',
            },
            {
                image: '/trenout4.webp',
                name: 'Wayne Taylor',
                position: 'Директор IRANZ, спеціаліст з фізичної підготовки та високої продуктивності',
            },
        ];
    } else if (language === 'EN') {
        return [
            {
                image: '/spon1.webp',
                name: 'FEDIR SHANDOR',
                position: 'Ambassador of Ukraine to Hungary',
            },
            {
                image: '/spon2.webp',
                name: 'YEVHEN BAZHENKOV',
                position: 'Private entrepreneur',
            },
            {
                image: '/spon3.webp',
                name: 'ROMAN BIKHOV',
                position: 'Private entrepreneur',
            },
            {
                image: '/spon6.webp',
                name: 'OLEKSIY YURENKO',
                position: 'Founder of "Mila" Charity Fund, entrepreneur',
            },
            {
                image: '/spon7.webp',
                name: 'ANDRII PITOVKA',
                position: 'Entrepreneur, sports patron',
            },
            {
                image: '/spon8.webp',
                name: 'ANTON KOPILOV',
                position: 'Entrepreneur, investor',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Businessman, philanthropist',
            },
            {
                image: '/trenout4.webp',
                name: 'Wayne Taylor',
                position: 'Director of IRANZ, Strength & Conditioning and High-Performance Specialist',
            },
        ];
    } else {
        return [
            {
                image: '/spon1.webp',
                name: 'FEDIR SHANDOR',
                position: 'Ukrajna magyarországi nagykövete',
            },
            {
                image: '/spon2.webp',
                name: 'YEVHEN BAZHENKOV',
                position: 'Magánvállalkozó',
            },
            {
                image: '/spon3.webp',
                name: 'ROMAN BIKHOV',
                position: 'Magánvállalkozó',
            },
            {
                image: '/spon6.webp',
                name: 'OLEKSIY YURENKO',
                position: 'A "Mila" Alapítvány alapítója, vállalkozó',
            },
            {
                image: '/spon7.webp',
                name: 'ANDRII PITOVKA',
                position: 'Vállalkozó, sporttámogató',
            },
            {
                image: '/spon8.webp',
                name: 'ANTON KOPILOV',
                position: 'Vállalkozó, befektető',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Üzletember, mecénás',
            },
            {
                image: '/trenout4.webp',
                name: 'Wayne Taylor',
                position: 'IRANZ igazgatója, erőnléti és nagy teljesítményű szakember',
            },
        ];
    }
};

export const getOlympicInvitation = (language: string): OlympicInvitation => {
    if (language === 'UA') {
        return {
            title: 'Досягнення Олімпійської Мрії Разом',
            highlight: 'Усі спонсори, які допоможуть нам досягти нашої мети, отримають запрошення на Олімпійські ігри',
            description: 'Коли наша збірна U-16 вийде на Олімпіаду, ми запросимо кожного, хто підтримав нас у цій подорожі. Ваша підтримка - це крок до історії українського регбі!',
            cta: 'допомогти збірній'
        };
    } else if (language === 'EN') {
        return {
            title: 'Achieving the Olympic Dream Together',
            highlight: 'All sponsors who help us reach our goal will receive an invitation to the Olympic Games',
            description: 'When our U-16 team makes it to the Olympics, we will invite everyone who supported us on this journey. Your support is a step towards Ukrainian rugby history!',
            cta: 'Help the Team'
        };
    } else {
        return {
            title: 'Közösen az Olimpiai Álomért',
            highlight: 'Minden támogató, aki segít elérni a célunkat, meghívást kap az Olimpiai Játékokra',
            description: 'Amikor U-16-os csapatunk kijut az olimpiára, mi mindenkit meghívunk, aki támogatott minket ezen az úton. Támogatásod lépés az ukrán rögbi történelem felé!',
            cta: 'Légy Te is a Csapat Része!'
        };
    }
};
