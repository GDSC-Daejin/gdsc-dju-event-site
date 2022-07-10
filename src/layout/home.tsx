import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../siteDatas/eventsData';
import { checkEventEnd } from '../utils/checkEventEnd';
import { eventDateFilter, eventTimeFilter } from '../utils/eventDateFilter';
import {
  ButtonWrapper,
  HomeLayoutWrapper,
  HomeTitle,
  StyledButton,
  StyledDate,
  StyledMoreButton,
  StyledTime,
} from './home.styled';

const HomeLayout = () => {
  const navigate = useNavigate();
  const currentEvent = eventsData[0];
  return (
    <HomeLayoutWrapper>
      <HomeTitle>{currentEvent.title}</HomeTitle>
      <StyledDate>{currentEvent.description}</StyledDate>
      <StyledTime>
        {eventDateFilter(currentEvent.start, currentEvent.end)}
      </StyledTime>
      <StyledTime>
        {eventTimeFilter(currentEvent.start, currentEvent.end)}
      </StyledTime>
      <ButtonWrapper>
        <StyledButton
          onClick={() =>
            !checkEventEnd(currentEvent.end) &&
            window.open(currentEvent.applyLink, '_blank')
          }
          eventType={currentEvent.type}
        >
          {currentEvent.type == 'session' ? '세션 신청하기' : '이벤트 신청하기'}
        </StyledButton>
        <StyledMoreButton onClick={() => navigate('/')}>
          더 알아보기
        </StyledMoreButton>
      </ButtonWrapper>
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
