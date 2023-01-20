import React, {useState} from "react";
import Tasks from "./Tasks"

function TaskForm({setTodo}) {

   const [task, setTask] = useState("");
   const [importance, setImportance] = useState("");
   const [complete_by, setComplete_by] = useState("")


   function handleSubmit (e) {
       e.preventDefault();

       const addTasks = {
           "tasks": task,
           "importance": importance,
           "complete_by": complete_by
       };

       fetch("http://localhost:9292/todos", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(addTasks)})
             .then((r) => r.json())
             .then((newTask) => 
            //  console.log(...Tasks, newTask)
             setTodo([...Tasks, newTask])
                ) 
       }


   return (
       <div className="addTask">
       <h2 className="h2">Add New Task</h2>
       <form className="form" onSubmit={handleSubmit}>
       <input
         type="text"
         className="form"
         placeholder="Task"
         value={task}
         onChange={(e) => setTask(e.target.value)}
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
       <button type="submit" onSubmit={handleSubmit} className="button">Add Task</button>
        </form>
   </div>
   )
}

export default TaskForm;