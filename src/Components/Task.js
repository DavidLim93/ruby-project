import React from "react";
import Checkbox from "./Checkbox";


function Task(props, {onDeleteTask, onUpdateTask, addTask}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/tasks/${props.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
    }})
        .then((r) => r.json())
        .then(() => onDeleteTask(props))
        }
    
    function handleUpdateClick () {
        fetch(`http://localhost:9292/tasks/${props.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addTask)
        })
        .then((r) => r.json())
        .then((updatedTask) => onUpdateTask(updatedTask))
        }
    

    return (

        <div className="tasks">
            <h4 className="h4">Task: {props.name}</h4>
            <p><strong>Description: </strong>{props.description}</p>
            <p><strong>Priority: </strong>{props.priority}</p>
            <p><strong>Complete by: </strong>{props.deadline}</p>
            <Checkbox label="Completed?"/>
            <button onClick={handleUpdateClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Task;