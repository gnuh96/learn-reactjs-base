import counterReducer from '../features/Counter2/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
    count: counterReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
