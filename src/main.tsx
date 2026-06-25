import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Welcome } from './welcome'
import { Login } from './login'
import { Counter } from './counter'
import { UncontrolledLogin } from './uncontrolledLogin'
import { Clock } from './clock'
import { FocusableInput } from './focusableInput'
import 'bootstrap/dist/css/bootstrap.min.css'




const container = document.getElementById('root')!
ReactDOM.createRoot(container).render(
    <div> 
        <Welcome />
        <Clock />
        <Login />
        <Counter />
        <UncontrolledLogin />
        <FocusableInput />

    </div>
)
