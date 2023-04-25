import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "@/Store/Query/Auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/Store/Slices/User";
import Link from "next/link";

const Login = () => {
  const { push } = useRouter();
  const [loginRequest, { data, isLoading, isError, error }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const { t } = useTranslation("common");
  const [hidePassword, setHidePassword] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email().required().min(3),
    password: yup.string().required().min(6),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setLogin(true);
  }, []);

  const onSubmit = async (data: any) => {
    const res = await loginRequest(data);
    console.log(res);
    if ("error" in res) {
    } else {
      dispatch(setUser(res.data));
      push("profile");
    }
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
                  src={"/logo.png"}
                  style={{ objectFit: "cover" }}
                  alt="logo"
                  width={350}
                  height={200}
                />
              </div>
              {/* <!-- /Logo --> */}
              <h4 className="mb-2">Login to your account</h4>
              <p className="mb-4">Welcome</p>

              {login ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="formAuthentication"
                  className="mb-3"
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="text"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    {errors.email ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.email.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-3 form-password-toggle">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <span className="input-group input-group-merge">
                      <input
                        {...register("password")}
                        type={hidePassword ? "password" : "text"}
                        id="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span
                        onClick={() => setHidePassword(!hidePassword)}
                        className="input-group-text cursor-pointer"
                      >
                        <i
                          className={`bx ${
                            hidePassword ? "bx-hide" : "bx-show"
                          }`}
                        ></i>
                      </span>
                      {errors.password ? (
                        <div className="fv-plugins-message-container invalid-feedback">
                          <div>{errors.password.message as string}</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        name="terms"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="terms-conditions"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {error?.status === 401 ? (
                    <div
                      style={{ display: "block", margin: 10 }}
                      className="fv-plugins-message-container invalid-feedback"
                    >
                      <div>{t("email or password are invalid")}</div>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className={`btn btn-primary d-grid w-100 ${
                      isLoading || Object.keys(errors).length > 0
                        ? "disabled"
                        : ""
                    }`}
                  >
                    Sign in
                  </button>
                </form>
              ) : (
                ""
              )}

              <p className="text-center">
                <span>New on our platform? </span>
                <Link href="/user/register">
                  <span> Create an account </span>
                </Link>
              </p>

              <div className="divider my-4">
                <span className="divider-text">or</span>
              </div>

              <div className="d-flex justify-content-center">
                <a href="" className="btn btn-icon btn-label-facebook me-3">
                  <i className="tf-icons bx bxl-facebook"></i>
                </a>

                <a href="" className="btn btn-icon btn-label-google-plus me-3">
                  <i className="tf-icons bx bxl-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- / Content --> */}
    </>
  );
};

export default Login;
