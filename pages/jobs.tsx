import PageTitle from "@/Components/Clients/PageTitle/PageTitle";
import {Item, select} from "@/interfaces/generalResponses";
import {useTranslation} from "next-i18next";
import Pagination from "@/Components/Clients/Pagination/Pagination";
import {useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";


const Jobs = ({
                  vacancies, modes, city, categories,
                  educations
              }: {
    vacancies: Item[],
    city: select[],
    modes: select[],
    categories: select[],
    educations: select[]
}) => {


    const [search, setSearch] = useState('')
    const searchRef = useRef()
    const {i18n, t} = useTranslation('common')
    const [pagination, setPagination] = useState(1)

    const [category, setCategory] = useState('')
    const [education, setEducation] = useState('')
    const [mode, setMode] = useState('')
    const [cityState, setCityState] = useState('')

    const filteredValue = useMemo(() => {
        if (category && cityState && mode && vacancies && education) {
            return vacancies.filter(item => {
                return item.description.category_id === +category && item.description.mode_id === +mode && item.description.city_id === +cityState && item.description.education_id === +education
            })

        } else if (cityState && mode && vacancies && education) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode && item.description.city_id === +cityState && item.description.education_id === +education
            })
        } else if (category && mode && vacancies && education) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode && item.description.category_id === +category && item.description.education_id === +education
            })
        } else if (category && cityState && vacancies && education) {
            return vacancies.filter(item => {
                return item.description.city_id === +cityState && item.description.category_id === +category && item.description.education_id === +education
            })
        } else if (category && cityState && vacancies && mode) {
            return vacancies.filter(item => {
                return item.description.city_id === +cityState && item.description.category_id === +category && item.description.mode_id === +mode
            })
        } else if (mode && vacancies && education) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode && item.description.education_id === +education
            })
        } else if (mode && vacancies && category) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode && item.description.category_id === +category
            })
        } else if (mode && vacancies && cityState) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode && item.description.city_id === +cityState
            })
        } else if (education && vacancies && category) {
            return vacancies.filter(item => {
                return item.description.education_id === +education && item.description.category_id === +category
            })
        } else if (education && vacancies && cityState) {
            return vacancies.filter(item => {
                return item.description.education_id === +education && item.description.city_id === +cityState
            })
        } else if (category && vacancies && cityState) {
            return vacancies.filter(item => {
                return item.description.category_id === +category && item.description.city_id === +cityState
            })
        } else if (vacancies && education) {
            return vacancies.filter(item => {
                return item.description.education_id === +education
            })
        } else if (vacancies && category) {
            return vacancies.filter(item => {
                return item.description.category_id === +category
            })
        } else if (vacancies && mode) {
            return vacancies.filter(item => {
                return item.description.mode_id === +mode
            })
        } else if (vacancies && cityState) {
            return vacancies.filter(item => {
                return item.description.city_id === +cityState
            })
        } else {
            return []
        }

    }, [category, cityState, mode, vacancies, education])

    const {query} = useRouter()

    useEffect(() => {
        setEducation(query?.education)
        setMode(query?.mode)
        setCategory(query?.category)
        searchRef.current!.value = query?.position || ''
        setCityState(query?.city)
    },[query])





    return <>
        <div className="hero-wrap hero-wrap-2"
             style={{backgroundImage: "url(/images/bg_1.jpg)", backgroundPosition: "50% 0%"}}
             data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <PageTitle address={t('find-a-job')} title={t('find-a-job')}/>
                </div>
            </div>
        </div>


        <section data-aos="fade-up" className="ftco-section ftco-no-pb bg-light">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div
                        className="col-md-7 text-center heading-section">
                        <h2 className="mb-4">{t('search')}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="ftco-search">
                        <div className="row">

                            <div className="col-md-12 tab-wrap">
                                <div className="tab-content p-4" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-1"
                                         role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                        <form onSubmit={(e) => {
                                            e.preventDefault()
                                            setSearch(searchRef.current!.value)
                                        }} className="search-job">
                                            <div className="row no-gutters justify-content-center">
                                                <div className="col-md-8 mr-4">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <input ref={searchRef} type="text"
                                                                   className="form-control"
                                                                   placeholder={t('search').toString()}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="form-field">
                                                            <button
                                                                type="submit"
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
        </section>

        <section className="ftco-section ftco-candidates ftco-candidates-2 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 pr-lg-4">
                        <div className="row">
                            {category || cityState || mode || education ? filteredValue.slice((pagination - 1) * 10, (pagination - 1) * 10 + 10).map(item => {
                                if(item.vacancy_type === 2) {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={'/job/' + item.id.toString()}>
                                        <div>
                                            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                                <div className="one-third mb-4 mb-md-0">
                                                    <div className="job-post-item-header align-items-center">
                                                <span
                                                    className="subadge">{modes.find(mode => mode.id === item.description.mode_id)?.translations.find(item => item.locale === i18n?.language)?.name}  <span className="text-warning ml-2"> Premium&nbsp; <i
                                                            className="fas fa-crown"></i></span></span>
                                                        <h2 className="mr-3 text-black"><a>{item.description.position}</a>
                                                        </h2>
                                                    </div>
                                                    <div className="job-post-item-body d-block d-md-flex">
                                                        <div className="mr-3"><span className="icon-layers"></span>
                                                            <a>{item.description.company}</a></div>
                                                        <div><span className="icon-my_location"></span>
                                                            <span>{city.find(city => city.id === item.description.city_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        </div>
                                                        <div><span className="icon-date_range ml-2"></span>
                                                            <span>{item.shared_time.split(' ')[0]}</span></div>
                                                    </div>
                                                </div>

                                                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">

                                                    <a className="btn btn-primary py-2">{t('apply')}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                } else {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={'/job/' + item.id.toString()}>
                                        <div>
                                            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                                <div className="one-third mb-4 mb-md-0">
                                                    <div className="job-post-item-header align-items-center">
                                                <span
                                                    className="subadge">{modes.find(mode => mode.id === item.description.mode_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        <h2 className="mr-3 text-black"><a>{item.description.position}</a>
                                                        </h2>
                                                    </div>
                                                    <div className="job-post-item-body d-block d-md-flex">
                                                        <div className="mr-3"><span className="icon-layers"></span>
                                                            <a>{item.description.company}</a></div>
                                                        <div><span className="icon-my_location"></span>
                                                            <span>{city.find(city => city.id === item.description.city_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        </div>
                                                        <div><span className="icon-date_range ml-2"></span>
                                                            <span>{item.shared_time.split(' ')[0]}</span></div>
                                                    </div>
                                                </div>

                                                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">

                                                    <a className="btn btn-primary py-2">{t('apply')}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                }
                            }) : vacancies.slice((pagination - 1) * 10, (pagination - 1) * 10 + 10).filter(item => item.description.position.indexOf(search) >= 0).map(item => {
                                if(item.vacancy_type === 2) {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={'/job/' + item.id.toString()}>
                                        <div>
                                            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                                <div className="one-third mb-4 mb-md-0">
                                                    <div className="job-post-item-header align-items-center">
                                                <span
                                                    className="subadge">{modes.find(mode => mode.id === item.description.mode_id)?.translations.find(item => item.locale === i18n?.language)?.name}  <span className="text-warning ml-2"> Premium&nbsp; <i
                                                            className="fas fa-crown"></i></span></span>
                                                        <h2 className="mr-3 text-black"><a>{item.description.position}</a>
                                                        </h2>
                                                    </div>
                                                    <div className="job-post-item-body d-block d-md-flex">
                                                        <div className="mr-3"><span className="icon-layers"></span>
                                                            <a>{item.description.company}</a></div>
                                                        <div><span className="icon-my_location"></span>
                                                            <span>{city.find(city => city.id === item.description.city_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        </div>
                                                        <div><span className="icon-date_range ml-2"></span>
                                                            <span>{item.shared_time.split(' ')[0]}</span></div>
                                                    </div>
                                                </div>

                                                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">

                                                    <a className="btn btn-primary py-2">{t('apply')}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                } else {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={'/job/' + item.id.toString()}>
                                        <div>
                                            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                                <div className="one-third mb-4 mb-md-0">
                                                    <div className="job-post-item-header align-items-center">
                                                <span
                                                    className="subadge">{modes.find(mode => mode.id === item.description.mode_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        <h2 className="mr-3 text-black"><a>{item.description.position}</a>
                                                        </h2>
                                                    </div>
                                                    <div className="job-post-item-body d-block d-md-flex">
                                                        <div className="mr-3"><span className="icon-layers"></span>
                                                            <a>{item.description.company}</a></div>
                                                        <div><span className="icon-my_location"></span>
                                                            <span>{city.find(city => city.id === item.description.city_id)?.translations.find(item => item.locale === i18n?.language)?.name}</span>
                                                        </div>
                                                        <div><span className="icon-date_range ml-2"></span>
                                                            <span>{item.shared_time.split(' ')[0]}</span></div>
                                                    </div>
                                                </div>

                                                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">

                                                    <a className="btn btn-primary py-2">{t('apply')}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                }

                            })}
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <Pagination setPagination={setPagination}
                                            data={(category || cityState || mode || education && filteredValue) || vacancies.filter(item => item.description.position.indexOf(search) >= 0)}
                                            pagination={pagination}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 sidebar">
                        <div className="sidebar-box bg-white p-4">
                            <h3 className="heading-sidebar">{t("category")}</h3>
                            <div className="form-group">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="form-control"
                                    name="category"
                                    data-allow-clear="true"
                                    required
                                >
                                    <option value={''}></option>
                                    {categories?.map((el) => {
                                        return (
                                            <>
                                                <optgroup  key={el.id} label={el.translations.find(item => item.locale === i18n.language)?.name}>
                                                    {el.alt?.map((el) => {
                                                        return (
                                                            <option value={el.id} key={el.id}>
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

                        <div className="sidebar-box bg-white p-4 ">
                            <h3 className="heading-sidebar">{t("city")}</h3>
                            <form className="search-form mb-3">
                                <select
                                    name="city"
                                    value={cityState}
                                    onChange={(e) => setCityState(e.target.value)}
                                    className="form-control"
                                    data-allow-clear="true"

                                    required
                                >
                                    <option value={''}></option>
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
                            </form>
                        </div>

                        <div className="sidebar-box bg-white p-4 ">
                            <h3 className="heading-sidebar">{t("work-mode")}</h3>
                            <select
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                                className="form-control"
                                name="mode"
                                data-allow-clear="true"
                                required
                            >
                                <option value={''}></option>
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


                        <div className="sidebar-box bg-white p-4">
                            <h3 className="heading-sidebar">{t("education")}</h3>
                            <div className="form-group">
                                <select
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    className="form-control"
                                    name="education"
                                    data-allow-clear="true"
                                    required
                                >
                                    {educations?.map((el) => {
                                        return (
                                            <>
                                                <option value={el.id === 1 ? '' : el.id} key={el.id}>
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

                        <div className="form-group text-center">
                            <button onClick={() => {
                                setEducation('')
                                setMode('')
                                setCategory('')
                                setCityState('')
                                searchRef.current!.value = ''
                                window.scrollTo(0, 0)
                            }} className={'btn btn-primary py-2'}>{t('cancel')}</button>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    </>
};

export default Jobs;


export async function getServerSideProps(context: any) {
    const vacancies = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'vacancies')
    const city = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'city')
    const modes = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'modes')
    const categories = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'categories')
    const educations = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'education')


    return {
        props: {
            vacancies: await vacancies.json(),
            city: await city.json(),
            modes: await modes.json(),
            categories: await categories.json(),
            educations: await educations.json(),

            ...(await serverSideTranslations(context.locale, ["common"])),
        }
    }
}