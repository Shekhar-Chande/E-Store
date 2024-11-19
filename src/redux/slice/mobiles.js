import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://ecommerce-api3.p.rapidapi.com/mobiles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a66d9af3c0mshfb36468bdaa4792p1fe038jsnd6d4f2142e5e',
		'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
	}
};

export const fetchMobiles = createAsyncThunk('fetchMobiles', async()=>{
    const response = await fetch(url, options)
    return response.json();
})


const mobiles = createSlice({
    name: 'mobiles',
    initialState: {
        isLoading: null,
        data: null,
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchMobiles.pending, (state, action)=>{
            state.isLoading=true;
        })

        builder.addCase(fetchMobiles.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.data = action.payload;
        })

        builder.addCase(fetchMobiles.rejected, (state, action)=>{
            console.log('Error', action.payload);
            state.isError = true
            
        })
    }   
})

export default mobiles.reducer