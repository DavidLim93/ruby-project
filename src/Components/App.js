import './App.css';
import React from "react";
import Header from "./Header";
import TaskContainer from './TaskContainer';
// import TaskForm from './TaskForm';


function App({todo, setTodo}) {

  // function handleNewTask (newTodo) {
  //   const updatedTask = [...todo, newTodo];
  //   setTodo(updatedTask)
  // }

  return (
    <div className="app">
  <Header />
  {/* <TaskForm onNewTask={handleNewTask}/> */}
  <TaskContainer />
  </div>
  );
}

export default App;
