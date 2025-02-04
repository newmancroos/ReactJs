import { useSelector, useDispatch } from "react-redux";
//import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { selectPostIds, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
// import { useEffect } from "react";
import PostExcerpts from "./PostExcerpts";



const PostsList = () => {

    // const dispatch = useDispatch();
    //const posts = useSelector(selectAllPosts)

    const orderedPostsIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

//We called the dispatch(fetchPosts)  in the Index page so all the posts will be loaded when the index page load.
// this resolve the refresh page ex: Post/1 will be not foiund if we load the post in post page because when we call PostList we load all the post first time as per previous logic.

    // useEffect(() =>{
    //     if(postStatus === 'idle')
    //     {
    //         dispatch(fetchPosts())
    //     }
    // },[postStatus,dispatch])


    let content;

    if(postStatus === 'loading')
    {
        content = <p>"Loading..."</p>;
    }
    else if(postStatus === 'succeeded')
    {
        //In the createAdapter we ordered it so we can use that here
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        //content = orderedPosts.map(post => <PostExcerpts key={post.Id} postId={post} />)

        content = orderedPostsIds.map(postId => <PostExcerpts key={postId} postId={postId} />)
    }
    else if(postStatus === 'failed')
    {
        content = <p>{error}</p>
    }
    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList