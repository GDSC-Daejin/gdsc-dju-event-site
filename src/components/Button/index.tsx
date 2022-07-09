import React from 'react';
import styled, { css } from 'styled-components';
import calendarIcon from '../../assets/icons/calendar.svg';
import { lightColors } from '../../styles/lightColors';

export const CalendarButtonStyle = styled.button`
  padding: 16px 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey500};
  background: transparent;
  border: 0 solid transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const CalendarImage = styled.img`
  margin-right: 10px;
  height: 20px;
`;
export const EventButton = styled.button<{ color?: keyof typeof lightColors }>`
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
`;
const CalendarButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CalendarButtonStyle>
      <CalendarImage src={calendarIcon} />
      {children}
    </CalendarButtonStyle>
  );
};

export default CalendarButton;
