import { UseSelector, useSelector } from "react-redux";

const PostsList =() => {

    const posts = useSelector((state) => state.posts)
    return(
        <div></div>
    )
}

export default PostsList