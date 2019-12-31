import styled from 'styled-components';
import { GridWrapper, Grid, Col } from '@sorosora/grid';
import { Img } from 'shared-components';
import Title from 'components/Title';

const Content = styled.div`
  ${({ theme }) => theme.font.face('h4')
    .weight(500)
    .height(1.7)
    .color('white')
    .css()};
  
  ${({ theme }) => theme.media.phone} {
    ${({ theme }) => theme.font.face('p')
    .css()};
  }
`;

const PhoneBr = styled.br`
  display: none;
  
  ${({ theme }) => theme.media.phone} {
    display: block;
  }
`;

const Feature = styled.div`
  transform: skew(0deg, -10deg);
  ${({ theme }) => theme.font.face('h4')
    .weight(500)
    .height(1.7)
    .color('white')
    .css()};
  text-shadow: 0 3px 2px ${({ theme }) => theme.color.primary};
  
  ${({ theme }) => theme.media.tablet} {
    ${({ theme }) => theme.font.face('p')
    .css()};
  }
`;

const AlignRightWrapper = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    justify-content: flex-end;
  }
  
  ${({ theme }) => theme.media.phone} {
    justify-content: flex-start;
  }
`;

const FeatureWrapper = styled.div`
  ${Col}:nth-of-type(1) ${Feature} {
    transform: translate(0, 120px) skew(0deg, -10deg);
  }
  
  ${Col}:nth-of-type(2) ${Feature} {
    transform: translate(0, 75px) skew(0deg, -10deg);
  }
  
  ${({ theme }) => theme.media.tablet} {
    ${Col}:nth-of-type(1) ${Feature} {
      transform: translate(0, 130px) skew(0deg, -10deg);
    }
    
    ${Col}:nth-of-type(3) ${Feature} {
      transform: translate(0, 37vw) skew(0deg, -10deg);
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    ${Col}:nth-of-type(1) ${Feature} {
      transform: translate(0, 0) skew(0deg, -10deg);
    }
    
    ${Col}:nth-of-type(2) ${Feature} {
      transform: translate(0, 0) skew(0deg, -10deg);
    }
    
    ${Col}:nth-of-type(3) ${Feature} {
      transform: translate(0, 32vw) skew(0deg, -10deg);
    }
  }
`;

const ImgWrapper = styled.div``;

const Wrapper = styled.section`
  ${FeatureWrapper} {
    margin-top: -50px;
  }
  
  ${({ theme }) => theme.media.phone} {
    ${FeatureWrapper} {
      margin-top: 15px;
    }
  
    ${ImgWrapper} {
      transform: translate(0, -140px);
    }
  }
`;

const TopicSection = props => (
  <Wrapper {...props}>
    <GridWrapper>
      <Title>論壇主題</Title>
      <Grid>
        <Col width={[6 / 12, 7 / 12, 1]}>
          <Content>
            最豐富顛覆想像的議程與交流，讓你聽得見、看的見、碰的到，從做不到邁向做得到！帶你親身經歷甚麼叫 <br />#大專生的未來方程式。﻿
          </Content>
        </Col>
      </Grid>
      <FeatureWrapper>
        <Grid>
          <Col width={[3 / 12, 8 / 12, 1]}>
            <Feature>
              20位青年領袖表述5新領域的理念<br />
              20個大學堂串串連之創新創業社團<br />
              20場大學⽣才藝舞台直播活動<br />
              2場青年高峰會
            </Feature>
          </Col>
          <Col width={[3 / 12, 4 / 12, 1]}>
            {/*<Feature>*/}
            {/*  215間國內外的教會與機構<br />*/}
            {/*  3676位牧者領袖<br />*/}
            {/*  86個單位參與主題館<br />*/}
            {/*  100位教育與企業界人士<br />*/}
            {/*  6個縣市政府首長分享青年工作*/}
            {/*</Feature>*/}
          </Col>
          <Col width={[6 / 12, 8 / 12, 1]} offset={[0, 4 / 12, 0]}>
            <AlignRightWrapper>
              <Feature>
                👉 公式一 <PhoneBr />新創藝：夢想可以當飯吃<br />
                👉 公式二 <PhoneBr />新媒體：社群力讓你影響力加乘<br />
                👉 公式三 <PhoneBr />新科技：認識未來趨勢 學習新工具<br />
                👉 公式四 <PhoneBr />新創業：做個解決需要的實在人吧<br />
                👉 公式五 <PhoneBr />新教育：學習從學校內到學校外
              </Feature>
            </AlignRightWrapper>
          </Col>
        </Grid>
      </FeatureWrapper>
      <Grid>
        <Col>
          <ImgWrapper>
            <Img src='/static/FunctionNext_Logo.png' type='width' />
          </ImgWrapper>
        </Col>
      </Grid>
    </GridWrapper>
  </Wrapper>
);

export default TopicSection;
