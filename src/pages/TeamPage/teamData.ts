// Team data and translations
export const getTeamData = (language: string, t: any) => {
    return {
        coaches: [
            {
                id: 'coach1',
                name: t.coach1,
                role: t.headCoach,
                gg: t.coach1Desc
            },
            {
                id: 'coach2',
                name: t.coach2,
                role: t.fitnessCoach,
                gg: t.coach2Desc
            },
            {
                id: 'coach3',
                name: t.coach3,
                role: t.tacticalAnalyst,
                gg: t.coach3Desc
            },
            {
                id: 'trener4',
                name: t.coach4,
                role: t.teamManager,
                gg: t.coach4Desc
            }
        ],
        doctors: [
            {
                id: 'doc2',
                name: t.doctor2,
                role: t.sportsDoctor,
                gg: t.doctor2Desc
            }
        ],
        players: [
            { id: 'player15', name: 'Олександр Бишук', isCaptain: true, birthDate: '26.05.2010' },
            { id: 'player12', name: 'Владислав Кошелюк', isViceCaptain: true, birthDate: '04.07.2010' },
            { id: 'player1', name: 'Микола Денбновецький ', birthDate: '08.12.2010' },
            { id: 'player2', name: 'Ерік Тіппан', birthDate: '12.09.2013' },
            { id: 'player3', name: 'Володимир Рец', birthDate: '05.04.2011' },
            { id: 'player5', name: 'Даниіл Казнін', birthDate: '07.05.2010' },
            { id: 'player6', name: 'Мирослав Тарасюк', birthDate: '15.05.2011' },
            { id: 'player7', name: 'Юрій Штець', birthDate: '07.05.2011' },
            { id: 'player8', name: 'Богдан Пікульський', birthDate: '19.01.2010' },
            { id: 'player9', name: 'Владислав Садовський', birthDate: '09.03.2010' },
            { id: 'player10', name: 'Роман Присяжнюк', birthDate: '18.05.2010' },
            { id: 'player11', name: 'Михайло Четвертик', birthDate: '16.10.2010' },
            { id: 'player13', name: 'Артем Кухарський', birthDate: '30.10.2010' },
            { id: 'player16', name: 'Даниіл Плєшаков', birthDate: '05.04.2010' },
            { id: 'player17', name: 'Микита Джусоєв', birthDate: '26.03.2010' },
            { id: 'player18', name: 'Артем Гуртовий', birthDate: '05.11.2010' },
            { id: 'player19', name: 'Данило Жук', birthDate: '12.09.2011' },
        ],
        foreignCoaches: [
            {
                id: 'trenout1',
                name: 'Паліко Джимшеладзе',
                role: language === 'UA'
                    ? 'Колишній гравець збірної Грузії, рекордсмен за кількістю очок у національній команді'
                    : language === 'EN'
                        ? 'Former player of the Georgian national team, record holder for points scored in the national team'
                        : 'A grúz válogatott korábbi játékosa, a válogatottban szerzett pontok rekordere',
                description: language === 'UA'
                    ? 'Провів 57 матчів за збірну, учасник Кубків світу 2003 та 2007 років. Чемпіон Грузії, багато років виступав у французьких клубах як провідний півзахисник.'
                    : language === 'EN'
                        ? 'Played 57 matches for the national team, participated in the 2003 and 2007 World Cups. Champion of Georgia, played for many years in French clubs as a leading midfielder.'
                        : '57 mérkőzést játszott a válogatottban, részt vett a 2003-as és 2007-es világbajnokságon. Grúzia bajnoka, sokáig francia klubokban játszott vezető középpárosként.'
            },
            {
                id: 'trenout2',
                name: 'Алан Бантінг',
                role: language === 'UA'
                    ? 'Головний тренер жіночої збірної Нової Зеландії'
                    : language === 'EN'
                        ? 'Head Coach of the New Zealand Women\'s National Team'
                        : 'Új-Zéland női válogatottjának vezetőedzője',
                description: language === 'UA'
                    ? 'Колишній тренер Black Ferns Sevens, який привів команду до перемоги у Світової серії регбі-7. Тренер  у розвитку жіночого регбі, відомий своїм інноваційним підходом до підготовки спортсменок. Під його керівництвом команда досягла безпрецедентного рівня майстерності та професіоналізму.'
                    : language === 'EN'
                        ? 'Former coach of Black Ferns Sevens who led the team to victory in the World Rugby Sevens Series. A manager in the development of women\'s rugby, known for his innovative approach to athlete preparation. Under his leadership, the team achieved an unprecedented level of skill and professionalism.'
                        : 'A Black Ferns Sevens korábbi edzője, aki a csapatot a World Rugby Seven Series győzelemhez vezette. A női rögbi fejlesztésének úttörője, ismert innovatív edzésmódszereiről. Vezetése alatt a csapat példátlan szakmai színvonalat ért el.'
            },
            {
                id: 'trenout3',
                name: 'Сер Грехем Генрі',
                role: language === 'UA'
                    ? 'Колишній головний тренер All Blacks'
                    : language === 'EN'
                        ? 'Former Head Coach of All Blacks'
                        : 'Az All Blacks korábbi vezetőedzője',
                description: language === 'UA'
                    ? 'Легендарний тренер, який привів All Blacks до перемоги на Кубку світу з регбі 2011 року. На чолі команди з 2004 по 2011 рік, встановив нові стандарти у світі регбі. Під його керівництвом All Blacks виграли Кубок Бледіслоу 7 разів поспіль та Кубок трьох націй 5 разів. Відзначений численними нагородами, включаючи орден Британської імперії та місце в Залі слави World Rugby.'
                    : language === 'EN'
                        ? 'Legendary coach who led the All Blacks to victory in the 2011 Rugby World Cup. At the helm from 2004 to 2011, he set new standards in world rugby. Under his leadership, the All Blacks won the Bledisloe Cup 7 times in a row and the Tri Nations 5 times. Honored with numerous awards, including the Order of the British Empire and induction into the World Rugby Hall of Fame.'
                        : 'Legendás edző, aki az All Blackst a 2011-es rögbi-világbajnoki győzelemhez vezette. 2004-től 2011-ig állt a csapat élén, új szabványokat állítva fel a világrögbi számára. Vezetésével az All Blacks 7-szer nyerte meg egymás után a Bledisloe-kupát és 5-ször a Három Nemzet Kupáját. Számos kitüntetés birtokosa, köztük a Brit Birodalom Rendjével és a World Rugby Hírességek Csarnokának tagjaként.'
            },
            {
                id: 'trenout4',
                name: 'Вейн Тейлор',
                role: language === 'UA'
                    ? 'Спеціаліст з фізичної підготовки та високої продуктивності'
                    : language === 'EN'
                        ? 'Strength & Conditioning and High-Performance Specialist'
                        : 'Erőnléti és nagy teljesítményű szakember',
                description: language === 'UA'
                    ? 'Висококваліфікований спеціаліст з фізичної підготовки і високопродуктивного тренінгу новозеландського походження з великим досвідом роботи в міжнародному регбі та Super Rugby. Працював з національною командою Японії, Sunwolves, SA Lions, Southern Kings та Румунією, спеціалізується на розвитку спортсменів, спортивних показниках та регбійному тренінгу.'
                    : language === 'EN'
                        ? 'Wayne Taylor is a highly experienced New Zealand-born strength and conditioning (S&C) coach and high-performance specialist with extensive experience in international and Super Rugby. He has worked with the Japan National Team, Sunwolves, SA Lions, Southern Kings, and Romania, specializing in athlete development, athletic performance, and rugby-specific training.'
                        : 'Új-zélandszületésű erőnléti és kondicionálási (S&C) edző és nagy teljesítményű szakember kiterjedt tapasztalattal a nemzetközi és Super Rugby területén. Dolgozott a japán válogatottal, a Sunwolvesszal, az SA Lionsszal, a Southern Kingsszel és Romániával, specializált sportolófejlesztésre, sportteljesítményre és rögbi-specifikus edzésekre.'
            }
        ]
    };
};
