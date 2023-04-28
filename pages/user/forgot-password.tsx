import ForgetPassword from "@/Components/Dashboard/ForgotPassword/ForgotPassword";
import { getUser } from "@/Store/Slices/User";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const { push } = useRouter();
  const {
    authorisation: { token },
  } = useSelector(getUser);

  useEffect(() => {
    if (token.length > 0) {
      push("profile");
    }
  })
  
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
    },
  };
}

export default ForgotPassword;
