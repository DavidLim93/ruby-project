import React, {useEffect, useState} from "react";
// import TasksList from "./TasksList";
import Tasks from "./Tasks"

function TaskContainer() {

    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292")
        .then((r) => r.json())
        .then((task)=> {
            console.log(task)
            setTask(task)
        })
    }, [])

    // const displayTask = task.filter((tasks) => {
    //     return tasks.task
    //     .toLowerCase()
    //     .trim()
    //     .replace(/[^a-zA-Z0-9 ]/g)
    // })
const displayTask = task.map((task) => {
    return <Tasks
    task={task.task}
    importance={task.importance}
    complete_by={task.complete_by}
     />
})

    return (
        <div className="container">
        <Tasks task={displayTask} />
        </div>
    )
}

export default TaskContainer;