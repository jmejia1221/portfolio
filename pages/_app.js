// This `pages/_app.js` file is useful global stuff in the app.

// Components
import Layout from '../components/Layout';

// CSS
import '../global_styles/styles.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};
