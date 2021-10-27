import type { AppProps } from "next/app";
import { hotjar } from "react-hotjar";
import "./styles.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2671965, 6);
  });
  return <Component {...pageProps} />;
}
export default MyApp;
