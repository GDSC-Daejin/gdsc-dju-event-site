import React from 'react';
import styled, { css } from 'styled-components';
import calendarIcon from '../../assets/icons/calendar.svg';
import { lightColors } from '../../styles/lightColors';

export const CalendarButtonStyle = styled.button<{ isEnd: boolean }>`
  padding: 16px 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey500};
  background: transparent;
  border: 0 solid transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ isEnd }) =>
    isEnd &&
    css`
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.grey200};
    `}
`;
export const CalendarImage = styled.img`
  margin-right: 10px;
  height: 20px;
`;
export const EventButton = styled.button<{
  color?: keyof typeof lightColors;
  isEnd: boolean;
}>`
  padding: 16px 40px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: #fff;
  border: 0 solid transparent;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.googleBlue};
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) => theme.colors[color]};
    `}
  ${({ isEnd }) =>
    isEnd &&
    css`
      cursor: not-allowed;
      background: ${({ theme }) => theme.colors.tossBlue200};
    `}
`;
const CalendarButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  isEnd: boolean;
}> = ({ children, onClick, isEnd }) => {
  return (
    <CalendarButtonStyle onClick={onClick} isEnd={isEnd}>
      <CalendarImage src={calendarIcon} />
      {children}
    </CalendarButtonStyle>
  );
};

export default CalendarButton;
