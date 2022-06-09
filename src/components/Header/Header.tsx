import React from 'react';
import s from './Header.module.css'
import {GiElephantHead} from 'react-icons/gi';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <Link to={'/'}>
        <GiElephantHead size={'40px'} className={s.logo}/>
      </Link>

      <span className={s.title}>Lenok production</span>
    </header>
  );
};

