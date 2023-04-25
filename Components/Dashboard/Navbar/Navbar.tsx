import { useLogoutMutation } from "@/Store/Query/Auth";
import { getUser, setInitialUser, setUser } from "@/Store/Slices/User";

import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Navbar = (props: PropsWithChildren) => {
  const {push} = useRouter()
  const {i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language !== undefined ?  i18n.language : 'az' )
  const data = useSelector(getUser)
  const [logout, {isLoading}] = useLogoutMutation()
  const {authorisation:{token},user:{email,name}} = useSelector(getUser)
  const dispatch = useDispatch()

  



  return (
    <>
      <nav
      style={{zIndex:'1000'}}
        className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div style={{height:'100%'}} className="container-fluid">
          <div style={{height:'100%'}} className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
          <img style={{
            width:'400px',
            height:'100%',
            objectFit:'cover'
          }} src={'/logo.png'} alt="logo" />
          </div>

          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0  d-xl-none  ">
            <a
              className="nav-item nav-link px-0 me-xl-4"
              href=""
            >
              <i className="bx bx-menu bx-sm"></i>
            </a>
          </div>

          <div
            className="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* <!-- Language --> */}
              <li  className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href=""
                  data-bs-toggle="dropdown"
                >
                  <i className={`fi fi-${language === 'en' ? 'us' : language} fis rounded-circle fs-3 me-1`}></i>
                </a>
                <ul style={{zIndex:'10000'}} className="dropdown-menu dropdown-menu-end">

                <li onClick={() => {
                    setLanguage('az')
                    i18n.changeLanguage('az')
                  }}>
                    <a
                      className="dropdown-item"
                      data-language="az"
                    >
                      <i className="fi fi-az fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">Azərbaycan</span>
                    </a>
                  </li>

                <li onClick={() => {
                  setLanguage('us')
                  i18n.changeLanguage('en')
                }}>
                    <a
                      className="dropdown-item"
                      data-language="en"
                    >
                      <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                
                  <li onClick={() => {
                    setLanguage('ru')
                    i18n.changeLanguage('ru')
                  }}>
                    <a
                      className="dropdown-item"
                      data-language="ru"
                    >
                      <i className="fi fi-ru fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">Русский</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!--/ Language --> */}

              {/* <!-- Search --> */}
              {/* <li className="nav-item navbar-search-wrapper me-2 me-xl-0">
                <a
                  className="nav-link search-toggler"
                  href=";"
                >
                  <i className="bx bx-search bx-sm"></i>
                </a>
              </li> */}
              {/* <!-- /Search --> */}

              {/* <!-- Style Switcher --> */}
              {/* <li className="nav-item me-2 me-xl-0">
                <a
                  className="nav-link style-switcher-toggle hide-arrow"
                  href=";"
                >
                  <i className="bx bx-sm"></i>
                </a>
              </li> */}
              {/* <!--/ Style Switcher --> */}

              {/* <!-- User --> */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href=";"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      width={"40"}
                      height={"40"}
                      src={data?.user.profile_photo_url}
                      alt=""
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item">
                  <div className="flex-grow-1">
                      <span className="fw-semibold d-block">{name}</span>
                      <small className="text-muted">{email}</small>
                    </div>
                  </li>
                  <li style={{cursor:'pointer'}} onClick={ () => {
                    logout(token)
                    .then(() => {
                        dispatch(setInitialUser())
                        push('login')
                    })
                  }} className="dropdown-item">
                      <i className="bx bx-power-off me-2"></i>
                      <span className="align-middle">Log Out</span>
                  </li>
                </ul>
              </li>
              {/* <!--/ User --> */}
            </ul>
          </div>

          {/* <!-- Search Small Screens --> */}
          <div className="navbar-search-wrapper search-input-wrapper container-fluid d-none">
            <input
              type="text"
              className="form-control search-input  border-0"
              placeholder="Search..."
              aria-label="Search..."
            />
            <i className="bx bx-x bx-sm search-toggler cursor-pointer"></i>
          </div>
        </div>
      </nav>
      <main >{props.children}</main>
    </>
  );
};

export default Navbar;
