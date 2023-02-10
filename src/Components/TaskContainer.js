import React, {useEffect, useState} from "react";
import Task from "./Task"

function TaskContainer() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292")
        .then((r) => r.json())
        .then((tasks)=> {
            // console.log(task)
            setTasks(tasks)
        })
    }, [])

    function handleUpdateTask(updatedTask) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
                return updatedTasks
            } else {
                return task
            }
        });
        setTasks(updatedTask)
    }


    function handleDeleteTask(deletedTask) {
        const updatedTasks = tasks.filter((task) => task.id !== deletedTask.id);
        setTasks(updatedTasks)
    }
    

    return (
        <div className="container">
            {
            tasks.map((task) => {
                return <Task
                key={task.id}
                name={task.name}
                description={task.description}
                priority={task.priority}
                deadline={task.deadline}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
                    />
        })}
     </div>

    )

}

export default TaskContainer;