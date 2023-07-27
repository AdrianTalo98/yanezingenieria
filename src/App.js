import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Client from "./components/Client/Client";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Form from "./components/Form/Form";
import Somos from "./components/Somos/Somos";
import Proyectos from "./components/Proyectos/Proyectos";
import WhatsApp from "./components/Whatsapp/Whatsapp";
import Scroll from "./components/Scroll/Scroll";



function App() {

  return (
    <>
      <NavBar/>
      <Scroll/>
      <WhatsApp/>
      <Somos/>
      <Services/>
      <Client/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
