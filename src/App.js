import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Navbar from './Components/Navbar/Navbar';
import './App.css'


function App() {

  const [posts, setPosts] = useState([{name: 'Sydney Wilson', post: 'Hello programming world!'}])

  function addNewPost(post){   // post is coming from createPostForm and is two parts: name, post
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div className='border-box'>
        <CreatePostForm addNewPost={addNewPost}/>
      </div>
      <div className='border-box'>
        <DisplayPosts parentPost={posts} />
      </div>
    </div>

  );
}

export default App;
