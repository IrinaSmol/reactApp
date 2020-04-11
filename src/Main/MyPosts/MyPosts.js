import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={classes.my_post}>
            <Post message='Hello, how are you?'/>
            <Post message='Life is great!'/>
            <Post message='Lets make something amazing'/>
        </div>
    )
}

export default MyPost;