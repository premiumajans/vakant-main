
import { generalData } from "@/interfaces/authResponses";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  data: {
    search:{
      categoryState:"",
      cityStateFromRedux:'',
      modeState:"",
      educationState:'',
      positionState:''
    }
  } as generalData,
};
const General = createSlice({
  initialState,
  name: "General",
  reducers: {

    setSearch:(state, action) => {state.data.search = action.payload},

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

export const {setSearch} = General.actions;

export const getGeneralData = (state: any) => state.General.data as generalData;

