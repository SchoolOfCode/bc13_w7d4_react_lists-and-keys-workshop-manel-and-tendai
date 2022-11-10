import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

const {postId, title, date, author, text, highlights, image} = samplePosts

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  {
    posts.map(({ Post }) => {
      return <Post key={postId} title={title} date={date} author={author} text={text} highlights={highlights}  image={image}/>;
    });
  }

  return <main id="main"></main>;
}

export default Main;
