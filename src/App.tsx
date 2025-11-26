import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// New refactored pages
import SponsorProgramPage from './pages/SponsorProgramPage';
import AboutUsPage from './pages/AboutUsPage';
import SponsorsPage from './pages/SponsorsPage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import ClubBenefitsPage from './pages/ClubBenefitsPage';
import MediaPage from './pages/MediaPage';

// Shared components
import { LanguageProvider } from './components/LanguageContext.tsx';
import Navbar from './components/Navbar';

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
                            <Route path="/" element={<SponsorProgramPage/>}/>
                            <Route path="/team" element={<TeamPage/>}/>
                            <Route path="/about" element={<AboutUsPage/>}/>
                            <Route path="/club" element={<NewsPage/>}/>
                            <Route path="/stadium" element={<SponsorsPage/>}/>
                            <Route path="/contact" element={<MediaPage/>}/>
                            <Route path="/benefits" element={<ClubBenefitsPage/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        </LanguageProvider>
    );
};

export default App;