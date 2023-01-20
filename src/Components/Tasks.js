import React from "react";
// import TaskEditor from "./TaskEditor";
import EditButton from "./EditButton";

function Tasks(props) {


    return (

        <div className="tasks">
            <h4 className="h4">Task: {props.todo}</h4>
            <p><strong>Importance: </strong>{props.importance}!</p>
            <span><strong>Complete by: </strong>{props.complete_by}</span>
            <EditButton />
            {/* <br /><button className="button">Delete</button>   */}
        </div>
    )
}

export default Tasks;