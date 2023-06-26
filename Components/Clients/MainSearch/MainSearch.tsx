import {select} from "@/interfaces/generalResponses";
import {useTranslation} from "next-i18next";
import {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setSearch} from "@/Store/Slices/General";

const MainSearch = ({
                        modes, city, categories,
                        educations
                    }: {
    city: select[],
    modes: select[],
    categories: select[],
    educations: select[]
}) => {

    const {t, i18n} = useTranslation('common')
    // const dispatch = useDispatch()
    const {push} = useRouter()

    let schema = yup.object().shape({
        category: yup.string(),
        city: yup.string(),
        mode: yup.string(),
        education: yup.string(),
        position: yup.string(),

    });

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
        setValue,
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = async (data: any) => {
        const {category,city,mode,education,position} = data
        // dispatch(setSearch(data))
        push(`/jobs?category=${category}&city=${city}&mode=${mode}&education=${education}&position=${position}`)
    };


    return <>
        <div data-aos="fade-up" className="col-md-12 d-flex align-i tems-center ">
            <div className="text text-center   ">
                <div className="ftco-search ">
                    <div className="row">
                        <div className="col-md-12 nav-link-wrap">
                            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <span style={{cursor: 'pointer'}} className="nav-link mr-md-1 "
                                      id="v-pills-1-tab">{t('search')}</span>


                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">

                            <div className="tab-content p-4" id="v-pills-tabContent">

                                <div className={`tab-pane fade show active`} id="v-pills-2" role="tabpanel"
                                     aria-labelledby="v-pills-performance-tab">
                                    <form noValidate={true} onSubmit={handleSubmit(onSubmit)} data-aos="fade-up"
                                          className="search-job">
                                        <div className="row no-gutters">
                                            <div className="col-md mr-md-2">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="icon"><span
                                                            className="icon-briefcase"></span></div>
                                                        <input   {...register('position')} type="text"
                                                                 className="form-control"
                                                                 placeholder={t('position').toString()}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md mr-md-2">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="select-wrap">
                                                            <div className="icon"><span
                                                                className="ion-ios-arrow-down"></span>
                                                            </div>
                                                            <select
                                                                {...register('category')}
                                                                className="form-control"
                                                                name="category"
                                                                data-allow-clear="true"
                                                                required
                                                            >
                                                                <option value={''}>{t("category").toString()}</option>
                                                                {categories?.map((el) => {
                                                                    return (
                                                                        <>
                                                                            <optgroup key={el.id} label={el.translations.find(item => item.locale === i18n.language)?.name}>
                                                                                {el.alt?.map((el) => {
                                                                                    return (
                                                                                        <option value={el.id}
                                                                                                key={el.id}>
                                                                                            {
                                                                                                el.translations.find(
                                                                                                    (el) => el.locale === i18n.language
                                                                                                )?.name
                                                                                            }
                                                                                        </option>
                                                                                    );
                                                                                })}
                                                                            </optgroup>
                                                                        </>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md mr-md-2">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="icon"><span
                                                            className="icon-map-marker"></span></div>
                                                        <select
                                                            {...register('city')}
                                                            name="city"
                                                            className="form-control"
                                                            data-allow-clear="true"
                                                            required
                                                        >
                                                            <option value={''}>{t("city").toString()}</option>
                                                            {city?.map((el) => {
                                                                return (
                                                                    <>
                                                                        <option value={el.id} key={el.id}>
                                                                            {
                                                                                el.translations.find(
                                                                                    (el) => el.locale === i18n.language
                                                                                )?.name
                                                                            }
                                                                        </option>
                                                                    </>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md mr-md-2">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="icon"><span
                                                            className="icon-map-marker"></span></div>
                                                        <select
                                                            {...register('mode')}
                                                            className="form-control"
                                                            name="mode"
                                                            data-allow-clear="true"
                                                            required
                                                        >
                                                            <option value={''}>{t("work-mode").toString()}</option>
                                                            {modes?.map((el) => {
                                                                return (
                                                                    <>
                                                                        <option value={el.id} key={el.id}>
                                                                            {
                                                                                el.translations.find(
                                                                                    (el) => el.locale === i18n.language
                                                                                )?.name
                                                                            }
                                                                        </option>
                                                                    </>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md mr-md-2">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <div className="icon"><span
                                                            className="icon-map-marker"></span></div>
                                                        <select
                                                            {...register('education')}
                                                            className="form-control"
                                                            name="education"
                                                            data-allow-clear="true"
                                                            required
                                                        >
                                                            {educations?.map((el) => {
                                                                return (
                                                                    <>
                                                                        <option value={el.id === 1 ? '' : el.id}
                                                                                key={el.id}>
                                                                            {
                                                                                el.translations.find(
                                                                                    (el) => el.locale === i18n.language
                                                                                )?.name
                                                                            }
                                                                        </option>
                                                                    </>
                                                                );
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md">
                                                <div className="form-group">
                                                    <div className="form-field">
                                                        <button type="submit"
                                                                className="form-control btn btn-primary">{t('search')}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default MainSearch;