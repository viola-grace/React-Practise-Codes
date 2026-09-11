import {useState, memo} from "react";
const ExpenseList = memo(({expense, handleRemove})=>{
    
    return expense.map((item)=>
             <ul key={item.id}>
                <li>Title: {item.title}</li>
                <li>Amount:{item.amount} </li>
                <li>Category:{item.category} </li>
                <button onClick={()=>handleRemove(item.id)}>Delete</button>
            </ul>
    )
});
   
export default ExpenseList;