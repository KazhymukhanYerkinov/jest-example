import React from "react";
import PropTypes from "prop-types";

const Example1 = ({ author, created_at, num_comments, title, points, url }) => (
  <li className="post">
    <div className="description">
      <a href={url} className="title">
        {title}
      </a>
      <span className="text">{`${points} points`}</span>
      <span className="comments">{`${num_comments} comments`}</span>
      <span className="date">
        {created_at ? new Date(created_at).toLocaleDateString() : "No date"}
      </span>
      <span className="author">{author}</span>
    </div>
  </li>
);

Example1.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string,
  num_comments: PropTypes.number,
  title: PropTypes.string,
  points: PropTypes.number,
  url: PropTypes.string,
};

Example1.defaultProps = {
  author: "Yauhen",
  created_at: "",
  num_comments: 0,
  title: "Here should be a title",
  points: 0,
  url: "#",
};

export default Example1;
