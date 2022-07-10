import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { EventsType } from '../types/event';

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey800};
  white-space: pre-line;
`;
export const HomeLayoutWrapper = styled(motion.main)`
  margin-top: 260px;
  display: flex;
  flex-direction: column;
`;
export const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey600};
  font-weight: bold;
  margin-top: 40px;
`;
export const StyledTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey500};
  margin-top: 6px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
`;
export const StyledButton = styled.button<{ eventType?: EventsType }>`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: #fff;
  background: ${({ theme }) => theme.colors.googleBlue};
  padding: 16px 36px;
  border: 0 solid transparent;
  border-radius: 10px;
  cursor: pointer;
  ${({ eventType }) =>
    eventType === 'session'
      ? css`
          background: ${({ theme }) => theme.colors.googleBlue};
        `
      : css`
          background: ${({ theme }) => theme.colors.googleGreen};
        `}
`;
export const StyledMoreButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey400};
  background: transparent;
  padding: 16px 36px;
  border: 0 solid transparent;
  cursor: pointer;
`;
