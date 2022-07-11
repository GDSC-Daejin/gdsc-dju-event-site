import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import Navigation from '../components/Navigation';
import ReactHead from '../components/ReactHead';
import { useTheme } from '../hooks/ThemeHandler';
import Contributors from '../pages/Contributors';
import Events from '../pages/Events';
import Faq from '../pages/Faq';
import Home from '../pages/Home';

import GlobalStyles from '../styles/globalStyles';
import { NavigationBlock } from '../styles/layouts';
import { darkTheme, lightTheme } from '../styles/theme';

const Index = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ReactHead />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <NavigationBlock />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/faq'} element={<Faq />} />
          <Route path={'/contributors'} element={<Contributors />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
