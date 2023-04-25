import ForgetPassword from "@/Components/Dashboard/ForgetPassword/ForgetPassword";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const forgePassword = () => {
  return (
    <>
      <ForgetPassword />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default forgePassword;
