import type { AppProps } from "next/app";
import LoadingScreen from "../utils/loadingScreen";
import { ToastContainer } from "react-toastify";

import GlobalStyle from "../styles/global";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
