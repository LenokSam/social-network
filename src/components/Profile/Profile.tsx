import React, {RefObject} from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileDataType} from '../../redux/stateType';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {useDispatch} from 'react-redux';
import {updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import store from '../../redux/store';


type ProfileType = {
  profile:ProfileDataType
  addPost: (postMessage: string) => void
}
export const Profile: React.FC<ProfileType> = ({profile,addPost}) => {
 const {avatar, id, login, name}=profile.userInfo

let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef()
const addNewPost = () => {
   if (newPostElement.current?.value){
     addPost(newPostElement.current.value)
     newPostElement.current.value=''
   }
}

let dispatch = useDispatch()

  return (
    <div>
      <div className={s.wrapper}>

        <div className={s.info}>
          <img src={avatar} className={s.avatar}></img>
          <div className={'col'}>
            <span className={s.name}>{name}</span>
            <span className={s.login}>@{login}</span>
          </div>
        </div>
      </div>
      <MyPostsContainer
        posts={profile.posts}
        addPost={()=>{}}
        updateNewPostText={(text)=>console.log(text)}
        newPostText={''}
      />
    </div>
  );
};

