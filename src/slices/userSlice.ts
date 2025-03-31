import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  userState: {
    token: undefined | string;
  };
}

const initialState = {
  token: undefined,
};

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = userSlice.actions;

// Selectors
export const selectToken = (state: UserState) => state.userState.token;

export default userSlice.reducer;
