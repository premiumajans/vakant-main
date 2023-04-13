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
          <img style={{
            width:'400px',
            height:'auto'
          }} src={'/logo.png'} alt="logo" />
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
