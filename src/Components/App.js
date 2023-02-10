import './App.css';
import React from "react";
import Header from "./Header";
import TaskContainer from './TaskContainer';
import TaskForm from './TaskForm.js';
import Task from './Task';

function App({setTask}) {

  function handleAddTask(newTask) {
    setTask(...Task, newTask)
  }

  return (
    <div className="app">
  <Header />
  <TaskForm onAddTask={handleAddTask}/>
  <TaskContainer />
  </div>
  );
}

export default App;
