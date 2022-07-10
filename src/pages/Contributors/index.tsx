import React from 'react';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Contributors = () => {
  return (
    <LayoutContainer>
      <ContainerInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        Contributors
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Contributors;
