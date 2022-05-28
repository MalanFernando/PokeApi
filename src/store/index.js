import { configureStore } from '@reduxjs/toolkit'
import pokemon from './slices/pokemons.slice'

export default configureStore({
  reducer: {
    pokemon
	}
})