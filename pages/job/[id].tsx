import PageTitle from "@/Components/Clients/PageTitle/PageTitle";
import {Item, select} from "@/interfaces/generalResponses";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import {useRouter} from "next/router";
import parse from "html-react-parser";

const Index = ({vacancy, city, modes, categories, education, experience}: {
    vacancy: Item,
    city: select[],
    modes: select[],
    categories: select[],
    education: select[],
    experience: select[]
}) => {
    const {i18n, t} = useTranslation('common')
    const {query} = useRouter()


    return <>
        <Head>
            <title>{vacancy.description?.position}</title>
            <meta property="og:title" content={vacancy.description?.position}/>
            <meta property="og:description" content={vacancy.description?.company}/>
            <meta property="og:url"
                  content={process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'job/' + query.id}/>
        </Head>
        <div className="hero-wrap hero-wrap-2"
             style={{backgroundImage: "url(/images/bg_1.jpg)", backgroundPosition: "50% 0%"}}
             data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <PageTitle address={vacancy.description?.position} title={vacancy.description?.position}/>
                </div>
            </div>
        </div>
        <section className='ftco-section ftco-candidates ftco-candidates-2 bg-light'>
            <div className="container p-4">
                <div className="">

                    <div className="post-header d-flex justify-content-between">
                        <div className="post-header-primary">
                            <h1
                                className="post-title">{vacancy.description.position}</h1>

                            <div className={'d-flex align-items-center'}>
                                <div className="alert alert-primary mr-2" role="alert"
                                     style={{width: 'max-content', marginBottom: '0'}}>
                                <span
                                    className="post-salary salary"
                                    style={{fontWeight: 'bold'}}> {vacancy.description.min_salary} - {vacancy.description.max_salary} AZN </span>
                                </div>

                                <span>
                                   {categories.map(item => item.alt).find(item => item?.find(item => {
                                       return item.id === vacancy.description.category_id
                                   }))?.find(item => {
                                       return item.id === vacancy.description.category_id
                                   })?.translations.find(item => item.locale === i18n.language)?.name || categories.find(item => item.id === vacancy.description.category_id)?.translations.find(item => item.locale === i18n.language)?.name} </span>
                            </div>
                        </div>
                        <div className="post-header-secondary">{t('vacancy-count')}: {vacancy.view_count}<br/> {t('add')}
                              <span className={'ml-1'}>#{vacancy.id}</span>
                            <div className="post-header-share">
                                <div className="fb-like fb_iframe_widget" data-action="recommend"
                                     data-layout="button_count" data-show-faces="false" fb-xfbml-state="rendered"
                                     fb-iframe-plugin-query="action=recommend&amp;app_id=168601233177656&amp;container_width=113&amp;href=https%3A%2F%2Fwww.boss.az%2Fvacancies%2F215133-p&amp;layout=button_count&amp;locale=az_AZ&amp;sdk=joey&amp;show_faces=false">
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="main-highlight mt-3">
                        <div className="post-cols d-flex justify-content-between">
                            <div className="post-col">
                                <ul className="params">
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('city')}:</div>

                                        <div
                                            className=" params-i-val">{city.find(item => item.id === vacancy.description.city_id)?.translations.find(item => item.locale === i18n.language)?.name}</div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('age')}:</div>

                                        <div
                                            className=" params-i-val"> {vacancy.description.min_age} - {vacancy.description.max_salary} yaş
                                        </div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('education')}:</div>

                                        <div
                                            className=" params-i-val"> {education.find(item => item.id === vacancy.description.education_id)?.translations.find(item => item.locale === i18n.language)?.name}</div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('experience')}:</div>

                                        <div
                                            className=" params-i-val"> {experience.find(item => item.id === vacancy.description.experience_id)?.translations.find(item => item.locale === i18n.language)?.name}</div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('vacancy-release-date')}:</div>

                                        <div className=" params-i-val"> {vacancy.shared_time.split(' ')[0]}</div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('vacancy-end-date')}:</div>

                                        <div className=" params-i-val"> {vacancy.end_time.split(' ')[0]}</div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('company')}:</div>

                                        <div className=" params-i-val"> {vacancy.description.company}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="post-col">
                                <ul className="params params_contacts">
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('phone')}:</div>
                                        <div className=" params-i-val"><a className="phone"
                                                                          href={`tel:${vacancy.description.phone}`}> {vacancy.description.phone} </a>
                                        </div>
                                    </li>
                                    <li className="params-i">
                                        <div className=" params-i-label">{t('email')}:</div>
                                        <div className=" params-i-val"><a
                                            href={`mailto:${vacancy.description.email}`}> {vacancy.description.email} </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="post-cols d-flex justify-content-between">
                        <div className="post-col">
                            <dt className="job_description params-i-label">{t('about-job')}</dt>
                            <dd className="job_description params-i-val">
                                {parse(vacancy.description.job_description)}
                            </dd>
                        </div>
                        <div className="post-col">
                            <dt className="requirements params-i-label">{t('candidate-requirements')}</dt>
                            <dd className="requirements params-i-val">
                                {parse(vacancy.description.candidate_requirement)}
                            </dd>
                        </div>
                    </div>

                    <div className="tag-widget post-tag-container">
                        <div className="tagcloud">
                            {vacancy.description.tags?.indexOf('[') >= 0 && vacancy.description.tags?.indexOf(']') >= 0 ? JSON.parse(vacancy.description.tags)?.map((item, index) => {
                                return <a key={index} className="tag-cloud-link">{item.value}</a>
                            }) : vacancy.description.tags &&
                                <a className="tag-cloud-link">{vacancy.description.tags}</a>}

                        </div>
                    </div>

                    {vacancy.vacancy_type === 1 ? <div className="services mt-3">
                        <button
                            className="btn btn-primary"
                        ><i className="fas fa-crown"></i> {t('make-premium')}
                        </button>
                    </div> : ''}

                    {/*<div data-aos="fade-up" className="job-post-item p-4 d-block d-lg-flex align-items-center">*/}
                    {/*    <div className="one-third mb-4 mb-md-0">*/}
                    {/*        <div className="full-card">*/}
                    {/*            <div className="mrg-0 vacancy">*/}
                    {/*                <h2 className="detail-title">{t('vacancy-detail')}</h2>*/}
                    {/*                <div className="details-text">*/}
                    {/*                    <ul className={'ml-3 mt-2'}>*/}
                    {/*                        <li>{t('salary')}: {vacancy.description.min_salary} - {vacancy.description.max_salary} </li>*/}
                    {/*                        <li>{t('category')}: {categories.map(item => item.alt).find(item => item?.find(item => {*/}
                    {/*                            return item.id === vacancy.description.category_id*/}
                    {/*                        }))?.find(item => {*/}
                    {/*                            return item.id === vacancy.description.category_id*/}
                    {/*                        })?.translations.find(item => item.locale === i18n.language)?.name || categories.find(item => item.id === vacancy.description.category_id)?.translations.find(item => item.locale === i18n.language)?.name }</li>*/}
                    {/*                        <li>{t('company')}: {vacancy.description.company}</li>*/}
                    {/*                        <li>{t('city')}: {city.find(item => item.id === vacancy.description.city_id)?.translations.find(item => item.locale === i18n.language)?.name}</li>*/}

                    {/*                        <li>{t('education')}:  {education.find(item => item.id === vacancy.description.education_id)?.translations.find(item => item.locale === i18n.language)?.name}</li>*/}
                    {/*                        <li>{t('experience')}: {experience.find(item => item.id === vacancy.description.experience_id)?.translations.find(item => item.locale === i18n.language)?.name}</li>*/}
                    {/*                        <li> {t('age')}: {vacancy.description.min_age} - {vacancy.description.max_age}</li>*/}
                    {/*                        <li>{t('work-mode')}: {modes.find(item => item.id === vacancy.description.mode_id)?.translations.find(item => item.locale === i18n.language)?.name}</li>*/}
                    {/*                        <li>{t('share-time')}: {vacancy.shared_time.split(' ')[0]}</li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div data-aos="fade-up" className="job-post-item p-4 d-block d-lg-flex align-items-center">*/}
                    {/*    <div className="one-third mb-4 mb-md-0">*/}
                    {/*        <div className="full-card">*/}
                    {/*            <div className="mrg-0 vacancy">*/}
                    {/*                <h2 className="detail-title">{t('vacancy-describe')}</h2>*/}
                    {/*                <div className="details-text">*/}
                    {/*                    {parse(vacancy.description.job_description)}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div data-aos="fade-up" className="job-post-item p-4 d-block d-lg-flex align-items-center">*/}
                    {/*    <div className="one-third mb-4 mb-md-0">*/}
                    {/*        <div className=" mrg-0 vacancy">*/}
                    {/*            <h2 className="detail-title">{t('extra-requirement')}</h2>*/}
                    {/*            <div className="details-text">*/}
                    {/*                {parse(vacancy.description.candidate_requirement)}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="tag-widget post-tag-container">*/}
                    {/*    <div className="tagcloud">*/}
                    {/*        {vacancy.description.tags?.indexOf('[') >= 0 && vacancy.description.tags?.indexOf(']') >= 0 ? JSON.parse(vacancy.description.tags)?.map((item, index) => {*/}
                    {/*            return  <a key={index} className="tag-cloud-link">{item.value}</a>*/}
                    {/*        }) : vacancy.description.tags && <a className="tag-cloud-link">{vacancy.description.tags}</a> }*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>

        </section>
    </>
};

export default Index;


export async function getServerSideProps(context: any) {
    const vacancy = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'vacancies/' + context.query.id)

    const city = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'city')
    const modes = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'modes')
    const categories = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'categories')
    const education = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'education')
    const experience = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'experience')


    return {
        props: {
            vacancy: (await vacancy.json()).vacancy,
            city: await city.json(),
            modes: await modes.json(),
            categories: await categories.json(),
            education: await education.json(),
            experience: await experience.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),


        }
    }
}