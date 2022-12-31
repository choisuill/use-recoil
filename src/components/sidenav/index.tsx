import { Link } from 'react-router-dom';
import Logo from '@components/logo';
import styles from './index.module.scss';

const Sidenav: React.FC = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav>
        <Link to='/'>블로그</Link>
        <Link to='/portfolio'>포트폴리오</Link>
        <Link to='/design-system'>디자인 시스템</Link>
      </nav>
    </aside>
  );
};

export default Sidenav;
