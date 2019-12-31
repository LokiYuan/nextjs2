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
        title: '2020 青年未來方程式',
        titleTemplate: '2020 青年未來方程式',
        description: '由大學堂組織發起與邀請，將在2020年1/15(三)- 1/16(四)為未來青年帶來最關鍵未來高峰會！\n'
          + '從新創業、新媒體、新科技、新創藝、新教育，從五大關鍵面向探討，\n'
          + '邀請多位跨界頂尖講者，分享他們在各個領域對未來趨勢應該具備的「5N技能」，找著未來的出路！',
        openGraph: {
          title: '2020 青年未來方程式',
          description: '由大學堂組織發起與邀請，將在2020年1/15(三)- 1/16(四)為未來青年帶來最關鍵未來高峰會！\n'
            + '從新創業、新媒體、新科技、新創藝、新教育，從五大關鍵面向探討，\n'
            + '邀請多位跨界頂尖講者，分享他們在各個領域對未來趨勢應該具備的「5N技能」，找著未來的出路！',
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
