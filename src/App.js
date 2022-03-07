import React, { useState } from 'react';



function App() {

const [posts, setPosts] = useState([[{name: 'Sydney', post: 'Hello programming world!'}]])

  return (
    <div >
      <h3>{posts[0]}</h3>
    </div>
  );
}

export default App;
