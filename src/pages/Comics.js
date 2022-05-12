import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Paginate from "../components/Paginate";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://marvel-students.herokuapp.com/comics?&page=${page}`
          `https://marvel-students.herokuapp.com/comics`
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
  // let numberOfPages = Math.floor(data.count / 100);
  // data.count % 100 > 0 && numberOfPages++;
  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="comics-container">
      {data.results.map((comics) => {
        const id = comics._id;
        const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg"; // afin d'afficher l'image de l'api qui n'a qu'une clé path et clé extension(https://developer.marvel.com/documentation/images) , Je stock dans la variable imagePath la clé thumbnail avec sa clé path puis je lui rajoute l'extension proposé sur le site
        console.log(comics.thumbnail);
        return (
          <div key={comics._id} className="comics-cards">
            <Link to={`/comics/${id}`}>
              <img src={imagePath} alt="" className="comics-img" />
            </Link>
            <div className="comics-cards-desc">
              <div className="comics-card-title">
                <p>{comics.title}</p>
              </div>
              <div className="comics-card-description">
                <p>{comics.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comics;
