import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Err } from "./pages/Err";
import { Footer } from "./component/Footer";
import { Nav } from "./component/Nav";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Err />} />
      </Routes>
      <Footer />
    </div>
  );
};
