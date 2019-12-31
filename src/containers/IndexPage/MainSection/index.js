import styled from 'styled-components';
import { Img } from 'shared-components';

const ImgWrapper = styled.div`
  ${Img} {
    filter: drop-shadow(-5px 3px 5px hsla(0, 0%, 0%, .7));
  }
`;

const EKKWrapper = styled.div`
  ${Img} {
    filter: opacity(.6) blur(5px);
  }
  
  ${({ theme }) => theme.media.tablet} {
    ${Img} {
      filter: opacity(.6) blur(2px);
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    ${Img} {
      filter: opacity(.6) blur(1px);
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 ${({ theme }) => theme.grid.padding[0]};
  height: 100vh;
  overflow: hidden;
  
  ${EKKWrapper} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 200px);
    z-index: 0;
  }
  
  ${ImgWrapper} {
    position: relative;
    transform: rotate(-2deg);
    width: 1300px;
  }
  
  ${({ theme }) => theme.media.tablet} {
    ${EKKWrapper} {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-51%, -62%) rotate(99deg) skew(-31deg, 0deg);
    }
    
    ${ImgWrapper} {
      width: 90%;
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    ${ImgWrapper} {
      margin-top: -15%;
      width: 100%;
    }
  }
`;

const MainSection = props => (
  <Wrapper {...props}>
    <EKKWrapper>
      <Img src='/static/FunctionNext_Logo.png' />
    </EKKWrapper>
    <ImgWrapper>
      <Img src='/static/Banner_holo.png' type='width' />
    </ImgWrapper>
  </Wrapper>
);

export default MainSection;
