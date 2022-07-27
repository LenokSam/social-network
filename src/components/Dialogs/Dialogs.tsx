import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {Dialog, DialogItemType} from './Dialog/Dialog';
import {MessagesDataType} from '../../redux/stateType';
import {useDispatch} from 'react-redux';
import {initialDialogsStateType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import store from '../../redux/store';

type DialogsType = {
  messages: initialDialogsStateType
  updateNewMessageBody:(text:string)=>void
  sendMessage:()=>void
}

export const Dialogs: React.FC<DialogsType> = ({messages, updateNewMessageBody, sendMessage}) => {


  const onSendMessageClick = () => {
    sendMessage()
  }
  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewMessageBody(e.currentTarget.value)
  }

  const dialogsRender = messages.dialogs.map(d => <Dialog dialog={d} key={d.id}/>)
  return (
    <div>
      <div>
        <textarea
          value={messages.newMessage}
          onChange={onNewMessageChange}
          placeholder={'Enter your message'}
        >
        </textarea>
        <button
          onClick={onSendMessageClick}
        > Send Message</button>
      </div>
      {dialogsRender}

    </div>
  );
};

