import styled from 'styled-components';

export const EventSectionWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const EventTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const EventDescription = styled.div`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
`;
export const EventDateWrapper = styled.span`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const EventDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.googleBlue};
`;
export const EventTime = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
`;
export const SessionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EventApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SessionCardSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const SessionCardWrapper = styled.div`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`;
