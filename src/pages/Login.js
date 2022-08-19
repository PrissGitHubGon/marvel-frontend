import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("https://marvel-students.herokuapp.com/login", {
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
