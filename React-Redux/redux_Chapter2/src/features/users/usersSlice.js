import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:"Newmancroos"},
    {id:'1', name:"Nithin"},
    {id:'2', name:"Nithia"},
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }

})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer