import React, { useState } from 'react';
import { Counter } from './Counter';

export function CounterDisplay({ counter } : { counter: number }) {

    return (
        <div>
           <h2> Counter is {counter }  </h2>
        </div>
    )

}