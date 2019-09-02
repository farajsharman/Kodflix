import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import getGallery from "../gallery-get.js";
// import "./Details.css";
export default function Details({ match }) {
  const [show, setShow] = useState({}); 

  useEffect(() => {
    fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                let showId = match.params.showId;
                let show = shows.find(show => show.id === showId);
                setShow( show );
    });
  }, []);
    
    // let tvshowtitle = getGallery().find(function (tvshow) {
    //   return tvshow.id === tvshowid;
    // }),name;
  //   tvShow
  //     ? this.setState({
  //         title: tvShow.name,
  //         details: tvShow.details,
  //         cover: tvShow.cover
  //       })
  //     : this.setState({ title: undefined });

    if (show === undefined) {
      return <Redirect to="/not-found" />;
    } else if (show === {}) {
      return <div />;
    }
      return (
        <div className="Details">
          <h1>{show.title}</h1>
          <div className="container">
            <div className="text">{show.synopsis}</div>
            <img
              className="image"
              src={require('./common/images/${show.title}.jpg')}
              alt={show.title}
            />
          </div>
          <Link to="/">Back to home page</Link>
        </div>
      );
  }