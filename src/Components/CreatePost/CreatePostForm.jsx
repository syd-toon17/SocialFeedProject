import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefalt();
        let newPost = {
            firstName: firstName,
            lastName: lastName,
            post: post
        };
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='text' onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
            <label>Last Name</label>
            <input type='text' onChange={(event) => setLastName(event.target.value)} value={lastName}/>
            <label>Post</label>
            <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>
            <button type='submit'>Make Post</button>
        </form>

     );
}
 
export default CreatePostForm;