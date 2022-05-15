import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (event) => {
    try {
      event.preventDefault();

      setErrorMessage("");

      const response = await axios.post("http://localhost:3001/user/register", {
        //fonctionne en local , les users se créer en BDD
        email: email,
        username: username,
        password: password,
        newsletter: newsletter,
      });

      if (response.data) {
        console.log("Compte créé");
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte !");
      }
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSignup} className="form">
          <h1>Inscription</h1>

          <span>Name</span>
          <input
            placeholder="Enter your username"
            value={username}
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <span>Email</span>
          <input
            value={email}
            type="email"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Password</span>
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="checkbox_container">
            <div>
              <input
                className="checkbox"
                value={newsletter}
                type="checkbox"
                placeholder="password"
                onChange={(event) => setNewsletter(event.target.checked)}
              />
              <span>S'inscrire à notre newsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Marvel.
            </p>
          </div>
          <div className="register-btn">
            <input type="submit" value="S'inscrire" />
          </div>
        </form>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </div>
  );
}

export default Register;
