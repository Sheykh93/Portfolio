import Footer from "../../components/footer/Footer";
import MainLayout from "../../layout/mainLayout/MainLayout";
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <MainLayout />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
