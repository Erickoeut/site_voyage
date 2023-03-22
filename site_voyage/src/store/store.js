import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from './reducers/cart.reducer';

import reduxLogger from 'redux-logger';

const store = configureStore({
    reducer: {
        cart:destinationReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;