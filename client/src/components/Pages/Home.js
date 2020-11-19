import React, { useContext, useEffect, useState } from "react";
import TaskItem from "../tasks/TaskItem";
import TopNavBarHome from "../NavigationBar/TopNavBarHome";

import { Context as UserContext } from "../../context/store/UserStore";
import { Context as TaskContext } from "../../context/store/TaskStore";

const Home = () => {
  const [getUserInfo] = useContext(UserContext);
  const [taskState] = useContext(TaskContext);

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
              <div>
                <h2 style={{ color: "#151b26", fontWeight: 500 }}>
                  Tasks Due Soon
                </h2>
              </div>
              <div>
                <p>See all my tasks</p>
              </div>
            </div>
            <div className="home-tasks--list">
              {/* call get all tasks for specific user route */}
              {taskList}
            </div>
          </div>
          <div className="home-projects-container">
            <div className="home-projects-header">
              <h2 style={{ color: "#151b26", fontWeight: 500 }}>Projects</h2>
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
