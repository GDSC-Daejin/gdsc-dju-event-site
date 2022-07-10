import React from 'react';
import Event from '../components/Event';
import Session from '../components/Session';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

import {
  EventContour,
  EventLayoutWrapper,
  EventPageTitle,
  EventsWrapper,
} from './event.styled';

const EventLayout = () => {
  const Events = [
    {
      type: 'event',
    },
    {
      type: 'session',
    },
    {
      type: 'session',
    },
    {
      type: 'session',
    },
  ];
  return (
    <EventLayoutWrapper>
      <LayoutContainer>
        <ContainerInner>
          <EventPageTitle>Events</EventPageTitle>
        </ContainerInner>
      </LayoutContainer>
      {Events.map((data, id) => (
        <EventsWrapper key={id}>
          {data.type === 'event' ? <Event /> : <Session />}
          <EventContour />
        </EventsWrapper>
      ))}
    </EventLayoutWrapper>
  );
};

export default EventLayout;
