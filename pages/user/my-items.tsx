import ItemCard from "@/Components/Dashboard/ItemCard/ItemCard";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const MyItems = () => {
  const { t: translate } = useTranslation("common");

  return (
    <>
      <MainWraper>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
              {translate('continuing-vacancies')}
          </h4>
          <div className="row g-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
              {translate('continuing-vacancies')}
          </h4>
          <div className="row g-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </MainWraper>
    </>
  );
};

export default MyItems;



export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
        ])),
        // Will be passed to the page component as props
      },
    }
  }
  
