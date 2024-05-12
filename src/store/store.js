import {configureStore} from "@reduxjs/toolkit"
import allProductsReducer from "./slices/allProductsSlice"
import categoriesReducer from './slices/categoriesSlice'
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
    reducer: {
      allProducts: allProductsReducer,
      categories: categoriesReducer,
      favorites: favoritesReducer
    }
  })