import { useState } from "react";   
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
//import { postAdded } from "./postsSlice";  
import { addNewPost } from "./postsSlice"; //We use this new extraReducer method instead of above one
import { selectAllUsers } from "../users/usersSlice";
import { Navigate, useNavigate } from "react-router-dom";


const AddPostForm = () =>{

    const dispatch = useDispatch()
    const[title, setTitle]= useState('')
    const[content,setContent] = useState('')
    const[userId, setUserId]= useState('');
    const users = useSelector(selectAllUsers)
    const navigate = useNavigate();
    const [addRequestStatus,setAddRequestStatus]= useState('idel')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)    

    //const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus ==='idel';

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    // const onSavePostClicked = () =>{
    //     if(title && content){
    //         dispatch(postAdded(title,content,userId))

    //         setTitle('')
    //         setContent('')
    //         setUserId('')
    //     }
    // }

    const onSavePostClicked = () =>{
        if(canSave)
        {
            try{
                setAddRequestStatus('pending')
                dispatch(addNewPost({title,body:content, userId})).
                unwrap(); // With .unwrap(), it will resolve to the value of the fulfilled action, or throw on a rejected action.
                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            }
            catch(err)
            {
                console.error('Failed to save the post', err)
            }
            finally{
                setAddRequestStatus('idle')
            }
        }
    }
    return(
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title :</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postAuthor">Author</label>
                <select id="postAuthor" name="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content :</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />

                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm