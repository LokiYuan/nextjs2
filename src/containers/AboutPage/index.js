import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a``;

const Wrapper = styled.div``;

const IndexPage = () => (
  <Wrapper>
    About<br />
    <Link href='/'>
      <A>Index Page</A>
    </Link>
  </Wrapper>
);

export default IndexPage;
