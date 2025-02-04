import { createSlice, nanoid, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";


//Following are the changes to implement createEntityAdapter
//----------------------------------------------------------
//1. Include createEntityAdopter in redux import

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

//2. createEntityAdapoter
// Sorting was there in PostList, here we define it in the adapter so we have it centralized place.

const postsAdapter = createEntityAdapter({
    //We need to mention a selectId but if not createAdapter will automatically assign a Id
    sortAdapter: (a,b) => b.date.localcompare(a.date)
})


// const initialState =  {
//     posts: [],
//     status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//     count:0
// }

const initialState = postsAdapter.getInitialState({
        status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        count:0
    })


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    const response = await axios.post(POSTS_URL, initialPost)
    return response.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
    const {id} = initialPost
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
        return response.data
    }
    catch(err){
        return err.message;
    }

})

export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
    const {id} = initialPost
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`)
        if(response?.status === 200) return initialPost;
        return `${response?.status} : ${response?.statusText}`;
    }
    catch(err){
        return err.message;
    }

})
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body:content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            // const existingPost = state.posts.find(post => post.id === postId)
            //createAdapter change the post structure to an normalize format so post ids will be in a array and data going to be in an array.
            //so if we pass the post ir to the state.entities, it will pull the post
            const existingPost = state.entities[postId]

            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        increaseCount(state,action)
        {
            state.count = state.count + 1
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });

                // Add any fetched posts to the array
                // state.posts = state.posts.concat(loadedPosts)

                //Implementning createAdapter
                postsAdapter.upsertMany(state, loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled,(state, action) =>{
                const sortedPosts = state.posts.sort((a,b)=>{
                    if(a.id > b.id) return 1
                    if(a.id<b.id) return -1
                    return 0
                })
                action.payload.id = sortedPosts[sortedPosts.length -1].id +1;
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString()
                action.payload.reactions={
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                // state.posts.push(action.payload)
                //Implementning createAdapter
                postsAdapter.addOne(state,action.payload)
            })
            .addCase(updatePost.fulfilled,(state,action)=>{
                if(!action.payload?.id){
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }

                //const {id} = action.payload
                 action.payload.date = new Date().toISOString();
                // const posts =state.posts.filter(post => post.id !== id);
                // state.posts = [...posts,action.payload];
                
                //Implementning createAdapter
                postsAdapter.upsertOne(state,action.payload);
            })
            .addCase(deletePost.fulfilled,(state,action)=>{
                if(!action.payload?.id){
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                //const {id} = action.payload
                // const posts =state.posts.filter(post => post.id !== id);
                // state.posts = posts;

                //Implementning createAdapter
                const {id} = action.payload
                postsAdapter.removeOne(state, id)
            })
    }
})


//createAdapter getSelectors create these selectors and we rename them with aliases using destrcutors
export const {
    selectAll : selectAllPosts,
    selectById: selectPostById,
    selectIds : selectPostIds
} = postsAdapter.getSelectors(state => state.posts)

//export const selectAllPosts = (state) => state.posts.posts; // createAdapter has this functionality
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;
// export const selectPostById = (state, postId) =>   // createAdapter has this functionality
//     state.posts.posts.find(post => post.id === postId);
export const { postAdded, reactionAdded, increaseCount } = postsSlice.actions

export const selectPostsByUser = createSelector([selectAllPosts, (state,userId)=> userId], (posts, userId) => posts.filter(post => post.userId === userId))
//createSelector accept two parameters, first one is array of functions, second the output of the first parameter(s)
// selectAllPosts function returns all the posts, (state,userId)=> userId returns userId. Second parameter is out put of the array of function, that is Posts and userId
//this process is called memoization.
//Memoization in React is an optimization technique used to avoid unnecessary re-renders of components by caching the results of expensive function calls and reusing them when the same inputs occur again
export default postsSlice.reducer