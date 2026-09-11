import { use, useState } from "react";

const TaskList = () =>{
    const [inputValue, setInputValue] = useState([""]); // text box input value
    const [items, setItem] = useState([]); // task item
   
    const handleAddItem=()=>{
        if(inputValue.trim()!== ''){
            setItem([...items, inputValue]);
            setInputValue('');// clears the input box
        }
    }
    const handleDeleteItem=(index)=>{
        setItem(items.filter((_, i)=>i!==index));
    }
    return(
        <div>
            <h1>My tasks</h1>
            
            <input className='inputVal' value={inputValue} onChange={(e)=>{
                        setInputValue(e.target.value);
                    }} placeholder="Type your task here"/>
            <button onClick={handleAddItem}>Add Task</button>

            <ul>
                {items.map((item, index)=>(
                    <li key={index}>{item} <button onClick={()=>handleDeleteItem(index)}>Delete</button></li>                    
                ))}
            </ul>
        </div>
    )
}
export default TaskList;