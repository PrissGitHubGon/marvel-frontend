import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Comicsid({ imagePath }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      //   const id = params.characterId;
      try {
        const response = await axios.get(
          `https://marvel-students.herokuapp.com/comics/${params.comicsId}`
        );
        console.log(params.comicsId);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.comicsId]);
  return isLoading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="comics-id" key={params.comicsId}>
      <img src={imagePath} alt="" className="comics-img" />
      {/* <p>{}</p> */}
      coucou
      <button
        onClick={() => {
          console.log(data.title);
        }}
      >
        click
      </button>
    </div>
  );
}

export default Comicsid;
