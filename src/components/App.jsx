import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./app.css";
import Header from "./Header/Header";
import FloatingButton from "./FloatingButton/FloatingButton";

function App() {
  return (
    <div className="app">
      <Header />
      <FloatingButton />
    </div>
  );
}

export default App;
