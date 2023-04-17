import "@/styles/globals.scss";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import type { AppProps } from "next/app";
import {wrapper } from "../Store/store";
import { ni18nConfig } from "../ni18n.config";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUser } from "@/Store/Slices/User";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const user = useSelector(getUser);
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname !== "/user/login") {
      if (!(user.authorisation.token.length > 0)) {
        // push("user/login");
      }
    }
  }, []);

  let locale =
    typeof window !== "undefined" && window.localStorage.getItem("MY_LANGUAGE");
  useSyncLanguage(locale);
  return (
    <>
      {/* {user.authorisation.token.length > 0 || pathname == "/user/login" ? <Component {...pageProps} /> : ""} */}
        <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(appWithI18Next(App, ni18nConfig));
