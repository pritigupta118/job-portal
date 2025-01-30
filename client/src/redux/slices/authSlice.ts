import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authStateType {
  loading: boolean
}

const  initialState : authStateType = {
  loading: false
}


const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<authStateType["loading"]>) => {
      state.loading = action.payload
    }
  }
})

export const {setLoading} = authSlice.actions
export default authSlice.reducer