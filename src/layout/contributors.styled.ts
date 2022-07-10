import styled from 'styled-components';

export const ContributorsLayoutWrapper = styled.div`
  margin-top: 70px;
  position: static;
`;
export const ContributorsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const ContributorsSection = styled.section`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px 45px;
`;
export const ContributorCardWrapper = styled.div``;
export const ContributorsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  margin-top: 10px;
`;
