import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
		name: 'user',
    initialState: "fer",//cambiar despues por ""
    reducers: {
        changeUser: (state, action) => action.payload
    }
});

export const {changeUser} = userSlice.actions;

export default userSlice.reducer;