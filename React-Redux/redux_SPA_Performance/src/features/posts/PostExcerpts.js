import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";  //npm install date-fns
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostExcerpts = ({post}) => {
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

export default PostExcerpts