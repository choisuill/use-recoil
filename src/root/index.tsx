import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default App;
