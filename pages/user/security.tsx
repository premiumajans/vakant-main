import Adress from "@/Components/Adress";
import MainMenu from "@/Components/MainMenu/MainMenu";
import Navbar from "@/Components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Security = () => {
  const { t } = useTranslation("common");
  const [isTextType, setIsTextType] = useState([false, false, false]);

  const changeType = (index: number) => {
    const currentTypes = [...isTextType];
    currentTypes[index] = !currentTypes[index];
    setIsTextType(currentTypes);
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    currentPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
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
        <Navbar>
          <MainMenu />
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div
                style={{ justifyContent: "center" }}
                className="row mx-0 gy-3 px-lg-5"
              >
                <div className="card mb-4   col-sm-6">
                  <h5 className="card-header">{t("security")}</h5>
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      id="formAccountSettings"
                      action="{{ route('user.updateProfile',auth()->guard('admin')->user()->id) }}"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="inputRow">
                        <div className="mb-3  form-password-toggle">
                          <label
                            className="form-label"
                            htmlFor="currentPassword"
                          >
                            {t("email")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("email")}
                              className={`form-control ${
                                errors.email ? "is-invalid" : ""
                              }`}
                              type="text"
                              disabled
                              value=""
                            />
                            {errors.email ? (
                              <div className="fv-plugins-message-container invalid-feedback">
                                <div>{errors.email.message as string}</div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="inputRow">
                        <div className="mb-3  form-password-toggle">
                          <label
                            className="form-label"
                            htmlFor="currentPassword"
                          >
                            {t("current-password")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("currentPassword")}
                              className={`form-control ${
                                errors.currentPassword ? "is-invalid" : ""
                              }`}
                              type={isTextType[0] ? "text" : "password"}
                              name="currentPassword"
                              id="currentPassword"
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span
                              onClick={() => changeType(0)}
                              className="input-group-text cursor-pointer"
                            >
                              <i
                                className={`bx ${
                                  isTextType[0] ? "bx-show" : "bx-hide"
                                }`}
                              ></i>
                            </span>
                            {errors.currentPassword ? (
                              <div className="fv-plugins-message-container invalid-feedback">
                                <div>{errors.currentPassword.message as string}</div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="inputRow">
                        <div className="mb-3  form-password-toggle">
                          <label className="form-label" htmlFor="newPassword">
                            {t("new-password")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("newPassword")}
                              className={`form-control ${
                                errors.newPassword ? "is-invalid" : ""
                              }`}
                              type={isTextType[1] ? "text" : "password"}
                              id="newPassword"
                              name="newPassword"
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span
                              onClick={() => changeType(1)}
                              className="input-group-text cursor-pointer"
                            >
                              <i
                                className={`bx ${
                                  isTextType[1] ? "bx-show" : "bx-hide"
                                }`}
                              ></i>
                            </span>
                            {errors.newPassword ? (
                              <div className="fv-plugins-message-container invalid-feedback">
                                <div>{errors.newPassword.message as string}</div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="inputRow">
                        <div className="mb-3  form-password-toggle">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            {t("cnew-password")}
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              {...register("confirmPassword")}
                              className={`form-control ${
                                errors.confirmPassword ? "is-invalid" : ""
                              }`}
                              type={isTextType[2] ? "text" : "password"}
                              name="confirmPassword"
                              id="confirmPassword"
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span
                              onClick={() => changeType(2)}
                              className="input-group-text cursor-pointer"
                            >
                              <i
                                className={`bx ${
                                  isTextType[2] ? "bx-show" : "bx-hide"
                                }`}
                              ></i>
                            </span>
                            {errors.confirmPassword ? (
                                <div className="fv-plugins-message-container invalid-feedback">
                                  <div>{errors.confirmPassword.message as string}</div>
                                </div>
                              ) : (
                                ""
                              )}
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-1">
                        <button type="submit" className="btn btn-primary me-2">
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

export default Security;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
