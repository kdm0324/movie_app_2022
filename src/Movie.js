import React from "react";
import PropTypes from "prop-types";
import "./style.css";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movieCard">
      <div>
        <img src={poster} alt={title} title={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <h6>{summary}</h6>
      </div>
    </div>
  );
}

export default Movie;
