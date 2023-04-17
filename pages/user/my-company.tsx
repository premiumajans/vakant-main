import MainMenu from "@/Components/MainMenu/MainMenu";
import Navbar from "@/Components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";

const Company = () => {
  const { t } = useTranslation("common");

  const [language, setLanguage] = useState<"az" | "en" | "ru">("az");
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  },[])

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    photo: yup.string(),
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
    voen: yup.string().required(),
    about_company: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Head>
          <script defer src="/static/vendor/libs/jquery/jquery.js"></script>

          <link rel="stylesheet" href="/static/vendor/libs/quill/katex.css" />
          <link rel="stylesheet" href="/static/vendor/libs/quill/editor.css" />

          <script defer src="/static/form-editor.init.js"></script>
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
          ></script>
          <script
            defer
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
          ></script>
        </Head>
        <Navbar>
          <MainMenu />
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  <hr className="my-0" />
                  <div className="card-body"></div>
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      id="formAccountSettings"
                      encType="multipart/form-data"
                      action=""
                      method="POST"
                    >
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="/static/user-assets/img/avatars/user-2.jpg"
                          alt="user-avatar"
                          className="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                          <label
                            htmlFor="upload"
                            className="btn btn-primary me-2 mb-4"
                            tabIndex={0}
                          >
                            <span className="d-none d-sm-block">
                              Upload new photo
                            </span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                              {...register("photo")}
                              type="file"
                              id="upload"
                              name="photo"
                              className={`account-file-input ${
                                errors.photo ? "is-invalid" : ""
                              }`}
                              hidden
                            />
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            {t("name")}
                          </label>
                          <input
                            {...register("name")}
                            className={`form-control ${
                              errors.name ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="name"
                            placeholder="Premium Ajans MMC"
                            autoFocus
                          />
                          {errors.name ? (
                            <div className="fv-plugins-message-container invalid-feedback">
                              <div>{errors.name.message as string}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="address" className="form-label">
                            {t("adress")}
                          </label>
                          <input
                            {...register("address")}
                            type="text"
                            className={`form-control ${
                              errors.address ? "is-invalid" : ""
                            }`}
                            name="address"
                            placeholder="Bakı, Azerbaijan"
                          />
                          {errors.address ? (
                            <div className="fv-plugins-message-container invalid-feedback">
                              <div>{errors.address.message as string}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="email" className="form-label">
                            {t("email")}
                          </label>
                          <input
                            {...register("email")}
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="email"
                            placeholder="example@site.com"
                          />
                          {errors.email ? (
                            <div className="fv-plugins-message-container invalid-feedback">
                              <div>{errors.email.message as string}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" htmlFor="phoneNumber">
                            {t("phone")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("phone")}
                              type="number"
                              id="phone"
                              name="phone"
                              className={`form-control ${
                                errors.phone ? "is-invalid" : ""
                              }`}
                              placeholder="50 000 05 10"
                            />
                            {errors.phone ? (
                              <div className="fv-plugins-message-container invalid-feedback">
                                <div>{errors.phone.message as string}</div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="mb-3 col-xl-12">
                          <label className="form-label" htmlFor="phoneNumber">
                            {t("voen")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("voen")}
                              type="text"
                              id="voen"
                              name="voen"
                              className={`form-control ${
                                errors.voen ? "is-invalid" : ""
                              }`}
                              placeholder="@lang('backend.voen')"
                            />
                            {errors.voen ? (
                              <div className="fv-plugins-message-container invalid-feedback">
                                <div>{errors.voen.message as string}</div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="col-xl-12">
                          <h6 className="form-label"></h6>
                          <div className="nav-align-top mb-4">
                            <ul
                              className="nav nav-tabs nav-fill"
                              role="tablist"
                            >
                              <li className="nav-item ">
                                <button
                                  onClick={() => setLanguage("az")}
                                  type="button"
                                  className={`nav-link ${
                                    language === "az" ? "active" : ""
                                  } `}
                                  role="tab"
                                  data-bs-toggle="tab"
                                //   data-bs-target="#navs-az"
                                  aria-controls="navs-justified-profile"
                                  aria-selected="false"
                                >
                                  Azərbaycan
                                </button>
                              </li>
                              <li className="nav-item ">
                                <button
                                  onClick={() => setLanguage("en")}
                                  type="button"
                                  className={`nav-link ${
                                    language === "en" ? "active" : ""
                                  } `}
                                  role="tab"
                                  data-bs-toggle="tab"
                                //   data-bs-target="#navs-en"
                                  aria-controls="navs-justified-profile"
                                  aria-selected="false"
                                >
                                  English
                                </button>
                              </li>
                              <li className="nav-item ">
                                <button
                                  onClick={() => setLanguage("ru")}
                                  type="button"
                                  className={`nav-link ${
                                    language === "ru" ? "active" : ""
                                  } `}
                                  role="tab"
                                  data-bs-toggle="tab"
                                //   data-bs-target="#navs-ru"
                                  aria-controls="navs-justified-profile"
                                  aria-selected="false"
                                >
                                  Русский
                                </button>
                              </li>
                            </ul>
                                  {show ?  <div className="tab-content">
                              <div className="tab-pane fade active show "
                                id={`navs-az`}
                                role="tabpanel"
                              >
                                <div className="col-12">
                                  <div className="card mb-4">
                                    <textarea
                                      {...register("about_company")}
                                      name="about[az]"
                                      id="elm1"
                                      className='form-control'

                                    ></textarea>

                                  </div>
                                </div>
                              </div>
                            </div> : ''}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <button type="submit" className="btn btn-primary me-2">
                          {" "}
                          {t("save")}
                        </button>
                        <button
                          type="reset"
                          className="btn btn-label-secondary"
                        >
                          {t("cancel")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Company;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
