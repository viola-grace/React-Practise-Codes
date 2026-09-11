import {useRef, useState} from "react";

const EmployeeSearch =(props)=>{
    const [text, setSearchText]=useState("")
    const inputRef = useRef(null)

    const focusSearch = () =>{
        inputRef.current.focus()
    }
    
    return( 
        <div>
            Search: <input ref={inputRef} onChange={(e)=>props.func(e.target.value)}></input>
            <button onClick={()=>focusSearch()}>Focus Search</button>
        </div>
    )
}
export default EmployeeSearch;