import type { AppProps } from "next/app";
import { hotjar } from "react-hotjar";
import "./styles.css";
import { ReactNode, useEffect, useState } from "react";
import CookieBanner from "react-cookie-banner";

interface CookieWrapperProps {
  setBrukHotjar: (brukHotjar: boolean) => void;
  children: ReactNode;
}

const CookieWrapper = ({ setBrukHotjar, children }: CookieWrapperProps) => {
  return (
    <>
      <CookieBanner
        message="Denne siden bruker cookies for å gi en bedre brukeropplevelse, hvis du fortsetter å bruke siden aksepterer du cookies"
        onAccept={() => {
          setBrukHotjar(true);
        }}
        cookie="user-has-accepted-cookies"
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [brukHotjar, setBrukHotjar] = useState(false);
  useEffect(() => {
    brukHotjar ? hotjar.initialize(2671965, 6) : null;
  });
  return (
    <CookieWrapper setBrukHotjar={setBrukHotjar}>
      <Component {...pageProps} />
    </CookieWrapper>
  );
}

export default MyApp;
