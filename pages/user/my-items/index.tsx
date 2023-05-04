import ItemCard from "@/Components/Dashboard/ItemCard/ItemCard";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import { useDeleteItemMutation, useGetItemsMutation } from "@/Store/Query/Auth";
import { getUser, setInitialUser } from "@/Store/Slices/User";
import { wrapper } from "@/pages/_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const MyItems = () => {
  const { t: translate } = useTranslation("common");
  const { push } = useRouter();
  const dispatch = useDispatch()

  const { authorisation } = useSelector(getUser);
  useEffect(() => {
    if(data?.status === 'token_is_expired') {
      push('login')
    }
     else if (!(authorisation?.token.length > 0)) {
      push("login");
    }
    getItems(authorisation?.token)
  },[]);



  const [getItems, { data, isLoading }] = useGetItemsMutation();
  const [deleteItem, {isLoading:loading}] = useDeleteItemMutation()
  const [continued, setContinued] = useState([])
  const [ended, setEnded] = useState([])

  useEffect(() => {
    if(data?.item?.length! > 0) {
      setContinued(data?.item?.filter(() => new Date(data?.item[0].end_time).getTime() > new Date().getTime()))
      setEnded(data?.item?.filter(() => new Date(data?.item[0].end_time).getTime() < new Date().getTime()))
    } else if(data?.status === 'token_is_expired') {
      dispatch(setInitialUser())
      push('login')
    }
  },[data])

  


  
    

  return (
    <>
      <MainWraper>
        <Head>
          <title>{translate("my-items")}</title>
        </Head>
        <div className="container-xxl flex-grow-1 container-p-y">
        {isLoading ? (isLoading ? 'Loading...' : <>
            {continued.length > 0 ? <>
              <h4 className="fw-bold py-3 mb-4">
                {translate("continuing-vacancies")}
              </h4>
              <div className="row g-4">
                  {continued?.map((el, i) =>  <ItemCard Delete={deleteItem} item={el} key={i}/>)}
              </div>
            </> : ''}
            {ended.length > 0 ? <>
              <h4 className="fw-bold py-3 mb-4">
                {translate("expiring-vacancies")}
              </h4>
              <div className="row g-4">
              {ended?.map((el, i) => <ItemCard Delete={deleteItem} item={el} key={i}/>)}
              </div>
            </> : ''}
            </>
        ) : (
          <h4 className="fw-bold py-3 mb-4">{translate('nothing-to-show')}</h4>
        )}
        </div>
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
