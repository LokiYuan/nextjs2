import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Tab = styled.div`
  position: relative;
  ${({ theme }) => theme.font.face('h3')
    .weight(500)
    .color('white')
    .css()};
  z-index: 0;
  cursor: pointer;
  
  :before {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(100% + 3px);
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: ${({ theme }) => theme.color.white};
    z-index: -1;
    transition: .3s;
  }
  
  ${({ active }) => (active
    ? css`
      color: ${({ theme }) => theme.color.second};

      :before {
        top: -5px;
      }
    `
    : ''
  )}
  
  :hover {
    :before {
      left: calc(100% + 5px)
    }
    
    ${({ active }) => (active
    ? css`
      color: ${({ theme }) => theme.color.second};
      cursor: default;

      :before {
        top: -5px;
        left: -5px;
      }
    `
    : ''
  )}
  }
  
  ${({ theme }) => theme.media.phone} {
    ${({ theme }) => theme.font.face('h4')
    .css()};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  
  ${Tab}:not(:last-of-type) {
    margin-right: 30px;
  }
`;

const Tabs = (props) => {
  const {
    value, data, onChange, ...otherProps
  } = props;
  const [index, setIndex] = useState(value);
  useEffect(() => {
    setIndex(value);
  }, [value]);
  useEffect(() => {
    onChange(index);
  }, [index]);
  useEffect(() => {
    if (!value && data[0]) {
      setIndex(data[0].id);
    }
  }, []);
  return (
    <TabsContainer {...otherProps}>
      {
        data.map(item => (
          <Tab
            active={index === item.id}
            onClick={() => setIndex(item.id)}
            key={item.id}
          >
            {item.name}
          </Tab>
        ))
      }
    </TabsContainer>
  );
};

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  value: null,
  onChange: null,
};

export default Tabs;
