import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Paginate from "../components/Paginate";

function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://marvel-students.herokuapp.com/characters?&page=${page}`
          `https://marvel-students.herokuapp.com/characters`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); //<- mettre page dans le tableau pour la pagination

  return isLoading === true ? (
    <span class="loader">Load&nbsp;ng</span>
  ) : (
    <div className="characters-container">
      {data.results.map((character) => {
        const id = character._id;
        const imagePath = character.thumbnail.path + "/portrait_uncanny.jpg";
        console.log(character.thumbnail);
        return (
          <div key={character._id} className="characters-cards">
            <Link to={`/character/${id}`}>
              {<img src={imagePath} alt="" className="characters-img" /> ? (
                <img src={imagePath} alt="" className="characters-img" />
              ) : (
                <img
                  src="../assets/img/deadpool-5783526_960_720.webp"
                  alt=""
                  className="characters-img"
                />
              )}
              {/* <img src={imagePath} alt="" className="comics-img" /> */}
            </Link>
            {/* <img src={imagePath} alt="" /> */}
            <div className="comics-cards-desc">
              <div className="characters-card-title">
                <p>{character.name}</p>
              </div>
              <div className="comics-card-description">
                <p>
                  {character.description
                    ? character.description
                    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "}
                </p>
                {/* <p>{characters.description}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
