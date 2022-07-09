import React from 'react';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Speaker = () => {
  return (
    <LayoutContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <ContainerInner>speaker</ContainerInner>
    </LayoutContainer>
  );
};

export default Speaker;
