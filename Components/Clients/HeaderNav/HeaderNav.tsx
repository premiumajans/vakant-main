import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import CustomLanguageDropdown from "@/Components/Universal/CustomLanguageDropdown/CustomLanguageDropdown";
import {useTranslation} from "next-i18next";

const HeaderNav = () => {

    const {t} = useTranslation('common')
    const {pathname} = useRouter()
    const [whiteNav, setWhiteNav] = useState('scrolled')


    useEffect(() => {
        const handleSubmit = (e:any) => {
            if(e.target.scrollingElement.scrollTop > 250) {
                setWhiteNav('scrolled awake')
            } else if (e.target.scrollingElement.scrollTop > 150) {
                setWhiteNav('scrolled sleep')
            } else {
                setWhiteNav('scrolled')
            }
        }

        if(window !==  undefined) {
            window.addEventListener('scroll', handleSubmit)
        }

        return () => {
            window.removeEventListener('scroll', handleSubmit)
        }
    },[])




    return <>
        <div className="bar-container">
            <div className="container">
                <div className="bar"><a className="bar-i" ></a>

                </div>
            </div>
        </div>
        <div style={pathname === '/' ? {marginBottom:30} : {}} className="header" data-lotriver-header="">
            <div className="container"><Link className="logo"  href="/"><Image style={{height:'60px', objectFit:'cover',width:250}}  width={350} height={350} src={'/clients/images/vakant_white.png'} alt={'logo'}/></Link>
                <div className="nav">
                    <div className="nav-i"></div>
                </div>
                <div className="nav-secondary">
                    <div className="nav-i"><Link className="nav-i-link nav-i-link_current" href="/jobs">{t('find-a-job')}</Link></div>
                    <div className="nav-i"><Link className="btn btn_large" href="/user/login">{t('post-a-job')}</Link></div>
                    <CustomLanguageDropdown direction={'down'}/>

                </div>
            </div>
        </div>

        {/*<nav   className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light mobile`} id="ftco-navbar">*/}
        {/*    <div className="container-fluid px-md-4	">*/}
        {/*        <Link  className="navbar-brand" href="/"> <Image style={{height:'100px', objectFit:'cover', width:250}} src={'/clients/images/vakant_white.png'} alt={'Vakant'} width={350} height={350}/> </Link>*/}
        {/*        <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"*/}
        {/*                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*            <span className="oi oi-menu"></span>*/}
        {/*        </button>*/}

        {/*        <div className={"collapse navbar-collapse " + (showMenu && whiteNav === 'scrolled' ? 'show' : '')} id="ftco-nav">*/}
        {/*            <ul className="navbar-nav ml-auto">*/}
        {/*                <li onClick={() => setShowMenu(false)} className={"nav-item " + (pathname === '/' ? 'active' : '')}><Link href="/" className="nav-link">{t('home-page')}</Link></li>*/}
        {/*                <li onClick={() => setShowMenu(false)} className={"nav-item " + (pathname === '/jobs' ? 'active' : '')}><Link href="/jobs" className="nav-link">{t('find-a-job')}</Link></li>*/}
        {/*                <li onClick={() => setShowMenu(false)} className="nav-item cta mr-md-1"><Link href="/user/login" className="nav-link">{t('post-a-job')}</Link>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*            <CustomLanguageDropdown direction={'down'}/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</nav>*/}


        {/*<nav   className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light  ${whiteNav}`} id="ftco-navbar">*/}
        {/*    <div className="container-fluid px-md-4	">*/}
        {/*        <Link className="navbar-brand" href="/"> <Image  style={{height:'100px', objectFit:'cover',width:250}} src={'/logo.png'} alt={'Vakant'} width={350} height={350}/> </Link>*/}
        {/*        <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"*/}
        {/*                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*            <span className="oi oi-menu"></span>*/}
        {/*        </button>*/}

        {/*        <div className={"collapse navbar-collapse " + (showMenu &&  whiteNav !== 'scrolled' ? 'show' : '')} id="ftco-nav">*/}
        {/*            <ul className="navbar-nav ml-auto">*/}
        {/*                <li onClick={() => setShowMenu(false)} className={"nav-item " + (pathname === '/' ? 'active' : '')}><Link href="/" className="nav-link">{t('home-page')}</Link></li>*/}
        {/*                <li onClick={() => setShowMenu(false)} className={"nav-item " + (pathname === '/jobs' ? 'active' : '')}><Link href="/jobs" className="nav-link">{t('find-a-job')}</Link></li>*/}
        {/*                <li onClick={() => setShowMenu(false)} className="nav-item cta mr-md-1"><Link href="/user/login" className="nav-link">{t('post-a-job')}</Link>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*            <CustomLanguageDropdown direction={'down'}/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</nav>*/}

    </>
};

export default HeaderNav;