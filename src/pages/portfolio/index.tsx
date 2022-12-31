import PortpolioTemplate from 'template/portfolio';
import Header from '@components/header';
import Sidenav from '@components/sidenav';

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <Sidenav />
      <PortpolioTemplate />
    </>
  );
};

export default Portfolio;
