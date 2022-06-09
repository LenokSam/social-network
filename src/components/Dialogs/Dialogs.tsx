import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {Dialog, DialogItemType} from './Dialog/Dialog';
import {MessagesDataType} from '../../redux/stateType';

type DialogsType={
  messages:MessagesDataType
}

export const Dialogs:React.FC<DialogsType>= ({messages}) => {

  const [dialogs, setDialogs] = useState<Array<DialogItemType>>(messages.dialogs)
  const dialogsRender = dialogs.map(d => <Dialog dialog={d} key={d.id}/>)
  return (
    <div>
      {dialogsRender}
    </div>
  );
};

