import { useState, useMemo, useCallback, useReducer } from "react";
import ExpenseList from './ExpenseList';
const reducer = (state,action)=>{
    switch(action.type){
        case "ADD": return [...state,action.payload];
        case "DELETE": return state.filter(e=>e.id!==action.payload); 
        default: return state;
    }
}

const ExpenseForm =({initialExpenses})=>{
    const[newExpense, setNewExpense] = useState({id:0,title: "" ,amount: "", category: ""});
    const[expense, dispatch] = useReducer(reducer, initialExpenses);
    const[selCategory, setSelCategory] = useState(expense);
    const handleAdd=()=>{
        console.log(newExpense);
        dispatch({type:"ADD",payload:newExpense});
        console.log("Expense: "+expense);
    }

    const handleInput=(field, value) =>{
        setNewExpense(prev=>({...prev,[field]:value, id:Date.now()}));
    }

    const totalExpense = useMemo(()=>{
        return expense.reduce((sum,item)=>sum+Number(item.amount||0),0);
    },[expense]);

    const filteredExpense = (selCategory)
       ?expense.filter(e=>e.category==selCategory)
       :expense

    const removeItem= useCallback((id)=>{
        dispatch({type:"DELETE",payload:id});  
    },[])

    return(
        <div>
       
        Title:<input onChange={(e)=>handleInput("title",e.target.value)}/> <br/>
        Amount:<input onChange={(e)=>handleInput("amount",e.target.value)}/><br/>
        Category:<input onChange={(e)=>handleInput("category",e.target.value)}/><br/>
        <button onClick={()=>handleAdd()}>Add Expense</button>

        <h1>Total expense: {totalExpense}</h1>
        <button onClick={()=>setSelCategory("")}>ALL</button>
        <button onClick={()=>setSelCategory("Food")}>FOOD</button>
        <button onClick={()=>setSelCategory("Travel")}>TRAVEL</button>
        <button onClick={()=>setSelCategory("Entertainment")}>ENTERTAINMENT</button><br/><br/>
        <ExpenseList expense = {filteredExpense} handleRemove = {removeItem}/>
        </div>
    )       
        
}
export default ExpenseForm;