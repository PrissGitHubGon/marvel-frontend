import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function CharactersId() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-students.herokuapp.com/character/${params.characterId}`
        );
        console.log(params.characterId);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.characterId]);

  return isLoading === true ? (
    <span className="loader">Load&nbsp;ng</span>
  ) : (
    <div className="caracterId-container" key={params.characterId}>
      <div className="caracterId-name">
        <p>{data.name}</p>
      </div>
      <div className="caracterId-description">
        <div className="caracterId-img-container">
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt=""
            className="caracterId-img"
          />
        </div>
        <div className="caracterId-comics">
          <ul className="detail">
            {data.comics.map((comic, index) => {
              return <li key={index}> {comic.title}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="paginate">
        {" "}
        <button
          onClick={() => navigate("/characters")}
          style={{
            marginLeft: "30px",
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default CharactersId;
