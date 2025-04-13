import {createSlice} from '@reduxjs/toolkit';

interface ComponentState {
  componentState: {
    isModalOpen: boolean;
  };
}

const initialState = {
  isModalOpen: false,
};

export const componentSlice = createSlice({
  name: 'componentState',
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {setIsModalOpen} = componentSlice.actions;
// Selectors
export const selectIsModalOpen = (state: ComponentState) => {
  return state.componentState.isModalOpen;
};

export default componentSlice.reducer;
