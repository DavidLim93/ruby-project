import React, {useState} from "react";

function TaskEditor({todoDetails, setEditMode, handleUpdateTask}) {

    const {todo, importance, complete_by} = todoDetails || {}

    const [todoData, setTodoData] = useState({
        todo: todo,
        importance: importance,
        complete_by: complete_by
    })

    function handleOnChange(e) {
        setTodoData({
            ...todoData,
            [e.target.todo]: e.target.value
        })
    }

    function handleOnSubmit(e) {
        e.preventdefault()
        const updatedTodo = {
            ...todoDetails,
            todo: todoData.todo,
            importance: todoData.importance,
            complete_by: todoData.complete_by
        }
        handleUpdateTask(updatedTodo)
        setEditMode(false)
    }

    function handleCancelOnClick() {
        setEditMode(false)
    }

    return (
        <form className="note-editor" onSubmit={handleOnSubmit}>
      <textarea type="text" name="todo" value={todoData.todo} onChange={handleOnChange} />
      <input type="text" name="importance" value={todoData.importance} onChange={handleOnChange} />
      <input type="text" name="complete_by" value={todoData.complete_by} onChange={handleOnChange} />
 
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancelOnClick}>Cancel</button>
      </div>
    </form>
  );
}

export default TaskEditor;