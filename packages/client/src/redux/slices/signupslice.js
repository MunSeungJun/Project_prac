import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    username: '',
    email: '',
    passwd: '',
    phone: '',
  },
};

const signupslice = createSlice({
  name: 'signup',
  initialState: initialState,
  reducers: {
    updateSignupData: (state, action) => {
        const { name, value } = action.payload
        state.formData[name] = value
    },
    resetSignupData: () => initialState
  },
});

export const { updateSignupData, resetSignupData } = signupslice.actions;
export default signupslice.reducer;
