import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = (props) => {
  const { ...otherProps } = props;
  return (
    <Wrapper {...otherProps} />
  );
};

export default Header;
