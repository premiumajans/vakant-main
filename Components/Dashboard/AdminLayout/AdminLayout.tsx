import {PropsWithChildren, useEffect, useState} from 'react';
import Head from "next/head";
import Script from "next/script";
import {useDispatch, useSelector} from "react-redux";
import {getUser, setInitialUser} from "@/Store/Slices/User";
import {useRouter} from "next/router";
import jwt_decode from "jwt-decode";
import {useRefreshMutation} from "@/Store/Query/Auth";
import Swal from "sweetalert2";
import {useTranslation} from "next-i18next";



const AdminLayout = ({children}: PropsWithChildren) => {
    const {t} = useTranslation('common')

    const user = useSelector(getUser);
    const {pathname, push} = useRouter();
    const [show, setShow] = useState(true)
    const dispatch = useDispatch()
    const {company, authorisation} = useSelector(getUser);
    const router = useRouter();
    const [refresh, {}] = useRefreshMutation();

    useEffect(() => {
        if (!(user?.authorisation?.token.length > 0)) {
            if (
                pathname !== "/user/login" &&
                pathname !== "/user/register" &&
                pathname !== "/user/forgot-password" &&
                !pathname.startsWith("/user/reset-password")
            ) {

                setShow(false)
                push("login");
            }
        } else {
            if (
                pathname === "/user/login" ||
                pathname === "/user/register" ||
                pathname === "/user/forgot-password" ||
                pathname.startsWith("/user/reset-password")
            ) {
                setShow(false)
                push('/user/profile');
            }
        }

        return () => {
            setShow(true)
        }
    }, [pathname, push, user?.authorisation?.token]);


    useEffect(() => {
        const checkTokenExpiry = () => {
            const decodedToken = jwt_decode(authorisation?.token);
            const expirationDate = new Date(decodedToken?.exp * 1000).getTime();
            const currentTime = Date.now()
            if (+expirationDate <= +currentTime) {
                Swal.fire(`${t('token_is_expired')}`, "", "error")
                    .then(() => {
                        dispatch(setInitialUser());
                        router.push("login");
                    })

            }
        };

        const interval = setInterval(checkTokenExpiry, 1000); // Check every second

        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, [authorisation?.token]);


    return <>
        <Head>
            <link rel="stylesheet" href="/static/vendor/fonts/boxicons.css"/>
            <link rel="stylesheet" href="/static/vendor/fonts/fontawesome.css"/>
            <link rel="stylesheet" href="/static/vendor/fonts/flag-icons.css"/>
            <link rel="stylesheet" href="/static/vendor/css/rtl/core.css"/>
            <link rel="stylesheet" href="/static/vendor/css/rtl/theme-default.css"/>
            <link rel="stylesheet" href="/static/css/demo.css"/>
            <link rel="stylesheet" href="/static/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"/>
            <link rel="stylesheet" href="/static/vendor/libs/typeahead-js/typeahead.css"/>
            <link rel="stylesheet" href="/static/vendor/libs/typeahead-js/typeahead.css"/>
            <link rel="stylesheet" href="/static/vendor/libs/formvalidation/dist/css/formValidation.min.css"/>

            <link rel="stylesheet" href="/static/vendor/css/pages/page-auth.css"/>

            <meta charSet="utf-8"/>
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
            <link
                rel="canonical"
                href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
            />

            <link
                rel="icon"
                type="image/x-icon"
                href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/static/img/favicon/favicon.ico"
            />

            {/* <!-- Fonts --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com/"/>
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

            {/*<script*/}
            {/*    defer*/}
            {/*    src="/static/vendor/libs/formvalidation/dist/js/FormValidation.min.js"*/}
            {/*></script>*/}
            {/*<script*/}
            {/*    defer*/}
            {/*    src="/static/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js"*/}
            {/*></script>*/}
            {/*<script*/}
            {/*    defer*/}
            {/*    src="/static/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js"*/}
            {/*></script>*/}

            <script defer src="/static/js/pages-auth.js"></script>

            {/* <!-- Helpers --> */}
            <script defer src="/static/vendor/js/helpers.js"></script>

            {/*<script defer src="/static/js/config.js"></script>*/}

            {/*<script defer src="/static/tinymce/tinymce.min.js"></script>*/}
            <script defer src="/static/form-editor.init.js"></script>
        </Head>
        <Script id="Google-Tag-Manager">
            {
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='../../../../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5DDHKGP');"
            }
        </Script>

        {show ? <main>{children}</main> : ''}


    </>
};

export default AdminLayout;