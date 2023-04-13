import { Html, Head, Main, NextScript } from "next/document";

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

        {/* <!-- Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        

        {/* <!-- Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) --> */}
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '../../../../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5DDHKGP');</script> */}
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Favicon --> */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/favicon/favicon.ico"
        />

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

        {/* <!-- Helpers --> */}
        <script defer src="/assets/vendor/js/helpers.js"></script>

        {/* <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section --> */}
        {/* <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  --> */}
        <script defer src="/assets/vendor/js/template-customizer.js"></script>
        {/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
        <script defer src="/assets/js/config.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- Core JS --> */}
        {/* <!-- build:js assets/vendor/js/core.js --> */}
        <script defer src="/assets/vendor/libs/jquery/jquery.js"></script>
        <script defer src="/assets/vendor/libs/popper/popper.js"></script>
        <script defer src="/assets/vendor/js/bootstrap.js"></script>
        <script
          defer
          src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"
        ></script>

        <script defer src="/assets/vendor/libs/hammer/hammer.js"></script>
        <script defer src="/assets/vendor/libs/i18n/i18n.js"></script>
        <script
          defer
          src="/assets/vendor/libs/typeahead-js/typeahead.js"
        ></script>

        <script defer src="/assets/vendor/js/menu.js"></script>
        {/* <!-- endbuild --> */}

        {/* <!-- Vendors JS --> */}
        <script
          defer
          src="/assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js"
        ></script>
        <script
          defer
          src="/assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js"
        ></script>
        <script
          defer
          src="/assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js"
        ></script>

        {/* <!-- Main JS --> */}
        <script defer src="/assets/js/main.js"></script>

        {/* <!-- Page JS --> */}
        <script defer src="/assets/js/pages-auth.js"></script>
      </body>
    </Html>
  );
}
