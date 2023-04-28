import {
  changePasswordParam,
  loginParams,
  registerParam,
} from "@/interfaces/authParams";
import { addItem, select } from "@/interfaces/generalResponses";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { headers } from "next/dist/client/components/headers";

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
      query: (data: loginParams) => ({
        url: `api/auth/login`,
        method: "POST",
        body:data
      }),
    }),
    register: build.mutation({
      query: (data: registerParam) => ({
        headers:{
          'Content-type':'application/json'
        },
        url: `api/auth/register`,
        method: "POST",
        body:data
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
        user,
        token,
      }: {
        user: changePasswordParam;
        token: string;
      }) => ({
        url: `api/auth/change-password`,
        method: "POST",
        body:user,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type':'application/json'
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
    salaries: build.query<select, any>({
      query: () => ({
        url: `api/salaries`,
        method: "GET",
      }),
    }),
    education: build.query<select, any>({
      query: () => ({
        url: `api/education`,
        method: "GET",
      }),
    }),
    experience: build.query<select, any>({
      query: () => ({
        url: `api/experience`,
        method: "GET",
      }),
    }),
    categories: build.query<select, any>({
      query: () => ({
        url: `api/categories`,
        method: "GET",
      }),
    }),
    modes: build.query<select, any>({
      query: () => ({
        url: `api/modes`,
        method: "GET",
      }),
    }),
    vacancies: build.query<select, any>({
      query: () => ({
        url: `api/vacancies`,
        method: "GET",
      }),
    }),
    city: build.query<select, any>({
      query: () => ({
        url: `api/city`,
        method: "GET",
      }),
    }),
    postVacancies: build.mutation<{message:string}, {data:FormData, token:string}>({
      query: ({data, token}) => ({
        body: JSON.stringify({...data}),
        headers: {
          'Content-type':'application/json;',
          'Authorization': `Bearer ${token}`,
        },
        method: "POST",
        url: `api/vacancies/store`,
      }),
    }),
    forgotPassword: build.mutation<{data:{token:string, email:string}, status:string}, {email:string}>({
      query: (data) => ({
        url: `api/auth/forgot-password`,
        method: "POST",
        body:data,
        headers:{
          'Content-type':'application/json'
        }
      }),
    }),
    resetPassword: build.mutation<any, {email:string, new_password:string,password_confirmation:string, token:string}>({
      query: (data) => ({
        url: `api/auth/reset-password`,
        method: "POST",
        body:data,
        headers:{
          'Content-type':'application/json'
        }
      }),
    }),
    updateCompany: build.mutation<any, {data:{email:string, phone:string,name:string, address:string}, token:string}>({
      query: ({data, token}) => ({
        url: `api/company-update`,
        method: "POST",
        body:data,
        headers: {
          "Access-Control-Allow-Origin":"htttp::/localhost:3000",
          'Authorization': `Bearer ${token}`,
          'Content-type':'application/json',
        },
      }),
    }),
  }),
});

export const {
  useUpdateCompanyMutation,
  useResetPasswordMutation,
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
  useForgotPasswordMutation
} = auth;
