import styled from 'styled-components';

const Title = styled.div`
  display: inline-block;
  position: relative;
  padding: 1em 0;
  ${({ theme }) => theme.font.face('h2')
    .weight('bold')
    .color('white')
    .css()};
  z-index: 0;
  
  :before {
    content: '';
    position: absolute;
    left: -10px;
    right: -30px;
    transform: skew(-10deg,-10deg);
    height: 1em;
    background: linear-gradient(to right,
    ${({ theme }) => theme.color.primary},
    ${({ theme }) => theme.color.primary} 50%,
    transparent);
    z-index: -1;
  }
`;

export default Title;
