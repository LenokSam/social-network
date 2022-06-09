import React from 'react';
import s from './Icon.module.css'
import {MessagesIcon, MusicIcon, NewsIcon, ProfileIcon, SettingIcon} from './ProfileIcon';

export type IconType = {
  id: string
  active: boolean
}

const Icon: React.FC<IconType> = ({id, active}) => {
  const className = active ? s.icon__active : s.icon

  switch (id) {
    case'profile':
      return (
        <ProfileIcon className={className}/>
      )
    case'messages':
      return (
        <MessagesIcon className={className}/>
      )
    case'music':
      return (
        <MusicIcon className={className}/>
      )
    case'news':
      return (
        <NewsIcon className={className}/>
      )
    case'settings':
      return (
        <SettingIcon className={className}/>
      )
    default:
      return (
        <div>

        </div>
      );
  }


};

export default Icon;