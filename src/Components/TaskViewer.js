import React from "react";

function TaskViewer({todo, todoDetails, setEditMode, onDeleteTask}) {

    const {task, importance, complete_by} = todoDetails

    function handleSetEditModeClick() {
        setEditMode(editMode => !editMode)
    }

    function handleDeleteTask() {

                fetch(`http://localhost:9292/todos/${todo.id}`, {
                   method: "DELETE",
            })
            .then((r) => r.json())
            .then(() => onDeleteTask(todo))
        }
        
     

    return (
        <>
        <h4>{task}</h4>
        <p>{importance}</p>
        <span>{complete_by}</span>
        <br /><button onclick={handleSetEditModeClick}>Edit</button>
        <br /><button onclick={handleDeleteTask} className="button">Delete</button>  
        </>
    )
}

export default TaskViewer;