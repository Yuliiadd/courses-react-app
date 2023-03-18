import { useState, useEffect } from "react";
import "./App.css";
import { requestOptions, TOKEN_URL, COURSES_URL } from "./API/fetchData";
import MainPage from "./components/main-page/MainPage";
import Header from "./components/main-page/Header";
import CoursePage from "./components/course-page/CoursePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [courses, setCourses] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    async function getData() {
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

          fetch(COURSES_URL, requestOptionsCourses)
            .then((response) => response.json())
            .then((result) => {
              // console.log(result.courses);
              setCourses(result.courses);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainPage
                totalPosts={courses?.length}
                courses={courses?.slice(firstPostIndex, lastPostIndex)}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setCurrentCourse={setCurrentCourse}
              ></MainPage>
            }
          ></Route>
          <Route
            exact
            path="/course"
            element={<CoursePage currentCourse={currentCourse}></CoursePage>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
