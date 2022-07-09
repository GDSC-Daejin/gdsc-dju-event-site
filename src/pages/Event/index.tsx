import React from 'react';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import EventLayout from '../../layout/event';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Event = () => {
  return (
    <LayoutContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <ContainerInner>
        <EventLayout />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Event;
