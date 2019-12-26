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
            今年論壇主題為「新世代教會神攻略—為青年人找出路」，
            第一大方向將談論「如何幫助青年人建立教會」，因為我們相信青年人絕對有可能建立教會；
            第二大方向是「如何幫助青年人尋找出路」，與大家分享「新創藝、新媒體、新創業、新教育、新科技」新世代五合一關鍵策略平台，
            一起為青年人找尋未來的盼望與出路。
          </Content>
        </Col>
      </Grid>
      <FeatureWrapper>
        <Grid>
          <Col width={[3 / 12, 8 / 12, 1]}>
            <Feature>
              15個論壇專題<br />
              3場Live House新創藝術展演<br />
              2場青年復興特會<br />
              4場大會直播
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
                【新媒體教會孵化器】<PhoneBr />策展人孵化器ｘ七關互動體驗ｘ懶人包大放送<br />
                【Cross+新創業嘉年華】<PhoneBr />主題館體驗ｘ現場直播直擊ｘ集點抽好康<br />
                【新教育主題館】<PhoneBr />新教育互聯網ｘ闖關換禮物ｘ手作體驗
              </Feature>
            </AlignRightWrapper>
          </Col>
        </Grid>
      </FeatureWrapper>
      <Grid>
        <Col>
          <ImgWrapper>
            <Img src='/static/ekk.svg' type='width' />
          </ImgWrapper>
        </Col>
      </Grid>
    </GridWrapper>
  </Wrapper>
);

export default TopicSection;
