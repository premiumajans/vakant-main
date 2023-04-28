import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";

import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getUser } from "@/Store/Slices/User";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { useUpdateCompanyMutation } from "@/Store/Query/Auth";

const Company = () => {
  const [photo, setPhoto] = useState("");
  const { push } = useRouter();
  const { authorisation } = useSelector(getUser);
  const [updateCompany, {isLoading}] = useUpdateCompanyMutation()

  useEffect(() => {
    if (!(authorisation?.token.length > 0)) {
      push("login");
    }
  });

  const Editor = dynamic<EditorProps>(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: true }
  );

  const { t } = useTranslation("common");

  const [language, setLanguage] = useState<"az" | "en" | "ru">("az");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  let schema = yup.object().shape({
    email: yup
      .string()
      .email(`${t("email-valid")}`)
      .required(`${t("email-required")}`),
    // photo: yup.string(),
    name: yup
      .string()
      .min(3, `${t("name-min-3")}`)
      .required(`${t("name-required")}`),
    address: yup.string().required(`${t("address-required")}`),
    phone: yup.string().required(`${t("phone-required")}`),
    // about: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => { 
    // setValue('about', [])
    // fetch('http://admin.vakant.az/api/company-update', {
    //   body:JSON.stringify(data),
    //   headers: {
    //     'Authorization': `Bearer ${authorisation.token}`,
    //     'Content-type':'application/json',
    //   },
    //   method:'POST'
    // })
    // .then(res => console.log(res))
    console.log(authorisation.token);
    console.log(data);
    updateCompany({data, token:authorisation.token})
    .then(res => {
      console.log(res);
    })
  };

  const [editorState_az, setEditorState_az] = useState(() =>
    EditorState.createEmpty()
  );

  const [editorState_en, setEditorState_en] = useState(() =>
    EditorState.createEmpty()
  );

  const [editorState_ru, setEditorState_ru] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <MainWraper>
      <Head>
        <script defer src="/static/vendor/libs/jquery/jquery.js"></script>

        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
        ></script>
        <script
          defer
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
        ></script>
          <title>{t("my-company")}</title>
      </Head>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <hr className="my-0" />
              <div className="card-body">
                <form >
                  <div
                    style={{ margin: 10 }}
                    className="d-flex align-items-start align-items-sm-center gap-4"
                  >
                    <Image
                      style={{ objectFit: "cover" }}
                      src={photo || "/static/img/avatar.svg"}
                      alt="user-avatar"
                      className="d-block rounded"
                      height="100"
                      width="100"
                      id="uploadedAvatar"
                    />
                    <div className="button-wrapper">
                      <label
                        htmlFor="upload"
                        className="btn btn-primary me-2 "
                        tabIndex={0}
                      >
                        <span className="d-none d-sm-block">
                          {t("photo-upload")}
                        </span>
                        <i className="bx bx-upload d-block d-sm-none"></i>
                        <input
                          // {...register("photo")}
                          onChange={(e) =>
                            setPhoto(URL.createObjectURL(e.target.files[0]))
                          }
                          type="file"
                          id="upload"
                          name="photo"
                          // className={`account-file-input ${
                          //   errors.photo ? "is-invalid" : ""
                          // }`}
                          hidden
                        />
                      </label>
                    </div>
                  </div>
                </form>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="formAccountSettings"
                  encType="multipart/form-data"
                  action=""
                  method="POST"
                >
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

                    <div className="col-xl-12">
                      <h6 className="form-label"></h6>
                      <div className="nav-align-top mb-4">
                        <ul className="nav nav-tabs nav-fill" role="tablist">
                          <li className="nav-item ">
                            <button
                              onClick={() => setLanguage("az")}
                              type="button"
                              className={`nav-link ${
                                language === "az" ? "active" : ""
                              } `}
                              role="tab"
                              data-bs-toggle="tab"
                              data-bs-target="#navs-az"
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
                              data-bs-target="#navs-en"
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
                              data-bs-target="#navs-ru"
                              aria-controls="navs-justified-profile"
                              aria-selected="false"
                            >
                              Русский
                            </button>
                          </li>
                        </ul>
                        {show ? (
                          <div className="tab-content">
                            <div
                              className="tab-pane fade active show "
                              id={`navs-az`}
                              role="tabpanel"
                            >
                              <div className="col-12">
                                <div
                                  style={{ padding: "10px" }}
                                  className="card mb-4"
                                >
                                  <Editor
                                    placeholder={`${t("write-here")}`}
                                    editorState={editorState_az}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={(e) => {
                                      setEditorState_az(e);
                                      // setValue(
                                      //   "about",
                                      //   draftToHtml(
                                      //     convertToRaw(
                                      //       editorState_az.getCurrentContent()
                                      //     )
                                      //   )
                                      // );
                                    }}
                                    toolbar={{
                                      options: [
                                        "inline",
                                        "list",
                                        "textAlign",
                                        "history",
                                      ],
                                    }}
                                  />
                                  <textarea
                                    hidden
                                    // {...register("about")}
                                    name="about[az]"
                                    id="elmaz1"
                                    className="form-control"
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div
                              className="tab-pane fade  "
                              id={`navs-en`}
                              role="tabpanel"
                            >
                              <div className="col-12">
                                <div
                                  style={{ padding: "10px" }}
                                  className="card mb-4"
                                >
                                  <Editor
                                    placeholder={`${t("write-here")}`}
                                    editorState={editorState_en}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={(e) => {
                                      setEditorState_en(e);
                                      // setValue(
                                      //   "about",
                                      //   draftToHtml(
                                      //     convertToRaw(
                                      //       editorState_en.getCurrentContent()
                                      //     )
                                      //   )
                                      // );
                                    }}
                                    toolbar={{
                                      options: [
                                        "inline",
                                        "list",
                                        "textAlign",
                                        "history",
                                      ],
                                    }}
                                  />
                                  <textarea
                                    hidden
                                    // {...register("about")}
                                    name="about[en]"
                                    id="elmen1"
                                    className="form-control"
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div
                              className="tab-pane  "
                              id={`navs-ru`}
                              role="tabpanel"
                            >
                              <div className="col-12">
                                <div
                                  style={{ padding: "10px" }}
                                  className="card mb-4"
                                >
                                  <Editor
                                    placeholder={`${t("write-here")}`}
                                    editorState={editorState_ru}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={(e) => {
                                      setEditorState_ru(e);
                                      // setValue(
                                      //   "about",
                                      //   draftToHtml(
                                      //     convertToRaw(
                                      //       editorState_ru.getCurrentContent()
                                      //     )
                                      //   )
                                      // );
                                    }}
                                    toolbar={{
                                      options: [
                                        "inline",
                                        "list",
                                        "textAlign",
                                        "history",
                                      ],
                                    }}
                                  />
                                  <textarea
                                    hidden
                                    // {...register("about")}
                                    name="about[ru]"
                                    id="elmru1"
                                    className="form-control"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button disabled={isLoading} type="submit" className="btn btn-primary me-2">
                      {" "}
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

export default Company;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
