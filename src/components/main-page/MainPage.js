import { React } from "react";
import "./MainPage.css";
import CourseItem from "./course-item/CourseItem";
import Pagination from "../Pagination";
import { TOKEN_URL, requestOptions, COURSES_URL } from "../../API/fetchData";

function MainPage({
  courses,
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  setCurrentCourse,
}) {
  async function fetchCourse(id) {
    setCurrentCourse(null);
    await fetch(TOKEN_URL, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const token = JSON.parse(result).token;
        const headers = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        const requestOptionsCourses = Object.assign(
          {},
          requestOptions,
          headers
        );

        fetch(COURSES_URL + "/" + id, requestOptionsCourses)
          .then((response) => response.json())
          .then((result) => {
            // console.log(result);
            setCurrentCourse(result);
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  }

  const courseItems = courses?.map((item) => (
    <CourseItem
      course={item}
      key={item.id}
      onClick={() => fetchCourse(item.id)}
    ></CourseItem>
  ));

  return (
    <div className="container">
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
      <div className="courses-list">{courseItems}</div>
    </div>
  );
}

export default MainPage;
