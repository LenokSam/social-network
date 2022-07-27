import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from './Post/Post'
import {connect, useDispatch} from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {Dialogs} from '../../Dialogs/Dialogs';


export type MyPostsType = {
  posts: Array<PostType>
  updateNewPostText: (text: string) => void
  addPost: () => void
  newPostText: string
}

export const MyPostsContainer: React.FC<MyPostsType> = ({posts, updateNewPostText, addPost, newPostText}) => {

  let dispatch = useDispatch()
  const [text, setText] = useState<string>(newPostText)


  const onAddPost = () => {
    dispatch(addPostActionCreator())
  }

  const onPostChange = (text:string) => {
    // setText(e.currentTarget.value)
    dispatch(updateNewPostText(text))
    // dispatch(updateNewPostTextActionCreator(text))
  }


  return (
    <MyPosts
      posts={posts}
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      newPostText={'что-то будет'}/>
  );
};



// const mapStateToProps = (state:any) => {
//   return{
//     posts:state.profile.posts,
//     newPostText: state.profile.newPostText
//   }
// }
//
// const mapDispatchToProps = (dispatch:any) => {
//   return{
//     updateNewPostText:(text:string)=>{
//       dispatch(updateNewPostTextActionCreator(text))
//     },
//     addPost:()=>{
//       dispatch(addPostActionCreator())
//     }
//   }
// }
//
//
//
// export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)