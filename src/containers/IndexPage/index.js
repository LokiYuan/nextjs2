import Link from 'next/link';
import styled from 'styled-components';

const EkkImage = styled.img``;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  border-radius: 30px;
  background-color: hsl(215, 62%, 21%);
  overflow: hidden;
  
  ${EkkImage} {
    position: absolute;
    bottom: 30px;
    width:100%;
  }
`;


const Logo = styled.img`
  margin-top: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;


const ChurchText = styled.p`
  margin-top: 10px;
  font-size: 50px;
  text-align: center;
  color: white;
`;


const NameText = styled.p`
  margin-top: 20px;
  font-size: 40px;
  text-align: center;
  letter-spacing: 10px;
  text-indent: 10px;
  color: white;
  font-weight: 300;
`;






const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;


const IndexPage = () => (
  <Wrapper>
    <Card>
      <Logo src='/static/logo.svg' />
      <ChurchText>新生命小組教會</ChurchText>
      <NameText>王証頡</NameText>
      <EkkImage src='/static/ekk.svg' />
    </Card>
  </Wrapper>
);

export default IndexPage;
