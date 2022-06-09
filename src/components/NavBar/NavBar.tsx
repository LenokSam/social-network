import React, {useState} from 'react';
import s from './NavBar.module.css'
import user from './icons/user.svg'
import message from './icons/message.svg'
import music from './icons/music.svg'
import settings from './icons/settings.svg'
import news from './icons/news.svg'
import {NavLink} from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi'
import Icon, {IconType} from './icons/NavIcon';



const UserIcon = () => {
  return(
    <div className={s.icon} >
      <svg className={s.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/>
        <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"/>
        <path
          d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z"/>
      </svg>
    </div>
  )
}



export type ActiveLinkType = 'profile' | 'messages' |'music' |'news' |'settings'

export const NavBar = () => {

  const [activeNav, setActiveNav] = useState<ActiveLinkType>('profile' )


  return (
    <div className={s.wrapper}>
      <div>


        <NavBarLink logo={user} name={'Profile'} path={'profile'} active={activeNav} setActiveNav={setActiveNav} />
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
  {logo, name, path, setActiveNav, active, children}
   ) => {

  let isActiveLink = active === path
  let classItem=isActiveLink ? `${s.nav__item} ${s.active}`:s.nav__item
  let classLink = isActiveLink ? `${s.nav__name} ${s.active__title}` : s.nav__name
  return (
    <div className={classItem}>
      <Icon id={path} active={isActiveLink}/>
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

