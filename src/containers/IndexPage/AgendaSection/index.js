import { useState } from 'react';
import styled from 'styled-components';
import { taipeiAgendaList, kaohsiungAgendaList } from 'apis/agenda';
import { GridWrapper, FullWidthWrapper } from '@sorosora/grid';
import Title from 'components/Title';
import Tabs from 'components/Tabs';
import Agenda from './Agenda';

const SC = {};

SC.Tabs = styled(Tabs)``;

SC.Agenda = styled(Agenda)``;

const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  ${SC.Agenda} {
    flex: 1 1 40px;
    max-height: 40px;
  }
  
  ${({ theme }) => theme.media.phone} {
    height: 480px;
  }
`;

const DayText = styled.div`
  ${({ theme }) => theme.font.face('h4')
    .weight(500)
    .color('white', true)
    .css()};
`;

const DayItem = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: inline-block;
  }

  ${({ theme }) => theme.media.phone} {
    display: ${({ active }) => (active ? '' : 'none')};
  }
`;

const DayContainer = styled.div`
  display: flex;
  
  ${DayItem} {
    flex: 1 1 auto;
  }
  
  ${({ theme }) => theme.media.tablet} {
    display: block;
    padding: 0 ${({ theme }) => theme.grid.padding[1]};
    overflow-y: scroll;
    white-space: nowrap;
    ::-webkit-scrollbar {
      display: none;
    }
  
    ${DayItem} {
      min-width: 400px;
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    padding: 0;
    overflow: hidden;
    
    ${DayItem} {
      min-width: auto;
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.face('p')
    .weight('normal')
    .color('second')
    .css()};
  
  :only-child {
    margin-right: ${({ type }) => (type === 'prev' ? '33px' : '')};
  }
  
  :before {
    content: '';
    display: ${({ type }) => (type === 'prev' ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translate(-100%, -50%);
    border-top: solid 8px transparent;
    border-bottom: solid 8px transparent;
    border-right: solid 7px ${({ theme }) => theme.color.white};
  }
  
  :after {
    content: '';
    display: ${({ type }) => (type === 'next' ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    right: 3px;
    transform: translate(100%, -50%);
    border-top: solid 8px transparent;
    border-bottom: solid 8px transparent;
    border-left: solid 7px ${({ theme }) => theme.color.white};
  }
`;

const ArrowContainer = styled.div`
  display: flex;
`;

const Location = styled.div`
  display: ${({ active }) => (active ? '' : 'none')};
  position: relative;
  overflow: hidden;
  
  ${ArrowContainer} {
    display: none;
  }
  
  ${({ theme }) => theme.media.tablet} {
    :before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: calc(100% - ${({ theme }) => theme.grid.padding[1]});
      background: linear-gradient(to left,
        transparent,
        hsl(215, 62%, 21%, .9),
        hsl(215, 62%, 21%));
    }
  
    :after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(100% - ${({ theme }) => theme.grid.padding[1]});
      right: 0;
      background: linear-gradient(to right,
        transparent,
        hsl(215, 62%, 21%, .9),
        hsl(215, 62%, 21%));
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    :before, :after {
      display: none;
    }
    
    ${ArrowContainer} {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const LocationContainer = styled.div``;

const Wrapper = styled.section`
  ${SC.Tabs} {
    margin-bottom: 20px;
  }
  
  ${Title} {
    margin-bottom: 15px;
  }
`;

const locationList = [
  // {
  //   id: 'taipei',
  //   name: '台北場',
  // },
  {
    id: 'kaohsiung',
    name: '高雄場',
  },
];

const currentDate = new Date();
const timezoneOffset = (currentDate.getTimezoneOffset() / 60 + 8) * 60 * 60 * 1000;
const currentDatetime = currentDate.getTime() + timezoneOffset;
const kaohsiungStartDatetime = (new Date('2019-07-22T00:00')).getTime();
const kaohsiungEndDatetime = (new Date('2019-07-24T23:59')).getTime();
// const isKaohsiung = kaohsiungStartDatetime <= currentDatetime && currentDatetime <= kaohsiungEndDatetime;
const isKaohsiung = true;

const AgendaSection = (props) => {
  const [location, setLocation] = useState(isKaohsiung ? 'kaohsiung' : 'taipei');
  const [selectDay, setSelectDay] = useState(0);
  return (
    <Wrapper {...props}>
      <GridWrapper>
        <Title>大會時程</Title>
        <SC.Tabs data={locationList} value={location} onChange={value => setLocation(value)} />
        <FullWidthWrapper enabled={[false, true, false]}>
          <LocationContainer>
            {/*<Location active={location === 'taipei'}>*/}
            {/*  <ArrowContainer>*/}
            {/*    {*/}
            {/*      [*/}
            {/*        '2019-07-15T07:00+08:00',*/}
            {/*        '2019-07-16T07:00+08:00',*/}
            {/*        '2019-07-17T07:00+08:00',*/}
            {/*      ].map((day, index) => {*/}
            {/*        const eventDate = (new Date(day)).getDate();*/}
            {/*        const isPrev = index === selectDay - 1;*/}
            {/*        const isNext = index === selectDay + 1;*/}
            {/*        if (!(isPrev || isNext)) return null;*/}
            {/*        return (*/}
            {/*          <Arrow*/}
            {/*            type={(isPrev && 'prev') || (isNext && 'next')}*/}
            {/*            onClick={() => setSelectDay(index)}*/}
            {/*            key={day}*/}
            {/*          >*/}
            {/*            {eventDate}*/}
            {/*          </Arrow>*/}
            {/*        );*/}
            {/*      })*/}
            {/*    }*/}
            {/*  </ArrowContainer>*/}
            {/*  <DayContainer>*/}
            {/*    {*/}
            {/*      [*/}
            {/*        '2019-07-15T07:00+08:00',*/}
            {/*        '2019-07-16T07:00+08:00',*/}
            {/*        '2019-07-17T07:00+08:00',*/}
            {/*      ].map((day, index) => {*/}
            {/*        const eventMonth = (new Date(day)).getMonth() + 1;*/}
            {/*        const eventDate = (new Date(day)).getDate();*/}
            {/*        return (*/}
            {/*          <DayItem active={selectDay === index} key={day}>*/}
            {/*            <DayText>{eventMonth}月{eventDate}日</DayText>*/}
            {/*            <AgendaContainer>*/}
            {/*              {*/}
            {/*                taipeiAgendaList.filter((agenda) => {*/}
            {/*                  const agendaDate = (new Date(agenda.startTime)).getDate();*/}
            {/*                  return eventDate === agendaDate;*/}
            {/*                }).map(agenda => (*/}
            {/*                  <SC.Agenda data={agenda} key={agenda.startTime} />*/}
            {/*                ))*/}
            {/*              }*/}
            {/*            </AgendaContainer>*/}
            {/*          </DayItem>*/}
            {/*        );*/}
            {/*      })*/}
            {/*    }*/}
            {/*  </DayContainer>*/}
            {/*</Location>*/}
            <Location active={location === 'kaohsiung'}>
              <ArrowContainer>
                {
                  [
                    '2019-07-22T07:00+08:00',
                    '2019-07-23T07:00+08:00',
                    '2019-07-24T07:00+08:00',
                  ].map((day, index) => {
                    const eventDate = (new Date(day)).getDate();
                    const isPrev = index === selectDay - 1;
                    const isNext = index === selectDay + 1;
                    if (!(isPrev || isNext)) return null;
                    return (
                      <Arrow
                        type={(isPrev && 'prev') || (isNext && 'next')}
                        onClick={() => setSelectDay(index)}
                        key={day}
                      >
                        {eventDate}
                      </Arrow>
                    );
                  })
                }
              </ArrowContainer>
              <DayContainer>
                {
                  [
                    '2019-07-22T07:00+08:00',
                    '2019-07-23T07:00+08:00',
                    '2019-07-24T07:00+08:00',
                  ].map((day, index) => {
                    const eventMonth = (new Date(day)).getMonth() + 1;
                    const eventDate = (new Date(day)).getDate();
                    return (
                      <DayItem active={selectDay === index} key={day}>
                        <DayText>{eventMonth}月{eventDate}日</DayText>
                        <AgendaContainer>
                          {
                            kaohsiungAgendaList.filter((agenda) => {
                              const agendaDate = (new Date(agenda.startTime)).getDate();
                              return eventDate === agendaDate;
                            }).map(agenda => (
                              <SC.Agenda data={agenda} key={agenda.startTime} />
                            ))
                          }
                        </AgendaContainer>
                      </DayItem>
                    );
                  })
                }
              </DayContainer>
            </Location>
          </LocationContainer>
        </FullWidthWrapper>
      </GridWrapper>
    </Wrapper>
  );
};

export default AgendaSection;
