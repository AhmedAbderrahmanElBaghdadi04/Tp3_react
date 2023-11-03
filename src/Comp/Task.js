import React, { useState } from 'react'

function Task({txt,delf,editTask}) {
    

    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(txt);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      editTask(editedTask);
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
      setEditedTask(txt);
    };
  return (
    <div>
         
  
    {isEditing ? (
      <div>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <button onClick={handleSave}>Sauvegarder</button>
        <button onClick={handleCancel}>Annuler</button>
      </div>
    ) : (
      <div>
        <input type="text" value={txt} readOnly className='todo_row' />
        <button onClick={handleEdit} className='icons'><center>Edit</center></button>
        <button onClick={delf} className='icons'>
          <center>Delete</center>
        </button>
      </div>
    )}
  </div>
);
}

export default Task
