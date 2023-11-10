import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Housing from "../pages/Housing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/housing/:id" element={<Housing />}></Route>
        {/* path="*" si l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
