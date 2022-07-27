import {v1} from 'uuid';
import {DialogItemType, MessagesDataType} from './stateType';

const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'
export type initialDialogsStateType = {
  dialogs: Array<DialogItemType>
  newMessage: string
}

export let initialState: initialDialogsStateType = {
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
  ],
  newMessage: ''
}


export const dialogsReducer = (state = initialState, action: dialogsACType) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {...state, newMessage: action.payload.body}
    case SEND_MESSAGE:
      const newDialog = {
        id: v1(),
        name: 'new Name',
        login:'new-log',
        text: state.newMessage,
        avatar: 'http://spb.zvetnoe.ru/upload/catalog/2018/04/CX3119_M.jpg'
      }
      return {dialogs: [newDialog, ...state.dialogs], newMessage: ''}
    default:
      return state
  }
}

type dialogsACType = updateNewMessageBodyCreatorType | sendMessageCreatorType

type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>

export const updateNewMessageBodyCreator = (text: string) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    payload: {
      body: text
    }
  } as const
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  } as const
}