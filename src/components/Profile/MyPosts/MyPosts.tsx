import React, {ChangeEvent, LegacyRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from './Post/Post'


export type MyPostsType = {
  posts: Array<PostType>
  updateNewPostText: (text: string) => void
  addPost: () => void
  newPostText: string
}

export const MyPosts: React.FC<MyPostsType> = ({posts, updateNewPostText, addPost, newPostText}) => {

  const postsRender = posts.map(p => <Post
    date={p.date}
    theme={p.theme}
    avatar={p.avatar}
    id={p.id}
    text={p.text}
    likes={p.likes}
    key={p.id}/>)


  const onAddPost = () => {
    addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewPostText(e.currentTarget.value)
  }

  return (
    <div className={s.postsWrapper}>
      <h3>My posts</h3>
      <div>
        <div className={'row'}>
          <div>
            <textarea
              onChange={onPostChange}
              value={newPostText}
            >
            </textarea></div>
          <div>
            <button onClick={onAddPost}> addPost</button>
          </div>
        </div>
      </div>

      {postsRender}
    </div>
  );
};

