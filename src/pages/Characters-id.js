import { Link, useParams } from "react-router-dom";
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
      //   const id = params.characterId;
      try {
        const response = await axios.get(
          `https://marvel-students.herokuapp.com/comics/${params.characterId}`
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
    <div>En cours de chargement...</div>
  ) : (
    <div className="" key={params.characterId}>
      coucou
    </div>
  );
}

export default CharactersId;
