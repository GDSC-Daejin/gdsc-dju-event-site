import styled from 'styled-components';

export const EventLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
export const EventPageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const EventsWrapper = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;
