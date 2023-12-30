import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDemo from "./components/CardDemo";
import CardDetails from "./components/CardDetails";
import Login from "./components/Login";
import Home from "./pages/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-info" element={<CardDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card-details/:name" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
