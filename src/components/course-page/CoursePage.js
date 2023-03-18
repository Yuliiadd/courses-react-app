import React from "react";
import "./CoursePage.css";
import { Link } from "react-router-dom";
import LessonPreview from "./LessonPreview/LessonPreview";

function CoursePage({ currentCourse }) {
  if (currentCourse) {
    return (
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span> ← Back to courses</span>
        </Link>
        <section className="course-container">
          <article className="video-course">
            <h2>{"CURRENT COURSE: " + currentCourse.title}</h2>
            <div className="video">
              <video width="1280" height="720" controls>
                <source
                  src={currentCourse.lessons[0].link}
                  type={currentCourse.lessons[0].type}
                ></source>
              </video>
            </div>
            <h2>{"Lesson " + currentCourse.lessons[0].order}</h2>
            <h2>{currentCourse.lessons[0].title}</h2>
            <h4>{currentCourse.lessons[0].description}</h4>
          </article>
          <article className="course-video-list">
            {currentCourse.lessons.map((lesson) => (
              <LessonPreview lesson={lesson} key={lesson.id}></LessonPreview>
            ))}
          </article>
        </section>
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span> ← Back to courses</span>
        </Link>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default CoursePage;
