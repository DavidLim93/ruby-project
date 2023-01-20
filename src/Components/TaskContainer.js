import React, {useEffect, useState} from "react";
import Tasks from "./Tasks"
import TaskForm from "./TaskForm";

function TaskContainer() {

    const [todo, setTodo] = useState([]);
    const [editMode, setEditMode]= useState(null)
    const [todoDetails, setTodoDetails] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292")
        .then((r) => r.json())
        .then((task)=> {
            console.log(task)
            setTodo(task)
        })
    }, [])

const displayTask = todo.map((todo) => {
    return <Tasks
    key={todo.id}
    todo={todo.todo}
    importance={todo.importance}
    complete_by={todo.complete_by}
     />
})

function handleDeleteTask(deletedTask) {
    const updatedTasks = todo.filter((todo) => todo.id !== deletedTask.id);
    setTodo(updatedTasks)
}

function handleSetTodoDetails() {
    setTodoDetails(todo)
    setEditMode(false)
}

function handleUpdateTask(updatedTodo) {
    const updatedTodos = todo.map((todo) => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo
        } else {
            return todo
        }
    });
    setTodo(updatedTodos)
    fetch(`http://localhost:9292/todos/${todo.id}`, {
        method: "PATCH",
 })
 .then((r) => r.json())
 .then((updatedTodo) => updatedTodos(updatedTodo))
}

    return (
        <div className="container">
            <TaskForm />

        <Tasks 
        todo = {displayTask}
        onDeleteTask = {handleDeleteTask}
        onUpdateTask = {handleUpdateTask}
        todoDetails={todoDetails}
        editMode={editMode}
        handleSetTodoDetails={handleSetTodoDetails}
        />
        </div>
    )
}

export default TaskContainer;