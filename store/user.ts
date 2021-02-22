import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppState } from "@store";
import { Nullable } from "@types";
import { User } from "@interfaces";
import * as userService from "@services/user";

interface State {
  currentUser: Nullable<User>;
}

const initialState: State = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<Nullable<User>>) {
      state.currentUser = action.payload;
    },
  },
});

export const selectCurrentUser = (state: AppState) => state;

export const userActions = userSlice.actions;

export const getUserProfile = () => (dispatch: Dispatch) => {
  userService
    .me()
    .then((res) => dispatch(userActions.setCurrentUser(res.data)))
    .catch(console.error);
};

export default userSlice.reducer;
