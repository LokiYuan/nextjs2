import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useWindowSize from '@rooks/use-window-size';

const Wrapper = styled.div`
  color: transparent;
  overflow: hidden;

  css-doodle {
    height: 100%;
    width: 100%;
  }
`;

const Spark = (props) => {
  const { grid, ...otherProps } = props;
  const { innerWidth } = useWindowSize();
  const cssDoodleRef = useRef();
  const isMounted = useRef(false);
  const isCssDoodleMounted = useRef(false);
  useEffect(() => {
    import('css-doodle');
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      try {
        cssDoodleRef.current.update();
        isCssDoodleMounted.current = true;
      } catch (e) {
        isCssDoodleMounted.current = false;
      }
    } else {
      isMounted.current = true;
    }
  }, [innerWidth]);
  return (
    <Wrapper {...otherProps}>
      <css-doodle ref={cssDoodleRef}>
        {`
          :doodle {
            @grid: 1 / 100%;
            position: absolute;
            transform: scale(2) rotate(80deg);
            background: @m200(
              linear-gradient(
                @p(to top, to bottom),
                @p(hsl(14, 69%, 50%), hsl(1,68%,51%), hsl(343,71%,49%)),
                @p(@lp(), rgba(255, 255, 255, 0))
              )
              @r(0, 100%) @r(0, 100%) / @r(2px) @r(50px)
              no-repeat
            );
          }
        `}
      </css-doodle>
    </Wrapper>
  );
};

Spark.propTypes = {
  grid: PropTypes.number,
};

Spark.defaultProps = {
  grid: 16,
};

export default Spark;
