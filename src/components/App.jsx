import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./app.css";
import Header from "./Header/Header";
import FloatingButton from "./FloatingButton/FloatingButton";
import About from "./About/About";

function App() {
  return (
    <div className="app">
      <Header />
      <FloatingButton />
      <About />
    </div>
  );
}

export default App;
