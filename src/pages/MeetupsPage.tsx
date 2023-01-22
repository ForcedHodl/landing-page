import Reacrt, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

export default function MeetupsPage() {
  const [day, setDay] = useState(new Date());

  return (
    <SMainContainer>
      <STitle>ALL INCOMING MEETUPS</STitle>
      <SCalendar minDetail="month" onChange={setDay} value={day} locale="en" />
    </SMainContainer>
  );
}

const STitle = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin: ${(props) => props.theme.getSpacing(8, 0)};
  color: #1bee21;
`;

const SMainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  max-width: 50rem;
  margin: 0 auto;
`;

const SCalendar = styled(Calendar)`
  margin-bottom: ${(props) => props.theme.getSpacing(8)};
  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden;
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    background: none;
    border: none;
    font-size: 2rem;
    color: white;
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${(props) => props.theme.getSpacing(12)};
  }
  .react-calendar__navigation__arrow {
    background: none;
    border: none;
    color: #1bee21;
    font-size: 4rem;
    cursor: pointer;
  }

  .react-calendar__tile {
    background: black;
    color: #1bee21;
    border: 2px solid #1bee21;
    cursor: pointer;
    padding: 2rem 0;
    border-radius: 100px;
  }

  .react-calendar__tile > abbr {
    font-size: 2rem;
  }

  .react-calendar__tile,
  .react-calendar__month-view__weekdays__weekday {
    flex: 0 0 calc(14.2857% - 12px) !important;
  }

  .react-calendar__month-view__days {
    gap: 12px;
  }

  .react-calendar__month-view__weekdays__weekday > abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    gap: 12px;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: ${(props) => props.theme.getSpacing(4)};
  }
`;
