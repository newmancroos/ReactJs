import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";  //npm install date-fns
import ReactionButtons from "./ReactionButtons";


const PostExcerpts = ({post}) => {
  return (
    <article >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAge timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

export default PostExcerpts