import {v1} from 'uuid';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type UserInfoType = {
  id: string
  name: string
  login: string
  avatar: string
}

export type PostType = {
  avatar: string
  date: string
  id: string
  likes: number
  text: string
  theme: string
}

type initialProfileStateType = {
  userInfo: UserInfoType
  posts: Array<PostType>
  newPostText:string
}

let initialProfileState = {
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
  ],
  newPostText: ''

}

// в редьюсере говорим, что делать со стейтом, если экшен равен..
// принмиает стейт и экшн
export const profileReducer = (state: initialProfileStateType = initialProfileState, action: profileACType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        avatar: 'https://1417094351.rsc.cdn77.org/articles/2142/2141368/thumbnail/small.gif?1',
        date: 'new Date',
        id: v1(),
        likes: 133,
        text: state.newPostText,
        theme: 'new Theme',
      }
      return {...state, posts:[newPost, ...state.posts]}
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.payload.newText}
    default:
      return state
  }
}

type profileACType = updateNewPostTextACType | addPostACType


// ActionCreator - функция, которая возвращает action

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
}


type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: {newText: text}
  } as const
}

