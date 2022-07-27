import {StateType} from './stateType';
import {v1} from 'uuid';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
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
  }
}

// в редьюсере говорим, что делать со стейтом, если экшен равен..
// принмиает стейт и экшн
export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1',
        date: '07.06.2022',
        id: v1(),
        likes: 133,
        text: 'This is my first post in my first project',
        theme: 'React',
      }
      return {...state, profile: {...state.profile, posts: [...state.profile.posts, newPost]}}
    case UPDATE_NEW_POST_TEXT:
      return state
    default:
      return state
  }
}


// ActionCreator - функция, которая возвращает action
export const addPostActionCreator=()=>({type:ADD_POST})

export const updateNewPostTextActionCreator = (text:string) =>{
  return { type: UPDATE_NEW_POST_TEXT, newText:text}
}

