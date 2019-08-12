import styled from 'styled-components';

const Wrapper = styled.div``;

const Footer = (props) => {
  const { ...otherProps } = props;
  return (
    <Wrapper {...otherProps} />
  );
};

export default Footer;
