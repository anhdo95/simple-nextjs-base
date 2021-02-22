import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppState } from "@store";
import { Nullable } from "@types";
import { User } from "@interfaces";

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
  dispatch(userActions.setCurrentUser(null));
};

export default userSlice.reducer;
