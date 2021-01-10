// This `pages/_app.js` file is useful global stuff in the app.

import '../global_styles/styles.scss';

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
};
