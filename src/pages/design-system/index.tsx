import DesignSystemTemplate from 'template/design-system';
import Header from '@components/header';
import Sidenav from '@components/sidenav';

const DesignSystem = () => {
  return (
    <>
      <Header />
      <Sidenav />
      <DesignSystemTemplate />
    </>
  );
};

export default DesignSystem;
