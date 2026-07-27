import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
       setCount(c => c + 1)
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
    );
}