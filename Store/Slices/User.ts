import { SuccesRes } from "@/interfaces/authResponses";
import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  initialState: {
    data:{
      authorisation:{
        token:'',
        type:''
      },
      status:'',
      user:{
        id:0,
        name:'',
        profile_photo_url:''
      }
    }  as SuccesRes
  },
  name: "User",
  reducers: {
    setUser: (state,action) => void(state.data = action.payload)
  },
});

export default User.reducer;

export const { setUser } = User.actions;

export const getUser = (state:any) => (state.User.data as SuccesRes)



