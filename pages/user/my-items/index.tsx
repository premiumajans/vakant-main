import ItemCard from "@/Components/Dashboard/ItemCard/ItemCard";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import { getUser } from "@/Store/Slices/User";
import { wrapper } from "@/pages/_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const MyItems = () => {
  const { t: translate } = useTranslation("common");
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
        {true ? (
          <>
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4">
                {translate("continuing-vacancies")}
              </h4>
              <div className="row g-4">
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
            </div>
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4">
                {translate("expiring-vacancies")}
              </h4>
              <div className="row g-4">
                <ItemCard />
                <ItemCard />
                <ItemCard />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </MainWraper>
    </>
  );
};

export default MyItems;

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      const current_store = store.getState();
      const company = current_store.User.data.company;

      // if (!company) {
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
