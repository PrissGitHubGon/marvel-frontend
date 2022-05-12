import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
// import Comicsid from "./pages/Comics-id";
import CharactersId from "./pages/Characters-id";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Comics />} />
          {/* <Route path="/comics/:comicsId" element={<Comicsid />} /> */}
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
