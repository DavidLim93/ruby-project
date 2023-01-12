import './App.css';
import React from "react";
import Header from "./Header";
import TaskContainer from './TaskContainer';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="app">
  <Header />
  <TaskForm />
  <TaskContainer />
  </div>
  );
}

export default App;
