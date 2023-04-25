import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import NewItemForm from "@/Components/Dashboard/NewItemForm/NewItemForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const createNewItem = () => {
  return (
    <>
      <MainWraper>
        <NewItemForm/>
      </MainWraper>
    </>
  );
};

export default createNewItem;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
