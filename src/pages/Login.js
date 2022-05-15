import { useState } from "react";
// import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/user/login", {
        // récupère bien le mail et le token mais ne redirige pas la page. Message d'erreur : setUser is not a function
        email: email,
        password: password,
      });

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleLogin} className="form">
          <h1>Connexion</h1>

          <span>Email</span>
          <input
            value={email}
            placeholder="email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Password</span>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="register-btn ">
            <input type="submit" value="Se connecter" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
