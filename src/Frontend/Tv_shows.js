import React from "react";
import { Link } from "react-router-dom";

function Tv_shows(props) {
  return (
    <Link to={`/${props.id}`} className="item">
      <img src={require(`./common/images/${props.id}.jpg`)} alt={props.name} />
      <div className="overlay">
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}

export default Tv_shows;
