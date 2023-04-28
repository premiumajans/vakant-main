import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useChangePasswordMutation,
  useRefreshMutation,
} from "@/Store/Query/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser, setInitialUser } from "@/Store/Slices/User";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Head from "next/head";
import { wrapper } from "../_app";

const Security = () => {
  const { t } = useTranslation("common");
  const { authorisation } = useSelector(getUser);
  const [currentPassword, setCurrentPassword] = useState<string[]>([
    "",
    "",
    "",
  ]);

  const { push } = useRouter();
  const [isTextType, setIsTextType] = useState([false, false, false]);
  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();
  const [refresh, {}] = useRefreshMutation();
  const dispatch = useDispatch();
  const {
    authorisation: { token },
    user: { email, name },
  } = useSelector(getUser);

  const changeType = (index: number) => {
    const currentTypes = [...isTextType];
    currentTypes[index] = !currentTypes[index];
    setIsTextType(currentTypes);
  };

  const setPassword = (index, value) => {
    const array = [...currentPassword];
    array[index] = value;
    setCurrentPassword(array);
  };

  useEffect(() => {
    if (!(authorisation?.token.length > 0)) {
      push("login");
    }
  });
  

  let schema = yup.object().shape({
    current_password: currentPassword.some((val) => val.length > 0)
      ? yup
          .string()
          .min(6, `${t("password-min-6")}`)
          .required(`${t("password-required")}`)
      : yup.string(),
    username: yup.string().required(`${t("name-required")}`),
    new_password: currentPassword.some((val) => val.length > 0)
      ? yup
          .string()
          .min(6, `${t("password-min-6")}`)
          .required(`${t("password-required")}`)
      : yup.string(),
    new_confirm_password: currentPassword.some((val) => val.length > 0)
      ? yup
          .string()
          .min(6, `${t("password-min-6")}`)
          .required(`${t("password-required")}`)
          .oneOf([yup.ref("new_password")], `${t("password-match")}`)
      : yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    setValue("email", email);
    const res = await changePassword({ user: data, token });
    console.log(res);
    if ("data" in res) {
      if (res.data.status !== "token_is_expired") {
        if (
          res.data.status === "password-was-changed-successfully" ||
          res.data.status === "profile-was-updated-successfully"
        ) {
          const refRes = await refresh(token);
          if ("data" in refRes) {
            if (refRes.data.status === "success") {
              dispatch(setUser(refRes.data));
              Swal.fire(`${t(res.data.status)}`, "", "success");
              console.log(res);
              console.log(refRes);
              reset();
            } else {
              dispatch(setInitialUser(""));
              push("login");
            }
          } else {
            console.log(refRes.error);
          }
        } else {
          Swal.fire(`${t(res.data.status)}`, "", "error");
        }
      } else if (res.data.status === "token_is_expired") {
        dispatch(setInitialUser(""));
        push("login");
      }
    } else {
      const errors = res.error.data?.errors;
      if('status' in res.error.data) {
      Swal.fire(`${t(res.error.data.status)}`, "", "error");
      } else {
        Swal.fire(`${t(Object.entries(errors)[0])}`, "", "error");
      }
    }
  };

  return (
    <MainWraper>
      <Head>
        <title>{t('security')}</title>
      </Head>
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
                      <label className="form-label" htmlFor="currentPassword">
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
                          value={email}
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
                      <label className="form-label" htmlFor="currentPassword">
                        {t("username")}
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          {...register("username")}
                          className={`form-control ${
                            errors.username ? "is-invalid" : ""
                          }`}
                          type="text"
                          defaultValue={name}
                        />
                        {errors.username ? (
                          <div className="fv-plugins-message-container invalid-feedback">
                            <div>{errors.username.message as string}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inputRow">
                    <div className="mb-3 ">
                      <label className="form-label" htmlFor="currentPassword">
                        {t("current-password")}
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          {...(currentPassword.some((val) => val.length > 0)
                            ? register("current_password")
                            : "")}
                          onChange={(e) => setPassword(0, e.target.value)}
                          className={`form-control ${
                            errors.current_password ? "is-invalid" : ""
                          }`}
                          type={isTextType[0] ? "text" : "password"}
                          name="current_password"
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
                        {errors.current_password ? (
                          <div className="fv-plugins-message-container invalid-feedback">
                            <div>
                              {errors.current_password.message as string}
                            </div>
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
                          {...(currentPassword.some((val) => val.length > 0)
                            ? register("new_password")
                            : "")}
                          className={`form-control ${
                            errors.new_password ? "is-invalid" : ""
                          }`}
                          onChange={(e) => setPassword(1, e.target.value)}
                          type={isTextType[1] ? "text" : "password"}
                          id="new_password"
                          name="new_password"
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
                        {errors.new_password ? (
                          <div className="fv-plugins-message-container invalid-feedback">
                            <div>{errors.new_password.message as string}</div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="inputRow">
                    <div className="mb-3  form-password-toggle">
                      <label className="form-label" htmlFor="confirmPassword">
                        {t("cnew-password")}
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          {...(currentPassword.some((val) => val.length > 0)
                            ? register("new_confirm_password")
                            : "")}
                          onChange={(e) => setPassword(2, e.target.value)}
                          className={`form-control ${
                            errors.new_confirm_password ? "is-invalid" : ""
                          }`}
                          type={isTextType[2] ? "text" : "password"}
                          name="new_confirm_password"
                          id="new_confirm_password"
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
                        {errors.new_confirm_password ? (
                          <div className="fv-plugins-message-container invalid-feedback">
                            <div>
                              {errors.new_confirm_password.message as string}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  {isSuccess ? <div className="success">{}</div> : ""}
                  <div className="col-12 mt-1">
                    <button
                      type="submit"
                      className={`btn btn-primary me-2 ${
                        isLoading ? "disabled" : ""
                      }`}
                    >
                      {t("save")}
                    </button>
                    <button type="reset" className="btn btn-label-secondary">
                      {t("cancel")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWraper>
  );
};

export default Security;

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      const current_store = store.getState();
      const company = current_store.User.data.company;

      console.log(company);
      console.log("test");

      // if (!(token.length > 0)) {
      //   return {
      //     redirect: {
      //       destination: "/user/login",
      //       permanent: false,
      //     },
      //   };
      // }
      // else if (!company) {
      // return {
      //   redirect: {
      //     destination: "/user/my-company",
      //     permanent: false,
      //   },
      // };
      // } else {
      return {
        props: {
          ...(await serverSideTranslations(locale, ["common"])),
          // Will be passed to the page component as props
        },
      };
      // }
    }
);
