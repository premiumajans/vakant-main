import Head from "next/head";
import {PropsWithChildren, useEffect} from "react";
import HeaderNav from "@/Components/Clients/HeaderNav/HeaderNav";
import Footer from "@/Components/Clients/Footer/Footer";
import AOS from "aos";
import {useTranslation} from "next-i18next";

const ClientLayout = ({children}: PropsWithChildren) => {
    const {i18n} = useTranslation('common')

    useEffect(() => {
        AOS.init();
    },[])


    return <>
        <Head>

            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&amp;display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="/static/vendor/fonts/flag-icons.css"/>

            <link rel="stylesheet" href="/clients/css/open-iconic-bootstrap.min.css"/>
            <link rel="stylesheet" href="/clients/css/animate.css"/>

            <link rel="stylesheet" href="/clients/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="/clients/css/owl.theme.default.min.css"/>
            <link rel="stylesheet" href="/clients/css/magnific-popup.css"/>

            <link rel="stylesheet" href="/clients/css/aos.css"/>

            <link rel="stylesheet" href="/clients/css/ionicons.min.css"/>

            <link rel="stylesheet" href="/clients/css/bootstrap-datepicker.css"/>
            <link rel="stylesheet" href="/clients/css/jquery.timepicker.css"/>
            <link rel="stylesheet" href="/static/vendor/fonts/fontawesome.css"/>

            <link rel="stylesheet" href="/clients/css/flaticon.css"/>
            <link rel="stylesheet" href="/clients/css/icomoon.css"/>
            <link rel="stylesheet" href="/clients/css/style.css"/>


        </Head>


        <HeaderNav/>
        {children}

        <Footer/>


    </>
};

export default ClientLayout;