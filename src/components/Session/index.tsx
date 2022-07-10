import React, { useEffect, useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import CalendarButton, { EventButton } from '../Button';
import { StyledSectionBar } from '../Event/styled';
import SessionCard from '../SessionCard';

import {
  EventApplyWrapper,
  EventDate,
  EventDateWrapper,
  EventDescription,
  EventInfoWrapper,
  EventSectionWrapper,
  EventTime,
  EventTitle,
  SessionCardSection,
  SessionCardWrapper,
  SessionHeader,
} from './styled';

const Session = () => {
  const [sectionWidth, setSectionWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const sessionSection = document.getElementById('sessionCardSection');

  const mouseDownHandler = function (e: MouseEvent) {
    if (sessionSection) {
      sessionSection.style.cursor = 'grabbing';
      sessionSection.style.userSelect = 'none';
      setScrollPosition({
        // The current scroll
        left: sessionSection.scrollLeft,
        top: sessionSection.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      });
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };
  const mouseMoveHandler = function (e: MouseEvent) {
    // How far the mouse has been moved
    const dx = e.clientX - scrollPosition.x;
    const dy = e.clientY - scrollPosition.y;
    if (sessionSection) {
      sessionSection.scrollTop = scrollPosition.top - dy;
      sessionSection.scrollLeft = scrollPosition.left - dx;
    }
  };
  const mouseUpHandler = function () {
    if (sessionSection) {
      sessionSection.style.cursor = 'grab';
      sessionSection.style.removeProperty('user-select');
    }
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  useEffect(() => {
    sectionRef.current && setSectionWidth(sectionRef.current?.offsetWidth);
  }, [sectionRef]);
  useEffect(() => {
    if (sessionSection) {
      sessionSection.addEventListener('mousedown', mouseDownHandler);
      sessionSection.style.cursor = 'grab';
    }
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [sessionSection]);

  const arr = ['', '', '', '', ''];
  return (
    <EventSectionWrapper>
      <LayoutContainer>
        <ContainerInner ref={sectionRef}>
          <SessionHeader>
            <EventInfoWrapper>
              <EventTitle>public Session #2</EventTitle>
              <EventDescription>
                모두가 참여할 수 있는 public Session
              </EventDescription>
              <EventDateWrapper>
                <EventDate>2022.05.18</EventDate>
                <StyledSectionBar />
                <EventTime>8:00 PM - 10:00 PM</EventTime>
              </EventDateWrapper>
            </EventInfoWrapper>
            <EventApplyWrapper>
              <EventButton>세션 신청하기</EventButton>
              <CalendarButton>구글 캘린더에 추가하기</CalendarButton>
            </EventApplyWrapper>
          </SessionHeader>
        </ContainerInner>
      </LayoutContainer>
      <SessionCardSection id={'sessionCardSection'}>
        {arr.map((data, id) => (
          <SessionCardWrapper key={id} sectionWidth={`${sectionWidth}px`}>
            <SessionCard />
          </SessionCardWrapper>
        ))}
      </SessionCardSection>
    </EventSectionWrapper>
  );
};

export default Session;
