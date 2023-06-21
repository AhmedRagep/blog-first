// rfc to speed
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>React - html</title>
        <meta name="description" content="html" />
      </Helmet>
      <Header />
      <MainContent name="Html Page" />
      <Footer />
    </>
  );
};

export default Html;
