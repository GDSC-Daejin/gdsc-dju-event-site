import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <HomeLayoutWrapper>
      <HomeTitle>
        모두가 참여할 수 있는 <br /> public Session
      </HomeTitle>
      <StyledDate>2022.07.20 (Wed)</StyledDate>
      <StyledTime>9:00 PM - 11:00 PM</StyledTime>
      <ButtonWrapper>
        <StyledButton onClick={() => navigate('/')}>세션 신청하기</StyledButton>
        <StyledMoreButton onClick={() => navigate('/')}>
          더 알아보기
        </StyledMoreButton>
      </ButtonWrapper>
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
