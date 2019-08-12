import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { Normalize } from 'styled-normalize';
import Header from 'components/Header';
import Footer from 'components/Footer';
import appTheme from './theme';
import GlobalStyle from './GlobalStyle';

const SC = {};

SC.Footer = styled(Footer)``;

const MainWrapper = styled.div``;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.font.family.primary};
  
  ${MainWrapper} {
    flex: 1 1 auto;
  }
  
  ${SC.Footer} {
    margin-top: auto;
  }
`;

const Layout = (props) => {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start);
    Router.events.on('routeChangeComplete', NProgress.done);
    Router.events.on('routeChangeError', NProgress.done);
    return () => {
      Router.events.off('routeChangeStart', NProgress.start);
      Router.events.off('routeChangeComplete', NProgress.done);
      Router.events.off('routeChangeError', NProgress.done);
    };
  }, []);

  const { children } = props;
  return (
    <ThemeProvider theme={appTheme}>
      <AppWrapper>
        <Normalize />
        <GlobalStyle />
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=3.0' />
          <meta name='theme-color' content='#000000' />
        </Head>
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <SC.Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
