import {
  useCategoriesQuery,
  useCityQuery,
  useEducationQuery,
  useExperienceQuery,
  useModesQuery,
  usePostVacanciesMutation,
  useSalariesQuery,
} from "@/Store/Query/Auth";
import { getUser } from "@/Store/Slices/User";
import { yupResolver } from "@hookform/resolvers/yup";
import Tagify from "@yaireo/tagify";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { EditorState, convertToRaw } from "draft-js";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const NewItemForm = () => {
  const { t, i18n } = useTranslation("common");
  const [currentPassword, setCurrentPassword] = useState('')
  const {
    user: { id },
    authorisation: { token },
  } = useSelector(getUser);

  const [show, setShow] = useState("");

  useEffect(() => {
    new Tagify(document.querySelector("#TagifyBasic")!);
  }, []);

  const Editor = dynamic<EditorProps>(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: true }
  );

  const { data: categories } = useCategoriesQuery("");
  const { data: salaries } = useSalariesQuery("");
  const { data: education } = useEducationQuery("");
  const { data: experience } = useExperienceQuery("");
  const { data: modes } = useModesQuery("");
  const [postItem, { isLoading }] = usePostVacanciesMutation();

  const { data: city } = useCityQuery("");
  const { push } = useRouter();
  let schema = yup.object().shape({
    position: yup.string().required(),
    category: yup.string().required(),
    mode: yup.string().required(),
    city: yup.string().required(),
    experience: yup.string().required(),
    education: yup.string().required(),
    minimum_age: yup.number().required(),
    maximum_age: yup
      .number()
      .required()
      .test({ message: `${t("dwdw")}` }, function (f) {
        const ref = yup.ref("minimum_age");
        return f > +this.resolve(ref);
      }),
    minimum_salary: yup.number().required(),
    maximum_salary: yup
      .number()
      .required()
      .test("", function (f) {
        const ref = yup.ref("minimum_salary");

        return f > +this.resolve(ref);
      }),
    company: yup.string().required(),
    relevant_people: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    tags: yup.string(),
    candidate_requirements: yup.string().required(),
    about_job: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    data.user_id = id;
    data.token = token;

    postItem(data).then((res) => {
      console.log(res);
      if ("data" in res) {
        {
          Swal.fire(`${t("vacancy-success")}`, "", "success").then(() =>
            push("my-items")
          );
        }
      }
    });
  };

  const generateAge = () => {
    let array: Array<number> = [];
    for (let index = 18; index < 65; index++) {
      array.push(index);
    }
    return (
      <>
        {array.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </>
    );
  };
  const [editorState_1, setEditorState_1] = useState(() =>
    EditorState.createEmpty()
  );

  const [editorState_2, setEditorState_2] = useState(() =>
    EditorState.createEmpty()
  );

  console.log(categories);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"
        ></script>
        <script defer src="/static/vendor/libs/select2/select2.js"></script>
        <script
          defer
          src="/static/vendor/libs/bootstrap-select/bootstrap-select.js"
        ></script>
        <script defer src="/static/tinymce/tinymce.min.js"></script>
        {/* <script defer src="/static/form-editor.init.js"></script> */}
      </Head>

      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mx-0 gy-3 px-lg-5">
          <div className="card mb-4">
            <h5 className="card-header">{t("post-a-job")}</h5>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="needs-validation card-body"
              noValidate
              action="{{ route('user.item.store') }}"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="multicol-username">
                    {t("position")}
                  </label>
                  <input
                    {...register("position")}
                    type="text"
                    className={`form-control ${
                      errors.position ? "is-invalid" : ""
                    }`}
                    name="position"
                    required
                    placeholder=""
                  />
                  {errors.position ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.position.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("category")}</label>
                  <select
                    {...register("category")}
                    className={`form-select ${
                      errors.category ? "is-invalid" : ""
                    }`}
                    name="category"
                    data-allow-clear="true"
                    required
                  >
                    {categories?.map((el) => {
                      return (
                        <>
                          <optgroup label={el.name}>
                            {el.alt?.map((el) => {
                              return (
                                <option value={el.id} key={el.id}>
                                  {
                                    el.translations.find(
                                      (el) => el.locale === i18n.language
                                    )?.name
                                  }
                                </option>
                              );
                            })}
                          </optgroup>
                        </>
                      );
                    })}
                  </select>
                  {errors.category ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.category.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("work-mode")}</label>
                  <select
                    {...register("mode")}
                    className={`form-select ${errors.mode ? "is-invalid" : ""}`}
                    name="mode"
                    data-allow-clear="true"
                    required
                  >
                    {modes?.map((el) => {
                      return (
                        <>
                          <option value={el.id} key={el.id}>
                            {
                              el.translations.find(
                                (el) => el.locale === i18n.language
                              )?.name
                            }
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.mode ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.mode.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label">{t("city")}</label>
                  <select
                    {...register("city")}
                    name="city"
                    className={`form-select ${errors.city ? "is-invalid" : ""}`}
                    data-allow-clear="true"
                    required
                  >
                    {city?.map((el) => {
                      return (
                        <>
                          <option value={el.id} key={el.id}>
                            {
                              el.translations.find(
                                (el) => el.locale === i18n.language
                              )?.name
                            }
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.city ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.city.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("experience")}</label>
                  <select
                    {...register("experience")}
                    className={`form-select ${
                      errors.experience ? "is-invalid" : ""
                    }`}
                    name="experience"
                    required
                    data-allow-clear="true"
                  >
                    {experience?.map((el) => {
                      return (
                        <>
                          <option value={el.id} key={el.id}>
                            {
                              el.translations.find(
                                (el) => el.locale === i18n.language
                              )?.name
                            }
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.experience ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.experience.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("education")}</label>
                  <select
                    {...register("education")}
                    name="education"
                    className={`form-select ${
                      errors.education ? "is-invalid" : ""
                    }`}
                    data-allow-clear="true"
                    required
                  >
                    {education?.map((el) => {
                      return (
                        <>
                          <option value={el.id} key={el.id}>
                            {
                              el.translations.find(
                                (el) => el.locale === i18n.language
                              )?.name
                            }
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.education ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.education.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-3">
                  <label className="form-label">{t("min-age")}</label>
                  <select
                    {...register("minimum_age")}
                    className={`form-select ${
                      errors.minimum_age ? "is-invalid" : ""
                    }`}
                    data-allow-clear="true"
                    name="minimum_age"
                    required
                  >
                    {generateAge()}
                  </select>
                  {errors.minimum_age ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.minimum_age.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-3">
                  <label className="form-label">{t("max-age")}</label>
                  <select
                    {...register("maximum_age")}
                    required
                    name="maximum_age"
                    className={`form-select ${
                      errors.maximum_age ? "is-invalid" : ""
                    }`}
                    data-allow-clear="true"
                  >
                    {generateAge()}
                  </select>
                  {errors.maximum_age ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.maximum_age.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-3">
                  <label className="form-label">{t("min-salary")}</label>
                  <select
                    {...register("minimum_salary")}
                    required
                    name="minimum_salary"
                    className={`form-select ${
                      errors.minimum_salary ? "is-invalid" : ""
                    }`}
                    data-allow-clear="true"
                  >
                    {salaries?.map((el) => {
                      return (
                        <>
                          <option value={el.salary} key={el.salary}>
                            {el.salary}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.minimum_salary ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.minimum_salary.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-3">
                  <label className="form-label">{t("max-salary")}</label>
                  <select
                    {...register("maximum_salary")}
                    required
                    name="maximum_salary"
                    className={`form-select ${
                      errors.maximum_salary ? "is-invalid" : ""
                    }`}
                    data-allow-clear="true"
                  >
                    {salaries?.map((el) => {
                      return (
                        <>
                          <option value={el.salary} key={el.salary}>
                            {el.salary}
                          </option>
                        </>
                      );
                    })}
                  </select>
                  {errors.maximum_salary ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.maximum_salary.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("about-job")}</label>
                  <Editor
                    placeholder={`${t("write-here")}`}
                    editorState={editorState_1}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={(e) => {
                      setEditorState_1(e);
                      setValue(
                        "about_job",
                        draftToHtml(
                          convertToRaw(editorState_1.getCurrentContent())
                        )
                      );
                    }}
                    toolbar={{
                      options: ["inline", "list", "textAlign", "history"],
                    }}
                  />
                  <textarea
                    {...register("about_job")}
                    hidden
                    disabled
                    value={draftToHtml(
                      convertToRaw(editorState_1.getCurrentContent())
                    )}
                    id="elm1"
                    rows={7}
                    name="about_job"
                    required
                    className={`form-control ${
                      errors.about_job ? "is-invalid" : ""
                    }`}
                  ></textarea>
                  {errors.about_job ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.about_job.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    {t("candidate-requirements")}
                  </label>
                  <Editor
                    placeholder={`${t("write-here")}`}
                    editorState={editorState_2}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={(e) => {
                      setEditorState_2(e);
                      setValue(
                        "candidate_requirements",
                        draftToHtml(
                          convertToRaw(editorState_2.getCurrentContent())
                        )
                      );
                    }}
                    toolbar={{
                      options: ["inline", "list", "textAlign", "history"],
                    }}
                  />
                  <textarea
                    {...register("candidate_requirements")}
                    hidden
                    // hidden

                    disabled
                    value={draftToHtml(
                      convertToRaw(editorState_2.getCurrentContent())
                    )}
                    id="elm2"
                    rows={7}
                    name="candidate_requirements"
                    required
                    className={`form-control ${
                      errors.candidate_requirements ? "is-invalid" : ""
                    }`}
                  ></textarea>
                  {errors.candidate_requirements ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>
                        {errors.candidate_requirements.message as string}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="multicol-phone">
                    {t("company")}
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    name="company"
                    className={`form-control ${
                      errors.company ? "is-invalid" : ""
                    }`}
                    required
                    placeholder=""
                  />
                  {errors.company ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.company.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="multicol-phone">
                    {t("relevant-people")}
                  </label>
                  <input
                    {...register("relevant_people")}
                    type="text"
                    name="relevant_people"
                    className={`form-control ${
                      errors.relevant_people ? "is-invalid" : ""
                    }`}
                    required
                    placeholder=""
                  />
                  {errors.relevant_people ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.relevant_people.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="multicol-email">
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    id="multicol-email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    required
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

                <div className="col-md-6">
                  <label className="form-label" htmlFor="multicol-phone">
                    {t("phone")}
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    className={`form-control phone-mask ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="phone"
                    required
                    placeholder="+994 50 000 0510"
                  />
                  {errors.phone ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.phone.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-12 mb-4">
                  <label htmlFor="TagifyBasic" className="form-label">
                    {t("tags")}
                  </label>
                  <input
                    {...register("tags")}
                    id="TagifyBasic"
                    className={`form-control ${
                      errors.tags ? "is-invalid" : ""
                    }`}
                    name="tags"
                  />
                  {errors.tags ? (
                    <div className="fv-plugins-message-container invalid-feedback">
                      <div>{errors.tags.message as string}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="pt-2">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="btn btn-primary me-sm-3 me-1"
                  >
                    {t("save")}
                  </button>
                  <button type="reset" className="btn btn-label-secondary">
                    {t("cancel")}
                  </button>
                </div>
              </div>
            </form>
            {/* <Script
              id="tiny"
              dangerouslySetInnerHTML={{
                __html: `
          tinymce.init({
            selector: "#elm1",
            height: 300,
            plugins: [
              "image code advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "save table contextmenu directionality emoticons template paste textcolor",
            ],
            toolbar:
              "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            style_formats: [
              { title: "Bold text", inline: "b" },
              {
                title: "Red text",
                inline: "span",
                styles: { color: "#ff0000" },
              },
              { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
              {
                title: "Example 1",
                inline: "span",
                classes: "example1",
              },
              { title: "Example 2", inline: "span", classes: "example2" },
              { title: "Table styles" },
              {
                title: "Table row 1",
                selector: "tr",
                classes: "tablerow1",
              },
            ],
            file_picker_types: "file image media",
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");
              input.onchange = function () {
                var file = this.files[0];
      
                var reader = new FileReader();
                reader.onload = function () {
                  var id = "blobid" + new Date().getTime();
                  var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(",")[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
          });
          `,
              }}
            ></Script> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewItemForm;
