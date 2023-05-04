import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import NewItemForm from "@/Components/Dashboard/NewItemForm/NewItemForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "../_app";
import { getUser } from "@/Store/Slices/User";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const CreateNewItem = () => {
  const {push} = useRouter()
  const {authorisation} = useSelector(getUser)
  const {t:translate} = useTranslation('common')
  useEffect(() => {
     if (!(authorisation?.token.length > 0)) {
       push("login");
     }
 });

  return (
    <>
      <Head>
          <title>{translate("post-an-ad")}</title>
        </Head>
     <MainWraper>
     {true ?  
        <NewItemForm/>: ''}
     </MainWraper>
   
    </>
  );
};

export default CreateNewItem;



export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      const current_store = store.getState();
      const company = current_store.User.data.company;
      console.log(current_store.User);
      

      // if (!company) {
      //   return {
      //     redirect: {
      //       destination: "/user/my-comapany",
      //       permanent: false,
      //     },
      //   };
      // } 
      // else {
        return {
          props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
          },
        };
      }
    // }
);
