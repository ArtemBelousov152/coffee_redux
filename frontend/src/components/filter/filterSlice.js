import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'All',
    searchValue: ''
});

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const {request} = useHttp();
        return request('http://localhost:3001/filters');
    }
);

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeActiveFilter: (state, action) => {state.activeFilter = action.payload},
        changeSearchValue: (state, action) => {state.searchValue = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state) => {state.filtersLoadingStatus = 'loading'})
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                filtersAdapter.setAll(state, action.payload)
            })
            .addCase(fetchFilters.rejected, (state) => {state.filtersLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = filterSlice;

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

export default reducer;

export const {changeActiveFilter, changeSearchValue} = actions;