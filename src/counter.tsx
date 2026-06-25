import { useState } from 'react'
export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 style={{color: 'red' , backgroundColor: 'yellow'}}>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}