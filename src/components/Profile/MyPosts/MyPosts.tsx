import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from './Post/Post'


export type MyPostsType ={
  posts:Array<PostType>

}

export const MyPosts: React.FC<MyPostsType>= ({posts}) => {

  return (
    <div className={s.postsWrapper}>
      {
       posts.map(p => <Post
          date={p.date}
          theme={p.theme}
          avatar={p.avatar}
          id={p.id}
          text={p.text}
          likes={p.likes}
          key={p.id}/>)


      }

    </div>
  );
};

