import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/header';
import Sidenav from '../components/common/sidenav';
import styles from './index.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Sidenav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
