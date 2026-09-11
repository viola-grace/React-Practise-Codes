import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>Counter</h1>
        <h3 style={{color:count>1?'green':count==1?'red':'black'}}>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button disabled={count===0} onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default Counter;