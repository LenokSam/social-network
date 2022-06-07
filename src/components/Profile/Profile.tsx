import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {v1} from 'uuid';
import {PostType} from './MyPosts/Post/Post';


type ProfileType = {
  avatar: string
  name: string
  login: string
}
export const Profile: React.FC<ProfileType> = ({avatar, name, login}) => {


  let posts: Array<PostType> = [
    {
      avatar: avatar,
      date: '07.06.2022',
      id: v1(),
      likes: 133,
      text: 'This is my first post in my first project',
      theme: 'React',

    },
    {
      avatar: avatar,
      date: '07.06.2022',
      id: v1(),
      likes: 512,
      text: 'This is my secont post in my first project',
      theme: 'React',

    }

  ]


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
      <MyPosts posts={posts}/>
    </div>
  );
};

