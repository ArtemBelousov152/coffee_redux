import { 
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    createSelector 
} from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const coffeeAdapter = createEntityAdapter();

const initialState = coffeeAdapter.getInitialState({
    coffeeLoadingStatus: 'idle'
});

export const coffeeFetch = createAsyncThunk(
    'coffee/coffeeFetch',
    () => {
        const {request} = useHttp();
        return request('http://localhost:3001/coffee')
    }
)

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(coffeeFetch.pending, (state) => {state.coffeeLoadingStatus = 'loading'})
            .addCase(coffeeFetch.fulfilled, (state, action) => {
                state.coffeeLoadingStatus = 'idle';
                coffeeAdapter.setAll(state, action.payload);
            })
            .addCase(coffeeFetch.rejected, (state) => {state.coffeeLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {reducer} = coffeeSlice;

export const {selectAll, selectById} = coffeeAdapter.getSelectors(state => state.coffee)

const filterSearchCoffee = createSelector(
    (state) => state.filters.searchValue,
    selectAll,
    (search, coffee) => {
        if (search === '') {
            return coffee
        } else {
            return coffee.filter(item => item.name.toLowerCase().indexOf(search, 0) !== -1)
        }
    }
)

export const filteredCoffeeSelector = createSelector(
    (state) => state.filters.activeFilter,
    filterSearchCoffee,
    (filter, coffee) => {
        if (filter === "All") {
            return coffee
        } else {
            return coffee.filter(item => item.country === filter)
        }
    }
);

export default reducer;