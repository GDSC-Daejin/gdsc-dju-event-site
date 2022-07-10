import React, { useState } from 'react';
import ContributorCard from '../components/ContributorCard';
import { contributorsData } from '../siteDatas/contributorsData';
import {
  ContributorCardWrapper,
  ContributorsDescription,
  ContributorsLayoutWrapper,
  ContributorsSection,
  ContributorsTitle,
} from './contributors.styled';

const ContributorsLayout = () => {
  return (
    <ContributorsLayoutWrapper>
      <ContributorsTitle>Contributors</ContributorsTitle>
      <ContributorsDescription>
        GDSC Daejin Univ.가 운영하는 행사/서비스에 기여해주신 분들 입니다.
      </ContributorsDescription>
      <ContributorsSection>
        {contributorsData.map((data, id) => (
          <ContributorCardWrapper key={id}>
            <ContributorCard {...data} />
          </ContributorCardWrapper>
        ))}
      </ContributorsSection>
    </ContributorsLayoutWrapper>
  );
};

export default ContributorsLayout;
