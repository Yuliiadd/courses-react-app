import React from "react";
import "./CourseItem.css";
import { Link } from "react-router-dom";

function CourseItem({ course }) {
  const skills = course.meta.skills?.slice(0, 2).map((skill, index) => (
    <span className="skill" key={index}>
      {skill}
    </span>
  ));

  return (
    <Link to="/course" style={{ textDecoration: "none", color: "white" }}>
      <div className="course-item">
        <div className="course-preview">
          <img
            className="course-preview-img"
            src={course.previewImageLink + "/cover.webp"}
            alt=""
          ></img>
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-description">
          <p className="course-desc-text">{course.description}</p>
          <div className="course-skills">{skills}</div>
          <p>
            {course.lessonsCount} lessons, {Math.round(course.duration / 60)}{" "}
            hours{" "}
          </p>
          <p>Rating: {course.rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default CourseItem;
