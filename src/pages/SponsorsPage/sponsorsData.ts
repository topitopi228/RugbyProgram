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
    ];
    return sponsors;
};

export const getPersonalSponsors = (language: string): Sponsor[] => {
    if (language === 'UA') {
        return [
            {
                image: '/spon1.webp',
                name: 'ШАНДОР ФЕДІР',
                position: 'Посол України в Угорщині, президент федерації регбі Закарпатської області',
            },
            {
                image: '/spon2.webp',
                name: 'БАЖЕНКОВ ЄВГЕН',
                position: 'Президент федерації регбі України',
            },
            {
                image: '/spon3.webp',
                name: 'БИХОВ РОМАН',
                position: 'Президент федерації регбі Харківської області',
            },
            {
                image: '/spon4.webp',
                name: 'ПОТАПЕНКО ОЛЕКСАНДР',
                position: 'Президент Київської міської федерації регбі',
            },
            {
                image: '/spon5.webp',
                name: 'ЕТНАРОВИЧ ОЛЕГ ',
                position: 'Український підприємець, меценат, президент федерації регбі Одещини',
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
                image: '/spon9.webp',
                name: 'АДАМИК ПЕТРО',
                position: 'Бізнесмен, меценат,резидент федерації регбі Львівщини',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Бізнесмен, меценат',
            },
        ];
    } else if (language === 'EN') {
        return [
            {
                image: '/spon1.webp',
                name: 'FEDIR SHANDOR',
                position: 'Ambassador of Ukraine to Hungary, President of the Zakarpattia Regional Rugby Federation',
            },
            {
                image: '/spon2.webp',
                name: 'YEVHEN BAZHENKOV',
                position: 'President of the Ukraine Rugby Union',
            },
            {
                image: '/spon3.webp',
                name: 'ROMAN BIKHOV',
                position: 'President of the Kharkiv Regional Rugby Federation',
            },
            {
                image: '/spon4.webp',
                name: 'OLEKSANDR POTAPENKO',
                position: 'President of the Kyiv City Rugby Federation',
            },
            {
                image: '/spon5.webp',
                name: 'OLEH ETNAROVYCH',
                position: 'Ukrainian entrepreneur, philanthropist, President of the Odesa Regional Rugby Federation',
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
                image: '/spon9.webp',
                name: 'PETRO ADAMYK',
                position: 'Businessman, philanthropist',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Businessman, philanthropist',
            },
        ];
    } else {
        return [
            {
                image: '/spon1.webp',
                name: 'FEDIR SHANDOR',
                position: 'Ukrajna magyarországi nagykövete, a Kárpátaljai Területi Rögbi Szövetség elnöke',
            },
            {
                image: '/spon2.webp',
                name: 'YEVHEN BAZHENKOV',
                position: 'Az Ukrán Rögbi Szövetség elnöke',
            },
            {
                image: '/spon3.webp',
                name: 'ROMAN BIKHOV',
                position: 'A Harkovi Területi Rögbi Szövetség elnöke',
            },
            {
                image: '/spon4.webp',
                name: 'OLEKSANDR POTAPENKO',
                position: 'A Kijevi Városi Rögbi Szövetség elnöke',
            },
            {
                image: '/spon5.webp',
                name: 'OLEH ETNAROVICS',
                position: 'Ukrán vállalkozó, mecénás, az Odeszai Területi Rögbi Szövetség elnöke',
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
                image: '/spon9.webp',
                name: 'PETRO ADAMYK',
                position: 'Üzletember, mecénás',
            },
            {
                image: '/spon10.webp',
                name: 'Brent Impey',
                position: 'Üzletember, mecénás',
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
