import { Button, TextField } from "@material-ui/core";
import React,{useState} from 'react'
import uuid from 'uuid'

function TodoForm({addTodo}) {
    const [todo,setTodo]=useState({
        id:'',
        task:'',
        completed:false
    });
    
    const handleTaskInputChange=(e)=>{
        setTodo({...todo, task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();//prevent to button to submit if:"next line"
        if(todo.task.trim()){//todo is empty. trim() is a function that remove all the white space in the beginning and at the end
          addTodo({...todo,id:uuid.v4()})//submit if there is a new todo to the input. uuid.v4 is a package that will generate an id
          
          //reset task input to empty at a submit
           setTodo({...todo, task:''})
    
        }
    }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
         <input
            type='text'
            name='task'
            value={todo.task}
            onChange={handleTaskInputChange}
         /> 

         <button type='submit'>submit</button>
    </form>
  )
}

export default TodoForm