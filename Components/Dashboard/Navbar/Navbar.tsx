import { getUser } from "@/Store/Slices/User";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar = (props: PropsWithChildren) => {
  const {i18n} = useTranslation()
  const [language, setLanguage] = useState('az')
  const data = useSelector(getUser)

  

  return (
    <>
      <nav
      style={{zIndex:'1000'}}
        className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div style={{height:'100%'}} className="container-fluid">
          <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
          <img style={{
            width:'400px',
            height:'auto'
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
                  href=";"
                  data-bs-toggle="dropdown"
                >
                  <i className={`fi fi-${language} fis rounded-circle fs-3 me-1`}></i>
                </a>
                <ul style={{zIndex:'10000'}} className="dropdown-menu dropdown-menu-end">

                <li onClick={() => {
                    setLanguage('az')
                    i18n.changeLanguage('az')
                  }}>
                    <a
                      className="dropdown-item"
                      href=";"
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
                      href=";"
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
                      href=";"
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
                      src={data.user.profile_photo_url}
                      alt=""
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-account.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar avatar-online">
                            <img
                              width={"40"}
                              height={"40"}
                              src={data.user.profile_photo_url}
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">{data.user.name}</span>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-profile-user.html">
                      <i className="bx bx-user me-2"></i>
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-account.html"
                    >
                      <i className="bx bx-cog me-2"></i>
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-billing.html"
                    >
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                        <span className="flex-grow-1 align-middle">
                          Billing
                        </span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-help-center-landing.html"
                    >
                      <i className="bx bx-support me-2"></i>
                      <span className="align-middle">Help</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="bx bx-help-circle me-2"></i>
                      <span className="align-middle">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="bx bx-dollar me-2"></i>
                      <span className="align-middle">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="auth-login-cover.html"
                      target="_blank"
                    >
                      <i className="bx bx-power-off me-2"></i>
                      <span className="align-middle">Log Out</span>
                    </a>
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
