import Image from "next/image";
import React, { PropsWithChildren } from "react";

const Navbar = (props: PropsWithChildren) => {
  return (
    <>
      <nav
        className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="container-fluid">
          <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
            <a href="index-2.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <svg
                  width="25"
                  viewBox="0 0 25 42"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                      id="path-1"
                    ></path>
                    <path
                      d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                      id="path-3"
                    ></path>
                    <path
                      d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                      id="path-4"
                    ></path>
                    <path
                      d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                      id="path-5"
                    ></path>
                  </defs>
                  <g
                    id="g-app-brand"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Brand-Logo"
                      transform="translate(-27.000000, -15.000000)"
                    >
                      <g id="Icon" transform="translate(27.000000, 15.000000)">
                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <use fill="#696cff" xlinkHref="#path-1"></use>
                          <g id="Path-3" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-3"></use>
                            <use
                              fillOpacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-3"
                            ></use>
                          </g>
                          <g id="Path-4" mask="url(#mask-2)">
                            <use fill="#696cff" xlinkHref="#path-4"></use>
                            <use
                              fillOpacity="0.2"
                              fill="#FFFFFF"
                              xlinkHref="#path-4"
                            ></use>
                          </g>
                        </g>
                        <g
                          id="Triangle"
                          transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                        >
                          <use fill="#696cff" xlinkHref="#path-5"></use>
                          <use
                            fillOpacity="0.2"
                            fill="#FFFFFF"
                            xlinkHref="#path-5"
                          ></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bolder">
                Sneat
              </span>
            </a>

            <a
              href="javascript:void(0);"
              className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
            >
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0  d-xl-none  ">
            <a
              className="nav-item nav-link px-0 me-xl-4"
              href="javascript:void(0)"
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
              <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="fi fi-us fis rounded-circle fs-3 me-1"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="en"
                    >
                      <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="fr"
                    >
                      <i className="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">France</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="de"
                    >
                      <i className="fi fi-de fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="pt"
                    >
                      <i className="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                      <span className="align-middle">Portuguese</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!--/ Language --> */}

              {/* <!-- Search --> */}
              <li className="nav-item navbar-search-wrapper me-2 me-xl-0">
                <a
                  className="nav-link search-toggler"
                  href="javascript:void(0);"
                >
                  <i className="bx bx-search bx-sm"></i>
                </a>
              </li>
              {/* <!-- /Search --> */}

              {/* <!-- Style Switcher --> */}
              <li className="nav-item me-2 me-xl-0">
                <a
                  className="nav-link style-switcher-toggle hide-arrow"
                  href="javascript:void(0);"
                >
                  <i className="bx bx-sm"></i>
                </a>
              </li>
              {/* <!--/ Style Switcher --> */}

              {/* <!-- Quick links  --> */}
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="bx bx-grid-alt bx-sm"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-shortcuts-add text-body"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add shortcuts"
                      >
                        <i className="bx bx-sm bx-plus-circle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-calendar fs-4"></i>
                        </span>
                        <a href="app-calendar.html" className="stretched-link">
                          Calendar
                        </a>
                        <small className="text-muted mb-0">Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-food-menu fs-4"></i>
                        </span>
                        <a
                          href="app-invoice-list.html"
                          className="stretched-link"
                        >
                          Invoice App
                        </a>
                        <small className="text-muted mb-0">
                          Manage Accounts
                        </small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-user fs-4"></i>
                        </span>
                        <a href="app-user-list.html" className="stretched-link">
                          User App
                        </a>
                        <small className="text-muted mb-0">Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-check-shield fs-4"></i>
                        </span>
                        <a
                          href="app-access-roles.html"
                          className="stretched-link"
                        >
                          Role Management
                        </a>
                        <small className="text-muted mb-0">Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                        </span>
                        <a href="index-2.html" className="stretched-link">
                          Dashboard
                        </a>
                        <small className="text-muted mb-0">User Profile</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-cog fs-4"></i>
                        </span>
                        <a
                          href="pages-account-settings-account.html"
                          className="stretched-link"
                        >
                          Setting
                        </a>
                        <small className="text-muted mb-0">
                          Account Settings
                        </small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-help-circle fs-4"></i>
                        </span>
                        <a
                          href="pages-help-center-landing.html"
                          className="stretched-link"
                        >
                          Help Center
                        </a>
                        <small className="text-muted mb-0">
                          FAQs & Articles
                        </small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-window-open fs-4"></i>
                        </span>
                        <a
                          href="modal-examples.html"
                          className="stretched-link"
                        >
                          Modals
                        </a>
                        <small className="text-muted mb-0">Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Quick links --> */}

              {/* <!-- Notification --> */}
              <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell bx-sm"></i>
                  <span className="badge bg-danger rounded-pill badge-notifications">
                    5
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-0">
                  <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Notification</h5>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-notifications-all text-body"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Mark all as read"
                      >
                        <i className="bx fs-4 bx-envelope-open"></i>
                      </a>
                    </div>
                  </li>
                  <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <Image
                                width={40}
                                height={40}
                                src="/assets/img/avatars/1.png"
                                alt=""
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                            <p className="mb-0">
                              Won the monthly best seller gold badge
                            </p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">
                                CF
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Charles Franklin</h6>
                            <p className="mb-0">Accepted your connection</p>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <Image
                                width={"0"}
                                height={"0"}
                                src="/assets/img/avatars/2.png"
                                alt=""
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Message ✉️</h6>
                            <p className="mb-0">
                              You have new message from Natalie
                            </p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="bx bx-cart"></i>
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Whoo! You have new order 🛒{" "}
                            </h6>
                            <p className="mb-0">
                              ACME Inc. made new order $1,154
                            </p>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <Image
                                width={"0"}
                                height={"0"}
                                src="/assets/img/avatars/9.png"
                                alt=""
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Application has been approved 🚀{" "}
                            </h6>
                            <p className="mb-0">
                              Your ABC project application has been approved.
                            </p>
                            <small className="text-muted">2 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="bx bx-pie-chart-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">
                              Monthly report is generated
                            </h6>
                            <p className="mb-0">
                              July monthly financial report is generated{" "}
                            </p>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <Image
                                width={"0"}
                                height={"0"}
                                src="/assets/img/avatars/5.png"
                                alt=""
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Send connection request</h6>
                            <p className="mb-0">
                              Peter sent you connection request
                            </p>
                            <small className="text-muted">4 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <Image
                                width={"0"}
                                height={"0"}
                                src="/assets/img/avatars/6.png"
                                alt=""
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New message from Jane</h6>
                            <p className="mb-0">
                              Your have new message from Jane
                            </p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                <i className="bx bx-error"></i>
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">CPU is running high</h6>
                            <p className="mb-0">
                              CPU Utilization Percent is currently at 88.63%,
                            </p>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot"></span>
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="bx bx-x"></span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-menu-footer border-top">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item d-flex justify-content-center p-3"
                    >
                      View all notifications
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!--/ Notification --> */}
              {/* <!-- User --> */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <Image
                      width={"40"}
                      height={"40"}
                      src="/assets/img/avatars/1.png"
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
                            <Image
                              width={"40"}
                              height={"40"}
                              src="/assets/img/avatars/1.png"
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <span className="fw-semibold d-block">John Doe</span>
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
      <main>{props.children}</main>
    </>
  );
};

export default Navbar;
