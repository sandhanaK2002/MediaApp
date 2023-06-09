import {createSlice} from "@reduxjs/toolkit"
import {fetchUsers} from "../thunk/fetchUsers"


const userSlice =  createSlice({
    name : "user",
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending , (state )=>{
            state.isLoading = true;

        })
        builder.addCase(fetchUsers.fulfilled , (state, action)=>{
            state.isLoading = false;
            state.data = action.payload    

        })
        builder.addCase(fetchUsers.rejected , (state , action)=>{
            state.isLoading = false;
            state.error = action.error.message  

        })
    }
})


export const userReducer =  userSlice.reducer