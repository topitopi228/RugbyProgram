import {motion} from 'framer-motion';
import {useLanguage} from './LanguageUtils';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const Sponsors = () => {
    const {language} = useLanguage();
    const navigate = useNavigate();
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        navigate('/#ggwp');
    };


    const translations = {
        UA: {
            companySponsors: 'Компанії-партнери',
            personalSponsors: 'Особисті спонсори',
            becomeSponsor: 'Стати спонсором',
            companySponsorsList: [
                {
                    image: '/spin-4.png',
                    name: 'БФ "Міла" Олексія Юренка',
                    url: 'https://www.facebook.com/p/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D0%A4%D0%BE%D0%BD%D0%B4-%D0%9C%D0%86%D0%9B%D0%90-%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D1%8F-%D0%AE%D1%80%D0%B5%D0%BD%D0%BA%D0%B0-61572065630183/'
                },
                {
                    image: '/spin-3.png',
                    name: 'Федерація регбі України',
                    url: 'https://rugby.org.ua/'
                },
                {
                    image: '/spin-2.png',
                    name: 'БФ "Nova Ukraine"',
                    url: 'https://novaukraine.org/'
                },
                {
                    image: '/spin-1.png',
                    name: 'Готель-ресторан "Згарда"',
                    url: 'https://www.instagram.com/zgardadragobrat/'
                },
            ],
            personalSponsorsList: [
                {
                    image: '/spon1.png',
                    name: 'ШАНДОР ФЕДІР',
                    position: 'Посол України в Угорщині, президент федерації регбі Закарпатської області',
                },
                {
                    image: '/spon2.png',
                    name: 'БАЖЕНКОВ ЄВГЕН',
                    position: 'Президент федерації регбі України',
                },
                {
                    image: '/spon3.png',
                    name: 'БИХОВ РОМАН',
                    position: 'Президент федерації регбі Харківської області',
                },
                {
                    image: '/spon4.png',
                    name: 'ПОТАПЕНКО ОЛЕКСАНДР',
                    position: 'Президент Київської міської федерації регбі',
                },
                {
                    image: '/spon5.webp',
                    name: 'ЕТНАРОВИЧ ОЛЕГ ',
                    position: 'Український підприємець, меценат',
                },
                {
                    image: '/spon6.jpeg',
                    name: 'ЮРЕНКО ОЛЕКСІЙ',
                    position: 'Засновник БФ "Міла", підприємець',
                },
                {
                    image: '/spon7.jpg',
                    name: 'ПEТЬОВКА АНДРІЙ',
                    position: 'Підприємець, меценат спорту',
                },
                {
                    image: '/spon8.jpg',
                    name: 'КОПІЛОВ АНТОН',
                    position: 'Підприємець, інвестор',
                },
                {
                    image: '/spon9.jpg',
                    name: 'АДАМІК ПЕТРО',
                    position: 'Бізнесмен, меценат',
                },

            ],
        },
        EN: {
            companySponsors: 'Company Sponsors',
            personalSponsors: 'Personal Sponsors',
            becomeSponsor: 'Become a Sponsor',
            companySponsorsList: [
                {
                    image: '/spin-1.png',
                    name: 'Charity Fund "Mila" by Oleksiy Yurenko',
                    url: 'https://mila.help/'
                },
                {
                    image: '/spin-2.png',
                    name: 'Ukraine Rugby Union',
                    url: 'https://rugby.org.ua/'
                },
                {
                    image: '/spin-3.png',
                    name: 'Charity Fund "Nova Ukraine"',
                    url: 'https://novaukraine.org/'
                },
                {
                    image: '/spin-4.png',
                    name: 'Restaurant-Hotel "Zharda"',
                    url: 'https://www.instagram.com/zgardarestaurant/'
                },
            ],
            personalSponsorsList: [
                {
                    image: '/spon1.png',
                    name: 'FEDIR SHANDOR',
                    position: 'Ambassador of Ukraine to Hungary, President of the Zakarpattia Regional Rugby Federation',
                },
                {
                    image: '/spon2.png',
                    name: 'YEVHEN BAZHENKOV',
                    position: 'President of the Ukraine Rugby Union',
                },
                {
                    image: '/spon3.png',
                    name: 'ROMAN BIKHOV',
                    position: 'President of the Kharkiv Regional Rugby Federation',
                },
                {
                    image: '/spon4.png',
                    name: 'OLEKSANDR POTAPENKO',
                    position: 'President of the Kyiv City Rugby Federation',
                },
                {
                    image: '/spon5.png',
                    name: 'OLEH ETNAROVYCH',
                    position: 'Ukrainian entrepreneur, philanthropist',
                },
                {
                    image: '/spon6.png',
                    name: 'OLEKSIY YURENKO',
                    position: 'Founder of "Mila" Charity Fund, entrepreneur',
                },
                {
                    image: '/spon7.png',
                    name: 'ANDRII PITOVKA',
                    position: 'Entrepreneur, sports patron',
                },
                {
                    image: '/spon8.png',
                    name: 'ANTON KOPILOV',
                    position: 'Entrepreneur, investor',
                },
                {
                    image: '/spon9.png',
                    name: 'PETRO ADAMYK',
                    position: 'Businessman, philanthropist',
                },
                {
                    image: '/spon10.png',
                    name: 'DAVID WILLIAMS',
                    position: 'New Zealand entrepreneur, rugby enthusiast',
                },
            ],
        },
    };

    const t = translations[language as keyof typeof translations] || translations.EN;

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Company Sponsors Section */}
            <div className="max-w-7xl mx-auto mt-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300"
                >
                    {t.companySponsors}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {t.companySponsorsList.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1, duration: 0.5}}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30"
                        >
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <div className="h-40 flex items-center justify-center mb-4">
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-center text-yellow-300">
                                    {sponsor.name}
                                </h3>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Personal Sponsors Section */}
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300 mt-24"
                >
                    {t.personalSponsors}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {t.personalSponsorsList.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1, duration: 0.5}}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/30 flex flex-col items-center text-center"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-yellow-400/50">
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-yellow-300 mb-2">
                                {sponsor.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                                {sponsor.position}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Become a Sponsor Button */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.6}}
                >
                    <button
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold rounded-full text-lg md:text-xl hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 flex items-center"
                    >
                        {t.becomeSponsor}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                </motion.div>

            </div>

            {/* This is the target for the scroll */}
            <div ref={contactRef} id="contact" className="h-1"></div>
        </div>
    );
};

export default Sponsors;
