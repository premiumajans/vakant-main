import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";

import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getUser } from "@/Store/Slices/User";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import CompanyImageForm from "@/Components/Dashboard/CompanyImageForm/CompanyImageForm";
import {
  useCheckCompanyMutation,
  useUpdateCompanyMutation,
} from "@/Store/Query/Auth";

const Company = () => {
  const { push } = useRouter();
  const { authorisation } = useSelector(getUser);
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();
  const [check, { data, isLoading: loading }] = useCheckCompanyMutation();
  const message = data?.message[0];

  useEffect(() => {
    check({ token: authorisation?.token });
    if (!(authorisation?.token.length > 0)) {
      push("login");
    }
  }, []);

  const Editor = dynamic<EditorProps>(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: true }
  );

  const { t } = useTranslation("common");

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    
    if (Object.entries(data !== undefined ? data?.message : '').length > 0) {
      const { name, phone, email, adress, about } = data.message;


      const initialContent = `{"entityMap":{},"blocks":[{"key":"637gr","text":"${about == null ? "": about.replace(/[\r\n]/gm, '\\n').replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, "")}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}`;
      // console.log(initialContent);
      const contentState = convertFromRaw(JSON.parse(initialContent));
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);

      setValue("name", name);
      setValue("phone", phone);
      setValue("email", email);
      setValue("address", adress);
      setValue("about", about == null ? "" : about);
    }
  }, [data]);

  // console.log(data);
  

  let schema = yup.object().shape({
    email: yup
      .string()
      .email(`${t("email-valid")}`)
      .required(`${t("email-required")}`),
    name: yup
      .string()
      .min(3, `${t("name-min-3")}`)
      .required(`${t("name-required")}`),
    address: yup.string().required(`${t("address-required")}`),
    phone: yup.string().required(`${t("phone-required")}`),
    about: yup.string(),
  });

  

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
    updateCompany({ data, token: authorisation.token }).then((res) => {
      if ("data" in res) {
        Swal.fire(`${t(res.data.message)}`, "", "success").then(() => {
          check({ token: authorisation?.token });
        });
      } else {
        Swal.fire(`${t(res.error.message)}`, "", "error");
      }
    });
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
        {false ? (
          "Loading..."
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <hr className="my-0" />
                <div className="card-body">
                  <CompanyImageForm
                    img={process.env.NEXT_PUBLIC_MAIN_PATH + message?.photo}
                  />
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
                          defaultValue={message?.name}
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
                          defaultValue={message?.adress}
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
                          defaultValue={message?.email}
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
                            defaultValue={message?.phone}
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
                          <div className="nav-item "></div>
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
                                      editorState={editorState}
                                      wrapperClassName="demo-wrapper"
                                      editorClassName="demo-editor"
                                      onEditorStateChange={(e) => {
                                        setEditorState(e);
                                        setValue(
                                          "about",
                                          draftToHtml(
                                            convertToRaw(
                                              editorState.getCurrentContent()
                                            )
                                          )
                                        );
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
                                      {...register("about")}
                                      name="about[az]"
                                      id="elmaz1"
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
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="btn btn-primary me-2"
                      >
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
        )}
      </div>
    </MainWraper>
  );
};

export default Company;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
