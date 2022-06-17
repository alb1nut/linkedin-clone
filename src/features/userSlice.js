import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // Use the PayloadAction type to declare the contents of `action.payload`
      state.user = action.payload;
    },
    logout:(state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selectors => used to pull info from slice eg. userslice
export const selectUser = (state) => state.user.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
