import React, { useState } from 'react';
import { CounterDisplay } from './CounterDisplay';

export function Counter({ initialValue, increment}: { initialValue: number , increment: number }) {
    
        
        const [counter, setCounter] = useState(initialValue);
        return (
            <div>
                <CounterDisplay counter={counter} />
                <button onClick={() => setCounter(counter + increment)}>Increment</button>
                <button onClick={() => setCounter(counter - increment)}>Decrement</button>
                <button onClick={() => setCounter(initialValue)}>Reset</button>
            </div>
        )
}

/* è meglio usare una funziona del tipo  setCounter(prevCounter => prevCounter + 1) perché react passa sempre il valore corrente del counter come primo argomento della funzione */