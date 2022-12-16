import React from 'react';
import { useRecoilState } from 'recoil';
import sidenavState from '../../../recoil/sidenav-atom';

const Sidenav: React.FC = () => {
  const [active, setActive] = useRecoilState(sidenavState);

  const toggleSidenav = () => {
    setActive(!active);
  };

  return (
    <aside>
      <p>{active ? 'true' : 'false'}</p>
      <button type="button" onClick={toggleSidenav}>
        사이드네비 활성화
      </button>
    </aside>
  );
};

export default Sidenav;
