import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Item, select} from "@/interfaces/generalResponses";
import MainSearch from "@/Components/Clients/MainSearch/MainSearch";
import Link from "next/link";
import {useTranslation} from "next-i18next";


const Index = ({
                   vacancies, modes, city, categories,
                   educations,
                   vacancyCount
               }: {
    vacancies: Item[],
    city: select[],
    modes: select[],
    categories: select[],
    educations: select[],
    vacancyCount: any
}) => {

    const {i18n, t} = useTranslation('common')


    return <>
        <div className="main-categories">
            <div className="container">
                <div className="main-categories-group d-flex justify-content-center flex-wrap">
                    {categories.map(item => {
                        const count = Object.entries(vacancyCount).find(vacancyItem => +vacancyItem[0] === +item.id)
                        return <div key={item.id} className="main-categories-i col-lg-4 col-sm-6 col-12">
                            <div className="main-categories-i-count">{count?.length ? count[1] : 0}</div>
                            <Link className="main-categories-i-link"
                                  href={`/category-jobs/${item.id}`}>{item.translations.find(item => item.locale === i18n?.language)?.name}
                                <i className="ion;-ios-arrow-forward"></i></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <MainSearch city={city} modes={modes} categories={categories} educations={educations}/>

        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pr-lg-5">
                        <div className="row justify-content-center pb-3">
                            <div data-aos="fade-up" className="col-md-12 head ing-section ">
                                <Link href={'/jobs'} className="subheading">{t('premium')}</Link>
                                <h2 className="mb-4">{t('premium-job-posts')}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {vacancies.filter(item => item.vacancy_type === 2).slice(0, 10).map(item => {
                                return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                             href={"/job/" + item.id}>
                                    <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                        <div className="one-third mb-4 mb-md-0">
                                            <div className="job-post-item-header align-items-center">
                                                    <span
                                                        className="subadge">{modes.find(modeItem => modeItem.id === item.description.mode_id)?.translations.find(item => item.locale === i18n.language)?.name}
                                                        <span className="text-warning ml-2"> Premium&nbsp; <i
                                                            className="fas fa-crown"></i></span>
                                                    </span>
                                                <h2 className="mr-3 text-black"><a
                                                    href="#">{item.description.position}</a></h2>
                                            </div>
                                            <div className="job-post-item-body d-block d-md-flex">
                                                <div className="mr-3"><span className="icon-layers"></span> <a
                                                    href="#">{item.description.company}</a></div>
                                                <div><span className="icon-my_location"></span>
                                                    <span>{city.find(cityItem => cityItem.translations.find(item => item.locale === i18n.language)?.id === item.description.city_id)?.translations.find(item => item.locale === i18n.language)?.name}</span>
                                                </div>
                                                <div><span className="icon-date_range ml-2"></span>
                                                    <span>{item.shared_time.split(' ')[0]}</span></div>

                                            </div>
                                        </div>

                                        <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                                            <button className="btn btn-primary py-2">{t('apply')}</button>
                                        </div>
                                    </div>
                                </Link>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section style={{padding: 0}} className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pr-lg-5">
                        <div className="row justify-content-center pb-3">
                            <div data-aos="fade-up" className="col-md-12 head ing-section ">
                                <Link href={'/jobs'} className="subheading">{t('see-more')}</Link>
                                <h2 className="mb-4">{t('recently-added-jobs')}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {vacancies.slice(0, 10).map(item => {
                                if (item.vacancy_type === 2) {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={"/job/" + item.id}>
                                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                            <div className="one-third mb-4 mb-md-0">
                                                <div className="job-post-item-header align-items-center">
                                                    <span
                                                        className="subadge">{modes.find(modeItem => modeItem.id === item.description.mode_id)?.translations.find(item => item.locale === i18n.language)?.name}
                                                        <span className="text-warning ml-2"> Premium&nbsp; <i
                                                            className="fas fa-crown"></i></span>
                                                    </span>
                                                    <h2 className="mr-3 text-black"><a
                                                        href="#">{item.description.position}</a></h2>
                                                </div>
                                                <div className="job-post-item-body d-block d-md-flex">
                                                    <div className="mr-3"><span className="icon-layers"></span> <a
                                                        href="#">{item.description.company}</a></div>
                                                    <div><span className="icon-my_location"></span>
                                                        <span>{city.find(cityItem => cityItem.translations.find(item => item.locale === i18n.language)?.id === item.description.city_id)?.translations.find(item => item.locale === i18n.language)?.name}</span>
                                                    </div>
                                                    <div><span className="icon-date_range ml-2"></span>
                                                        <span>{item.shared_time.split(' ')[0]}</span></div>
                                                </div>
                                            </div>

                                            <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                                                <button className="btn btn-primary py-2">{t('apply')}</button>
                                            </div>
                                        </div>
                                    </Link>
                                } else {
                                    return <Link data-aos="fade-up" className="col-md-12" key={item.id}
                                                 href={"/job/" + item.id}>
                                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                                            <div className="one-third mb-4 mb-md-0">
                                                <div className="job-post-item-header align-items-center">
                                                    <span
                                                        className="subadge">{modes.find(modeItem => modeItem.id === item.description.mode_id)?.translations.find(item => item.locale === i18n.language)?.name}
                                                    </span>
                                                    <h2 className="mr-3 text-black"><a
                                                        href="#">{item.description.position}</a></h2>
                                                </div>
                                                <div className="job-post-item-body d-block d-md-flex">
                                                    <div className="mr-3"><span className="icon-layers"></span> <a
                                                        href="#">{item.description.company}</a></div>
                                                    <div><span className="icon-my_location"></span>
                                                        <span>{city.find(cityItem => cityItem.translations.find(item => item.locale === i18n.language)?.id === item.description.city_id)?.translations.find(item => item.locale === i18n.language)?.name}</span>
                                                    </div>
                                                    <div><span className="icon-date_range ml-2"></span>
                                                        <span>{item.shared_time.split(' ')[0]}</span></div>
                                                </div>
                                            </div>

                                            <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                                                <button className="btn btn-primary py-2">{t('apply')}</button>
                                            </div>
                                        </div>
                                    </Link>
                                }

                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>


};

export default Index;


export async function getServerSideProps(context: any) {
    const vacancies = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'vacancies')
    const city = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'city')
    const modes = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'modes')
    const categories = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'categories')
    const educations = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'education')
    const vacancyCount = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH_WITH_API'] + 'vacancy/count')

    return {
        props: {
            vacancies: await vacancies.json(),
            city: await city.json(),
            modes: await modes.json(),
            categories: await categories.json(),
            educations: await educations.json(),
            vacancyCount: await vacancyCount.json(),
            ...(await serverSideTranslations(context.locale, ["common"])),
        }
    }
}