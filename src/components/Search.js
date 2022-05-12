import React from "react";
import { Link } from "react-router-dom";

function Search() {
  //   return (

  //     <div className="search">

  //       <input type="text" name="" placeholder="Serach" class="text">
  //       <Link class="btn"><i class="fa fa-search "></i></Link>

  //     </div>

  //   );
  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <input
        className="text"
        type="text"
        placeholder="Your Search"
        // value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
      />
      <Link to="" className="btn">
        <i class="fa fa-search "></i>
      </Link>
      {/* <div>{tab}</div> */}
      {/* {tab.map((emoji) => {
        console.log(emoji); */}
      {/* //Ici le map n'est pas forcément très utile car le tableau de base est déjà utilisable comme je l'ai fait ligne 36,
        //On remarque d'ailleurs que j'ai besoin ici de la props children pour récupérer mes éléments */}
      {/* return (
          <p>
            {emoji.props.children[0]} / {emoji.props.children[2]}
          </p>
        );
      })} */}
    </div>
  );
}

export default Search;
