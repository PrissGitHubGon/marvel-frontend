import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  // const tab = [];
  // for (let i = 0; i < data.length; i++) {
  //   // console.log(data[i].keywords);
  //   if (data[i].results.indexOf(input) !== -1) {
  //     if (tab.length < 20) {
  //       tab.push(<p key={data[i].title}>{data[i].title}</p>);
  //       console.log(data[i]);
  //     }
  //   }
  // }
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
    <span className="loader">Load&nbsp;ng</span>
  ) : (
    <div>
      <div className="search">
        <input
          className="text"
          type="text"
          placeholder="Your Search"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Link to="" className="btn">
          <i class="fa fa-search "></i>
        </Link>
      </div>

      <div className="comics-container">
        {data.results.map((comics) => {
          const imagePath = comics.thumbnail.path + "/portrait_uncanny.jpg"; // afin d'afficher l'image de l'api qui n'a qu'une clé path et clé extension(https://developer.marvel.com/documentation/images) , Je stock dans la variable imagePath la clé thumbnail avec sa clé path puis je lui rajoute l'extension proposé sur le site
          console.log(comics.thumbnail);
          return (
            <div key={comics._id} className="comics-cards">
              <img src={imagePath} alt="" className="comics-img" />

              <div className="comics-cards-desc">
                <div className="comics-card-title">
                  <p>{comics.title}</p>
                </div>
                <div className="comics-card-description">
                  <p>
                    {comics.description
                      ? comics.description
                      : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate sed doloribus, tenetur porro veniam numquam,pariatur sapiente eius eos fugit possimus omnis. "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comics;
