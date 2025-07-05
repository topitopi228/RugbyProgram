import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SponsorProgram from './components/SponsorProgram';
import Club from './components/Club';
import NationalTeam from './components/NationalTeam';
import Stadium from './components/Stadium';
import { LanguageProvider } from './components/LanguageContext.tsx';
import AboutUs from './components/AboutUs.tsx';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: `url(/rugby_back.jpg)`, // Зображення для десктопів
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Navbar />
          <main
            className="container mx-auto p-4"
            style={{
              minWidth: '100%',
              paddingRight: 0,
              paddingLeft: 0,
              overflowX: 'hidden',
              overflowY:'hidden',
            }}
          >
            <Routes>
              <Route path="/" element={<SponsorProgram />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/club" element={<Club />} />
              <Route path="/national-team" element={<NationalTeam />} />
              <Route path="/stadium" element={<Stadium />} />
              <Route path="/contact" element={<SponsorProgram />} />
            </Routes>
          </main>
          {/* Медіа-запити для мобільних */}
          <style>
            {`
              @media (max-width: 640px) {
                .min-h-screen {
                  background-image: url(/rugby_back_mob.jpg); /* Мобільна версія */
                  background-size: cover;
                  background-position: center;
                }
              }
            `}
          </style>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;