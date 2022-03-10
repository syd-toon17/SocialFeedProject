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
            <div className='border-box'>
                <div className='form-group row'>
                    <label htmlFor='input name' className='col-sm-1 col-form-label'> Name</label>
                    <div className='col-sm-10'>                
                        <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>    {/*  sending data to hook on line 5 */}
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='input post' className='col-sm-1 col-form-label'>Post</label>
                <div className='col-sm-10'>
                    <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>    {/*  sending data to hook on line 6 */}
                </div>
                    </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Make Post</button>
                    </div>
                </div>
            </div>
        </form>

     );
}
 
export default CreatePostForm;