import React from 'react';
import s from './Header.module.css'
import {GiElephantHead} from 'react-icons/gi';

export const Header = () => {
  return (
    <header className={s.header}>
      <GiElephantHead size={'40px'} className={s.logo}/>
      <span className={s.title}>Lenok production</span>
    </header>
  );
};

