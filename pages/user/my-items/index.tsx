import ItemCard from "@/Components/Dashboard/ItemCard/ItemCard";
import Loading from "@/Components/Dashboard/Loading/Loading";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import {useDeleteItemMutation, useGetItemsMutation} from "@/Store/Query/Auth";
import {getUser, setInitialUser} from "@/Store/Slices/User";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const MyItems = () => {
    const {t: translate} = useTranslation("common");
    const {push} = useRouter();
    const dispatch = useDispatch()

    const {authorisation} = useSelector(getUser);
    useEffect(() => {
        getItems(authorisation?.token)
            .then(res => {
               if('error' in res) {
                   Swal.fire(`${res.error.status}`, "", "error").then(() =>{
                       dispatch(setInitialUser())
                       push("login")
                   })
               }
            })
    }, [authorisation?.token]);


    const [getItems, {data, isLoading}] = useGetItemsMutation();
    const [deleteItem, {isLoading: loading, isSuccess, status, data: deletedItemData}] = useDeleteItemMutation()
    const [continued, setContinued] = useState([])
    const [ended, setEnded] = useState([])

    useEffect(() => {
        getItems(authorisation?.token)
    }, [isSuccess])

    useEffect(() => {
        if (data?.status === 'token_is_expired' || deletedItemData?.status === 'token_is_expired') {
            dispatch(setInitialUser())
            push('login')
        } else {
            if (data !== undefined) {
                setContinued(data.on_going)
                setEnded(data?.finished)
            }
        }
    }, [data])


    return (
        <>
            <MainWraper>
                <Head>
                    <title>{translate("my-items")}</title>
                </Head>
                <div className="container-xxl flex-grow-1 container-p-y">

                    {isLoading ? <Loading/> : <>
                        {!continued.length && !ended.length ?
                            <h4 className="fw-bold py-3 mb-4">{translate('nothing-to-show')}</h4> : ''}
                        {continued.length > 0 ? <>
                            <h4 className="fw-bold py-3 mb-4">
                                {translate("continuing-vacancies")}
                            </h4>
                            <div className="row g-4">
                                {continued?.map((el, i) => <ItemCard Delete={deleteItem} item={el} key={i}/>)}
                            </div>
                        </> : ''}
                        {ended.length > 0 ? <>
                            <h4 className="fw-bold py-3 mb-4">
                                {translate("expiring-vacancies")}
                            </h4>
                            <div className="row g-4">
                                {ended?.map((el, i) => <ItemCard vacancyPosition={'ended'} Delete={deleteItem} item={el} key={i}/>)}
                            </div>
                        </> : ''}
                    </>
                    }
                </div>
            </MainWraper>
        </>
    );
};

export default MyItems;


export async function getServerSideProps(context:any) {
    return {
        props: {
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}





