// rfc to speed
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';

const Home = () => {
  return (
    <>
      <Header />
      {/* name is variable use mainconten.js */}
      <MainContent name="Home Page" designer="Designed By Ahemd Ragep" />

      <Footer />
    </>
  );
};

export default Home;
