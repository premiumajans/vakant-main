import "@/styles/globals.scss";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import type { AppProps } from "next/app";
import { store, persistor } from "../Store/store";
import { ni18nConfig } from "../ni18n.config";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUser } from "@/Store/Slices/User";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createWrapper } from "next-redux-wrapper";

function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const user = useSelector(getUser);
  const { pathname } = useRouter();
  useEffect(() => {
    if ( pathname !== "/user/login" && pathname !== "/user/register" && pathname !== "/user/forget-password" && pathname !== "/user/reset-password"
    ) {
      if (!(user?.authorisation?.token.length > 0)) {
        push("user/login");
      }
    }
  }, []);

  let locale =
    typeof window !== "undefined" && window.localStorage.getItem("MY_LANGUAGE");
  useSyncLanguage(locale);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {" "}
          {user?.authorisation.token.length > 0 ||
          pathname == "/user/login" ||
          pathname == "/user/register" ||
          pathname == "/user/forget-password" ||
          pathname == "/user/reset-password" ? (
            <Component {...pageProps} />
          ) : (
            ""
          )}{" "}
        </PersistGate>
      </Provider>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithI18Next(App, ni18nConfig));
