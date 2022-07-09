import React from 'react';
import styled from 'styled-components';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import HomeLayout from '../../layout/home';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import sessionBackground from '../../assets/sessionBackground.svg';

export const HomeBackground = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;o
`;

const Home = () => {
  return (
    <>
      <LayoutContainer
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <ContainerInner>
          <HomeLayout />
        </ContainerInner>
      </LayoutContainer>
      <HomeBackground src={sessionBackground} />
    </>
  );
};

export default Home;
