import styled from 'styled-components';

export const ContributorCardWrapper = styled.div`
  padding: 40px 60px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ContributorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const ContributorName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h7};
  color: ${({ theme }) => theme.colors.grey900};
  margin-top: 20px;
`;
export const ContributorRole = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey500};
  margin-top: 20px;
`;
