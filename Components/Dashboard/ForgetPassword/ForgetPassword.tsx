import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const ForgetPassword = () => {
  const { t } = useTranslation("common");
  const [forgePassword, setforgetPassword] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
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
    <>
      {/* <!-- Content --> */}

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
              <h4 className="mb-2">{t("forgot-password")}</h4>
              <p className="mb-4"></p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="formAuthentication"
                className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                action="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/horizontal-menu-template/auth-reset-password-basic.html"
                method="POST"
                noValidate={false}
              >
                <div className="mb-3 fv-plugins-icon-container">
                  <label htmlFor="email" className="form-label">
                    {t("email")}
                  </label>
                    <input
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      type="text"
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
                <button className="btn btn-primary d-grid w-100">
                  {t("send-resend-link")}
                </button>
                <input type="hidden" />
              </form>
              <div className="text-center">
                <Link
                  href="/user/login"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  {t("back-to-login")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- / Content --> */}
    </>
  );
};

export default ForgetPassword;
