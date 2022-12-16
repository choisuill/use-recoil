import { atom } from 'recoil';

const sidenavState = atom({
  key: 'sidenavState',
  default: true,
});

export default sidenavState;
