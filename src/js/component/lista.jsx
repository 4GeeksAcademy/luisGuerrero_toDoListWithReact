import React from "react";
import { useState } from "react";
import Task from "./task";



const ToDoList = (props) => {

    const [newTask,setTask] = useState('');
    const [taskList,setTaskList] = useState([]);

    return(
        <div className="container pt-4 m-3">
            <input
                style={{padding: "10px", margin: "10px", marginBottom: "10px"}}
                type="text" 
                value={newTask} 
                placeholder="What needs to be done?" 
                onChange={(event) => setTask(event.target.value)}
                onKeyUp={(event) => {
                    if(event.key == 'Enter'){
                        setTaskList([newTask, ...taskList])
                        setTask('')
                    }
                }   
                }
            />


            {(taskList.length == 0) && <div>No tasks, add task</div>}
            
            {taskList.map( (tarea,index) => <Task task={tarea} key={index} onRemove = { () => {
                setTaskList(taskList.filter(
                    (_tarea,indiceABorrar) => index != indiceABorrar
                ))
            }}
            />)}
            <p className="pt-2 m-3">{taskList.length} items left</p>
            
        </div>
    )
}

export default ToDoList;