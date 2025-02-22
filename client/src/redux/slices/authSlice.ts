import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authStateType {
  loading: boolean,
  isAuthenticated: boolean,
  user: {
    fullName: string;
    email: string;
    phoneNumber: number;
    role: string;
    profile: {
      bio: string;
      skills: string[];
      resume: string;
      resumeOriginalName: string;
      company: string[];
      profilePhoto: string;
    }
  }
}

const  initialState : authStateType = {
  loading: false,
  isAuthenticated: false,
  user: {
    fullName: "",
    email: "",
    phoneNumber: 0,
    role: "",
    profile: {
      bio: "",
      skills: [],
      resume: "",
      resumeOriginalName: "",
      company: [],
      profilePhoto: ""
    }
  }
}


const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<authStateType["loading"]>) => {
      state.loading = action.payload
    },
    setUser: (state, action: PayloadAction<authStateType["user"]>) => {
     state.user = action.payload;
     state.isAuthenticated = true;
    }
  }
})

export const {setLoading, setUser} = authSlice.actions
export default authSlice.reducer