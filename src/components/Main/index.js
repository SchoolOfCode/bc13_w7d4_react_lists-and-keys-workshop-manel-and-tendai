import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  {
    posts.map(({ Post }) => {
      return <Post key={postId} />;
    });
  }

  return <main id="main"></main>;
}

export default Main;
