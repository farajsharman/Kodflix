import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getGallery from "./gallery-get.js";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    let tvShowId = this.props.match.params.showId;
    let tvShow = getGallery().find(function(tvshow) {
      return tvshow.id === tvShowId;
    });
    // let tvshowtitle = getGallery().find(function (tvshow) {
    //   return tvshow.id === tvshowid;
    // }),name;
    tvShow
      ? this.setState({ title: tvShow.name })
      : this.setState({ title: undefined });
  }

  render() {
    if (this.state.title === undefined) {
      return <Redirect to="/not-found" />;
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Link to="/">Back to home page</Link>
      </div>
    );
  }
}
