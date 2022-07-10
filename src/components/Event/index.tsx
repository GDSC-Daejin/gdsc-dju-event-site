import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { EventType } from '../../types/event';
import { checkEventEnd } from '../../utils/checkEventEnd';
import { google } from '../../utils/createGoogleCalendarLink';
import { eventDateFilter, eventTimeFilter } from '../../utils/eventDateFilter';
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

const Event: React.FC<EventType> = ({
  title,
  description,
  start,
  end,
  applyLink,
}) => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <EventWrapper>
          <EventInfoWrapper>
            <EventTitle>{title}</EventTitle>
            <EventDescription>{description}</EventDescription>
            <EventDateWrapper>
              <EventDate>{eventDateFilter(start, end)}</EventDate>
              <StyledSectionBar />
              <EventTime>{eventTimeFilter(start, end)}</EventTime>
            </EventDateWrapper>
          </EventInfoWrapper>
          <EventButtonWrapper>
            <EventButton
              isEnd={checkEventEnd(end)}
              color={'googleGreen'}
              onClick={() =>
                !checkEventEnd(end) && window.open(applyLink, '_blank')
              }
            >
              해커톤 신청하기
            </EventButton>
            <CalendarButton
              isEnd={checkEventEnd(end)}
              onClick={() =>
                !checkEventEnd(end) &&
                window.open(
                  google({
                    start: `${start} +09:00`,
                    end: `${end} +09:00`,
                    title: title,
                    description: description,
                    organizer: {
                      name: 'GDSC DJU',
                      email: 'gdscdju@gmail.com',
                    },
                  }),
                )
              }
            >
              구글 캘린더에 추가하기
            </CalendarButton>
          </EventButtonWrapper>
        </EventWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Event;
