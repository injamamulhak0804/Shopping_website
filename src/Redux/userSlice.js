import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: null
    },
    reducers:{
        addUser:(state, action)=>{
            state.userName = action.payload 
        }
    }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer