import {configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import images from './slices/images';
import auth from './slices/auth'

const config = {
    key: 'redux',
    version: 1,
    storage
}

const slices= combineReducers({
    images,
    auth
})


const store = configureStore({
    reducer: persistReducer(config,slices),
    devTools: true,
    middleware: (setup)=>setup({
        serializableCheck: false
    })
})

export default store;