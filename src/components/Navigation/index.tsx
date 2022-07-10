import React from 'react';
import { useLocation } from 'react-router-dom';
import gdsclogo from '../../assets/GDSCLogo.svg';
import { ThemeType } from '../../hooks/ThemeHandler';
import ThemeToggleButton from '../ThemeToggleButton';
import {
  GDSCImage,
  LinkWrapper,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  StyledLink,
  StyledLogoWrapper,
} from './styled';

export const ROUTES = [
  {
    route: '/events',
    title: 'Events',
  },
  {
    route: '/contributors',
    title: 'Contributors',
  },
  {
    route: '/faq',
    title: 'FAQ',
  },
];
const Navigation: React.FC<{
  theme: ThemeType | undefined;
  toggleTheme: () => void;
}> = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavInner>
        <NavTaskWrapper>
          <StyledLogoWrapper to={'/'}>
            <GDSCImage src={gdsclogo} />
            <NavTask bold={true}>GDSC</NavTask>
            <NavTask>DJU</NavTask>
            <NavTask blue={true}>Shared</NavTask>
          </StyledLogoWrapper>
          <LinkWrapper>
            {ROUTES.map((site, id) => (
              <StyledLink
                key={id}
                isRoute={location.pathname == site.route}
                to={site.route}
              >
                {site.title}
              </StyledLink>
            ))}
          </LinkWrapper>
        </NavTaskWrapper>
        <ThemeToggleButton theme={theme} toggleButton={toggleTheme} />
      </NavInner>
    </NavWrapper>
  );
};

export default Navigation;
