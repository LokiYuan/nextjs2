import { useState } from 'react';
import styled, { css } from 'styled-components';
import { GridWrapper } from '@sorosora/grid';
import { Img, RatioBox } from 'shared-components';
import useWindowSize from '@rooks/use-window-size';
import useDidUpdate from '@rooks/use-did-update';
import Title from 'components/Title';
import Tabs from 'components/Tabs';

const SC = {};

SC.Tabs = styled(Tabs)``;

const ImgWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  background-color: hsla(0, 0%, 0%, .1);
  z-index: 0;
  
  :before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(0, 0%, 0%, .5);
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    pointer-events: none;
  }
  
  :after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(0, 0%, 0%, .3);
    z-index: 1;
    transition: .3s;
  }
  
  :hover {
    z-index: 1;
    
    :before {
      z-index: -1;
      opacity: 1;
      visibility: visible;
    }
    
    :after {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const CloseBg = styled.div`
  background-color: hsla(0 ,0%, 0%, .7);
`;

const FloorWrapper = styled.div`
  display: ${({ active }) => (active ? '' : 'none')};
  
  ${CloseBg} {
    display: none;
  }
  
  ${ImgWrapper} {
    margin: 0 -${({ theme }) => theme.grid.padding[0]};
  }
  
  ${({ theme }) => theme.media.tablet} {
    ${ImgWrapper} {
      margin: 0 -${({ theme }) => theme.grid.padding[1]};
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    position: relative;
    
    :before {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 30px;
      height: 30px;
      background-image: url(/static/zoom-in.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      filter: drop-shadow(1px 1px 3px hsla(0, 0%, 100%, .5));
      z-index: 1;
      pointer-events: none;
    }
    
    :after {
      content: '';
      display: none;
      width: 30px;
      height: 30px;
      background-image: url(/static/close.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      pointer-events: none;
      filter: drop-shadow(1px 1px 3px hsla(0, 0%, 100%, .5));
      z-index: 1;
    }
  
    ${CloseBg} {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    
    ${ImgWrapper} {
      margin: 0 -${({ theme }) => theme.grid.padding[2]};
      padding-left: ${({ theme }) => theme.grid.padding[2]};
      padding-right: ${({ theme }) => theme.grid.padding[2]};
      
      :before {
        transition: none;
      }
    }
  
    ${({ zoom }) => (zoom ? css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      
      :before {
        display: none;
      }
      
      :after {
        display: inline-block;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      ${CloseBg} {
        display: block;
      }
      
      ${ImgWrapper} {
        margin: 0;
        padding-left: ${({ theme }) => theme.grid.padding[2]};
        padding-right: ${({ theme }) => theme.grid.padding[2]};
        height: 400px;
        width: 100%;
        overflow-x: scroll;
        
        :before {
          top: 50%;
          height: 400px;
          transform: translate(0, -50%);
          background-color: black;
          opacity: 1;
          visibility: visible;
        }
        
        :after {
          display: none;
        }
        
        ${Img} {
          width: auto;
          height: 100%;
        }
      }
    ` : '')};
  }
`;

const Wrapper = styled.section`
  padding-bottom: 30px;

  ${Title} {
    margin-bottom: 15px;
  }
  
  ${SC.Tabs} {
    margin-bottom: 20px;
  }
  
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: 35px;
  }
`;

const floorList = [
  {
    id: 'kaohsiung',
  },
];

const FloorSection = (props) => {
  const [place] = useState('kaohsiung');
  const [zoomPlace, setZoomPlace] = useState(null);
  const { innerWidth } = useWindowSize();
  useDidUpdate(() => {
    setZoomPlace(null);
  }, [innerWidth]);
  return (
    <Wrapper {...props}>
      <GridWrapper>
        <Title>高雄主題館</Title>
        <RatioBox ratio={['1172:560']}>
          {
            floorList.map(floor => (
              <FloorWrapper
                active={place === floor.id}
                zoom={zoomPlace === floor.id}
                key={floor.id}
              >
                <CloseBg onClick={() => setZoomPlace('')} />
                <ImgWrapper onClick={() => setZoomPlace(floor.id)}>
                  <Img src={`/static/floor-map-${floor.id}.svg`} type='width' />
                </ImgWrapper>
              </FloorWrapper>
            ))
          }
        </RatioBox>
      </GridWrapper>
    </Wrapper>
  );
};

export default FloorSection;
