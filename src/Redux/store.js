import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import cartReducer from './cartslice'

 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
    reducer: persistedReducer,
  
});
 
export default store
export const persistor = persistStore(store)
