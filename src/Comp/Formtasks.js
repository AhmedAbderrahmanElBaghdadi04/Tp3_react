import React, { useState } from 'react'
import Task from './Task'
import {v4 as uuidv4} from 'uuid'


export default function Formtasks() {

    const [tasks,setTasks]=useState([
        {id:uuidv4(),nom:'Watch a movie'},
        {id:uuidv4(),nom:'Play football'},
        {id:uuidv4(),nom:'Coding ReactJs'}
    ])


    const editTask = (id, updatedTask) => {
        const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, nom: updatedTask } : t));
        setTasks(updatedTasks);
      };



const [task,setTask]=useState('');

const addTask=()=>{
    let ntasks=[...tasks];
    let ntask = {};
    ntask.id=uuidv4()
    ntask.nom = task;
    ntasks.push(ntask);
    setTasks(ntasks);
    setTask('');
}


const deleteTask=(idp)=>{
    let ntasks = tasks.filter((t)=>{
        return t.id != idp
    })
    setTasks(ntasks);

}


  return (
    <div className='container' >
      <h1>   What is the plan   </h1>
      <form className='todo_form'> 
        

<input className='todo_input' type="text" placeholder='Add an item ...' onChange={(e)=>{setTask(e.target.value)}}/>  
 <input className='todo_button' type="button" value="Add" onClick={addTask} />



      </form>
      <br /><br />
<ul>
{tasks.map((t)=>{
    
    
    return <li key={t.id} className='todo_row'>
        <Task  delf={(id)=>deleteTask(t.id)}  txt={t.nom} editTask={(updatedTask) => editTask(t.id, updatedTask)}  /></li> 
})}

</ul>
    </div>
  )
}
