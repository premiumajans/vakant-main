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
import OffCanvasBottom from "@/Components/Dashboard/OffCanvasBottom/OffCanvasBottom";

function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const user = useSelector(getUser);
  const { pathname } = useRouter();
  // useEffect(() => {
  //   if (
  //     pathname !== "/user/login" &&
  //     pathname !== "/user/register" &&
  //     pathname !== "/user/forgot-password" &&
  //      pathname.startsWith("/user/reset-password") 
  //   ) {
  //     if (!(user?.authorisation?.token.length > 0)) {
  //       push("login");
  //     }
  //   }
  // }, []);

  let locale =
    typeof window !== "undefined" && window.localStorage.getItem("MY_LANGUAGE");
  useSyncLanguage(locale);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {" "}
          <Component {...pageProps} />
          {/* {user?.authorisation?.token.length > 0 ||
          pathname == "/user/login" ||
          pathname == "/user/register" ||
          pathname == "/user/forgot-password" ||
          pathname.startsWith("/user/reset-password") ? (
            <>
              <Component {...pageProps} />
            </>
          ) : (
            ""
          )} */}
          {" "}
        </PersistGate>
      </Provider>
    </>
  );
}

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithI18Next(App, ni18nConfig));


