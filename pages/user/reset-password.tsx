import ResetPassword from "@/Components/Dashboard/ResetPassword/ResetPassword";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const resetPassword = () => {
  return (
    <>
      <ResetPassword />
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

export default resetPassword;
