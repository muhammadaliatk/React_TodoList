
import { useState } from 'react';
import './App.css';
import {Task} from './Task'
function App() {
  const [todolist,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState('');
  const handleChange =(event) => {
    
    setNewTask(event.target.value);
  }
  const addTask = () =>{
    // count = count + 1;
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length -1].id+1,
      taskName:newTask
    }
    console.log('task is ',task)
    const newTodoList = [...todolist,task]
    setTodoList(newTodoList)
  }
  const deleteTask = (task) => {
    const newTodoList = todolist.filter((taskName) => {
      if(task === taskName.id){
        return false
      }
      else{
        return true;
      }
    })
    setTodoList(newTodoList)
  }
  
  return (
    

   <div className='App'>
    <div className='addTask'>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
      {todolist.map((task) => {
       
       return <Task taskName={task.taskName} id = {task.id} deleteTask = {deleteTask}/>
       
      })}
    </div>
   </div>
  );
}

export default App;
