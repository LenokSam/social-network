import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from './Post/Post'
import {connect, useDispatch} from 'react-redux';
import {
  addPostAC,
  updateNewPostTextAC,
} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';



const mapStateToProps = (state:any) => {
  return{
    posts:state.profile.posts,
    newPostText: state.profile.newPostText
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return{
    updateNewPostText:(text:string)=>{

      dispatch(updateNewPostTextAC(text))
    },
    addPost:()=>{
      dispatch(addPostAC())
    }
  }
}



export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)