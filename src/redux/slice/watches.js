import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const url = 'https://ecommerce-api3.p.rapidapi.com/watches';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a66d9af3c0mshfb36468bdaa4792p1fe038jsnd6d4f2142e5e',
		'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
	}
};

export const fetchWatches = createAsyncThunk('fetchWatches', async()=>{
    const response = await fetch(url, options)
    return response.json();
})

const watches = createSlice({
    name: 'watches',
    initialState:{
        isLoading: false,
        data: null,
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchWatches.pending, (state, action)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchWatches.fulfilled, (state, action)=>{
            state.isLoading=false,
            state.data = action.payload;
        })

        builder.addCase(fetchWatches.rejected, (state, action)=>{
            console.log('Error', action.payload);
            state.isError = true
            
        })
    }
})

export default watches.reducer