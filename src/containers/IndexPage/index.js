import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  width: 480px;
  height: 640px;
  border: solid 1px black;
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
    <Card />
    <Link href='/about' passHref>
      <A>About Page</A>
    </Link>
  </Wrapper>
);

export default IndexPage;
