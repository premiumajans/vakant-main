import ResetPassword from "@/Components/Dashboard/ResetPassword/ResetPassword";
import { wrapper } from "@/pages/_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ResetPasswordPage = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      const current_store = store.getState();
      const company = current_store.User.data.company;
      const token = current_store.User.data.authorisation.token;

      if ((token.length > 0)) {
        return {
          redirect: {
            destination: "user/profile",
            permanent: true,
          },
        };
      }
      // else if (!company) {
      // return {
      //   redirect: {
      //     destination: "/user/my-company",
      //     permanent: false,
      //   },
      // };
      // } else {
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common"])),
          // Will be passed to the page component as props
        },
      };
      // }
    }
);

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false
  };
}

export default ResetPasswordPage;

