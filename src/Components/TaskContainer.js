import React, {useEffect, useState} from "react";
import Task from "./Task"

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


    return (
        <div className="container">
            {
            task.map((task) => {
                return <Task
                key={task.id}
                name={task.name}
                description={task.description}
                priority={task.priority}
                deadline={task.deadline}
                    />
        })}
        </div>

    )

}

export default TaskContainer;