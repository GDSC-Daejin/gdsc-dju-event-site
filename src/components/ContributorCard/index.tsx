import React from 'react';
import {
  ContributorCardWrapper,
  ContributorImage,
  ContributorName,
  ContributorRole,
} from './styled';

const ContributorCard = () => {
  return (
    <ContributorCardWrapper>
      <ContributorImage
        src={
          'https://ca.slack-edge.com/T02BE2ERU5A-U02B4R8P8HK-48f4788ee881-512'
        }
      />
      <ContributorName>Jason</ContributorName>
      <ContributorRole>GDSC DJU Lead</ContributorRole>
    </ContributorCardWrapper>
  );
};

export default ContributorCard;
