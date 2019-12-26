import styled from 'styled-components';
import NextSeo from 'next-seo';
import MainSection from './MainSection';
import AgendaSection from './AgendaSection';
import FloorSection from './FloorSection';
import FloorKaohsiungSection from './FloorKaohsiungSection';
import TopicSection from './TopicSection';

const SC = {};

SC.MainSection = styled(MainSection)``;

SC.AgendaSection = styled(AgendaSection)``;

SC.FloorSection = styled(FloorSection)``;

SC.FloorKaohsiungSection = styled(FloorKaohsiungSection)``;

SC.TopicSection = styled(TopicSection)``;

const Wrapper = styled.div`
  position: relative;
  
  ${SC.MainSection} {
    position: relative;
  }
  
  ${SC.TopicSection} {
    position: relative;
    margin-bottom: 40px;
  }
  
  ${SC.AgendaSection} {
    position: relative;
    margin-bottom: 40px;
  }
  
  ${SC.FloorSection} {
    position: relative;
    margin-bottom: 40px;
  }
  
  ${SC.FloorKaohsiungSection} {
    position: relative;
    margin-bottom: 40px;
  }
`;

const IndexPage = () => (
  <Wrapper>
    <NextSeo
      config={{
        title: '2019 教會青年國是論壇',
        titleTemplate: '2019 教會青年國是論壇',
        description: '今年論壇主題為「新世代教會神攻略—為青年人找出路」，\n'
          + '第一大方向將談論「如何幫助青年人建立教會」，因為我們相信青年人絕對有可能建立教會；\n'
          + '第二大方向是「如何幫助青年人尋找出路」，與大家分享「新創藝、新媒體、新創業、新教育、新科技」新世代五合一關鍵策略平台，\n'
          + '一起為青年人找尋未來的盼望與出路。',
        openGraph: {
          title: '2019 教會青年國是論壇',
          description: '今年論壇主題為「新世代教會神攻略—為青年人找出路」，\n'
            + '第一大方向將談論「如何幫助青年人建立教會」，因為我們相信青年人絕對有可能建立教會；\n'
            + '第二大方向是「如何幫助青年人尋找出路」，與大家分享「新創藝、新媒體、新創業、新教育、新科技」新世代五合一關鍵策略平台，\n'
            + '一起為青年人找尋未來的盼望與出路。',
        },
      }}
    />
    <SC.MainSection />
    <SC.TopicSection id='topic' />
    <SC.AgendaSection id='agenda' />
    {/* <SC.FloorSection id='floor' /> */}
    <SC.FloorKaohsiungSection id='floor-kaohsiung' />
  </Wrapper>
);

export default IndexPage;
