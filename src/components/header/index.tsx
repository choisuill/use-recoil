import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import combineClassNames from 'utils/combineClasName';
import sidenav from '@recoil/sidenav-atom';
import Hamburger from './hamburger';
import styles from './index.module.scss';

const Header: React.FC = () => {
  const [isActiveSidenav] = useRecoilState(sidenav);

  return (
    <header className={combineClassNames(styles.wrapper, isActiveSidenav ? styles.fake : '')}>
      <Hamburger />
      <div className={styles['nav-wrapper']}>
        <nav>
          <Link to="/">블로그</Link>
          <Link to="/portfolio">포트폴리오</Link>
          <Link to="/design-system">디자인 시스템</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
