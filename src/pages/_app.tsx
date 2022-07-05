import type { AppProps } from "next/app";
// import {AuthProvider} from "../contexts/auth";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <GlobalStyle />
    </>
  );
}

export default MyApp;
