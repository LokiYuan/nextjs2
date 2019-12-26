import styled from 'styled-components';
import { GridWrapper } from '@sorosora/grid';

const HeaderWrapper = styled.div``;

const Header = styled((props) => {
  const { ...otherProps } = props;
  return (
    <HeaderWrapper {...otherProps}>
      <GridWrapper />
    </HeaderWrapper>
  );
})``;

export default Header;
