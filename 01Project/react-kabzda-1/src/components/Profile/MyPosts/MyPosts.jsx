import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postsElements = props.profile.postsData.map(post => <Post key={post.id} message={post.message} likesCounter={post.likesCounter} />);
  let addPost = (values) => {
    props.addPost(values.post);
  }
  return (
    <div className={s.Posts}>
      <PostReduxForm className={s.CreatePostBlock} onSubmit={addPost} />
      {postsElements}
    </div>
  )
}

const PostForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit} >
      <Field className={s.textarea} type="text" name="post" component="textarea" placeholder="it-kamasutra.com" />
      <button className={s.postButton}> Post </button>
    </form>
  )
}

const PostReduxForm = reduxForm({
  form: 'postForm'
})(PostForm)

export default MyPosts;