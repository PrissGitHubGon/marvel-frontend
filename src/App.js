/***************Package*****************/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
// ***************** Hooks *****************/
import { useEffect, useState } from "react";
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
  // const [actualFavCharacters, setActualFavCharacters] = useState([]);
  const [actualFavComics, setActualFavComics] = useState([]);

  const [bearerToken, setBearerToken] = useState("");
  const [bearerPresent, setBearerPresent] = useState(false);

  // useEffect(() => {
  //   const checkActualStorage = () => {
  //     const checkFavCharacters = localStorage.getItem("characters");
  //     const checkFavComics = localStorage.getItem("comics");

  //     let actualFavCharactersArray = [];
  //     if (checkFavCharacters) {
  //       actualFavCharactersArray = JSON.parse(checkFavCharacters);
  //     }

  //     let actualFavComicsArray = [];
  //     if (checkFavComics) {
  //       actualFavComicsArray = JSON.parse(checkFavComics);
  //     }

  //     setActualFavCharacters(actualFavCharactersArray);
  //     setActualFavComics(actualFavComicsArray);
  //   };
  //   checkActualStorage();
  // }, []);

  useEffect(() => {
    const tokenUser = Cookies.get("bearerToken");
    setBearerToken(tokenUser);
    // eslint-disable-next-line
  }, [bearerPresent]);
  return (
    <Router>
      <div className="App">
        <Header
          bearerToken={bearerToken}
          setBearerPresent={setBearerPresent}
          bearerPresent={bearerPresent}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Comics
                actualFavComics={actualFavComics}
                setActualFavComics={setActualFavComics}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                setBearerPresent={setBearerPresent}
                bearerPresent={bearerPresent}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setBearerPresent={setBearerPresent}
                bearerToken={bearerToken}
              />
            }
          />

          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharactersId />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
