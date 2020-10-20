import React from 'react';
import HeaderItem from './HeaderItem';
import '../css/Header.css';

export default function Header({ navList }) {
  return (
    <header>
      <ul className="HeaderList">
        <li className="HeaderItem">
          <a href="/">
            <img className="HeaderLogo" src={require('../images/logo.jpg')} alt=""></img>
          </a>
        </li>
        {navList.map((navItem, idx) => (
          <HeaderItem key={idx} navItem={navItem}></HeaderItem>
        ))}
      </ul>
    </header>
  );
}
