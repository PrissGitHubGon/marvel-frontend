import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
function CharactersId() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      // const id = params.characterId;
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
  const imagePath = data.thumbnail.path + "/portrait_uncanny.jpg";
  return isLoading === true ? (
    <span className="loader">Load&nbsp;ng</span>
  ) : (
    <div className="caracterId-container" key={params.characterId}>
      <div className="caracterId-name">
        {/* <p>{data.name}</p> */}
        <button
          onClick={() => {
            console.log(data.name);
          }}
        >
          bouton
        </button>
      </div>
      <div className="cache-description">
        <div className="caracterId-img">
          <img src={imagePath} alt="" />
        </div>
        <div className="caracterId-comics">
          <ul className="detail">
            {data.comics.map((comic, index) => {
              return <li key={index}> {comic.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharactersId;
