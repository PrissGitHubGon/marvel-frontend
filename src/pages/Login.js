// ** Dependencies
import axios from "axios";
import Cookies from "js-cookie";
// ** Hooks **
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setBearerPresent, bearerPresent } = props;
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-students.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );
      const token = await response.data.token;

      Cookies.set("bearerToken", token, { expires: 360 });

      setBearerPresent(!bearerPresent);
      navigate("/");
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
