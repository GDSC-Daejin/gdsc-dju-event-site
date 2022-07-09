import React from 'react';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Faq = () => {
  return (
    <LayoutContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <ContainerInner>faq</ContainerInner>
    </LayoutContainer>
  );
};

export default Faq;
