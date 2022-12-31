import { atom } from 'recoil';

const sidenav = atom({
  key: 'sidenav',
  default: true,
});

export default sidenav;
