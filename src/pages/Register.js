// *** Dependencies**
import axios from "axios";
import Cookies from "js-cookie";
// ** Hooks **
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const { bearerPresent, setBearerPresent } = props;
  const [newsletter, setNewsletter] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://marvel-students.herokuapp.com/signup",
        {
          name: name,
          email: email,
          password: password,
          // newsletter: newsletter,
        }
      );

      const token = await response.data.token;

      Cookies.set("bearerToken", token, { expires: 360 });

      setBearerPresent(!bearerPresent);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte !");
      }
      console.log(error.response.status);
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
            value={name}
            type="text"
            onChange={(event) => setName(event.target.value)}
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
