import React from 'react';
import s from './Post.module.css'
import {AiOutlineLike} from 'react-icons/ai'

export type PostType = {
  avatar: string
  date: string
  id: string
  likes: number
  text: string
  theme: string

}

export const Post: React.FC<PostType> = (
  {avatar, date, id, likes, text, theme}
) => {
  return (
    <div className={s.postsWrapper}>
      <img src={avatar} className={s.avatar}></img>
      <div className={s.profileInfo}>
        <div className={'col'}>
          <span className={s.theme}>{theme}</span>
          <span className={s.date}>{date}</span>
        </div>
        <p className={s.text}>{text}</p>
        <div className={s.likes}>
          <AiOutlineLike/>
          <span>{likes}</span>
        </div>
      </div>

    </div>
  );
};

