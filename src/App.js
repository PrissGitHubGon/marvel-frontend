import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";

import CharactersId from "./pages/Characters-id";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Comics />} />

          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
