import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey800};
`;
export const HomeLayoutWrapper = styled(motion.main)`
  margin-top: 260px;
  display: flex;
  flex-direction: column;
`;
export const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey800};
  font-weight: bold;
  margin-top: 40px;
`;
export const StyledTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  margin-top: 10px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
`;
export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: #fff;
  background: ${({ theme }) => theme.colors.googleBlue};
  padding: 16px 36px;
  border: 0 solid transparent;
  border-radius: 10px;
  cursor: pointer;
`;
export const StyledMoreButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey400};
  background: transparent;
  padding: 16px 36px;
  border: 0 solid transparent;
  cursor: pointer;
`;
