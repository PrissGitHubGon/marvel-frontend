import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./paginate.css"
function Characters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const characters = await data.find().limit(100).skip(0);
        const response = await axios.get(
          // `https://marvel-students.herokuapp.com/characters?&page=${characters}`
          `https://marvel-students.herokuapp.com/characters?page=${page}`,
          {
            name: input,
          }
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, input]); //<- mettre page dans le tableau pour la pagination

  return isLoading === true ? (
    <span className="loader" style={{ marginBottom: "430px" }}>
      Load&nbsp;ng
    </span>
  ) : (
    <div className="characters-container">
      <div className="search">
        <input
          className="text"
          type="text"
          placeholder="Your Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Link to="" className="btn">
          <i class="fa fa-search "></i>
        </Link>
      </div>
      <div></div>
      {data.results.slice(0, 99).map((character) => {
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
                  src="../assets/img/Marvel-Wallpaper-HD-41300.jpg  "
                  alt=""
                  className="characters-img"
                />
              )}
            </Link>
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
              </div>
            </div>
          </div>
        );
      })}
      <div className="paginate">
        {" "}
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
      <a href="#">
        <i
          class="fa fa-3x fa-arrow-circle-up"
          style={{ marginLeft: "10%", textDecoration: "none", color: "black" }}
        ></i>
      </a>
    </div>
  );
}

export default Characters;
