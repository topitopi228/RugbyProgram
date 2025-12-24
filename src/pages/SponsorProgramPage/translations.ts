export type Translations = {
    title: string;
    subtitle: string;
    description: string;
    supportTitle: string;
    supportAreas: string[];
    benefitsTitle: string;
    benefitsList: string[];
    contactTitle: string;
    contactText: string;
    olympicTitle: string;
    olympicGoal: string;
    europeanGoal: string;
    contactPhone: string;
    contactEmail: string;
    contactTelegram: string;
};

export const translations: Record<string, Translations> = {
    UA: {
        title: 'Ласкаво просимо на офіційний сайт юнацької Збірної України з регбі-7 Ю-16!',
        subtitle: 'ПІДТРИМАТИ НАЦІОНАЛЬНУ ЗБІРНУ УКРАЇНИ З РЕГБІ-7s',
        description: 'Наш проєкт вже має соціальну цінність, результати, команду, систему тренувань та мотивацію — більше, ніж у 90% заявників на гранти. Ви можете розраховувати на підтримку в таких напрямках:',
        supportTitle: 'Напрямки підтримки:',
        supportAreas: [
            'Фінансування зарплати керівнику (законно і очікувано)',
            "Обладнання: форма, м'ячі, рюкзаки, транспорт, страхування",
            'Поїздки на змагання — витрати на дітей повністю компенсуються',
            'Кошти на відкриття секцій в інших селах для масштабування',
            'Побудова міні-поля або тренувального майданчика на першому етапі'
        ],
        benefitsTitle: 'Що отримають спонсори?',
        benefitsList: [
            'Розміщення банерів на стадіоні',
            'Логотип на майках або маніжках',
            'Визнання в нашій спільноті',
            'Найвідданіші спонсори отримують білет на Олімпійські ігри, якщо збірна проходить на Олімпіаду'
        ],
        contactTitle: 'ГОТОВІ ПІДТРИМАТИ РЕГБІ?',
        contactText: "МОЖЕТЕ ЗВ'ЯЗАТИСЬ БУДЬ-ЯКИМ ЗРУЧНИМ ДЛЯ ВАС СПОСОБОМ!",
        contactPhone: '+380 50 949 82 09',
        contactEmail: 'shashero10@gmail.com',
        contactTelegram: 't.me/Shashero',
        olympicGoal: 'Ми прагнемо гідно представити Україну на міжнародній арені та прославити нашу країну у світі. Кожен матч — це крок до великої мети та доказ незламності українського духу. Вихід на Юнацькі Олімпійські ігри стане символом сили, єдності та віри в перемогу.',
        europeanGoal: 'Ми прагнемо в майбутньому виступати на чемпіонатах Європи на такому ж рівні, як сьогодні це роблять національна та юнацька збірні України. Наша мета — здобути перемогу в дивізіоні Championship та гідно представляти Україну серед найсильніших команд на олімпійському рівні.',
        olympicTitle: 'Вихід на юнацькі олімпійські ігри'
    },
    EN: {
        title: 'Welcome to the official website of the Ukrainian U-16 Rugby 7s National Team!',
        subtitle: 'SUPPORT THE UKRAINIAN NATIONAL RUGBY-7s TEAM',
        description: 'Our project already has social value, results, a team, a training system, and motivation—more than 90% of grant applicants. You can count on support in the following areas:',
        supportTitle: 'Areas of support:',
        supportAreas: [
            "Funding for the manager's salary (legal and expected)",
            'Equipment: uniforms, balls, backpacks, transportation, insurance',
            "Competition trips—full compensation for children's expenses",
            'Funds to open sections in other villages for scaling',
            'Construction of a mini-field or training ground in the first stage'
        ],
        benefitsTitle: 'What will sponsors receive?',
        benefitsList: [
            'Banner placement at the stadium',
            'Logo on jerseys or vests',
            'Recognition in our community',
            'The most dedicated sponsors receive an Olympic Games ticket if the team qualifies'
        ],
        contactTitle: 'READY TO SUPPORT RUGBY?',
        contactText: 'YOU CAN GET IN TOUCH ANY CONVENIENT WAY!',
        contactPhone: '+380 50 949 82 09',
        contactEmail: 'shashero10@gmail.com',
        contactTelegram: 't.me/Shashero',
        olympicGoal: 'We strive to proudly represent Ukraine on the international stage and bring glory to our country worldwide. Every match is a step toward a great goal and proof of the unbreakable Ukrainian spirit. Qualifying for the Youth Olympic Games  will become a symbol of strength, unity, and faith in victory.',
        europeanGoal: 'We aim to compete at European Championships in the future at the same level as the national and youth teams of Ukraine do today. Our goal is to win the Championship division and proudly represent Ukraine among the strongest teams at the Olympic level.',
        olympicTitle: 'Qualifying for the Youth Olympic Games'
    },
    HUN: {
        title: 'Üdvözöljük az Ukrán U16-os Rögbi 7-es Válogatott hivatalos weboldalán!',
        subtitle: 'TÁMOGASD AZ UKRÁN RÖGBI-7-ES VÁLOGATOTTAT',
        description: 'Projektünk már most társadalmi értéket, eredményeket, csapatot, edzésrendszert és motivációt kínál – többet, mint a pályázók 90%-a. A következő területeken számíthatsz támogatásra:',
        supportTitle: 'Támogatási területek:',
        supportAreas: [
            'Az igazgató fizetésének finanszírozása (jogos és várható)',
            'Felszerelések: mezek, labdák, hátizsákok, szállítás, biztosítás',
            'Versenyutak – a gyerekek költségeinek teljes térítése',
            'Források szekciók megnyitására más falvakban a bővítés érdekében',
            'Mini-pálya vagy edzőtér építése az első szakaszban'
        ],
        benefitsTitle: 'Mit kapnak a támogatók?',
        benefitsList: [
            'Banner elhelyezése a stadionban',
            'Logó a mezeken vagy mellényekben',
            'Elismerés a közösségünkben',
            'A legelkötelezettebb szponzorok olimpiai jegyet kapnak, ha a csapat kijut az olimpiára'
        ],
        contactTitle: 'KÉSZ VAGY TÁMOGATNI A RÖGBIT?',
        contactText: 'BÁRMILYEN KÉNYELMES MÓDON FELVEHETED VELÜNK A KAPCSOLATOT!',
        contactPhone: '+380 50 949 82 09',
        contactEmail: 'shashero10@gmail.com',
        contactTelegram: 't.me/Shasher',
        olympicGoal: 'Arra törekszünk, hogy méltósággal képviseljük Ukrajnát a nemzetközi színtereken, és dicsőséget hozzunk hazánknak a világban. Minden mérkőzés egy lépés a nagy cél felé, és bizonyítéka az ukrán szellem törhetetlen erejének. A Ifjúsági Olimpiai Játékokra való kijutás az erő, az egység és a győzelembe vetett hit szimbólumává válik.',
        europeanGoal: 'Célunk, hogy a jövőben a mai ukrán nemzeti és ifjúsági csapatok szintjén szerepeljünk az Európa-bajnokságokon. Célunk a Championship divízió megnyerése, és hogy méltósággal képviseljük Ukrajnát a legerősebb csapatok között az olimpiai szinten.',
        olympicTitle: 'Kijutás Ifjúsági Olimpiai Játékokra'
    }
};
