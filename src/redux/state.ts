import React from 'react';
import {v1} from 'uuid';
import {PostType, StateType} from './stateType';
import {rerenderEntireTree} from '../render';


export const state: StateType = {
  profile: {
    userInfo: {
      id: v1(),
      name: 'Elena Samoilenko',
      login: 'lenok-sam',
      avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1'
    },
    posts: [
      {
        avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1',
        date: '07.06.2022',
        id: v1(),
        likes: 133,
        text: 'This is my first post in my first project',
        theme: 'React',

      },
      {
        avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1',
        date: '07.06.2022',
        id: v1(),
        likes: 512,
        text: 'This is my secont post in my first project',
        theme: 'React',

      }
    ]
  },
  messages: {
    dialogs: [
      {
        id: v1(),
        name: 'Griz',
        text: 'Choose a job you love, and you will never have to work a day in your life.',
        avatar: 'https://mystickermania.com/cdn/stickers/cartoons/we-bare-bears-grizz-very-closely-512x512.png',
        login: 'griz'
      },
      {
        id: v1(),
        name: 'Pan Pan',
        text: 'Nothing is impossible, the word itself says, I’m possible!',
        avatar: 'https://i.pinimg.com/originals/8a/c3/ee/8ac3ee48bbcc67c029e3c19a78fcc0cd.png',
        login: 'pan-pan'
      },
      {
        id: v1(),
        name: 'Maksim',
        text: 'You get on my nerves',
        avatar: 'https://img.freepik.com/free-vector/cartoon-little-boy-playing-with-cubes_353337-579.jpg?w=2000',
        login: 'maksimka'
      },
      {
        id: v1(),
        name: 'Sanya',
        text: 'Cheer up, the worst is yet to come.',
        avatar: 'https://img.freepik.com/free-vector/cartoon-little-boy-with-mobile-phone_353337-729.jpg?w=2000',
        login: 'sanya'
      },
    ]
  },

}

export const addPosts = (postMessage: string) => {
  let newPost: PostType = {
    avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1',
    date: '07.06.2022',
    id: v1(),
    likes: 512,
    text: postMessage,
    theme: 'React',

  }
  state.profile.posts.push(newPost)
  rerenderEntireTree(state)
}
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
export const addPostActionCreator = () => {

  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text: string) => {

  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}