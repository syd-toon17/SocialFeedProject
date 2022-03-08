import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App() {

  const [posts, setPosts] = useState([{name: 'Sydney Wilson', post: 'Hello programming world!'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div >
      <div>
        <h3>SocialFeed</h3>
      </div>
      <div>
        <CreatePostForm addNewPost={addNewPost}/>
      </div>
      <div>
        <DisplayPosts parentPost={posts} />
      </div>
    </div>

  );
}

export default App;
