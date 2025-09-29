import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SponsorProgram from './components/SponsorProgram';
import Club from './components/Club';
import Team from './components/Team.tsx';
import { LanguageProvider } from './components/LanguageContext.tsx';
import AboutUs from './components/AboutUs.tsx';
import Navbar from './components/Navbar';
import Sponsors from "./components/Sponsors.tsx";
import Media from "./components/Media.tsx";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <div
                    className="min-h-screen relative"
                    style={{
                        background: 'whitesmoke',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Navbar/>
                    <ScrollToTop />
                    <main
                        className="container mx-auto"
                        style={{
                            minWidth: '100%',
                            paddingRight: 0,
                            paddingLeft: 0,
                            overflowX: 'hidden',
                            overflowY: 'hidden',
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<SponsorProgram/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            <Route path="/club" element={<Club/>}/>
                            <Route path="/stadium" element={<Sponsors/>}/>
                            <Route path="/contact" element={<Media/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        </LanguageProvider>
    );
};

export default App;