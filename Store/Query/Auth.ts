import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const MAIN_PATH = process.env.NEXT_PUBLIC_MAIN_PATH


export const auth = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_PATH}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (build) => ({
    login:build.mutation({
        query: ({email, password}:{email:string, password:string}) => ({
            url: `api/auth/login?email=${email}&password=${password}`,
            method: "POST",
          }),
    })
  }),
})


export const {useLoginMutation} = auth;

