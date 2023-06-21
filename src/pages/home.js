// rfc to speed
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>React - home</title>
        <meta name="description" content="home" />
      </Helmet>
      <Header />
      {/* name is variable use mainconten.js */}
      <MainContent name="Home Page" designer="Designed By Ahemd Ragep" />

      <Footer />
    </>
  );
};

export default Home;
