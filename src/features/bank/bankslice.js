import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"

const initialState = {
    bank: [],
    isError:false,
    isSuccess: false,
    isLoading:false,
    message: ''
}

export const transferslice = createSlice({
    name: 'Bank',
    initialState,
    reducers:{reset: (state) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = ""
    }}
})


export const {reset} = transferslice.actions
export default transferslice.reducer