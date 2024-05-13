import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);
    function handleIncrement() {
        setCounter(counter + 1);
    }
    function handleDecrement() {
        setCounter(counter - 1);
    }
return(
    <>
    <h1>Counter App</h1>
    <div>Count: {counter}</div>
    <br/>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
    
)
}