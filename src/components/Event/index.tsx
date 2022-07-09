import React from 'react';
import CalendarButton, { EventButton } from '../Button';
import {
  EventButtonWrapper,
  EventDate,
  EventDateWrapper,
  EventDescription,
  EventInfoWrapper,
  EventTime,
  EventTitle,
  EventWrapper,
  StyledSectionBar,
} from './styled';

const Event = () => {
  return (
    <EventWrapper>
      <EventInfoWrapper>
        <EventTitle>GDSC DJU Hackathon #1</EventTitle>
        <EventDescription>모두가 참여할 수 있는 해커톤</EventDescription>
        <EventDateWrapper>
          <EventDate>2022.05.18</EventDate>
          <StyledSectionBar />
          <EventTime>8:00 PM - 10:00 PM</EventTime>
        </EventDateWrapper>
      </EventInfoWrapper>
      <EventButtonWrapper>
        <EventButton color={'googleGreen'}>해커톤 신청하기</EventButton>
        <CalendarButton>구글 캘린더에 추가하기</CalendarButton>
      </EventButtonWrapper>
    </EventWrapper>
  );
};

export default Event;
