import React from 'react';
import Event from '../components/Event';
import Session from '../components/Session';

import {
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
      <EventPageTitle>Events</EventPageTitle>

      {Events.map((data, id) => (
        <EventsWrapper key={id}>
          {data.type === 'event' ? <Event /> : <Session />}
        </EventsWrapper>
      ))}
    </EventLayoutWrapper>
  );
};

export default EventLayout;
