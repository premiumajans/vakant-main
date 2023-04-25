import {
  changePasswordParam,
  loginParams,
  registerParam,
} from "@/interfaces/authParams";
import { addItem, select } from "@/interfaces/generalResponses";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const MAIN_PATH = process.env.NEXT_PUBLIC_MAIN_PATH;

export const auth = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_PATH }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ email, password }: loginParams) => ({
        url: `api/auth/login?email=${email}&password=${password}`,
        method: "POST",
      }),
    }),
    register: build.mutation({
      query: ({
        name,
        email,
        password,
        password_confirmation,
        privacy,
      }: registerParam) => ({
        url: `api/auth/register?&name=${name}&email=${email}&password=${password}&password_confirmation=${password_confirmation}&term=${
          privacy ? 1 : 0
        }`,
        method: "POST",
      }),
    }),
    privacy: build.mutation({
      query: () => ({
        url: `api/term`,
        method: "GET",
      }),
    }),
    logout: build.mutation({
      query: (token) => ({
        url: `api/auth/logout`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    changePassword: build.mutation({
      query: ({
        user: { confirmPassword, email, currentPassword, newPassword, username },
        token,
      }: {
        user: changePasswordParam;
        token: string;
      }) => ({
        url: `api/auth/change-password?email=${email}&current_password=${currentPassword}&new_password=${newPassword}&new_confirm_password=${confirmPassword}&username=${username}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    refresh: build.mutation({
      query: (token: string) => ({
        url: `api/auth/refresh`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    salaries: build.query<select, "">({
      query: () => ({
        url: `api/salaries`,
        method: "GET",
      }),
    }),
    education: build.query<select, "">({
      query: () => ({
        url: `api/education`,
        method: "GET",
      }),
    }),
    experience: build.query<select, "">({
      query: () => ({
        url: `api/experience`,
        method: "GET",
      }),
    }),
    categories: build.query<select, "">({
      query: () => ({
        url: `api/categories`,
        method: "GET",
      }),
    }),
    modes: build.query<select, "">({
      query: () => ({
        url: `api/modes`,
        method: "GET",
      }),
    }),
    vacancies: build.query<select, "">({
      query: () => ({
        url: `api/vacancies`,
        method: "GET",
      }),
    }),
    city: build.query<select, "">({
      query: () => ({
        url: `api/city`,
        method: "GET",
      }),
    }),
    postVacancies: build.mutation<{message:string}, addItem>({
      query: ({
        category,
        city,
        company,
        education,
        email,
        experience,
        maximum_age,
        maximum_salary,
        minimum_age,
        minimum_salary,
        mode,
        phone,
        position,
        relevant_people,
        tags,
        about_job,
        candidate_requirements,
        token,
        user_id,
      }) => ({
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        url: `api/vacancies/store?relevant_people=${relevant_people}&user_id=${user_id}&tags=${tags}&company=${company}&email=${email}&phone=${phone}&position=${position}&category=${category}&maximum_salary=${maximum_salary}&minimum_salary=${minimum_salary}&maximum_age=${maximum_age}&minimum_age=${minimum_age}&city=${city}&mode=${mode}&education=${education}&experience=${experience}&candidate_requirements=${encodeURIComponent(
          candidate_requirements
        )}&about_job=${encodeURIComponent(about_job)}`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  usePrivacyMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useRefreshMutation,
  useCategoriesQuery,
  useCityQuery,
  useEducationQuery,
  useExperienceQuery,
  useVacanciesQuery,
  useModesQuery,
  useSalariesQuery,
  usePostVacanciesMutation,
} = auth;
