import React from "react"
import TaskEditor from "./TaskEditor"
import TaskViewer from "./TaskViewer"

function EditButton ({editMode}) {
    const editContent = () => {
        if (editMode === false) {
            return  <TaskViewer />
        } else {
            <TaskEditor />
        }}

        return (
            <div>
                {editContent()}
            </div>
        )
}

export default EditButton;