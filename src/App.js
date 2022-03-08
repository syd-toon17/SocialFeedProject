import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App() {

const [post, setPosts] = useState([{name: 'Sydney', post: 'Hello programming world!'}])

  return (
    <div >
      <DisplayPosts parentPost={post} />
    </div>

  );
}

export default App;
