import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {Dialog, DialogItemType} from './Dialog/Dialog';
import {MessagesDataType} from '../../redux/stateType';
import {connect, useDispatch} from 'react-redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';


//пропсы получаемые из стейта
const mapStateToProps = (state:any) => {
  return{
    messages:state.messages
  }
}
// пропсы для диспатча данных в стейт
const mapDispatchToProps = (dispatch:any) => {
  return{
    updateNewMessageBody:(body:string)=>{
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage:()=>{
      dispatch(sendMessageCreator())
    }
  }
}

// пропсы из двух функций попадают в целевой 'простой' компонент
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;