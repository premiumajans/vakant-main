import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />

        <meta
          name="description"
          content="Most Powerful &amp; Comprehensive Bootstrap 5 HTML Admin Dashboard Template built for developers!"
        />
        <meta
          name="keywords"
          content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5"
        />
        {/* <!-- Canonical SEO --> */}
        <link
          rel="canonical"
          href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
        />

        {/* <!-- Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) --> */}
        <Script id="Google-Tag-Manager">
          {
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='../../../../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DDHKGP');"
          }
        </Script>
        {/* <!-- End Google Tag Manager -->

        {/* <!-- Favicon --> */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/static/img/favicon/favicon.ico"
        />
        <link rel="icon" href="/favicon.png" type="image/x-icon"></link>

        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />

        <script defer src="/static/vendor/libs/jquery/jquery.js"></script>
        {/* <script defer src="/static/tinymce/tinymce.min.js"></script> */}

        <script defer src="/static/vendor/libs/popper/popper.js"></script>
        <script defer src="/static/vendor/js/bootstrap.js"></script>
        <script
          defer
          src="/static/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"
        ></script>

        <script defer src="/static/vendor/libs/hammer/hammer.js"></script>
        <script
          defer
          src="/static/vendor/libs/typeahead-js/typeahead.js"
        ></script>

        <script defer src="/static/vendor/js/menu.js"></script>

        <script
          defer
          src="/static/vendor/libs/formvalidation/dist/js/FormValidation.min.js"
        ></script>
        <script
          defer
          src="/static/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js"
        ></script>
        <script
          defer
          src="/static/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js"
        ></script>

        <script defer src="/static/js/pages-auth.js"></script>

        {/* <!-- Helpers --> */}
        <script defer src="/static/vendor/js/helpers.js"></script>

        {/* <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section --> */}
        {/* <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  --> */}
        {/* <script defer src="/static/vendor/js/template-customizer.js"></script> */}
        {/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
        <script defer src="/static/js/config.js"></script>

        <script defer src="/static/tinymce/tinymce.min.js"></script>
        <script defer src="/static/form-editor.init.js"></script>
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
