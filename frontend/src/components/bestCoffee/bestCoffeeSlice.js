import { 
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const bestCoffeeAdapter = createEntityAdapter();

const initialState = bestCoffeeAdapter.getInitialState({
    bestCoffeeLoadingStatus: 'idle'
});

export const bestCoffeeFetch = createAsyncThunk(
    'bestCoffee/bestCoffeeFetch',
    () => {
        const {request} = useHttp();
        return request('http://localhost:3001/bestCoffee')
    }
)

const bestCoffeeSlice = createSlice({
    name: 'bestCoffee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(bestCoffeeFetch.pending, (state) => {state.bestCoffeeLoadingStatus = 'loading'})
            .addCase(bestCoffeeFetch.fulfilled, (state, action) => {
                state.bestCoffeeLoadingStatus = 'idle';
                bestCoffeeAdapter.setAll(state, action.payload);
            })
            .addCase(bestCoffeeFetch.rejected, (state) => {state.bestCoffeeLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {reducer} = bestCoffeeSlice;

export const {selectAll, selectById} = bestCoffeeAdapter.getSelectors(state => state.bestCoffee);

export default reducer;