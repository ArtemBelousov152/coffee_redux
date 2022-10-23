import {configureStore} from '@reduxjs/toolkit';
import coffee from '../components/cardsList/coffeeListSlice';
import filters from '../components/filter/filterSlice';
import bestCoffee from '../components/bestCoffee/bestCoffeeSlice';

const store = configureStore({
    reducer: {coffee, filters, bestCoffee},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true //process.env.NODE_ENV !== "development"
})

export default store;