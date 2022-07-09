import React from 'react';
import CalendarButton, { EventButton } from '../Button';
import { StyledSectionBar } from '../Event/styled';
import SessionCard from '../SessionCard';

import {
  EventApplyWrapper,
  EventDate,
  EventDateWrapper,
  EventDescription,
  EventInfoWrapper,
  EventSectionWrapper,
  EventTime,
  EventTitle,
  SessionCardSection,
  SessionCardWrapper,
  SessionHeader,
} from './styled';

const Session = () => {
  const arr = ['', '', '', '', ''];
  return (
    <EventSectionWrapper>
      <SessionHeader>
        <EventInfoWrapper>
          <EventTitle>public Session #2</EventTitle>
          <EventDescription>
            모두가 참여할 수 있는 public Session
          </EventDescription>
          <EventDateWrapper>
            <EventDate>2022.05.18</EventDate>
            <StyledSectionBar />
            <EventTime>8:00 PM - 10:00 PM</EventTime>
          </EventDateWrapper>
        </EventInfoWrapper>
        <EventApplyWrapper>
          <EventButton>세션 신청하기</EventButton>
          <CalendarButton>구글 캘린더에 추가하기</CalendarButton>
        </EventApplyWrapper>
      </SessionHeader>

      <SessionCardSection>
        {arr.map((data, id) => (
          <SessionCardWrapper key={id}>
            <SessionCard />
          </SessionCardWrapper>
        ))}
      </SessionCardSection>
    </EventSectionWrapper>
  );
};

export default Session;
