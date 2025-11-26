export interface Benefit {
    icon: string;
    title: string;
    description: string;
}

export interface Level {
    name: string;
    amount: string;
    color: string;
    popular?: boolean;
    benefits: string[];
}

export interface Translations {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    joinButton: string;
    aboutTitle: string;
    aboutDescription: string;
    membershipTitle: string;
    membershipAmount: string;
    membershipNote: string;
    benefitsTitle: string;
    benefits: Benefit[];
    levelsTitle: string;
    levels: Level[];
    attributesTitle: string;
    attributesDescription: string;
    firstMembersTitle: string;
    firstMembersSubtitle: string;
    slotsAvailable: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    backButton: string;
}

export const translations: Record<string, Translations> = {
    UA: {
        heroTitle: 'Олімпійська Надія',
        heroSubtitle: 'Ексклюзивні привілеї для спонсорів збірної України U16 з регбі-7',
        heroDescription: 'Приєднуйтесь до елітного клубу підтримки українського спорту та отримайте унікальні можливості',
        joinButton: 'Приєднатися до клубу',

        aboutTitle: 'Про Клуб "Олімпійська Надія"',
        aboutDescription: 'Клуб "Олімпійська Надія" - це унікальна можливість стати частиною історії українського регбі. Ми об\'єднуємо 100 найвідданіших спонсорів, які підтримують юнацьку збірну України U16 і вірять у майбутнє українського спорту - це інвестиції в юних українців, спорт і прогрес країни.',

        membershipTitle: 'Членство починається від щомісячного внеску',
        membershipAmount: '5 000 ₴ ',
        membershipNote: 'Це внесок у майбутнє українського регбі',

        benefitsTitle: 'Ваші ексклюзивні привілеї',

        benefits: [
            {
                icon: 'media',
                title: 'Медіа присутність',
                description: 'Розміщення вашого логотипу на офіційних каналах збірної, в соціальних мережах та на промо-матеріалах'
            },
            {
                icon: 'merch',
                title: 'Персональне екіпірування',
                description: 'Ексклюзивна форма клубу з вашим іменем, офіційні майки команди та брендований мерч'
            },
            {
                icon: 'vip',
                title: 'VIP-доступ на заходи',
                description: 'Можливість відвідати тренувальні збори, змагання і навіть забити тренувальний try разом з командою'
            },
            {
                icon: 'broadcast',
                title: 'Трансляції та медіа',
                description: 'Закріплені офіційні трансляції матчів збірної з візуальним відображенням вашого внеску, вигуки під час прямих ефірів'
            },
            {
                icon: 'networking',
                title: 'Нетворкінг',
                description: 'Знайомтесь зі провідними партнерами збірної, інші спонсорами та будуйте ділові зв\'язки'
            },
            {
                icon: 'exclusive',
                title: 'Ексклюзивні події',
                description: 'Ваша ім\'я буде бренд на спеціальних подіях і святах, відповідні 100 партнерам збірної'
            },
            {
                icon: 'olympic',
                title: 'Офіційний статус',
                description: 'Іменний сертифікат члена Клубу "100", визнання в офіційній спільноті та позначка на ресурсах спонсору'
            },
            {
                icon: 'activity',
                title: 'Залучення',
                description: 'Щорічне визнання у річних звітах та публічне згадування вашого внеску в рзвиток регбі на офіційних майданчиках'
            },
        ],

        levelsTitle: 'Рівні членства Клубу "100"',
        levels: [
            {
                name: 'Starter',
                amount: '5 000 ₴',
                color: 'from-gray-600 to-gray-800',
                benefits: [
                    'Офіційний сертифікат члена Клубу',
                    'Логотип на сайті серед спонсорів',
                    'Щомісячні оновлення про команду',
                    'Ексклюзивний мерч Клубу "100"'
                ]
            },
            {
                name: 'Silver',
                amount: '15 000 ₴',
                color: 'from-gray-400 to-gray-600',
                benefits: [
                    'Всі переваги рівня Starter',
                    'Персоналізована форма з вашим ім\'ям',
                    'VIP-запрошення на 1 матч збірної',
                    'Згадування в соціальних мережах'
                ]
            },
            {
                name: 'Gold',
                amount: '50 000 ₴',
                color: 'from-yellow-400 to-yellow-600',
                popular: true,
                benefits: [
                    'Всі переваги рівня Silver',
                    'Логотип на формі команди',
                    'VIP-доступ на всі домашні матчі',
                    'Особиста зустріч з командою',
                    'Розміщення банера на стадіоні'
                ]
            },
            {
                name: 'Platinum',
                amount: '100 000 ₴',
                color: 'from-blue-400 to-purple-600',
                benefits: [
                    'Всі переваги рівня Gold',
                    'Великий логотип на всіх матчах',
                    'Участь у тренуваннях команди',
                    'Персональний відеоогляд сезону',
                    'Білет на Олімпіаду (при проходженні)'
                ]
            }
        ],

        attributesTitle: 'Атрибутика та форма',
        attributesDescription: 'Кожен спонсор отримає ексклюзивну атрибутику, яка демонструє ваше підтримання та статус',

        firstMembersTitle: 'Перші учасники клубу',
        firstMembersSubtitle: 'Станьте одним з перших 100 членів елітного клубу',
        slotsAvailable: 'Доступно місць',

        ctaTitle: 'Готові стати частиною історії?',
        ctaDescription: 'Приєднайтесь до Клубу "100" та допоможіть юним спортсменам досягти олімпійських висот',
        ctaButton: 'Приєднатися до Клубу "100"',

        backButton: 'Повернутися до спонсорів'
    },
    EN: {
        heroTitle: 'Olympic Hope',
        heroSubtitle: 'Exclusive benefits for Ukraine U16 Rugby-7 national team sponsors',
        heroDescription: 'Join the elite club supporting Ukrainian sports and gain unique opportunities',
        joinButton: 'Join the Club',

        aboutTitle: 'About Club "Olympic Hope"',
        aboutDescription: 'Club "Olympic Hope" is a unique opportunity to become part of Ukrainian rugby history. We unite the 100 most dedicated sponsors who support Ukraine\'s U16 youth team and believe in the future of Ukrainian sports - it\'s an investment in young Ukrainians, sports, and the country\'s progress.',

        membershipTitle: 'Membership starts from monthly contribution',
        membershipAmount: '5 000 ₴',
        membershipNote: 'This is a contribution to the future of Ukrainian rugby',

        benefitsTitle: 'Your Exclusive Benefits',

        benefits: [
            {
                icon: 'media',
                title: 'Media Presence',
                description: 'Your logo on official team channels, social media, and promotional materials'
            },
            {
                icon: 'merch',
                title: 'Personal Equipment',
                description: 'Exclusive club uniform with your name, official team jerseys, and branded merchandise'
            },
            {
                icon: 'vip',
                title: 'VIP Event Access',
                description: 'Opportunity to attend training camps, competitions, and even score a training try with the team'
            },
            {
                icon: 'broadcast',
                title: 'Broadcasting & Media',
                description: 'Official match broadcasts with visual recognition of your contribution and shoutouts during live streams'
            },
            {
                icon: 'networking',
                title: 'Networking',
                description: 'Meet leading team partners, other sponsors, and build business connections'
            },
            {
                icon: 'exclusive',
                title: 'Exclusive Events',
                description: 'Your name will be branded at special events and celebrations for the 100 team partners'
            },
            {
                icon: 'olympic',
                title: 'Official Status',
                description: 'Named Club "100" membership certificate, recognition in the official community, and sponsor resource marking'
            },
            {
                icon: 'activity',
                title: 'Engagement',
                description: 'Annual recognition in yearly reports and public mention of your contribution to rugby development on official platforms'
            },
        ],

        levelsTitle: 'Club "100" Membership Levels',
        levels: [
            {
                name: 'Starter',
                amount: '5 000 ₴',
                color: 'from-gray-600 to-gray-800',
                benefits: [
                    'Official Club membership certificate',
                    'Logo on website among sponsors',
                    'Monthly team updates',
                    'Exclusive Club "100" merchandise'
                ]
            },
            {
                name: 'Silver',
                amount: '15 000 ₴',
                color: 'from-gray-400 to-gray-600',
                benefits: [
                    'All Starter level benefits',
                    'Personalized uniform with your name',
                    'VIP invitation to 1 team match',
                    'Social media mentions'
                ]
            },
            {
                name: 'Gold',
                amount: '50 000 ₴',
                color: 'from-yellow-400 to-yellow-600',
                popular: true,
                benefits: [
                    'All Silver level benefits',
                    'Logo on team uniform',
                    'VIP access to all home matches',
                    'Personal team meeting',
                    'Stadium banner placement'
                ]
            },
            {
                name: 'Platinum',
                amount: '100 000 ₴',
                color: 'from-blue-400 to-purple-600',
                benefits: [
                    'All Gold level benefits',
                    'Large logo at all matches',
                    'Participation in team training',
                    'Personal season video review',
                    'Olympic ticket (if qualified)'
                ]
            }
        ],

        attributesTitle: 'Attributes and Uniform',
        attributesDescription: 'Each sponsor receives exclusive attributes demonstrating your support and status',

        firstMembersTitle: 'First Club Members',
        firstMembersSubtitle: 'Become one of the first 100 members of the elite club',
        slotsAvailable: 'Slots Available',

        ctaTitle: 'Ready to Become Part of History?',
        ctaDescription: 'Join Club "100" and help young athletes reach Olympic heights',
        ctaButton: 'Join Club "100"',

        backButton: 'Back to Sponsors'
    },
    HUN: {
        heroTitle: 'Olimpiai Remény',
        heroSubtitle: 'Exkluzív előnyök az Ukrajna U16 Rögbi-7 válogatott szponzorai számára',
        heroDescription: 'Csatlakozzon az ukrán sportot támogató elit klubhoz és szerezzen egyedi lehetőségeket',
        joinButton: 'Csatlakozás a Klubhoz',

        aboutTitle: 'A "Olimpiai Remény" Klubról',
        aboutDescription: 'A "Olimpiai Remény" Klub egyedülálló lehetőség arra, hogy része legyen az ukrán rögbi történetének. Egyesítjük a 100 legelkötelezettebb szponzort, akik támogatják Ukrajna U16-os ifjúsági csapatát és hisznek az ukrán sport jövőjében - ez befektetés a fiatal ukrajnokban, a sportban és az ország fejlődésében.',

        membershipTitle: 'Tagság kezdődik havi hozzájárulástól',
        membershipAmount: '5 000 ₴',
        membershipNote: 'Ez hozzájárulás az ukrán rögbi jövőjéhez',

        benefitsTitle: 'Exkluzív Előnyei',

        benefits: [
            {
                icon: 'media',
                title: 'Média Jelenlét',
                description: 'Logója a csapat hivatalos csatornáin, közösségi médián és promóciós anyagokon'
            },
            {
                icon: 'merch',
                title: 'Személyes Felszerelés',
                description: 'Exkluzív klub egyenruha nevével, hivatalos csapat mezek és márkás árucikkek'
            },
            {
                icon: 'vip',
                title: 'VIP Esemény Hozzáférés',
                description: 'Lehetőség edzőtáborok, versenyek látogatására és akár edzésen való részvételre a csapattal'
            },
            {
                icon: 'broadcast',
                title: 'Közvetítés és Média',
                description: 'Hivatalos mérkőzés közvetítések hozzájárulásának vizuális megjelenítésével és élő közvetítések alatt'
            },
            {
                icon: 'networking',
                title: 'Hálózatépítés',
                description: 'Találkozzon vezető csapat partnerekkel, más szponzorokkal és építsen üzleti kapcsolatokat'
            },
            {
                icon: 'exclusive',
                title: 'Exkluzív Események',
                description: 'Neve márkázva lesz különleges eseményeken és ünnepségeken a 100 csapat partner számára'
            },
            {
                icon: 'olympic',
                title: 'Hivatalos Státusz',
                description: 'Névre szóló "100" Klub tagsági igazolvány, elismerés a hivatalos közösségben és szponzor forrás jelölés'
            },
            {
                icon: 'activity',
                title: 'Elkötelezettség',
                description: 'Éves elismerés az éves jelentésekben és nyilvános említés hozzájárulásáról a rögbi fejlesztéséhez hivatalos platformokon'
            },
        ],

        levelsTitle: '"100" Klub Tagsági Szintek',
        levels: [
            {
                name: 'Starter',
                amount: '5 000 ₴',
                color: 'from-gray-600 to-gray-800',
                benefits: [
                    'Hivatalos Klub tagsági igazolvány',
                    'Logó a weboldalon a szponzorok között',
                    'Havi csapat frissítések',
                    'Exkluzív "100" Klub árucikkek'
                ]
            },
            {
                name: 'Silver',
                amount: '15 000 ₴',
                color: 'from-gray-400 to-gray-600',
                benefits: [
                    'Minden Starter szint előny',
                    'Személyre szabott egyenruha nevével',
                    'VIP meghívás 1 csapat mérkőzésre',
                    'Közösségi média említések'
                ]
            },
            {
                name: 'Gold',
                amount: '50 000 ₴',
                color: 'from-yellow-400 to-yellow-600',
                popular: true,
                benefits: [
                    'Minden Silver szint előny',
                    'Logó a csapat egyenruhán',
                    'VIP hozzáférés minden hazai mérkőzéshez',
                    'Személyes csapattalálkozó',
                    'Stadion banner elhelyezés'
                ]
            },
            {
                name: 'Platinum',
                amount: '100 000 ₴',
                color: 'from-blue-400 to-purple-600',
                benefits: [
                    'Minden Gold szint előny',
                    'Nagy logó minden mérkőzésen',
                    'Részvétel csapat edzésben',
                    'Személyes szezon videó áttekintés',
                    'Olimpiai jegy (ha kvalifikál)'
                ]
            }
        ],

        attributesTitle: 'Attribútumok és Egyenruha',
        attributesDescription: 'Minden szponzor kap exkluzív attribútumokat, amelyek bemutatják támogatását és státuszát',

        firstMembersTitle: 'Első Klub Tagok',
        firstMembersSubtitle: 'Legyen az első 100 tag egyike az elit klubban',
        slotsAvailable: 'Elérhető Helyek',

        ctaTitle: 'Kész Része Lenni a Történelemnek?',
        ctaDescription: 'Csatlakozzon a "100" Klubhoz és segítsen fiatal sportolóknak elérni az olimpiai magasságokat',
        ctaButton: 'Csatlakozás a "100" Klubhoz',

        backButton: 'Vissza a Szponzorokhoz'
    }
};
