import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  ${({ theme }) => theme.font.face('p')
    .color('white')
    .css()}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
`;

const Footer = styled((props) => {
  const { ...otherProps } = props;
  return (
    <Wrapper {...otherProps}>
      <GridWrapper>
        <ContentWrapper>2020 青年未來方程式 Function Next</ContentWrapper>
      </GridWrapper>
    </Wrapper>
  );
})``;

export default Footer;
