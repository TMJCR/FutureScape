import React from 'react';
import HeaderItem from './HeaderItem';
import '../css/Header.css';

export default function Header({ navList }) {
  return (
    <header>
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="/">
            <img className="logo" src={require('../images/logo.jpg')} alt=""></img>
          </a>
        </li>
        {navList.map((navItem, idx) => (
          <HeaderItem key={idx} navItem={navItem}></HeaderItem>
        ))}
      </ul>
    </header>
  );
}
