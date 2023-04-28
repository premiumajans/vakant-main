import Login from "@/Components/Dashboard/Login/Login";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const {t} = useTranslation('common')
  return (
    <>
    <Head>
      <title>{t('login')}</title>
    </Head>
      <Login />
    </>
  );
};

export default LoginPage;
