import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Logo from '../logo';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <div>
        <Logo />
      </div>
      <Link to="/">Home</Link>
      <Link to="/mypage">Mypage</Link>
    </header>
  );
};

export default Header;
