/***************Package*****************/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
/****************Style******************/
import "./App.css";
/**************Component****************/
import Header from "./components/Header";
/***************Pages*******************/
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersId from "./pages/Characters-id";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };
  return (
    <Router>
      <div className="App">
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Comics />} />
          <Route
            path="/user/register"
            element={<Register setUser={setUser} />}
          />
          <Route path="/user/login" element={<Login setUser={setUser} />} />

          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
