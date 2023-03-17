import React from "react";
import "./CoursePage.css";
import { Link } from "react-router-dom";

function CoursePage(props) {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <span> ← Back to courses</span>
      </Link>
      <section className="course-container">
        <article className="video-course">
          <div className="video"></div>
        </article>
        <article className="course-video-list"></article>
      </section>
    </div>
  );
}

export default CoursePage;
