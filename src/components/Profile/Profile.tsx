import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {v1} from 'uuid';
import {PostType} from './MyPosts/Post/Post';
import {ProfileDataType} from '../../redux/stateType';


type ProfileType = {
  profile:ProfileDataType
}
export const Profile: React.FC<ProfileType> = ({profile}) => {
 const {avatar, id, login, name}=profile.userInfo



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
      <MyPosts posts={profile.posts}/>
    </div>
  );
};

