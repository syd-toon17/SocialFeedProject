import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
            <label>Post</label>
            <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>
            <button type='submit'>Make Post</button>
        </form>

     );
}
 
export default CreatePostForm;