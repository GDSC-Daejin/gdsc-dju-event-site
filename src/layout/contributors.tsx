import React from 'react';
import ContributorCard from '../components/ContributorCard';
import {
  ContributorCardWrapper,
  ContributorsDescription,
  ContributorsLayoutWrapper,
  ContributorsSection,
  ContributorsTitle,
} from './contributors.styled';

const ContributorsLayout = () => {
  const ContributorsData = [
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
    {
      name: 'Jason',
      role: 'GDSC DJU Lead',
    },
  ];
  return (
    <ContributorsLayoutWrapper>
      <ContributorsTitle>Contributors</ContributorsTitle>
      <ContributorsDescription>
        GDSC Daejin Univ.가 운영하는 행사/서비스에 기여해주신 분들 입니다.
      </ContributorsDescription>
      <ContributorsSection>
        {ContributorsData.map((data, id) => (
          <ContributorCardWrapper key={id}>
            <ContributorCard />
          </ContributorCardWrapper>
        ))}
      </ContributorsSection>
    </ContributorsLayoutWrapper>
  );
};

export default ContributorsLayout;
