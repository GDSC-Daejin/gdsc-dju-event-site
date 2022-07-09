import React from 'react';
import {
  SessionCardWrapper,
  SessionTime,
  SessionTitle,
  SpeakerImage,
  SpeakerInfoWrapper,
  SpeakerName,
  SpeakerRole,
  SpeakerWrapper,
} from './styled';

const SessionCard = () => {
  return (
    <SessionCardWrapper>
      <div>
        <SessionTitle>비전공자가 프론트?</SessionTitle>
        <SessionTime>22:00 - 22:20</SessionTime>
      </div>
      <SpeakerInfo />
    </SessionCardWrapper>
  );
};

export const SpeakerInfo = () => {
  return (
    <SpeakerWrapper>
      <SpeakerImage />
      <SpeakerInfoWrapper>
        <SpeakerName>Jason</SpeakerName>
        <SpeakerRole>Frontend Developer</SpeakerRole>
      </SpeakerInfoWrapper>
    </SpeakerWrapper>
  );
};

export default SessionCard;
