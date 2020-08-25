import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextcreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// const MyPostsContainer = (props) => {
//   let profileState = props.store.getState().profile;
//   let addPost = ()=>{
//     props.store.dispatch(addPostActionCreator());
//   }
//   let change = (text)=>{
//     props.store.dispatch(updateNewPostTextcreator(text));
//   }
//   return (
//    <MyPosts addPostState = {addPost} updateTextArea = { change} postsData = {profileState.postsData}  newPostText = {profileState.newPostText}/>
//   )
// }

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    change: (text) => {
      dispatch(updateNewPostTextcreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;