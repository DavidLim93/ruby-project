import React, {useState} from "react";
// import Task from "./Task";

function TaskForm({setTask, onAddTask}) {

    
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");


    function handleSubmit (e) {
        e.preventDefault();
 
        const addTask = { task: {
 
           "name": taskName,
           "description": taskDescription,
           "priority": taskPriority,
           "deadline": taskDeadline,
        }
        };

       
 
        fetch("http://localhost:9292/tasks", {
           method: "POST",
           headers: {
                "Content-Type": "application/json",
              },
           body: JSON.stringify({addTask}),
         })
              .then((r) => r.json())
              .then((newTask) => 
            //   console.log(...Task, newTask)
            // console.log(newTask),
            setTask(onAddTask(newTask)),
            setTaskName(""),
            setTaskDescription(""),
            setTaskPriority(""),
            setTaskDeadline("")
        )}

    return (
        <div className="addTask">
            <h2 className="h2">Add New Task</h2>
            <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form"
                placeholder="Task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="text"
                className="form"
                placeholder="Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
                <input
                type="text"
                className="form"
                placeholder="Priority"
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
            />
            <input
                type="text"
                className="form"
                placeholder="Complete By"
                value={taskDeadline}
                onChange={(e) => setTaskDeadline(e.target.value)}
            />
            <button type="submit" onSubmit={handleSubmit} className="button">Add Task</button>
                </form>
        </div>
            )
}

export default TaskForm;