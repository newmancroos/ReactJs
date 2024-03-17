import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {
        id:1,
        title:"Learning Redux Toolkit",
        content:"It'seasy"
    },
    {
        id:2,
        title:"Subscribe",
        content:"Like and share this video"
    }
]

const postsSlice= createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postsSlice.reducer
