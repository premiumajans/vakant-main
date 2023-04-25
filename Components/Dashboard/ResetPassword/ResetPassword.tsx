import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from 'yup'

const ResetPassword = () => {
  const { t } = useTranslation("common");
  const [isTextType, setIsTextType] = useState([false, false]);

  const changeType = (index: number) => {
    const currentTypes = [...isTextType];
    currentTypes[index] = !currentTypes[index];
    setIsTextType(currentTypes);
  };


  let schema = yup.object().shape({
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
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        {/* <!-- Register Card --> */}
        <div className="card">
          <div className="card-body">
            {/* <!-- Logo --> */}
            <div
              style={{ height: "50px" }}
              className="app-brand justify-content-center"
            >
              <Image
                style={{ objectFit: "cover" }}
                src={"/logo.png"}
                alt="logo"
                width={350}
                height={200}
              />
            </div>
            {/* <!-- /Logo --> */}
            <h4 className="mb-2">{t("change-password")}</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
              id="formAuthentication"
              className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
              action="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/horizontal-menu-template/auth-login-basic.html"
              method="POST"
              noValidate={false}
            >
              <div className="mb-3 form-password-toggle fv-plugins-icon-container">
                <label className="form-label" htmlFor="password">
                  {t("new-password")}
                </label>
                <div className="input-group input-group-merge">
                  <input
                    {...register("newPassword")}
                    className={`form-control ${
                      errors. newPassword ? "is-invalid" : ""
                    }`}
                    type={isTextType[0] ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <span
                    onClick={() => changeType(0)}
                    className="input-group-text cursor-pointer"
                  >
                    <i
                      className={`bx ${isTextType[0] ? "bx-show" : "bx-hide"}`}
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
              <div className="mb-3 form-password-toggle fv-plugins-icon-container">
                <label className="form-label" htmlFor="confirm-password">
                  {t("cnew-password")}
                </label>
                <div className="input-group input-group-merge">
                  <input
                    {...register("confirmPassword")}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    type={isTextType[1] ? "text" : "password"}
                    name="confirmPassword"
                    id="curreconfirmPasswordnconfirmPasswordtPassword"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  />
                  <span
                    onClick={() => changeType(1)}
                    className="input-group-text cursor-pointer"
                  >
                    <i
                      className={`bx ${isTextType[1] ? "bx-show" : "bx-hide"}`}
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
              <button className="btn btn-primary d-grid w-100 mb-3">
                {t("submit")}
              </button>
              <div className="text-center">
                <Link href="/user/login">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  {t("back-to-login")}
                </Link>
              </div>
              <input type="hidden" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  {
    /* <!-- / Content --> */
  }
};

export default ResetPassword;
