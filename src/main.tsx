import React from 'react'
import { Counter } from './Counter'
import ReactDOM from 'react-dom/client'


const container = document.getElementById('root')!
ReactDOM.createRoot(container).render(<Counter initialValue={0} increment={1} />)