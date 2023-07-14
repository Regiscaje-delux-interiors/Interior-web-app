import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
