import React, { Fragment } from "react";
import { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/custom.scss";
import "@fortawesome/fontawesome-free/css/all.css";

// if (process.browser) {
// 	require("bootstrap/dist/js/bootstrap");
// }

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default MyApp;

const Layout = ({ children }: { children: React.ReactChild }) => {
  return <Fragment>{children}</Fragment>;
};
