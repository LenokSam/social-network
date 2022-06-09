import React, {useState} from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';
import Icon, {IconType} from './icons/NavIcon';




export type ActiveLinkType = 'profile' | 'messages' |'music' |'news' |'settings'

export const NavBar = () => {

  const [activeNav, setActiveNav] = useState<ActiveLinkType>('profile' )


  return (
    <div className={s.wrapper}>
      <div>


        <NavBarLink logo={'profile'} name={'Profile'} path={'profile'} active={activeNav} setActiveNav={setActiveNav} />
        <NavBarLink logo={'messages'} name={'Messages'} path={'messages'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={'music'} name={'Music'} path={'music'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={'news'} name={'News'} path={'news'} active={activeNav} setActiveNav={setActiveNav}/>
        <NavBarLink logo={'settings'} name={'Settings'} path={'settings'} active={activeNav} setActiveNav={setActiveNav}/>
      </div>
    </div>
  );
};

type NavBarLinkPropsType = {
  logo: ActiveLinkType
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
      <Icon id={logo} active={isActiveLink}/>
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

