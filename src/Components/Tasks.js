import React from "react";

function Tasks(props) {

    return (

    <div className="tasks" key={props.id}>
            <p><strong>Task: </strong>{props.task}</p>
            <p><strong>Importance: </strong>{props.importance}!</p> 
            <p><strong>Complete by: </strong>{props.complete_by}</p>
    </div>
    )
}

export default Tasks;