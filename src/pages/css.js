// rfc to speed
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>
      <Helmet>
        <title>React - Css</title>
        <meta name="description" content="my css file" />
      </Helmet>
      <Header />
      <MainContent name="Css Page" />
      <Footer />
    </>
  );
};

export default Css;