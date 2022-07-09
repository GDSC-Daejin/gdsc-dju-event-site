import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/Navigation';
import { useTheme } from '../hooks/ThemeHandler';
import Event from '../pages/Event';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Speaker from '../pages/Speaker';
import GlobalStyles from '../styles/globalStyles';
import { NavigationBlock } from '../styles/layouts';
import { darkTheme, lightTheme } from '../styles/theme';

const Index = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <NavigationBlock />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/event'} element={<Event />} />
          <Route path={'/faq'} element={<Faq />} />
          <Route path={'/speaker'} element={<Speaker />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
