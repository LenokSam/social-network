import React from 'react';
import s from './NavBar.module.css'
import {FaRegUserCircle} from 'react-icons/fa';
import user from './icons/user.svg'
import message from './icons/message.svg'
import music from './icons/music.svg'
import settings from './icons/settings.svg'
import news from './icons/news.svg'
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {


  return (
    <div className={s.wrapper}>
        <div>
          <NavBarLink logo={user} name={'Profile'} path={'profile'}/>
          <NavBarLink logo={message} name={'Messages'} path={'messages'}/>
          <NavBarLink logo={music} name={'Music'} path={'music'}/>
          <NavBarLink logo={news} name={'News'} path={'news'}/>
          <NavBarLink logo={settings} name={'Settings'} path={'settings'}/>
        </div>
    </div>
  );
};

type NavBarLinkPropsType ={
  logo:string
  name: string
  path:string
}

export const NavBarLink: React.FC<NavBarLinkPropsType>= ({logo, name, path}) => {
  return (
    <div  className={s.nav__item}>
      <img src={logo} alt={name} className={s.nav__logo}/>
      <NavLink to={`/${path}`} className={s.nav__name}>{name}</NavLink>
    </div>
  );
};

