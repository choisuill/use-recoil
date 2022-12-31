import Sidenav from '@components/sidenav';
import Header from '@components/header';
import { useRecoilState } from 'recoil';
import sidenav from '@recoil/sidenav-atom';
import styles from './index.module.scss';

const HomeTemplate: React.FC = () => {
  const [isActiveSidenav] = useRecoilState(sidenav);

  return (
    <div className={styles.wrapper}>
      {isActiveSidenav && <Sidenav />}
      <div>
        <Header />
        {isActiveSidenav && <div className={styles.fake} />}
        <main>홈페이지
          <div>dsf</div>
          <div>df</div>
        </main>
      </div>
    </div>
  );
};

export default HomeTemplate;
