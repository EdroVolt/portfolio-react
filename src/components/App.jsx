import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./app.css";
import Header from "./Header/Header";
import FloatingButton from "./FloatingButton/FloatingButton";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <FloatingButton />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
