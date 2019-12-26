import Router from 'next/router';
import NextSeo from 'next-seo';
import { initGA, logPageView } from 'utils/googleAnalytics';
import App, { Container } from 'next/app';
import Layout from 'components/Layout';
import SEO from '../next-seo.config';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    if (process.env.server === 'production') {
      initGA('UA-143780107-1');
      logPageView();
      Router.events.on('routeChangeComplete', logPageView);
    }
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;
    return (
      <Container>
        <Layout>
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
