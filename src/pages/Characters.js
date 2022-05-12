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
    <div>En cours de chargement...</div>
  ) : (
    <div className="characters-container">
      {data.results.map((characters) => {
        const id = characters._id;
        const imagePath = characters.thumbnail.path + "/portrait_uncanny.jpg";
        console.log(characters.thumbnail);
        return (
          <div key={characters._id} className="characters-cards">
            <Link to={`/characters/${id}`}>
              <img src={imagePath} alt="" className="comics-img" />
            </Link>
            {/* <img src={imagePath} alt="" /> */}
            <div className="comics-cards-desc">
              <div className="characters-card-title">
                <p>{characters.name}</p>
              </div>
              <div className="comics-card-description">
                <p>{characters.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
