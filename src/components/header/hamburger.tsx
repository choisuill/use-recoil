import { ReactComponent as HamburgerIcon } from '@assets/icons/hamburger.svg';
import { ReactComponent as CloseIcon } from '@assets/icons/double-stroke-arrow-left.svg';
import { useRecoilState } from 'recoil';
import sidenav from '@recoil/sidenav-atom';

const Hamburger: React.FC = () => {
  const [isActiveSidenav, setisActiveSidenav] = useRecoilState(sidenav);

  const toggleSidenav = () => {
    setisActiveSidenav(!isActiveSidenav);
  };

  if (isActiveSidenav) return <CloseIcon onClick={toggleSidenav} />;

  return <HamburgerIcon onClick={toggleSidenav} />;
};

export default Hamburger;
