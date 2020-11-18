import React, { useContext, useEffect, useState } from "react";
import TaskItem from "../tasks/TaskItem";
import TopNavBarHome from "../NavigationBar/TopNavBarHome";
import "../../css/Home.css";
import { Context as UserContext } from "../../context/store/UserStore";
import { Context as TaskContext } from "../../context/store/TaskStore";

const Home = () => {
  const { getUserInfo } = useContext(UserContext);
  const [taskState] = useContext(TaskContext);
  // useEffect(() => {
  //   getUserInfo();
  // }, []);
  const taskList = taskState.tasks.map((task, i) => {
    return !task.comppleted && <TaskItem task={task} key={i} />;
  });
  return (
    <>
      <TopNavBarHome />
      <section style={{ margin: "20px 120px" }}>
        <div
          className="home-container"
          style={{ width: "900px", margin: "0 auto" }}
        >
          {/* <div className="home-welcome-header">Welcome [name]!</div> */}
          <div className="home-tasks-container">
            <div className="home-tasks-header">
              <h2>Tasks Due Soon</h2>
              <p>See all my tasks</p>
            </div>
            <ul className="home-tasks--list">
              {/* call get all tasks for specific user route */}
              {taskList}
            </ul>
          </div>
          <div className="home-projects-container">
            <div className="home-projects-header">
              <h2>Projects</h2>
            </div>
            <ul className="home-projects--list">
              {/* call get all projects for specific user route */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
