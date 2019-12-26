import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhoneBr = styled.div`
  display: inline;
  
  ${({ theme }) => theme.media.phone} {
    display: block;
  }
`;

const Time = styled.div`
  ${({ theme }) => theme.font.face('p')
    .family('mono')
    .weight(500)
    .color('white')
    .css()};
  
  ${({ theme }) => theme.media.phone} {
    ${({ theme }) => theme.font.face('body')
    .css()};
    
    ${PhoneBr} {
      margin-top: 2px;
      margin-left: 14px;
    }
  }
`;

const Circle = styled.div`
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: solid 1px ${({ theme }) => theme.color.white};
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  
  :before, :after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1px;
    height: ${(40 - 7) / 2}px;
    background-color: ${({ theme }) => theme.color.white};
  }
  
  :before {
    top: 0;
  }
  
  :after {
    bottom: 0;
  }
  
  ${Circle} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  ${({ theme }) => theme.media.phone} {
    width: 20px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.font.face('h4')
    .weight(500)
    .color('white')
    .css()};
  
  ${({ theme }) => theme.media.phone} {
    ${({ theme }) => theme.font.face('p')
    .css()};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  :first-of-type {
    ${TimelineWrapper} {
      :before {
        display: none;
      }
    }
  }
  
  :last-of-type {
    ${TimelineWrapper} {
      :after {
        display: none;
      }
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    ${Time} {
      margin-top: 12px;
    }
  }
`;

const Agenda = (props) => {
  const { data: { startTime, endTime, title } } = props;
  const newStartTime = startTime.slice(11, 16);
  const newEndTime = endTime.slice(11, 16);
  return (
    <Wrapper {...props}>
      <Time>
        {newStartTime}-<PhoneBr>{newEndTime}</PhoneBr>
      </Time>
      <TimelineWrapper>
        <Circle />
      </TimelineWrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

Agenda.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Agenda;
