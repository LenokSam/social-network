import React from 'react';
import s from './Dialog.module.css'

export type DialogItemType ={
  id:string
  name:string
  text:string
  avatar: string
  login:string
}

export type DialogType ={
  dialog:DialogItemType
}
export const Dialog:React.FC<DialogType> = ({dialog}) => {
  const {name, text, avatar, login} = dialog
  const nameToRender=name.length>10 ? name.slice(0,10).trim() + '...' : name
  return (
    <div className={s.dialog}>

      <div className={s.owner}>
        <img src={avatar} alt={name} className={s.avatar}/>
        <span className={s.name}>{nameToRender}</span>
        <span className={s.login}>@{login}</span>
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

