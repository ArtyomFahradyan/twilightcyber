import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/configureStore";

// Define a type for the slice state
interface UserState {
  userName: string;
}

// Define the initial state using that type
const initialState: UserState = {
  userName: "Bruce",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserName = (state: RootState) => state.user.userName;

export default userSlice.reducer;
