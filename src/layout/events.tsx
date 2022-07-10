import React from 'react';
import Event from '../components/Event';
import Session from '../components/Session';
import { eventsData } from '../siteDatas/eventsData';
import { ContainerInner, LayoutContainer } from '../styles/layouts';

import {
  EventContour,
  EventLayoutWrapper,
  EventPageTitle,
  EventsWrapper,
} from './events.styled';

const EventsLayout = () => {
  return (
    <EventLayoutWrapper>
      <LayoutContainer>
        <ContainerInner>
          <EventPageTitle>Events</EventPageTitle>
        </ContainerInner>
      </LayoutContainer>
      {eventsData.map((data, id) => (
        <EventsWrapper key={id}>
          {data.type == 'session' ? <Session {...data} /> : <Event {...data} />}
          <EventContour />
        </EventsWrapper>
      ))}
    </EventLayoutWrapper>
  );
};

export default EventsLayout;
