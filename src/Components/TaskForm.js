import React, {useState} from "react";
import Tasks from "./Tasks"

function TaskForm({setTask}) {

   const [tasks, setTasks] = useState("");
   const [importance, setImportance] = useState("");
   const [complete_by, setComplete_by] = useState("")


   function handleSubmit (e) {
       e.preventDefault();

       const addTasks = {
           "tasks": tasks,
           "importance": importance,
           "complete_by": complete_by
       };

       fetch("http://localhost:9292", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(addTasks)})
             .then((r) => r.json())
             .then((newTask) => setTask([...Tasks, newTask])) 
       }


   return (
       <div className="addTask">
       <h2 className="h2">Add New Task</h2>
       <form className="form" onSubmit={handleSubmit}>
       <input
         type="text"
         className="form"
         placeholder="Task"
         value={tasks}
         onChange={(e) => setTasks(e.target.value)}
       />
        <input
         type="text"
         className="form"
         placeholder="Importance"
         value={importance}
         onChange={(e) => setImportance(e.target.value)}
       />
       <input
         type="text"
         className="form"
         placeholder="Complete By"
         value={complete_by}
         onChange={(e) => setComplete_by(e.target.value)}
       />
       <button type="submit" onSubmit={handleSubmit}>Add Task</button>
        </form>
   </div>
   )
}

export default TaskForm;