// rfc to speed
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>React - javascript</title>
        <meta name="description" content="javascript" />
      </Helmet>
      <Header />
      <MainContent name="Javascript Page" />
      <Footer />
    </>
  );
};

export default Javascript;
