import styled, { css } from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EventContour = styled.div<{ last: boolean }>`
  max-width: 1100px;
  height: 1px;
  width: 100%;
  margin: 40px 0;
  background: ${({ theme }) => theme.colors.grey100};
  ${({ last }) =>
    last &&
    css`
      background: transparent;
    `}
`;
