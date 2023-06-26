import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import {useEffect, useState} from "react";

export default function Document() {
  return (
      <Html lang="en" >
      <Head>
          <link rel="icon" href="/favicon.png" type="image/x-icon"></link>
      </Head>
      <body>
        <noscript>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
