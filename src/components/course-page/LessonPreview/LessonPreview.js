import React from "react";
import "./LessonPreview.css";

function LessonPreview({ lesson }) {
  return (
    <div className="lesson-preview-wrapper">
      <img
        className="lesson-preview-img"
        src={lesson.previewImageLink + "/lesson-" + lesson.order + ".webp"}
        alt=""
      ></img>
      <h5>
        {"Lesson " + lesson.order + ". "}
        {lesson.title}
      </h5>
    </div>
  );
}

export default LessonPreview;
