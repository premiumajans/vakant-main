
import { generalData } from "@/interfaces/authResponses";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  data: {
    show:false
  } as generalData,
};
const General = createSlice({
  initialState,
  name: "General",
  reducers: {
    setShow:(state, action) => {state.data.show = action.payload}
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.chatRoom,
      };
    },
  },
});

export default General.reducer;

export const { setShow } = General.actions;

export const getGeneralData = (state: any) => state.General.data as generalData;
