import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');   // these hooks will hold data as it gets entered and I will pull the   
    const [post, setPost] = useState('');   // data from here for my handleSubmit function

    function handleSubmit(formEvent){
        formEvent.preventDefault();  // prevents page refresh
        let newPost = {      //  staging data together to send to app.js
            name: name,
            post: post
        };
        console.log(newPost);     
        props.addNewPost(newPost)  // calling function on app.js, sending our post data to be stored 
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>    {/*  sending data to hook on line 5 */}
            <label>Post</label>
            <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>    {/*  sending data to hook on line 6 */}
            <button type='submit'>Make Post</button>
        </form>

     );
}
 
export default CreatePostForm;