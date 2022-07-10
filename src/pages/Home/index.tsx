import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import sessionBackground from '../../assets/sessionBackground.svg';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import HomeLayout from '../../layout/home';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

export const HomeBackground = styled(motion.img)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Home = () => {
  return (
    <>
      <LayoutContainer>
        <ContainerInner
          initial="start"
          animate="end"
          exit="out"
          variants={pageTransitionAnimate}
          transition={pageAnimate}
        >
          <HomeLayout />
        </ContainerInner>
      </LayoutContainer>
      <HomeBackground
        src={sessionBackground}
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      />
    </>
  );
};

export default Home;
