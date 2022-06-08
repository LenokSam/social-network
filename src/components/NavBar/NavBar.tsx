import React, {useState} from 'react';
import s from './NavBar.module.css'
import user from './icons/user.svg'
import message from './icons/message.svg'
import music from './icons/music.svg'
import settings from './icons/settings.svg'
import news from './icons/news.svg'
import {NavLink} from 'react-router-dom';

export type ActiveLinkType = 'profile' | 'messages' |'music' |'news' |'settings'

export const NavBar = () => {

  const [activeNav, setActiveNav] = useState<ActiveLinkType>('profile' )


  return (
    <div className={s.wrapper}>
      <div>
        <NavBarLink logo={user} name={'Profile'} path={'profile'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={message} name={'Messages'} path={'messages'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={music} name={'Music'} path={'music'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={news} name={'News'} path={'news'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={settings} name={'Settings'} path={'settings'} active={activeNav} setActiveNav={setActiveNav}/>
      </div>
    </div>
  );
};

type NavBarLinkPropsType = {
  logo: string
  name: string
  path: ActiveLinkType
  active: ActiveLinkType
  setActiveNav: (active: ActiveLinkType) => void

}

export const NavBarLink: React.FC<NavBarLinkPropsType> = (
  {logo, name, path, setActiveNav, active}
   ) => {

  let isActiveLink = active === path
  let classItem=isActiveLink ? `${s.nav__item} ${s.active}`:s.nav__item
  let classLink = isActiveLink ? s.nav__name : `${s.nav__name} ${s.active__title}`
  return (
    <div className={classItem}>
      <img src={logo} alt={name} className={s.nav__logo}/>
      <NavLink
        to={`/${path}`}
        className={classLink}
        onClick={()=>setActiveNav(path)}
      >
        {name}
      </NavLink>
    </div>
  );
};

