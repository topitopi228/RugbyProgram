import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageUtils.tsx';
import type { Language } from './LanguageUtils.tsx';

const navLinks: Record<Language, { home: string; about: string; club: string; team: string; stadium: string; contact: string; }> = {
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
  const { language, setLanguage } = useLanguage();

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
      className={`bg-gray-800 fixed top-0 left-0 w-full p-4 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full' 
      } z-10 flex items-center justify-between`}
      style={{ borderRadius: '5px', minHeight: '12vh' }}
    >
      <header className="py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-yellow-400" >
            <Link to="/" className="hover:text-yellow-600">RUGBY ZAKARPATIA SPONSOR PROGRAM </Link>
          </h1>
        </div>
      </header>
      <div className="container mx-auto flex items-center justify-between" style={{ marginLeft: '2vw' }}>
        <div className="flex space-x-15">
          <Link to="/" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].home}
          </Link>
          <Link to="/about" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].about}
          </Link>
          <Link to="/club" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].club}
          </Link>
          <Link to="/national-team" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].team}
          </Link>
          <Link to="/stadium" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].stadium}
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 text-xl text-white">
            {navLinks[language].contact}
          </Link>
        </div>
        <div className="flex space-x-2 pr-4 items-center">
          <button
            onClick={() => setLanguage('UA')}
            className={`text-lg ${language === 'UA' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}

          >
            UA
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setLanguage('EN')}
            className={`text-lg ${language === 'EN' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
          >
            EN
          </button>
          <span className="text-white">|</span>
          <button
            onClick={() => setLanguage('HUN')}
            className={`text-lg ${language === 'HUN' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
          >
            HUN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;