import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
		name: 'pokemon',
    initialState: 'pika',
    reducers: {
        
    }
})

export default pokemonSlice.reducer;