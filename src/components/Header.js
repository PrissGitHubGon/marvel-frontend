import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ token, setUser }) {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <Link to="/">
        <div className="header-logo-size">
          <svg
            enable-background="new -215.19 -86.608 1000 402.473"
            height="402.473"
            viewBox="-215.19 -86.608 1000 402.473"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m-215.19-86.608h1000v402.473h-1000z" fill="#ed1d24" />
            <path
              d="m631.063 7.184v-61.603h-171.419l-28.191 205.803-27.896-205.802h-61.817l6.925 54.915c-7.14-14.068-32.449-54.915-88.146-54.915-.367-.024-61.901 0-61.901 0l-.237 299.974-45.057-299.974-80.959-.047-46.612 310.814.024-310.769h-77.483l-27.933 174.585-27.208-174.583h-77.508v337.906h61.036v-162.87l27.764 162.866h32.449l27.374-162.866v162.866h117.667l7.14-51.995h47.374l7.116 51.995 115.521.071h.094v-.071h.072.072v-109.685l14.162-2.063 29.319 111.819h.072 59.61.07l-.024-.071h.106.072l-38.475-131.057c19.498-14.422 41.513-51.047 35.654-86.084v-.023c.07.474 36.316 217.38 36.316 217.38l71.065-.216 48.559-306.284v306.285h115.236v-60.773h-54.7v-77.496h54.7v-61.698h-54.7v-76.334zm-534.798 170.721 16.758-144.461 17.4 144.461zm177.419-66.704c-4.697 2.278-9.595 3.417-14.363 3.417v-108.691c.083 0 .179-.022.297-.022 4.78-.024 40.419 1.446 40.419 53.774 0 27.373-12.121 44.62-26.353 51.522m480.36 111.464v60.772h-112.414v-337.902h60.526v277.13z"
              fill="#fff"
            />
          </svg>
        </div>
      </Link>
      <div className="header-menu-perso">
        <button
          className="font-size"
          onClick={() => {
            navigate("/characters");
          }}
        >
          Personnages
        </button>
        <button
          className="font-size"
          onClick={() => {
            navigate("/");
          }}
        >
          Comics
        </button>
        {token === null ? (
          <>
            {" "}
            <button
              className="font-size"
              onClick={() => {
                navigate("/login");
              }}
            >
              <i class="fas fa-user"></i>
            </button>
            <button
              className="font-size"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <i class="fas fa-user-edit"></i>
            </button>
          </>
        ) : (
          <>
            <button
              className="font-size"
              style={{ color: "rgba(128, 0, 0, 0.7)" }}
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              <i class="fas fa-user-times"></i>
            </button>
          </>
        )}

        <button className="heart-icon">
          <i class="fa-2x fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
