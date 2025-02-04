import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";  //npm install date-fns
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";


//Going to introduce react memo, which will allow rerender when the prop change.
//When we click on reaction post doesn;t change so it will not rerender 100 times

//If it is const we can change this in the mem so I changed it to let
//const PostExcerpts = ({post}) => {
let PostExcerpts = ({post}) => {
  return (
    <article >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
              <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAge timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

// it is memo omplementation
PostExcerpts = React.memo(PostExcerpts);


export default PostExcerpts