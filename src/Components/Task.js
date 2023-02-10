import React from "react";
import Checkbox from "./Checkbox";


function Task(props) {


    return (

        <div className="tasks">
            <h4 className="h4">Task: {props.name}</h4>
            <p><strong>Description: </strong>{props.description}</p>
            <p><strong>Priority: </strong>{props.priority}</p>
            <p><strong>Complete by: </strong>{props.deadline}</p>
            <Checkbox label="Completed?"/>
        </div>
    )
}

export default Task;