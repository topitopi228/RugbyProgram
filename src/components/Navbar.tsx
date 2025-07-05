import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useLanguage} from './LanguageUtils.tsx';
import type {Language} from './LanguageUtils.tsx';

const navLinks: Record<Language, {
    home: string;
    about: string;
    club: string;
    team: string;
    stadium: string;
    contact: string;
}> = {
    UA: {
        home: 'Головна',
        about: 'Про нас',
        club: 'Клуб',
        team: 'Збірна',
        stadium: 'Стадіон',
        contact: 'Контакти',
    },
    EN: {
        home: 'Home',
        about: 'About Us',
        club: 'Club',
        team: 'Team',
        stadium: 'Stadium',
        contact: 'Contact',
    },
    HUN: {
        home: 'Főoldal',
        about: 'Rólunk',
        club: 'Klub',
        team: 'Csapat',
        stadium: 'Stadion',
        contact: 'Kapcsolat',
    },
};

const Navbar: React.FC = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const {language, setLanguage} = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            setIsNavbarVisible(currentScrollPos < 50 || isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav
            className={`bg-gray-800 fixed top-0 left-0 w-full p-2 md:p-4 transition-transform duration-300 ${
                isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
            } z-10 flex flex-col md:flex-row items-center justify-between`}
            style={{borderRadius: '5px', maxHeight: '11vh', minHeight: '6vw'}}
        >
            <header className="py-2 md:py-4 w-full md:w-auto">
                <div className="container mx-auto text-center md:max-w-100" style={{padding: '0'}}>
                    <h1 className="text-base sm:text-xl md:text-3xl font-bold text-yellow-400">
                        <Link to="/" className="hover:text-yellow-600">RUGBY ZAKARPATIA SPONSOR PROGRAM</Link>
                    </h1>
                </div>
            </header>
            <div className="w-full md:w-auto flex flex-col md:flex-row  items-center space-y-2  justify-between mt-1 md:mt-0 md:"
                 style={{marginLeft: '0'}}>
                <div className="flex space-x-4 md:space-x-15 flex-wrap md:mr-70 ">
                    <Link to="/" className="hover:text-yellow-400 text-s md:text-xl text-white">
                        {navLinks[language].home}
                    </Link>
                    <Link to="/about" className="hover:text-yellow-400 text-s md:text-xl text-white">
                        {navLinks[language].about}
                    </Link>
                    <Link to="/club" className="hover:text-yellow-400 text-s md:text-xl text-white">
                        {navLinks[language].club}
                    </Link>
                    <Link to="/stadium" className="hover:text-yellow-400 text-s md:text-xl text-white">
                        {navLinks[language].stadium}
                    </Link>
                    <Link to="/contact" className="hover:text-yellow-400 text-s md:text-xl text-white">
                        {navLinks[language].contact}
                    </Link>
                </div>
                <div className="flex space-x-0.5 md:space-x-2 pr-1 md:pr-4 items-center">
                    <button
                        onClick={() => setLanguage('UA')}
                        className={`text-xs  md:text-lg ${language === 'UA' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
                    >
                        UA
                    </button>
                    <span className="text-white text-xs md:text-base">|</span>
                    <button
                        onClick={() => setLanguage('EN')}
                        className={`text-xs md:text-lg ${language === 'EN' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
                    >
                        EN
                    </button>
                    <span className="text-white text-xs md:text-base">|</span>
                    <button
                        onClick={() => setLanguage('HUN')}
                        className={`text-xs md:text-lg ${language === 'HUN' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
                    >
                        HUN
                    </button>
                </div>
            </div>
            {/* Додатковий медіа-запит для зменшення хедера на мобільних */}
            <style>
                {`
          @media (max-width: 640px) {
            h1 {
              font-size: 1rem !important; /* Зменшення хедера */
            }
            nav .flex:last-child {
              display: flex !important; /* Гарантуємо видимість кнопок мов */
              opacity: 1 !important; /* Уникаємо проблем із прозорістю */
              font-size: 0.7rem !important; /* Збільшення шрифту для кращої видимості */
            }
          }
         
                }
        `}
            </style>
        </nav>
    );
};

export default Navbar;