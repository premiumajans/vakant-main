import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import NewItemForm from "@/Components/Dashboard/NewItemForm/NewItemForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "../_app";
import { getUser } from "@/Store/Slices/User";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const CreateNewItem = () => {
  const {push} = useRouter()
  const {authorisation} = useSelector(getUser)
  useEffect(() => {
     if (!(authorisation?.token.length > 0)) {
       push("user/login");
     }
 });

  return (
    <>
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

      // if (!company) {
      //   return {
      //     redirect: {
      //       destination: "/user/my-company",
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
