import {PropsWithChildren, useEffect} from "react";
import HeaderNav from "@/Components/Clients/HeaderNav/HeaderNav";
import Footer from "@/Components/Clients/Footer/Footer";
import AOS from "aos";

const ClientLayout = ({children}: PropsWithChildren) => {
    useEffect(() => {
        AOS.init();
    }, [])


    return <>
        <HeaderNav/>
        {children}

        <Footer/>


    </>
};

export default ClientLayout;