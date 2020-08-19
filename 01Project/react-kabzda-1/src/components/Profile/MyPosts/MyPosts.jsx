import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextcreator} from '../../../Redux/profileReducer';



const MyPosts = (props) => {
  let postsElements = props.postsData.map(post=><Post key = {post.id} message = {post.message} likesCounter = {post.likesCounter} />);
  let newPostElement = React.createRef();
  let addPost = ()=>{
    props.addPostState();
    // props.dispatch(addPostActionCreator());
  }
  let change = ()=>{
    let text = newPostElement.current.value;
    props.updateTextArea(text);
    // props.dispatch(updateNewPostTextcreator(text));
  }
  return (
    <div className={s.Posts}>
      <div className={s.CreatePostBlock}>
            <textarea ref = {newPostElement} className = {s.textarea} type="text" onChange = {change}   value = {props.newPostText}/>
            <button  className = {s.postButton} onClick = {addPost}> Post</button>
      </div>
      {postsElements}
    </div>
  )
}
export default MyPosts;